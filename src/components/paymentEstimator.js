import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const PaymentEstimator = (props) => {

	const digitOnly = /[0-9]/;
	const [state, setState] = useState({
		readonly: 'readonly',
		monthlyLeadsIncrement: '100%',
		closeRateIncrement: '50%',
		projectSizeIncrement: '30%',

		monthlyLeadsInput: '0',
		closeRateInput: '0',
		projectSizeInput: '0',

		monthlyLeadsResult: '0',
		closeRateResult: '0',
		projectSizeResult: '0',

		annualRevenueOld: '0',
		annualRevenueGrow: '0',

	})

    const validDigit = (evt) => {
		var val = getNumber(evt.target.value)
		var result;
        if (!digitOnly.test(val)) {
            result = '0';
        } else {
            result = parseFloat(val);
		}
		return result;
	}
	
	var getNumber = (number) => {
		return parseInt(number.replace("$","").replace("%","").replace(",",""));
	}

	var calcValue = (ele, val, inc) => {
		const input = [ele] + 'Input';
		const result = [ele] + 'Result';
		const increament = [ele] + 'Increment'
		console.log(input, val, inc)
		switch(input) {
			case "monthlyLeadsInput":
				setState({
					...state,
					[input]: val,
					[increament]: inc,
					[result]: parseFloat(val) + Math.round(parseFloat(val) * parseFloat(inc) / 100 ),
					annualRevenueOld: '$' + (parseFloat(val) + parseFloat(state.closeRateInput) + getNumber(state.projectSizeInput)),
					annualRevenueGrow: '$' + (parseFloat(val) + Math.round(parseFloat(val) * parseFloat(inc) / 100 ) + parseFloat(state.closeRateResult) + getNumber(state.projectSizeResult)),
				})
				break;
			case "closeRateInput":
				setState({
					...state,
					[input]: val,
					[increament]: inc,
					[result]: (parseFloat(val) + Math.round(parseFloat(val) * parseFloat(inc) / 100 )) + '%',
					annualRevenueOld: '$' + (parseFloat(val) + parseFloat(state.monthlyLeadsInput) + getNumber(state.projectSizeInput)),
					annualRevenueGrow: '$' + (parseFloat(val) + Math.round(parseFloat(val) * parseFloat(inc) / 100 ) + parseFloat(state.monthlyLeadsResult) + getNumber(state.projectSizeResult)),
				})
				break;
			case "projectSizeInput":
				setState({
					...state,
					[input]: val,
					[increament]: inc,
					[result]: parseFloat(val) + Math.round(parseFloat(val) * parseFloat(inc) / 100 ),
					annualRevenueOld: '$' + (parseFloat(val) + parseFloat(state.monthlyLeadsInput) + parseFloat(state.closeRateInput)),
					annualRevenueGrow: '$' + (parseFloat(val) + Math.round(parseFloat(val) * parseFloat(inc) / 100 ) + parseFloat(state.monthlyLeadsResult) + parseFloat(state.closeRateResult)),
				})
				break;
			default:
				break;
		}
	}

	const handleValidValue = (evt) => {
		const eleId  = evt.target.id;
		const eleval  = evt.target.value;

		if(eleval > 0){
			switch(eleId) {
				case "close-rate":
					setState({
						...state,
						closeRateInput: eleval + '%',
						// closeRateResult: state.closeRateResult + '%'
					})
					break;
				case "project-size":
					setState({
						...state,
						projectSizeInput: '$' + eleval,
						projectSizeResult: '$' + state.projectSizeResult
					})
					break;
				default:
					break;
			}
		}
	}

	const handleChangeInput = (evt) =>{		
		const inputValue = validDigit(evt);
		const inputEle = evt.target.name;
		const inputId = inputEle.split("Input")[0];
		calcValue(inputId, inputValue, state[inputId + 'Increment']);
	}

	const handleCheckInput = (evt) =>{
		const eleName = evt.target.name;
		const inputId = eleName.split("Increment")[0];
		const inputEle = inputId + 'Input';
		const inputValue = state[inputEle];
		
		// get increament value 
		const eleValue = evt.target.value;
		// set input checkbox true
		if(inputId === 'projectSize'){
			calcValue(inputId, getNumber(inputValue), eleValue);
			setState({
				...state,
				projectSizeInput: inputValue,
				projectSizeIncrement: eleValue,
				projectSizeResult: '$' + (getNumber(inputValue) + Math.round(getNumber(inputValue) * getNumber(eleValue) / 100 )),
				annualRevenueOld: '$' + (getNumber(inputValue) + parseFloat(state.monthlyLeadsInput) + parseFloat(state.closeRateInput)),
				annualRevenueGrow: '$' + (getNumber(inputValue) + Math.round(getNumber(inputValue) * getNumber(eleValue) / 100 ) + parseFloat(state.monthlyLeadsResult) + parseFloat(state.closeRateResult)),
			});
		}else{
			calcValue(inputId, inputValue, eleValue);
		}
	}

	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				{/* <div className="d-flex flex-column align-item-center justify-content-center"> */}
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h2 className="text-white font-weight-bold">Payment Estimator</h2>
					</div>
					<div className="modal_content">
						<div className="p-5 pb-0 pt-sm-4">
							<h2>Enerbank Payment Estimator</h2>
                            <p>For use in determining a borrower's estimated monthly payment  with all monthly payment loan options - not intentded for use  with Same-As-Cash loans.</p>
                            <div>Payment Estimator Tool</div>
						</div>                  
					</div>              
				{/* </div> */}
			</Modal>
		)
	} else {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>&nbsp;
			</div>
		)
	} 
}
export default PaymentEstimator