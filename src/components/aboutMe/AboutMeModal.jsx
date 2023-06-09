/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./aboutme.css"

function AboutMeModal() {
    return (
        <>
        <div className="modal fade" id="aboutMeModal" tabIndex="-1" role="dialog" aria-labelledby="aboutMeModal" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">About Me</h4>
                        <a type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark fa-xl" /></span>
                        </a>
                    </div>
                    <div className="modal-body mx-3">
                        <div className="container">
                            <div className="row"><h1>Hello!</h1></div>
                            <div className="row"><h2>My name is Sandra and . . .</h2></div>
                            <div className="row info">
                                <img className="col-11 col-sm-11 col-lg-5" src={require("./profile-picture.jpeg")} alt="profile"/>
                                <div className=" col-11 col-sm-11 col-lg-7 mt-4">I am a Full Stack Software Developer.
                                    <br/> I was born and raised in Denver, Colorado and briefly lived in Los Angeles, California. 
                                    <br/> When I am not coding, I spend most of my time with friends & family and traveling.
                                    <br/> Some of my favorite hobbies are working on cars, baking macarons, and going on food ventures.
                                    <div className="modal-footer d-flex justify-content-center mt-3"></div>
                                    <div className="footer-links float-end">
                                    <ul className="nav nav-pills flex-row" role="tablist">
                                        <li className="nav-item me-3">
                                            <a href='https://www.linkedin.com/in/sandramytruong/' 
                                            target="_blank" 
                                            id="linkedIn" 
                                            className="nav-link contact-item">
                                                <i className="fa-brands fa-linkedin fa-xl"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a href='https://github.com/smn-tru' 
                                            target="_blank" 
                                            id="github" 
                                            className="nav-link contact-item">
                                                <i className="fa-brands fa-github fa-xl"></i>
                                            </a>
                                        </li>
                                    </ul>
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
};

export default AboutMeModal;