import React from "react";
import PropTypes from "prop-types";
import "./workexperience.css";

function WorkExperienceComponent(props){
    const workObj = props.card;

    return (
    <>
    <div className="carousel-item p-2">
        <div className="card h-100 workExp">
            <div className="col">
                <p><small className="text-muted">{workObj.startDate} - {workObj.endDate}</small></p>
                <div className="row">
                    <img src={workObj.coverImageUri} alt="company cover page" className="d-block w-100 card-img-top" />
                </div>
                <div className="row mt-2">
                    <h5 className="card-title">{workObj.company}</h5>
                </div>
                <div className="card-body flex-fill" style={{height: "170px"}}>{workObj.companyDescription}</div>

                <div className="row">
                    <a href={workObj.website.path} target="_blank" rel="noreferrer">{workObj.website.text}</a>
                </div>
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
        website: PropTypes.object,
    })
}

export default WorkExperienceComponent;