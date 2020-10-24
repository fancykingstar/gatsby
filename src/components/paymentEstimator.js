import React, { useState } from "react"
import { Modal } from 'react-bootstrap';
import close_icon from '../images/closed_icon.svg'

const PaymentEstimator = (props) => {

	const [loanAmount, setLoanAmount] = useState();
	const [totalYears, setTotalYears] = useState();
	const [interestRate, setInterestRate] = useState();
	const [monthlyPayment, setMonthlyPayment] = useState();
	const isEnabled = loanAmount > 0 && totalYears > 0 && interestRate > 0

	const handleInput = (evt) => {
		if(evt.target.name === 'loanAmount'){
			setLoanAmount(evt.target.value)
		}else if(evt.target.name === 'totalYears'){
			setTotalYears(evt.target.value)
		}else{
			setInterestRate(evt.target.value)
		}
	}

	const estimateCalc = (e) => {
		e.preventDefault();
		const totalMonth = totalYears * 12;
		const totalPayment = (Number(loanAmount) + (Number(loanAmount) * interestRate) / 100) / totalMonth
		setMonthlyPayment(totalPayment ? totalPayment.toFixed(2) : 0)
		// console.log('hi', loanAmount, loanAmount, interestRate, totalPayment.toFixed(2) ? totalPayment.toFixed(2) : 0)
	}

	if (props.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="lg" id="paymentEstimator">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src={close_icon} width="25" alt="close icon" />
					</button>
					<h2 className="h2 text-white font-weight-bold">Enerbank Payment Estimator</h2>
				</div>
				<div className="modal_content">
					<div className="p-5 pb-0 pt-sm-4 text-center">
						<p className="text-center">See a monthly payment estimate — <br/>just plug in the relevant numbers and hit <strong className="text-blue">Calculate!</strong></p>
						
						<form className="estimatorForm">
							<div className="paymentEstimator">
								<div className="formHeading">Payment Estimator Tool</div>
								<div className="formMiddle">
									<div className="form-group row">
										<label htmlFor="staticEmail" className="col-sm-6 col-form-label">Total Loan Amount</label>
										<div className="col-sm-6"> {/* (e)=> setLoanAmount(e.target.value) */}
											<input type="number" className="form-control" name="loanAmount" id="loanAmount" placeholder="0" value={loanAmount} onChange={handleInput} />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="inputPassword" className="col-sm-6 col-form-label">Total Number of Years</label>
										<div className="col-sm-6"> {/* (e)=> setTotalYears(e.target.value) */}
											<input type="number" className="form-control" name="totalYears" id="noOfYears" placeholder="0" value={totalYears} onChange={handleInput} />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="inputPassword" className="col-sm-6 col-form-label">Interest Rate %(APR)</label>
										<div className="col-sm-6"> {/* (e)=> setInterestRate(e.target.value) */}
											<input type="number" className="form-control" name="interestRate" id="interestRate" placeholder="0" value={interestRate} onChange={handleInput} />
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-6 ml-auto text-left">
											<button className="btn btn-primary px-4 py-1" disabled={!isEnabled} onClick={estimateCalc}>Calculate</button>
										</div>
									</div>
								</div>
								<div className="formFooter">
									<div className="form-group row m-0">
										<div className="col-sm-6 col-form-label">Monthly Payment</div>
										<div className="col-sm-6 text-left">{monthlyPayment}</div>
									</div>
								</div>
								<div className="formMiddle mt-4" style={{display: 'none'}}>
									{/* <div className="form-group row">
										<label htmlFor="staticEmail" className="col-sm-6 col-form-label">Email Address</label>
										<div className="col-sm-6">
											<input type="text" className="form-control" name="sendMail" id="sendMail" value={''} readOnly="readOnly" />
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-6 ml-auto text-left">
											<button className="btn btn-primary px-4 py-1" onClick={''}>Send Email</button>
										</div>
									</div> */}
								</div>
							</div>
							<p>*The monthly payment calculations provided here estimates only. Your customer's exact loan payment amount will be determined by EnerBank USA at time of application. The accuracy of these calculations is not guaranteed nor is its applicability to your individual circumstances. Your customers should always obtain personal advice from qualified professionals.</p>
						</form>
					</div>                  
				</div>
			</Modal>
		)
	} else {
		return (
			<div className="modal fade show" style={{ display: props.visiblity }}>&nbsp;</div>
		)
	} 
}
export default PaymentEstimator