(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{mezP:function(e,t,a){"use strict";a.r(t);a("xfY5"),a("f3/d"),a("91GP"),a("a1Th"),a("Btvt"),a("pIFo");var n=a("q1tI"),l=a.n(n),r=(a("TJpk"),a("Bl7J")),o=a("vrFN");t.default=function(){var e=/[0-9]/,t=Object(n.useState)({loanAmount:"",totalYears:"",interestRate:"",monthlyPayment:""}),a=t[0],s=t[1],m=!a.loanAmount.lenght&&a.totalYears>0&&!a.interestRate.lenght,c=function(e){return parseInt(e.replace("$","").replace("%","").replace(",",""))},i=function(t){var a=function(t){var a=c(t.target.value);return e.test(a)?parseFloat(a):"0"}(t),n=t.target.id;u(t,n,a)},u=function(e,t,n){switch(console.log(-1===n.toString().indexOf("%")),t){case"loanAmount":s(Object.assign({},a,{loanAmount:parseFloat(n)>0?"$"+parseFloat(n):0}));break;case"totalYears":s(Object.assign({},a,{totalYears:parseFloat(n)}));break;case"interestRate":s(Object.assign({},a,{interestRate:parseFloat(n)}))}};return l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"Payment Estimator",description:""}),l.a.createElement("section",{className:"container"},l.a.createElement("h1",{className:"text-center mt-5 mb-1"},"Enerbank Payment Estimator"),l.a.createElement("p",{className:"text-center"},"Generate a monthly payment estimate — just plug in the relevant numbers and hit ",l.a.createElement("strong",{className:"text-blue"},"Calculate!")),l.a.createElement("form",{className:"estimatorForm text-center"},l.a.createElement("div",{className:"paymentEstimator"},l.a.createElement("div",{className:"formHeading"},"Payment Estimator Tool"),l.a.createElement("div",{className:"formMiddle"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"staticEmail",className:"col-sm-6 col-md-4 col-form-label"},"Total Loan Amount"),l.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",l.a.createElement("input",{type:"text",className:"form-control",name:"loanAmount",id:"loanAmount",placeholder:"0",value:a.loanAmount,onChange:i}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-6 col-md-4 col-form-label"},"Total Number of Years"),l.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",l.a.createElement("input",{type:"number",className:"form-control",name:"totalYears",id:"totalYears",placeholder:"0",value:a.totalYears,onChange:i}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-6 col-md-4 col-form-label"},"Interest Rate %(APR)"),l.a.createElement("div",{className:"col-sm-6 col-md-8"}," ",l.a.createElement("input",{type:"text",className:"form-control",name:"interestRate",id:"interestRate",placeholder:"0",value:a.interestRate,onChange:i,onBlur:function(e){console.log("hi"),"interestRate"===e.target.name&&s(Object.assign({},a,{interestRate:e.target.value>0?e.target.value+"%":0}))}}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-3 col-md-8 ml-auto text-left"},l.a.createElement("button",{className:"btn btn-primary px-4 py-1",disabled:!m,onClick:function(e){e.preventDefault();var t=a.totalYears,n=a.loanAmount?a.loanAmount.replace("$",""):"",l=a.interestRate?a.interestRate.replace("%",""):"",r=12*t,o=(Number(n)+Number(n)*l/100)/r;s(Object.assign({},a,{monthlyPayment:o?o.toFixed(2):0}))}},"Calculate")))),l.a.createElement("div",{className:"formFooter"},l.a.createElement("div",{className:"form-group row m-0"},l.a.createElement("div",{className:"col-sm-6 col-md-4 col-form-label"},"Monthly Payment"),l.a.createElement("div",{className:"col-sm-6 col-md-8 text-left py-2"},"$ "+a.monthlyPayment))),l.a.createElement("div",{className:"formMiddle mt-4",style:{display:"none"}})),l.a.createElement("p",{className:"mb-5"},"*The monthly payment calculations provided here are estimates only. The exact loan payment amount will be determined by EnerBank USA at time of application. The accuracy of these calculations is not guaranteed nor is its applicability to your individual circumstances. You should always obtain personal advice from qualified professionals."))))}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),l=a("aagx"),r=a("LZWt"),o=a("Xbzi"),s=a("apmT"),m=a("eeVq"),c=a("kJMx").f,i=a("EemH").f,u=a("hswa").f,p=a("qncB").trim,d=n.Number,f=d,N=d.prototype,E="Number"==r(a("Kuth")(N)),h="trim"in String.prototype,b=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,n,l,r=(t=h?t.trim():p(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+t}for(var o,m=t.slice(2),c=0,i=m.length;c<i;c++)if((o=m.charCodeAt(c))<48||o>l)return NaN;return parseInt(m,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(E?m((function(){N.valueOf.call(a)})):"Number"!=r(a))?o(new f(b(t)),a,d):b(t)};for(var v,g=a("nh4g")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;g.length>y;y++)l(f,v=g[y])&&!l(d,v)&&u(d,v,i(f,v));d.prototype=N,N.constructor=d,a("KroJ")(n,"Number",d)}}}]);
//# sourceMappingURL=component---src-templates-payment-estimator-js-9b6a4be39b3f22a3d787.js.map