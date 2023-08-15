/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from 'bootstrap';

import ResumeModal from "../resume/ResumeModal";


function ProjectsModal(){

    const onViewResumeClick = () => {
        const resumeModal = new Modal("#resumeModal");
        resumeModal.show();
    }

    return (
        <>
        <div className="modal fade" id="projectsModal" tabIndex="-1" role="dialog" aria-labelledby="projectsModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-start">
                    <h4 className="modal-title w-100 font-weight-bold">Projects</h4>
                    <a type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark fa-xl" /></span>
                    </a>
                </div>
                <div className="modal-body mx-3">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="..." alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
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

export default ProjectsModal;