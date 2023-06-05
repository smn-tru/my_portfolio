/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from 'prop-types';

import "./contact.css"

function ContactModal(){


    return(
       <>
        <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModal" aria-hidden="true">
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
                        <div className="col-2">
                        <ul className="nav nav-pills flex-column" role="tablist">
                            <li className="nav-item mb-2">
                                <a href='#' 
                                id="messageForm" 
                                className="nav-link active contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#emailForm" 
                                role="tab">
                                    <i className="fa-regular fa-message fa-xl"></i>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href='https://www.linkedin.com/in/sandramytruong/' 
                                target="_blank" 
                                id="linkedIn" 
                                className="nav-link contact-item">
                                    <i className="fa-brands fa-linkedin fa-xl"></i>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href='https://github.com/smn-tru' 
                                target="_blank" 
                                id="github" 
                                className="nav-link contact-item">
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href='#' 
                                id="slack" 
                                className="nav-link contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#slackInfoCard">
                                    <i className="fa-brands fa-slack fa-xl"></i>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href='#' 
                                id="phoneNumber" 
                                className="nav-link contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#phoneInfoCard">
                                    <i className="fa-solid fa-phone fa-xl"></i>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href='#' 
                                id="emailAddress" 
                                className="nav-link contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#emailInfoCard">
                                    <i className="fa-regular fa-at fa-xl"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-9 ml-4">
                        <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show active" id="emailForm" role="tabpanel">
                            <div className="emailForm" display="block">
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

                        <div className="tab-pane fade" id="slackInfoCard" role="tabpanel">
                            <div className="card slackInfo">
                                <div className="card-header">slack handler</div>
                                <div className="card-body">
                                    @Sandra Truong
                                    <a className="copy-to-clipboard"><i className="fa-regular fa-copy ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                            
                        <div className="tab-pane fade" id="phoneInfoCard" role="tabpanel">
                            <div className="card phoneInfo">
                                <div className="card-header">contact number</div>
                                <div className="card-body">
                                    3038018019
                                    <a className="copy-to-clipboard"><i className="fa-regular fa-copy ml-2"></i></a>
                                </div>
                            </div> 
                        </div>


                        <div className="tab-pane fade" id="emailInfoCard" role="tabpanel">
                            <div className="card emailInfo">
                                <div className="card-header">email address</div>
                                <div className="card-body">
                                    sandra.mntru@gmail.com
                                    <a className="copy-to-clipboard"><i className="fa-regular fa-copy ml-2"></i></a>
                                </div>
                                
                            </div> 
                        </div>
                            
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

ContactModal.propTypes = {
    toggleVisibility: PropTypes.func,
}

export default ContactModal;