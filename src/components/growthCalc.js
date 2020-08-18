import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const GrowthCalc = (props) => {

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
						<h2 className="text-white font-weight-bold">Business Growth Calculator</h2>
					</div>
					<div className="modal_content">
						<div className="p-5 pb-0 pt-sm-4">
							<form action="" className="calc_form">
								<div className="row">
									<div className="mr-auto px-3 pt-3 current_growth">Current</div>
									<div className="ml-auto pt-3 growth_result col-sm-3">Result</div>
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div className="text-sm theme-text">Monthly Leads</div>
										<div className="d-flex align-items-center">
											<input type="text" name="monthlyLeadsInput" className="border-radius5 calc-input" id="monthly-leads" placeholder="0" onChange={ handleChangeInput } />
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5 ptb-2">
										<div className="text-sm theme-text text-blue">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">
											<label className="check_count">
												<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle one" value="25%" checked={state.monthlyLeadsIncrement === '25%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												25%
											</label>
										<div className="pl-5">
											<label className="check_count">
												<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle two" value="50%" checked={state.monthlyLeadsIncrement === '50%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												50%
											</label>
										</div>
										<div className="pl-5">
											<label className="check_count">
												<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle three" value="100%" checked={state.monthlyLeadsIncrement === '100%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												100%
											</label>
										</div>
										<div className="m-auto equal">
											<span className="font-b">=</span></div>
										</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<div className="text-sm theme-text text-white">Monthly Leads</div>
										<input type="text" className="border-radius5 calc-output" name="monthlyLeadsResult" id="monthly-leads-result" value={state.monthlyLeadsResult} placeholder="0" readOnly={state.readonly} />
									</div>											
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div className="text-sm theme-text">Close Rate</div>
										<div className="d-flex align-items-center">                        	
											<input type="text" name="closeRateInput" className="border-radius5 calc-input" id="close-rate" value={state.closeRateInput} placeholder="0%" onChange={ handleChangeInput } onBlur={handleValidValue} />
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5 ptb-2">
										<div className="text-sm theme-text text-blue">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">
											<label className="check_count">
												<input type="radio" name="closeRateIncrement" className="close-rate circle one" value="25%" checked={state.closeRateIncrement === '25%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												25%
											</label>
										<div className="pl-5">
											<label className="check_count">
												<input type="radio" name="closeRateIncrement" className="close-rate circle two" value="50%" checked={state.closeRateIncrement === '50%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												50%
											</label>
										</div>
										<div className="pl-5">
											<label className="check_count">
												<input type="radio" name="closeRateIncrement" className="close-rate circle three" value="100%" checked={state.closeRateIncrement === '100%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												100%
											</label>
										</div>
										<div className="m-auto equal"><span className="font-b">=</span></div>
										</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<div className="text-sm theme-text text-white">Close Rate</div>
										<input type="text" name="closeRateResult" className="border-radius5 calc-output" id="close-rate-result" value={state.closeRateResult} placeholder="0%" readOnly={state.readonly} />
									</div>
														
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div className="text-sm theme-text">Average Project Size</div>
										<div className="d-flex align-items-center">                        	
											<input type="text" name="projectSizeInput" className="border-radius5 calc-input" id="project-size" value={state.projectSizeInput} placeholder="$0" onChange={ handleChangeInput } onBlur={handleValidValue} />
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5 ptb-2">
										<div className="text-sm theme-text text-blue">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">
											<label className="check_count">
												<input type="radio" name="projectSizeIncrement" className="project-size circle one" value="30%" checked={state.projectSizeIncrement === '30%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												30%
											</label>
											<div className="pl-5">
												<label className="check_count">
													<input type="radio" name="projectSizeIncrement" className="project-size circle two" value="40%" checked={state.projectSizeIncrement === '40%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
													40%
												</label>
											</div>
											<div className="pl-5">
												<label className="check_count">
													<input type="radio" name="projectSizeIncrement" className="project-size circle three" value="50%" checked={state.projectSizeIncrement === '50%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
													50%
												</label>
											</div>
											<div className="m-auto equal"><span className="font-b">=</span></div>
									</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<div className="text-sm theme-text text-white">Average Project Size</div>
										<input type="text" name="projectSizeResult" className="border-radius5 calc-output" id="project-size-result" value={state.projectSizeResult} placeholder="$0" readOnly={state.readonly} />
									</div>		
								</div>
								
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div className="text-sm theme-text">Annual Revenue</div>
										<div className="d-flex align-items-center">                        	
											<input type="text" name="annualRevenueOld" className="border-radius5 calc-output" id="annual-revenue" value={state.annualRevenueOld} placeholder="$0" readOnly="readonly" />
											<div className="pl-5"><span className="font-b">&gt;</span></div>
										</div> 							
									</div>
									<div className="col-lg-5">
										<div className="text-sm theme-text text-blue pt-3 pb-3">By increasing your incoming leads,<br/>close rate and average job size,<br/>watch your annual revenue grow.</div>                    	
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<div className="text-sm theme-text text-white">Annual Revenue</div>
										<input type="text" name="annualRevenueGrow" className="border-radius5 calc-output" id="annual-revenue-result" value={state.annualRevenueGrow} placeholder="$0" readOnly={state.readonly} />
									</div>
								</div>
							</form>
							<div className="row">
								<div className="calc_bottom">On average, our contractors have seen significant increase in inbound leads, close rates, average job sizes and annual revenue by offering payment options to every customer.</div>
							</div>
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
export default GrowthCalc