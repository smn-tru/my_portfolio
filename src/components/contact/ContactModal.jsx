import React from "react";

import "./contact.css"

function ContactModal(){
    
    return(
       <>
        <div className="modal fade" id="contactDialog" tabIndex="-1" role="dialog" aria-labelledby="contactDialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Contact</h4>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa-regular fa-circle-xmark" /></span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="row row-cols-2">
                    <div className="col-1 text-start">
                    <i className="fa-brands fa-linkedin fa-xl mb-4"></i>
                    <i className="fa-brands fa-github fa-xl mb-4"></i>
                    <i className="fa-brands fa-slack fa-xl mb-4"></i>
                    <i className="fa-solid fa-phone fa-xl"></i>
                    </div>
                    <div className="col-10 ml-4">
                        <div className="md-form mb-2">
                        <input type="text" id="form34" className="form-control validate" placeholder="name" />
                        <label data-error="wrong" data-success="right" htmlFor="form34"></label>
                        </div>

                        <div className="md-form mb-2">
                        <input type="email" id="form29" className="form-control validate" placeholder="email"/>
                        <label data-error="wrong" data-success="right" htmlFor="form29"></label>
                        </div>

                        <div className="md-form mb-2">
                        <input type="text" id="form32" className="form-control validate" placeholder="subject" />
                        <label data-error="wrong" data-success="right" htmlFor="form32"></label>
                        </div>

                        <div className="md-form">
                        <textarea type="text" id="form8" className="md-textarea form-control" rows="4" placeholder="message"></textarea>
                        <label data-error="wrong" data-success="right" htmlFor="form8"></label>
                        </div>

                        <div className="modal-footer d-flex justify-content-center">
                            <button type="submit" className="btn sendForm">Send</button>
                        </div>
                    </div> 
                    
                    </div>

                    </div>
                    </div>
            </div>
        </div>
       </>
    )
}

export default ContactModal;