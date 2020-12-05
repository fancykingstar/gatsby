(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{mezP:function(e,t,a){"use strict";a.r(t);a("xfY5"),a("f3/d"),a("91GP"),a("pIFo");var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("vrFN");t.default=function(){var e=/[0-9]/,t=Object(n.useState)({loanAmount:"",totalYears:"",interestRate:"",monthlyPayment:""}),a=t[0],s=t[1],m=!a.loanAmount.lenght&&a.totalYears>0&&!a.interestRate.lenght,c=function(e){return parseInt(e.replace("$","").replace("%","").replace(",",""))},i=function(t){var a=function(t){var a=c(t.target.value);return e.test(a)?parseFloat(a):"0"}(t),n=t.target.id;u(t,n,a)},u=function(e,t,n){switch(t){case"loanAmount":s(Object.assign({},a,{loanAmount:parseFloat(n)>0?"$"+parseFloat(n):0}));break;case"totalYears":s(Object.assign({},a,{totalYears:parseFloat(n)}));break;case"interestRate":s(Object.assign({},a,{interestRate:parseFloat(n)}))}};return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Payment Estimator",description:""}),r.a.createElement("section",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5 mb-1"},"Enerbank Payment Estimator"),r.a.createElement("p",{className:"text-center"},"Generate a monthly payment estimate — just plug in the relevant numbers and hit ",r.a.createElement("strong",{className:"text-blue"},"Calculate!")),r.a.createElement("form",{className:"estimatorForm text-center"},r.a.createElement("div",{className:"paymentEstimator"},r.a.createElement("div",{className:"formHeading"},"Payment Estimator Tool"),r.a.createElement("div",{className:"formMiddle"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"staticEmail",className:"col-sm-6 col-md-4 col-form-label"},"Total Loan Amount"),r.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",r.a.createElement("input",{type:"text",className:"form-control",name:"loanAmount",id:"loanAmount",placeholder:"0",value:a.loanAmount,onChange:i}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-6 col-md-4 col-form-label"},"Total Number of Years"),r.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",r.a.createElement("input",{type:"number",className:"form-control",name:"totalYears",id:"totalYears",placeholder:"0",value:a.totalYears,onChange:i}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-6 col-md-4 col-form-label"},"Interest Rate %(APR)"),r.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",r.a.createElement("input",{type:"text",className:"form-control",name:"interestRate",id:"interestRate",placeholder:"0",value:a.interestRate,onChange:i,onBlur:function(e){"interestRate"===e.target.name&&s(Object.assign({},a,{interestRate:e.target.value>0?e.target.value+"%":0}))}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-3 col-md-8 ml-auto text-left"},r.a.createElement("button",{className:"btn btn-primary px-4 py-1",disabled:!m,onClick:function(e){e.preventDefault();var t=a.totalYears,n=a.loanAmount?a.loanAmount.replace("$",""):"",r=a.interestRate?a.interestRate.replace("%",""):"",l=12*t,o=(Number(n)+Number(n)*r/100)/l;s(Object.assign({},a,{monthlyPayment:o?o.toFixed(2):0}))}},"Calculate")))),r.a.createElement("div",{className:"formFooter"},r.a.createElement("div",{className:"form-group row m-0"},r.a.createElement("div",{className:"col-sm-6 col-md-4 col-form-label"},"Monthly Payment"),r.a.createElement("div",{className:"col-sm-6 col-md-8 text-left py-2"},a.monthlyPayment?"$ "+a.monthlyPayment:""))),r.a.createElement("div",{className:"formMiddle mt-4",style:{display:"none"}})),r.a.createElement("p",{className:"mb-5"},"*The monthly payment calculations provided here are estimates only. The exact loan payment amount will be determined by EnerBank USA at time of application. The accuracy of these calculations is not guaranteed nor is its applicability to your individual circumstances. You should always obtain personal advice from qualified professionals."))))}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),l=a("LZWt"),o=a("Xbzi"),s=a("apmT"),m=a("eeVq"),c=a("kJMx").f,i=a("EemH").f,u=a("hswa").f,p=a("qncB").trim,d=n.Number,f=d,N=d.prototype,E="Number"==l(a("Kuth")(N)),b="trim"in String.prototype,h=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var o,m=t.slice(2),c=0,i=m.length;c<i;c++)if((o=m.charCodeAt(c))<48||o>r)return NaN;return parseInt(m,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(E?m((function(){N.valueOf.call(a)})):"Number"!=l(a))?o(new f(h(t)),a,d):h(t)};for(var v,y=a("nh4g")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;y.length>g;g++)r(f,v=y[g])&&!r(d,v)&&u(d,v,i(f,v));d.prototype=N,N.constructor=d,a("KroJ")(n,"Number",d)}}}]);
//# sourceMappingURL=component---src-templates-payment-estimator-js-49b51f1436098b5f637a.js.map