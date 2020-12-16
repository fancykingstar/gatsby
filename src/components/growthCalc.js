import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CurrencyFormat from "react-currency-format"
import close_icon from '../images/closed_icon.svg'

const GrowthCalc = (props) => {

	const digitOnly = /[0-9]/;
	const [state, setState] = useState({
		readonly: 'readonly',
		monthlyLeadsIncrement: '100%',
		closeRateIncrement: '50%',
		projectSizeIncrement: '30%',

		monthlyLeadsInput: '',
		closeRateInput: '',
		projectSizeInput: '',

		monthlyLeadsResult: '',
		closeRateResult: '',
		projectSizeResult: '',

		annualRevenueOld: '',
		annualRevenueGrow: '',

	})

    const validDigit = (evt) => {
		var val = getNumber(evt.target.value)
		var result;
        if (!digitOnly.test(val)) {
            result += '';
        } else {
            result = val;
		}
		return result;
	}
	
	const getNumber = (number) => {
		return typeof number === 'string' ? Number(number.replace("$","").replace("%","").replace(",","")) : number
	}

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const addCommas = (nStr) => {
		nStr += ""
		var x = nStr.split(".")
		var x1 = x[0]
		var x2 = x.length > 1 ? "." + x[1] : ""
		var rgx = /(\d+)(\d{3})/
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, "$1" + "," + "$2")
		}
		return x1 + x2
	}

	var calcValue = (ele, val, inc) => {
		const input = [ele] + 'Input';
		const result = [ele] + 'Result';
		const increament = [ele] + 'Increment'
		switch(input) {
			case "monthlyLeadsInput":
				setState({
					...state,
					[input]: val,
					[increament]: inc,
					[result]: getNumber(val) + Math.round(getNumber(val) * getNumber(inc) / 100 ),
					annualRevenueOld: '$' + (getNumber(val) * getNumber(state.closeRateInput) * getNumber(state.projectSizeInput) * 0.12),
					annualRevenueGrow: '$' + ((getNumber(val) + Math.round(getNumber(val) * getNumber(inc) / 100 )) * getNumber(state.closeRateResult) * getNumber(state.projectSizeResult) * 0.12),
				})
				break;
			case "closeRateInput":
				setState({
					...state,
					[input]: val,
					[increament]: inc,
					[result]: (getNumber(val) + Math.round(getNumber(val) * getNumber(inc) / 100 )) + '%',
					annualRevenueOld: '$' + (getNumber(val) * getNumber(state.monthlyLeadsInput) * getNumber(state.projectSizeInput) * 0.12),
					annualRevenueGrow: '$' + ((getNumber(val) + Math.round(getNumber(val) * getNumber(inc) / 100 )) * getNumber(state.monthlyLeadsResult) * getNumber(state.projectSizeResult) * 0.12),
				})
				break;
			case "projectSizeInput":
				console.log("23423423432")
				setState({
					...state,
					[input]: val,
					[increament]: inc,
					[result]: getNumber(val) + Math.round(getNumber(val) * getNumber(inc) / 100 ),
					annualRevenueOld: '$' + (getNumber(val) * getNumber(state.monthlyLeadsInput) * getNumber(state.closeRateInput) * 0.12),
					annualRevenueGrow: '$' + ((getNumber(val) + Math.round(getNumber(val) * getNumber(inc) / 100 )) * getNumber(state.monthlyLeadsResult) * parseFloat(state.closeRateResult) * 0.12),
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
						projectSizeInput: '$' + addCommas(eleval),
						projectSizeResult: '$' + addCommas(state.projectSizeResult)
					})
					break;
				default:
					break;
			}
		}
	}

	const handleChangeInput = (evt) =>{
		// const inputValue = validDigit(evt);
		const inputValue = evt.target.value;
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
		calcValue(inputId, inputValue, eleValue);
	}

	if (props.popData.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="full" id="appPopup">
				{/* <div className="d-flex flex-column align-item-center justify-content-center"> */}
					<div className="heading_bg">
						<button className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
							<img src={close_icon} width="25" alt="close icon" />
						</button>
						<h2 className="h2 text-white font-weight-bold">Business Growth Calculator</h2>
					</div>
					<div className="modal_content">
						<div className="p-5 pb-0 pt-sm-4">
							<form action="" className="calc_form">
								<div className="row">
									<div className="mr-auto px-3 pt-3 current_growth d-none d-lg-block">Current</div>
									<div className="ml-auto pt-3 growth_result col-sm-3 d-none d-lg-block">Result</div>
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<label htmlFor="monthly-leads" className="text-sm theme-text d-block">Monthly Leads</label>
										<div className="d-flex align-items-center">
											<input type="text" name="monthlyLeadsInput" className="border-radius5 calc-input" id="monthly-leads" placeholder="0" onChange={ handleChangeInput } />
											<div className="pl-3 pl-md-5"><span className="font-b">x</span></div>
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
										<div className="pl-3 pl-md-5">
											<label className="check_count">
												<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle two" value="50%" checked={state.monthlyLeadsIncrement === '50%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												50%
											</label>
										</div>
										<div className="pl-3 pl-md-5">
											<label className="check_count">
												<input type="radio" name="monthlyLeadsIncrement" className="monthly-leads circle three" value="100%" checked={state.monthlyLeadsIncrement === '100%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												100%
											</label>
										</div>
										<div className="ml-auto m-lg-auto equal">
											<span className="font-b">=</span></div>
										</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<label htmlFor="monthly-leads-result" className="text-sm theme-text text-white d-block">Monthly Leads</label>
										<input type="text" className="border-radius5 calc-output" name="monthlyLeadsResult" id="monthly-leads-result" value={state.monthlyLeadsResult} placeholder="0" readOnly={state.readonly} />
									</div>											
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<label htmlFor="close-rate" className="text-sm theme-text d-block">Close Rate</label>
										<div className="d-flex align-items-center">                        	
											<input type="text" name="closeRateInput" className="border-radius5 calc-input" id="close-rate" value={state.closeRateInput} placeholder="0%" onChange={ handleChangeInput } onBlur={handleValidValue} />
											<div className="pl-3 pl-md-5"><span className="font-b">x</span></div>
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
										<div className="pl-3 pl-md-5">
											<label className="check_count">
												<input type="radio" name="closeRateIncrement" className="close-rate circle two" value="50%" checked={state.closeRateIncrement === '50%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												50%
											</label>
										</div>
										<div className="pl-3 pl-md-5">
											<label className="check_count">
												<input type="radio" name="closeRateIncrement" className="close-rate circle three" value="100%" checked={state.closeRateIncrement === '100%'} onChange={handleCheckInput} />
												<span className="checkmark"></span>
												100%
											</label>
										</div>
										<div className="ml-auto m-lg-auto equal"><span className="font-b">=</span></div>
										</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<label htmlFor="close-rate-result" className="text-sm theme-text text-white d-block">Close Rate</label>
										<input type="text" name="closeRateResult" className="border-radius5 calc-output" id="close-rate-result" value={state.closeRateResult} placeholder="0%" readOnly={state.readonly} />
									</div>
														
								</div>
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<label htmlFor="project-size" className="text-sm theme-text d-block">Average Project Size</label>
										<div className="d-flex align-items-center">
											<CurrencyFormat
												value={state.projectSizeInput || ""}
												thousandSeparator={true}
												prefix={"$"}
												className="border-radius5 calc-input"
												name="projectSizeInput"
												placeholder="$0"
												onValueChange={(values) => {
													const { formattedValue, value } = values
													calcValue("projectSize", value, state['projectSizeIncrement']);
												}}
											/>
											<div className="pl-3 pl-md-5"><span className="font-b">x</span></div>
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
											<div className="pl-3 pl-md-5">
												<label className="check_count">
													<input type="radio" name="projectSizeIncrement" className="project-size circle two" value="40%" checked={state.projectSizeIncrement === '40%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
													40%
												</label>
											</div>
											<div className="pl-3 pl-md-5">
												<label className="check_count">
													<input type="radio" name="projectSizeIncrement" className="project-size circle three" value="50%" checked={state.projectSizeIncrement === '50%'} onChange={handleCheckInput} />
													<span className="checkmark"></span>
													50%
												</label>
											</div>
											<div className="ml-auto m-lg-auto equal"><span className="font-b">=</span></div>
									</div>
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<label htmlFor="project-size-result" className="text-sm theme-text text-white d-block">Average Project Size</label>
										<CurrencyFormat
											value={state.projectSizeResult || ""}
											thousandSeparator={true}
											prefix={"$"}
											className="border-radius5 calc-input bg-white"
											name="projectSizeInput"
											placeholder="$0"
											disabled
										/>
									</div>		
								</div>
								
								<div className="row border-bottom">
									<div className="col-lg-4 ptb-2">
										<label htmlFor="annual-revenue" className="text-sm theme-text d-block">Annual Revenue</label>
										<div className="d-flex align-items-center">
											<CurrencyFormat
												value={state.annualRevenueOld || ""}
												thousandSeparator={true}
												prefix={"$"}
												className="border-radius5 calc-input bg-white"
												name="annualRevenueOld"
												placeholder="$0"
												disabled
											/>
											<div className="pl-3 pl-md-5"><span className="font-b">&gt;</span></div>
										</div> 							
									</div>
									<div className="col-lg-5">
										<div className="text-sm theme-text text-blue pt-3 pb-3">By increasing your incoming leads,<br/>close rate and average job size,<br/>watch your annual revenue grow.</div>                    	
									</div>
									<div className="col-lg-3 bg_blue ptb-2 result-col">
										<label htmlFor="annual-revenue-result" className="text-sm theme-text text-white d-block">Annual Revenue</label>
										<CurrencyFormat
											value={state.annualRevenueGrow || ""}
											thousandSeparator={true}
											prefix={"$"}
											className="border-radius5 calc-input bg-white"
											name="annualRevenueGrow"
											placeholder="$0"
											disabled
										/>
									</div>
								</div>
							</form>
							<div className="row">
								<div className="calc_bottom">On average, our contractors have seen significant increase in inbound leads, close rates, average job sizes and annual revenue by offering payment options to every customer. Individual results may vary.</div>
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