import React, { useState } from "react"
import { Modal } from 'react-bootstrap';

const PaymentEstimator = (props) => {

	const [loanAmount, setLoanAmount] = useState(0);
	const [totalYears, setTotalYears] = useState(0);
	const [interestRate, setInterestRate] = useState(0);
	const [monthlyPayment, setMonthlyPayment] = useState(0);

	const estimateCalc = (e) => {
		e.preventDefault();
		const totalMonth = totalYears * 12;
		const totalPayment =  (parseInt(loanAmount) + ((loanAmount * interestRate) / 100)) / totalMonth
		setMonthlyPayment(totalPayment.toFixed(2))
		console.log('hi', loanAmount, totalYears, interestRate, totalPayment.toFixed(2))
	}

	if (props.length !== 0) {
		return (
			<Modal show={props.visiblity} animation={true} centered={true} size="lg" id="paymentEstimator">
				<div className="heading_bg">
					<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
						<img src="http://devgb.enerbank.com/wp-content/themes/enerbank/img/closed_icon.svg" width="25" alt="close icon" />
					</button>
					<h2 className="text-white font-weight-bold">Payment Estimator</h2>
				</div>
				<div className="modal_content">
					<div className="p-5 pb-0 pt-sm-4 text-center">
						<h2>Enerbank Payment Estimator</h2>
						<p className="text-center">For use in determining a borrower's estimated monthly payment  with all monthly payment loan options - not intentded for use  with Same-As-Cash loans.</p>
						
						<form className="estimatorForm">
							<div className="paymentEstimator">
								<div className="formHeading">Payment Estimator Tool</div>
								<div className="formMiddle">
									<div className="form-group row">
										<label htmlFor="staticEmail" className="col-sm-6 col-form-label">Total Loan Amount</label>
										<div className="col-sm-6">
											<input type="text" className="form-control" name="loanAmount" id="loanAmount" value={loanAmount} onChange={(e)=> setLoanAmount(e.target.value)} />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="inputPassword" className="col-sm-6 col-form-label">Total number of Years</label>
										<div className="col-sm-6">
											<input type="text" className="form-control" name="totalYears" id="noOfYears" value={totalYears} onChange={(e)=> setTotalYears(e.target.value)} />
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="inputPassword" className="col-sm-6 col-form-label">Interest Rate %(APR)</label>
										<div className="col-sm-6">
											<input type="text" className="form-control" name="interestRate" id="interestRate" value={interestRate} onChange={(e)=> setInterestRate(e.target.value)} />
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-6 ml-auto text-left">
											<button className="btn btn-black est-btn" onClick={estimateCalc}>Calculate</button>
										</div>
									</div>
								</div>
								<div className="formFooter">
									<div className="form-group row m-0">
										<div className="col-sm-6 col-form-label">Monthly Payment</div>
										<div className="col-sm-6 text-left">
											{monthlyPayment}
										</div>
									</div>
								</div>
								<div className="formMiddle mt-4" style={{ display: 'none'}}>
									<div className="form-group row">
										<label htmlFor="staticEmail" className="col-sm-6 col-form-label">Email Address</label>
										<div className="col-sm-6">
											<input type="text" className="form-control" name="sendMail" id="sendMail" value={''}  />
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-6 ml-auto text-left">
											<button className="btn btn-black est-btn" onClick={''}>Send Email</button>
										</div>
									</div>
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