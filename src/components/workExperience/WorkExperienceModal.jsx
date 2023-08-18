/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Modal } from 'bootstrap';
//import moment from 'moment';
import ResumeModal from "../resume/ResumeModal";
import kredoHP from "./kredo_main_page.png";
import tektonHP from "./tekton_main_page.png";
import WorkExperienceComponent from "./WorkExperienceComponent";
import $ from 'jquery';

const data = [
    {
        company: "Kredo Inc.",
        companyDescription: "We’re taking a fresh, technology-focused approach to fundraising with a commitment to continuously strengthen our brands and products to support education! We’re passionate about expanding our offerings to raise even more money for communities nationwide.",
        title: "Full Stack Developer",
        startDate: "01/2023",
        endDate: "present",
        status: "active",
        coverImageUri: kredoHP,
        website: 
            {text: "Kredo Inc", path: new URL("http://www.kredoinc.com")},
            //{text: "FundGive", path: new URL("http://www.fundgive.com")},
            //{text: "Spirit Gear Direct.com", path: new URL("http://www.spiritgeardirect.com")},
            //{text: "Shop Fund", path: new URL("http://www.shopfund.com")},
    },
    {
        company: "Tekton Construction Technologies",
        companyDescription: "Tekton helps you hire the right people for your job and maintain their safety documentation, all through a single, simple app on the mobile device you already carry every day.",
        title: "Full Stack Software Engineer",
        startDate: "05/2022",
        endDate: "01/2023",
        status: "inactive",
        coverImageUri: tektonHP,
        website: {text: "Tekton Construction Technologies", path: new URL("https://www.linkedin.com/company/tektonconstructiontechnologies/")},
    },
];

function WorkExperienceModal(){
    const [cards, setCards] = useState({
        data: [],
        workExperienceComponent: [],
    });

    const mapWorkExperiences = workObj => {
        return (
            <WorkExperienceComponent card={workObj} key={workObj.company}/>
        )
    };

    const renderData = (data) => {
        let workHistoryArr = data;
        setCards((...prevState)=>{
            const pageData = {...prevState};
            pageData.data = workHistoryArr;
            pageData.workExperienceComponent = workHistoryArr.map(mapWorkExperiences);
            return pageData;
        });
    }

    useEffect(()=>{
        renderData(data);
    }, []);

    $(document).ready(function(){
        $('.carousel').each(function(){
          $(this).find('.carousel-item').eq(0).addClass('active');
        });
      });

    const onViewResumeClick = () => {
        const resumeModal = new Modal("#resumeModal");
        resumeModal.show();
    };

    return (
    <>
    <div className="modal fade" id="workExperienceModal" tabIndex="-1" role="dialog" aria-labelledby="workExperienceModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-start">
                    <h4 className="modal-title w-100 font-weight-bold">Work Experience</h4>
                    <a type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark fa-xl" /></span>
                    </a>
                </div>
                <div className="modal-body mb-0">
                    <div id="carouselExampleControls" className="carousel slide" style={{backgroundColor: "transparent"}} data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {cards.workExperienceComponent}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="modal-footer d-flex justify-content-center mt-1 p-0"></div>
                </div>
                <div className="col">
                    <button type="button" className="btn viewResume mb-3 me-5 mt-2 float-end" onClick={onViewResumeClick} data-bs-dismiss="modal">&nbsp;View Resume</button>
                </div>
            </div>
        </div>
    </div>
    <ResumeModal />
    </>
    )
}

export default WorkExperienceModal;