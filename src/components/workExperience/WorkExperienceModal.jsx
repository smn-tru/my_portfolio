/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Modal } from 'bootstrap';
import moment from 'moment';
import ResumeModal from "../resume/ResumeModal";
import kredoHP from "./kredo_main_page.png";
import tektonHP from "./tekton_main_page.png";
import WorkExperienceComponent from "./WorkExperienceComponent";


const data = [
    {
        company: "Kredo Inc.",
        companyDescription: "We’re taking a fresh, technology-focused approach to fundraising with a commitment to continuously strengthen our brands and products to support education! We’re passionate about expanding our offerings to raise even more money for communities nationwide. That’s why we’re exploring new opportunities including a cashback affiliate program, recurring revenue model, donation platform, school supply kits and online revenue conversion technology.",
        title: "Full Stack Developer",
        startDate: moment("01/2023").format('MM/YYYY'),
        endDate: "present",
        coverImageUri: kredoHP,
        website: [
            {text: "Kredo Inc", path: new URL("http://www.kredoinc.com")},
            //{text: "FundGive", path: new URL("http://www.fundgive.com")},
            //{text: "Spirit Gear Direct.com", path: new URL("http://www.spiritgeardirect.com")},
            //{text: "Shop Fund", path: new URL("http://www.shopfund.com")},
        ],
    },
    {
        company: "Tekton Construction Technologies | Sabio",
        companyDescription: "Tekton helps you hire the right people for your job and maintain their safety documentation, all through a single, simple app on the mobile device you already carry every day.",
        title: "Full Stack Software Engineer",
        startDate: moment("05/2022").format('MM/YYYY'),
        endDate: moment("01/2023").format('MM/YYYY'),
        coverImageUri: tektonHP,
        website: [
            {text: "Tekton Construction Technologies", path: new URL("https://www.linkedin.com/company/tektonconstructiontechnologies/")},
        ],
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
                <div className="modal-body skills-body mx-3">
                    {cards.workExperienceComponent}
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

export default WorkExperienceModal;