/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './skills.css'

function SkillsModal(){

    let box = document.querySelector("skills-container");

    box?.addEventListener("click", function(){
        box.classList.toggle("active");
    })

    const keyFunction = e => {
        if (e.keyCode === 38){
            box.classList.add("active");
        }
        if (e.keyCode === 40){
            box.classList.remove("active");
        }
    };
    


    return (
        <div className="modal fade" id="skillsModal" tabIndex="-1" role="dialog" aria-labelledby="skillsModal" aria-hidden="true">
            <div className="modal-dialog" role="document">

                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Skills</h4>
                        <a type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark fa-xl" /></span>
                        </a>
                    </div>

                    <div className="modal-body skills-body mx-3" onKeyDown={keyFunction}>
                        <div className="row">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>FRONT END</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>Whoaaa!!!</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>BACK END</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>Whoaaa!!!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>MIDDLE TIER</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>Whoaaa!!!</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>TOOLS</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>Whoaaa!!!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="modal-footer d-flex justify-content-center mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsModal;