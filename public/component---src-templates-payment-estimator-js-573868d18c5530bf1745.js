(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{mezP:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("91GP"),a("a1Th"),a("Btvt"),a("pIFo");var l=a("q1tI"),n=a.n(l),o=a("Bl7J"),m=a("vrFN");t.default=function(){var e=Object(l.useState)({loanAmount:"",totalYears:"",interestRate:"",monthlyPayment:""}),t=e[0],a=e[1],r=!t.loanAmount.lenght&&t.totalYears>0&&!t.interestRate.lenght,s=function(e){return e.replace("$","").replace("%","").replace(",","")},c=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},i=function(e){var t=e.target.value,a=e.target.id;d(e,a,t)},d=function(e,l,n){switch(l){case"loanAmount":a(Object.assign({},t,{loanAmount:s(n)>0?"$"+c(s(n)):n+""}));break;case"totalYears":a(Object.assign({},t,{totalYears:n}));break;case"interestRate":a(Object.assign({},t,{interestRate:n}))}};return n.a.createElement(o.a,null,n.a.createElement(m.a,{title:"Payment Estimator",description:""}),n.a.createElement("section",{className:"container"},n.a.createElement("h1",{className:"text-center mt-5 mb-1"},"EnerBank Payment Estimator"),n.a.createElement("p",{className:"text-center"},"Generate a monthly payment estimate — just plug in the relevant numbers and hit ",n.a.createElement("strong",{className:"text-blue"},"Calculate!")),n.a.createElement("form",{className:"estimatorForm text-center"},n.a.createElement("div",{className:"paymentEstimator"},n.a.createElement("div",{className:"formHeading"},"Payment Estimator Tool"),n.a.createElement("div",{className:"formMiddle"},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"loanAmount",className:"col-sm-6 col-md-4 col-form-label"},"Total Loan Amount"),n.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",n.a.createElement("input",{type:"text",className:"form-control",name:"loanAmount",id:"loanAmount",placeholder:"0",value:t.loanAmount,onChange:i}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"totalYears",className:"col-sm-6 col-md-4 col-form-label"},"Total Number of Years"),n.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",n.a.createElement("input",{type:"number",className:"form-control",name:"totalYears",id:"totalYears",placeholder:"0",value:t.totalYears,onChange:i}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"interestRate",className:"col-sm-6 col-md-4 col-form-label"},"Interest Rate %(APR)"),n.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",n.a.createElement("input",{type:"text",className:"form-control",name:"interestRate",id:"interestRate",placeholder:"0",value:t.interestRate,onChange:i,onBlur:function(e){"interestRate"===e.target.name&&a(Object.assign({},t,{interestRate:e.target.value>0?c(e.target.value)+"%":0}))}}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-3 col-md-8 ml-auto text-right"},n.a.createElement("button",{className:"btn btn-primary px-4 py-1",disabled:!r,onClick:function(e){e.preventDefault();var l=t.totalYears,n=t.loanAmount?s(t.loanAmount):"",o=t.interestRate?s(t.interestRate):"",m=12*parseFloat(l),r=parseFloat(o)/100/12,c=parseFloat(n),i=Math.pow(1+r,m),d=c*i*r/(i-1);a(Object.assign({},t,{monthlyPayment:d?d.toFixed(2):0}))}},"Calculate")))),n.a.createElement("div",{className:"formFooter"},n.a.createElement("div",{className:"form-group row m-0 text-center text-md-left"},n.a.createElement("div",{className:"col-sm-6 col-md-4 col-form-label text-md-right d-inline-block d-md-block"},"Monthly Payment"),n.a.createElement("div",{className:"col-sm-6 col-md-8 py-2 text-md-right"},t.monthlyPayment?"$"+t.monthlyPayment:""))),n.a.createElement("div",{className:"formMiddle mt-4",style:{display:"none"}})),n.a.createElement("p",{className:"mb-5"},"*The monthly payment calculations provided here are estimates only. The exact loan payment amount will be determined by EnerBank USA at time of application. The accuracy of these calculations is not guaranteed nor is its applicability to your individual circumstances. You should always obtain personal advice from qualified professionals."))))}}}]);
//# sourceMappingURL=component---src-templates-payment-estimator-js-573868d18c5530bf1745.js.map