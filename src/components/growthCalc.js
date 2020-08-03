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
        if (!digitOnly.test(evt.target.value)) {
            evt.target.value = '';
        } else {
            evt.target.value = parseFloat(evt.target.value);
		}
	}
	
	var getNumber = (number) => {
		return parseInt(number.replace("$","").replace("%","").replace(",",""));
	}

	var calcValue = (element) => {
		const inputValue = document.getElementsByName(element)[0].value !== '' ? document.getElementsByName(element)[0].value : '0'
		switch(element){
			case "monthlyLeadsInput":
				setState({
					...state,
					[element]: inputValue,
					monthlyLeadsResult: parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.monthlyLeadsIncrement) / 100 ),
					annualRevenueOld: '$ ' + (parseFloat(inputValue) + parseFloat(state.closeRateInput) + parseFloat(state.projectSizeInput)),
					annualRevenueGrow: '$ ' + (parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.monthlyLeadsIncrement) / 100 ) + parseFloat(state.closeRateResult) + parseFloat(state.projectSizeResult)),
				})
				break;
			case "closeRateInput":
				setState({
					...state,
					[element]: inputValue,
					closeRateResult: (parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.closeRateIncrement) / 100 )) + '%',
					annualRevenueOld: '$ ' + (parseFloat(state.monthlyLeadsInput) + parseFloat(inputValue) + parseFloat(state.projectSizeInput)),
					annualRevenueGrow: '$ ' + (parseFloat(state.monthlyLeadsResult) + parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.closeRateIncrement) / 100 ) + parseFloat(state.projectSizeResult)),
				})
				break;
			
			case "projectSizeInput":
				setState({
					...state,
					[element]: inputValue,
					projectSizeResult: '$' + (parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.projectSizeIncrement) / 100 )),
					annualRevenueOld: '$' + (parseFloat(state.monthlyLeadsInput) + parseFloat(state.closeRateInput) + parseFloat(inputValue)),
					annualRevenueGrow: '$' + (parseFloat(state.monthlyLeadsResult) + parseFloat(state.closeRateResult) + parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.projectSizeIncrement) / 100 )),
				})
				break;
			default:
				break;
		}		

		// calcResult();
	}

	const handleValidValue = (evt) => {
		const eleId  = evt.target.id;
		const eleval  = evt.target.value;
		
		switch(eleId) {
			case "close-rate":
				document.getElementById('close-rate').value = eleval + '%'
				break;
			case "project-size":
				document.getElementById('project-size').value = '$' + eleval
				break;
			default:
				break;
		}
	}

	const handleChangeInput = (evt) =>{
		validDigit(evt)
		const eleName = evt.target.name;
		calcValue(eleName);
	}

	const handleCheckInput = (evt) =>{
		const eleName = evt.target.name;
		const eleId = eleName.split("Increment")[0];
		const eleInput = eleId + 'Input';
		
		// get increament value 
		const eleValue = evt.target.value;
		// set input checkbox true
		setState({
			...state,
			[eleName]: eleValue
		});
	}

	var getPercentage = (evt) => {		
		const eleName = evt.target.name;
		const eleId = eleName.split("Increment")[0];
		const eleInput = eleId + 'Input';
		
		// let percentage
		var percentage = 1;
		// get increament value 
		const percentValue = evt.target.value;
		// set input checkbox true
		setState({
			...state,
			[evt.target.name]: percentValue
		});
		calcValue(eleInput);

		

		// // add class selected in checkbox
		// evt.target.classList.add('selected');
		// // get total percentage value
		// percentage = percentage + percentage * parseFloat(percentValue)/100;
		
		// return percentage
	}

	const calcResult = (evt) => {
		validDigit(evt);
	}

	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				<div className="d-flex flex-column align-item-center justify-content-center">
					<div className="heading_bg">
						<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
						</button>
						<h3>Business Growth Calculator</h3>
					</div>
					<div className="modal_content">
						<div className="p-6 py-sm-5">
							<form action="" className="calc_form">
								<div className="row border-bottom">
									<div className="col-lg-4 ">
										<div className=""><label>Monthly Leads</label></div>
										<div className="d-flex align-items-center">
											<div className=""><input type="text" name="monthlyLeadsInput" className="border-radius5 calc-input" id="monthly-leads" placeholder="0" onChange={ handleChangeInput } /></div>
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5">
										<div className="text-sm theme-text">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">                        	
											<div className="">
												<label className="check_count">25%
													<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle one" value="25%" checked={state.monthlyLeadsIncrement === '25%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">50%
													<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle two" value="50%" checked={state.monthlyLeadsIncrement === '50%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">100%
													<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle three" value="100%" checked={state.monthlyLeadsIncrement === '100%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4"><span className="font-b">=</span></div>
										</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2">
										<label>Monthly Leads</label>
										<input type="text" className="border-radius5" name="monthlyLeadsResult" id="monthly-leads-result" value={state.monthlyLeadsResult} placeholder="0" readOnly={state.readonly} />
									</div>											
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div><label>Close Rate</label></div>
										<div className="d-flex align-items-center">                        	
											<div className=""><input type="text" name="closeRateInput" className="border-radius5 calc-input" id="close-rate" placeholder="0%" onChange={ handleChangeInput } onBlur={handleValidValue} /></div>
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5 ptb-2">
										<div className="text-sm theme-text">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">                        	
											<div className="">
												<label className="check_count">25%
												<input type="radio" name="closeRateIncrement" className="close-rate circle one" value="25%" checked={state.closeRateIncrement === '25%'} onChange={getPercentage} />
												<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">50%
												<input type="radio" name="closeRateIncrement" className="close-rate circle two" value="50%" checked={state.closeRateIncrement === '50%'} onChange={getPercentage} />
												<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">100%
													<input type="radio" name="closeRateIncrement" className="close-rate circle three" value="100%" checked={state.closeRateIncrement === '100%'} onChange={getPercentage} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4"><span className="font-b">=</span></div>
										</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2">
										<label>Close Rate</label>
										<input type="text" name="closeRateResult" className="border-radius5 calc-output" id="close-rate-result" value={state.closeRateResult} placeholder="0%" readOnly={state.readonly} />
									</div>
														
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div className=""><label>Average Project Size</label></div>
										<div className="d-flex align-items-center">                        	
											<div className=""><input type="text" name="projectSizeInput" className="border-radius5 calc-input" id="project-size" placeholder="$0" onChange={ handleChangeInput } onBlur={handleValidValue} /></div>
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5 ptb-2">
										<div className="text-sm theme-text">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">                        	
											<div className="">
												<label className="check_count">30%
													<input type="radio" name="projectSizeIncrement" className="project-size circle one" value="30%" checked={state.projectSizeIncrement === '30%'} onChange={getPercentage} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">40%
													<input type="radio" name="projectSizeIncrement" className="project-size circle two" value="40%" checked={state.projectSizeIncrement === '40%'} onChange={getPercentage} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">50%
													<input type="radio" name="projectSizeIncrement" className="project-size circle three" value="50%" checked={state.projectSizeIncrement === '50%'} onChange={getPercentage} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4"><span className="font-b">=</span></div>
									</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2">
										<label>Average Project Size</label>
										<input type="text" name="projectSizeResult" className="border-radius5 calc-output" id="project-size-result" value={state.projectSizeResult} placeholder="$0" readOnly={state.readonly} />
									</div>		
								</div>
								
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<div className=""><label>Annual Revenue</label></div>
										<div className="d-flex align-items-center">                        	
											<div className=""><input type="text" name="annualRevenueOld" className="border-radius5 calc-input" id="annual-revenue" value={state.annualRevenueOld} placeholder="$0" readOnly="readonly" /></div>
											<div className="pl-5"><span className="font-b">&gt;</span></div>
										</div> 							
									</div>
									<div className="col-lg-5">
										<div className="text-sm theme-text ptb-2 mt-4">By increasing your incoming leads,<br/>close rate and average job size,<br/>watch your annual revenue grow.</div>                    	
									</div>
									<div className="col-lg-3 bg_blue ptb-2">
										<label>Annual Revenue</label>
										<input type="text" name="annualRevenueGrow" className="border-radius5 calc-output" id="annual-revenue-result" value={state.annualRevenueGrow} placeholder="$0" readOnly={state.readonly} />
									</div>
								</div>
							</form>
							<div className="row">
								<div className="calc_bottom">On average, our contractors have seen significant increase in inbound leads, close rates, average job sizes and annual revenue by offering payment options to every customer.</div>
							</div>
						</div>                  
					</div>              
				</div>
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