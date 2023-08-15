import React from "react";
import PropTypes from "prop-types";
import "./workexperience.css";

function WorkExperienceComponent(props){
    const workObj = props.card;

    return (
        <>
        <div className="card workExp">
            <div className="col">
                <p class="card-text"><small class="text-muted">{workObj.startDate} - {workObj.endDate}</small></p>
                <div className="row">
                    <img src={workObj.coverImageUri} alt="company cover page" className="card-img-top " />
                </div>
                <div className="row mt-2">
                    <h5 className="card-title">{workObj.company}</h5>
                </div>
                <div className="row">
                    <div className="card-text">{workObj.companyDescription}</div>
                </div>
                <div className="row">
                    <a href={workObj.website.path}>{workObj.website.text}</a>
                </div>
            </div>
        </div>
        </>
    )
}

WorkExperienceComponent.propTypes = {
    card: PropTypes.shape({
        company: PropTypes.string,
        companyDescription: PropTypes.string,
        title: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        website: PropTypes.string,
    })
}

export default WorkExperienceComponent;