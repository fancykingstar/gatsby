import React, { useState } from 'react';

const Paymentbenefitoption = (visiblity, handleClose) => {
    const closePopupbox = () => {
        // setVisiblity('none')
    }    
    
    return (
        <div className="modal fade show" style={{display: visiblity}}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="d-sm-flex">
                    <div className="bg-blue p-5 d-flex align-items-center justify-content-center">
                        <img src="https://enerbank.bwpcommunications.com/wp-content/themes/enerbank/img/svg/payment_option/_WhiteIcons/PaymentOptions_Improve_Cash_Flow.svg" id="modalIcon" width="150" alt="modal icon"/>
                    </div>
                    <div className="p-4 py-sm-5 d-flex flex-column align-item-center justify-content-center">
                        <button type="button" className="close text-blue" onClick={handleClose}>×</button>
                        <h4 className="modal-title text-blue mb-2" id="modalTitle">Improve Cash Flow</h4>
                        <div id="modalContent" className="small line-height-normal" style={{lineHeight: '22px'}}>Advertising payment options is a great way to set you apart from your 
        competitors and produce more leads for your business.</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Paymentbenefitoption