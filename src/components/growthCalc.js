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
		const inputValue = document.getElementsByName(element)[0].value;
		console.log(element)
		switch(element){
			case "monthlyLeadsInput":
				if(inputValue === '' || isNaN(inputValue)){
					setState({
						...state,
						monthlyLeadsInput: '0',
						monthlyLeadsResult: '0',
						// annualRevenueOld: '0',
						// annualRevenueGrow: '0',
					})
				}else{
					setState({
						...state,
						monthlyLeadsInput: inputValue,
						monthlyLeadsResult: parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.monthlyLeadsIncrement) / 100 ),
						annualRevenueOld: '$ ' + (parseFloat(inputValue) + parseFloat(state.closeRateInput) + parseFloat(state.projectSizeInput)),
						annualRevenueGrow: '$ ' + (parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.monthlyLeadsIncrement) / 100 ) + parseFloat(state.closeRateResult) + parseFloat(state.projectSizeResult)),
					})
				}
				break;
			case "closeRateInput":
				if(inputValue === '' || isNaN(inputValue)){
					setState({
						...state,
						closeRateInput: '0',
						closeRateResult: '0',
						// annualRevenueOld: '0',
						// annualRevenueGrow: '0',
					})
				}else{
					setState({
						...state,
						closeRateInput: inputValue + '%',
						closeRateResult: parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.closeRateIncrement) / 100 ),
						annualRevenueOld: '$ ' + (parseFloat(state.monthlyLeadsInput) + parseFloat(inputValue) + parseFloat(state.projectSizeInput)),
						annualRevenueGrow: '$ ' + (parseFloat(state.monthlyLeadsResult) + parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.closeRateIncrement) / 100 ) + parseFloat(state.projectSizeResult)),
					})
				}
				break;
			
			case "projectSizeInput":
				if(inputValue === '' || isNaN(inputValue)){
					setState({
						...state,
						projectSizeInput: '0',
						projectSizeResult: '0',
						// annualRevenueOld: '0',
						// annualRevenueGrow: '0',
					})
				}else{
					setState({
						...state,
						projectSizeInput: '$' + inputValue,
						projectSizeResult: parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.projectSizeIncrement) / 100 ),
						annualRevenueOld: '$' + (parseFloat(state.monthlyLeadsInput) + parseFloat(state.closeRateInput) + parseFloat(inputValue)),
						annualRevenueGrow: '$' + (parseFloat(state.monthlyLeadsResult) + parseFloat(state.closeRateResult) + parseFloat(inputValue) + Math.round(inputValue * parseFloat(state.projectSizeIncrement) / 100 )),
					})
				}
				break;
			default:
				break;
		}
		

		

		// calcResult();
	}

	const handleChangeInput = (evt) =>{
		const eleName = evt.target.name;
		calcValue(eleName);
		console.log(evt.target.id)

		// switch(evt.target.id) {
		// 	case "close-rate":
		// 		setState({
		// 			...state,
		// 			closeRateInput: state.closeRateInput + "%"
		// 		})
		// 		break;
		// 	case "project-size":				
		// 		setState({
		// 			...state,
		// 			projectSizeInput: "$" + state.projectSizeInput
		// 		})
		// 		break;
		// 	case "annual-revenue":
		// 		setState({
		// 			...state,
		// 			annualRevenueOld: "$" + state.annualRevenueOld
		// 		})
		// 		break;
		// 	default:
		// 		break;
		// }
	}

	const handleValidValue = (evt) => {
		console.log(evt.target.id)
		switch(evt.target.id) {
			case "close-rate":
				setState({
					...state,
					closeRateInput: state.closeRateInput + "%"
				})
				break;
			case "project-size":				
				setState({
					...state,
					projectSizeInput: "$" + state.projectSizeInput
				})
				break;
			case "annual-revenue":
				setState({
					...state,
					annualRevenueOld: "$" + state.annualRevenueOld
				})
				break;
			default:
				break;
		}
	}

	var getPercentage = (evt) => {
		
		const eleName = evt.target.name;
		const eleId = eleName.split("Increment")[0];
		const eleInput = eleId + 'Input';

		calcValue(eleInput);
		console.log(eleInput)
		// let percentage
		var percentage = 1;
		// get increament value 
		const percentValue = evt.target.value;
		// set input checkbox true
		setState({
			...state,
			[evt.target.name]: percentValue
		});

		

		// add class selected in checkbox
		evt.target.classList.add('selected');
		// get total percentage value
		percentage = percentage + percentage * parseFloat(percentValue)/100;
		
		return percentage
	}

	const calcResult = (evt) => {
		validDigit(evt);
		// if(jQuery("#monthly-leads").val().length > 0 && jQuery("#close-rate").val().length > 0 && jQuery("#project-size").val().length > 0) {
			var left_result = 0;
			// var left_monthly_leads = getNumber(jQuery("#monthly-leads").val());
			// var left_close_rate = getNumber(jQuery("#close-rate").val()) / 100;
			// var left_project_size = getNumber(jQuery("#project-size").val());
			// var left_result = left_monthly_leads * left_close_rate * left_project_size * 12;

			// var right_result = 0;
			// var right_monthly_leads = getNumber(jQuery("#monthly-leads-result").val());
			// var right_close_rate = getNumber(jQuery("#close-rate-result").val()) / 100;
			// var right_project_size = getNumber(jQuery("#project-size-result").val().replace("$", ""));
			// var right_result = right_monthly_leads * right_close_rate * right_project_size * 12;

			// jQuery("#annual-revenue").val("$" + formatNumber(left_result));
			// jQuery("#annual-revenue-result").val("$" + formatNumber(right_result));
		// }
		console.log(evt.target.value)
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
											<div className=""><input type="text" name="monthlyLeadsInput" className="border-radius5 calc-input" id="monthly-leads" placeholder="0" onKeyUp={ handleChangeInput } /></div>
											<div className="pl-5"><span className="font-b">x</span></div>
										</div>							
									</div>
									<div className="col-lg-5">
										<div className="text-sm theme-text">Projected Increase with Payment Options</div>
										<div className="d-flex align-items-center">                        	
											<div className="">
												<label className="check_count">25%
													<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle one selected" value="25%" checked={state.monthlyLeadsIncrement === '25%'} onChange={getPercentage} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">50%
													<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle two" value="50%" checked={state.monthlyLeadsIncrement === '50%'} onChange={getPercentage} />
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="pl-4">
												<label className="check_count">100%
													<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle three" value="100%" checked={state.monthlyLeadsIncrement === '100%'} onChange={getPercentage} />
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
											<div className=""><input type="text" name="closeRateInput" className="border-radius5 calc-input" id="close-rate" placeholder="0%" onKeyUp={ handleChangeInput } onBlur={handleValidValue} /></div>
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
													<input type="radio" name="closeRateIncrement" className="close-rate circle three selected" value="100%" checked={state.closeRateIncrement === '100%'} onChange={getPercentage} />
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
											<div className=""><input type="text" name="projectSizeInput" className="border-radius5 calc-input" id="project-size" placeholder="$0" onKeyUp={ handleChangeInput } onBlur={handleValidValue} /></div>
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
													<input type="radio" name="projectSizeIncrement" className="project-size circle two selected" value="40%" checked={state.projectSizeIncrement === '40%'} onChange={getPercentage} />
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