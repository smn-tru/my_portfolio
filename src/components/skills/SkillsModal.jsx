/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from 'bootstrap';
import './skills.css';

import ResumeModal from "../resume/ResumeModal";

function SkillsModal(){

    const onViewResumeClick = () => {
        const resumeModal = new Modal("#resumeModal");
        resumeModal.show();
    }

    return (
        <>
        <div className="modal fade" id="skillsModal" tabIndex="-1" role="dialog" aria-labelledby="skillsModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-start">
                        <h4 className="modal-title w-100 font-weight-bold">Skills</h4>
                        <a type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark fa-xl" /></span>
                        </a>
                    </div>
                    <div className="modal-body skills-body mx-3">
                        <div className="row">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>FRONT END</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <ul>
                                            <li>AJAX</li>
                                            <li>Bootstrap</li>
                                            <li>CSS</li>
                                            <li>HTML</li>
                                            <li>JavaScript</li>
                                            <li>jQuery</li>
                                            <li>Markdown</li>
                                            <li>React / REACT.js</li>
                                            <li>RDL/XML</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>BACK END</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <ul>
                                            <li>ASP.NET Core</li>
                                            <li>ASP.NET MVC</li>
                                            <li>C#</li>
                                            <li>REST API</li>
                                            <li>SQL / T-SQL</li>
                                            <li>Web Forms / WinForms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>MIDDLEWARE</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <ul>
                                            <li>ADO.NET</li>
                                            <li>ASP.NET Core</li>
                                            <li>Azure</li>
                                            <li>C#</li>
                                            <li>Docker</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>TOOLS</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <ul>
                                            <li>AGILE / SCRUM</li>
                                            <li>Chrome DevTools</li>
                                            <li>Git</li>
                                            <li>Github</li>
                                            <li>Microsoft Visual Studios</li>
                                            <li>Microsoft SQL Server</li>
                                            <li>PowerShell</li>
                                            <li>Spiceworks</li>
                                            <li>Visual Studio Code</li>
                                            <li>VS Debugger / Unit Test</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="modal-footer d-flex justify-content-center mt-3 p-0"></div>
                    </div>
                    <div className="col">
                        <button type="button" className="btn viewResume mb-3 me-5 mt-0 float-end" onClick={onViewResumeClick} data-bs-dismiss="modal">&nbsp;View Resume</button>
                    </div>
                </div>
            </div>
        </div>
        <ResumeModal />
        </>
    )
}

export default SkillsModal;