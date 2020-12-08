import React, { useState } from "react"
// import { canUseDOM } from "react-helmet";
import Layout from "../components/layout"
import SEO from "../components/seo"

const PaymentEstimator = () => {
	const digitOnly = /[0-9]/;
	const [state, setState] = useState({
		loanAmount: '',
		totalYears: '',
		interestRate: '',
		monthlyPayment: ''
	})
	const isEnabled = !state.loanAmount.lenght && state.totalYears > 0 && !state.interestRate.lenght

	const validDigit = (evt) => {
		// var val = getNumber(evt.target.value)
		// var result;
        // if (!digitOnly.test(val)) {
        //     result += '';
        // } else {
        //     result = val;
		// }
		// return result;
	}
	var getNumber = (number) => {
		return number.replace("$","").replace("%","").replace(",","");
	}

	const handleChangeInput = (evt) =>{		
		// const inputValue = validDigit(evt);
		const inputValue = evt.target.value;
		const inputId = evt.target.id;
		handleInput(evt, inputId, inputValue);
	}

	const handleInput = (evt, ele, val) => {
		console.log(getNumber(val))
		switch(ele) {
			case "loanAmount":
				setState({
					...state,
					loanAmount: getNumber(val) > 0 ? '$' + getNumber(val) : val + '',
				})
				break
			case "totalYears":
				setState({
					...state,
					totalYears: val,
				})
				break
			case "interestRate":
				setState({
					...state,
					interestRate: val,
				})
				break;
			default:
				break;
		}
	}

	const valueWithSign = (event) => {
		if(event.target.name === 'interestRate'){
			setState({
				...state,
				interestRate: event.target.value > 0 ? event.target.value + '%' : 0,
			})
		}
	}

	const estimateCalc = (e) => {
		e.preventDefault();
		const totalYears = state.totalYears
		const loanAmount = state.loanAmount ? state.loanAmount.replace("$","") : ''
		const interestRate = state.interestRate ? state.interestRate.replace("%","") : ''

		const totalMonth = totalYears * 12;
		const totalPayment = (Number(loanAmount) + (Number(loanAmount) * interestRate) / 100) / totalMonth
		setState({
			...state,
			monthlyPayment: totalPayment ? totalPayment.toFixed(2) : 0
		})
	}

	return (
		<Layout>
			<SEO title={'Payment Estimator'} description={''} />
			<section className="container">
				<h1 className="text-center mt-5 mb-1">Enerbank Payment Estimator</h1>
				<p className="text-center">Generate a monthly payment estimate — just plug in the relevant numbers and hit <strong className="text-blue">Calculate!</strong></p>
				<form className="estimatorForm text-center">
					<div className="paymentEstimator">
						<div className="formHeading">Payment Estimator Tool</div>
						<div className="formMiddle">
							<div className="form-group row">
								<label htmlFor="loanAmount" className="col-sm-6 col-md-4 col-form-label">Total Loan Amount</label>
								<div className="col-sm-6 col-md-8"> {/* (e)=> setLoanAmount(e.target.value) */}
									<input type="text" className="form-control" name="loanAmount" id="loanAmount" placeholder="0" value={state.loanAmount} onChange={handleChangeInput} />
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="totalYears" className="col-sm-6 col-md-4 col-form-label">Total Number of Years</label>
								<div className="col-sm-6 col-md-8"> {/* (e)=> setTotalYears(e.target.value) */}
									<input type="number" className="form-control" name="totalYears" id="totalYears" placeholder="0" value={state.totalYears} onChange={handleChangeInput} />
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="interestRate" className="col-sm-6 col-md-4 col-form-label">Interest Rate %(APR)</label>
								<div className="col-sm-6 col-md-8"> {/* (e)=> setInterestRate(e.target.value) */}
									<input type="text" className="form-control" name="interestRate" id="interestRate" placeholder="0" value={state.interestRate} onChange={handleChangeInput} onBlur={valueWithSign} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-3 col-md-8 ml-auto text-right">
									<button className="btn btn-primary px-4 py-1" disabled={!isEnabled} onClick={estimateCalc}>Calculate</button>
								</div>
							</div>
						</div>
						<div className="formFooter">
							<div className="form-group row m-0 text-center text-md-left">
								<div className="col-sm-6 col-md-4 col-form-label text-md-right d-inline-block d-md-block">Monthly Payment</div>
								<div className="col-sm-6 col-md-8 py-2 text-md-right">{state.monthlyPayment ? '$' + state.monthlyPayment : ''}</div>
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
					<p className="mb-5">*The monthly payment calculations provided here are estimates only. The exact loan payment amount will be determined by EnerBank USA at time of application. The accuracy of these calculations is not guaranteed nor is its applicability to your individual circumstances. You should always obtain personal advice from qualified professionals.</p>
				</form>
			</section>
		</Layout>
	)
}
export default PaymentEstimator