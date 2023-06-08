/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';
import toastr from "toastr";

import "./contact.css"

function ContactModal(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            let data = { ...prevState };
            data[name] = value;
            return data;
        });
    };

    const emailFormSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    });

    const sendEmail = (e) => {
        e.preventDefault(); 
    
        emailjs.sendForm('service_filwc25', 'template_r97wcao', e.target, 'pHjyvkO7w9Q7xvy3F')
          .then((result) => {
            swal.fire({
                icon: 'success',
                title: 'Sweet!',
                text: `Your message is on it's way`,
                showConfirmButton: false,
                timer: 2500,
                color: "#000000",
                background: `linear-gradient(90deg, rgba(36,233,210,0.6157670454545454) 0%, rgba(225,107,245,1) 50%, rgba(209,230,53,1) 100%)`,
            });
            setTimeout(()=>{
                window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, 2500)    
          }, (error) => {
              console.log(error.text);
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'please try again or select another form of communication',
                confirmButtonColor: "#ea6cff",
                color: "#000000",
                background: `linear-gradient(90deg, rgba(36,233,210,0.6157670454545454) 0%, rgba(225,107,245,1) 50%, rgba(209,230,53,1) 100%)`,
              })
          });
      }
    

    return(
       <>
        <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Contact</h4>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark" /></span>
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
                            <Formik 
                                enableReinitialize={true}
                                initialValues={formData}
                                //onSubmit={submitHandler}
                                validationSchema={emailFormSchema}>
                                    <Form className="emailForm" onSubmit={sendEmail}>
                                        <div className="md-form mb-2">
                                            <Field required type="text" id="nameField" name="name" value={formData.name} className="form-control validate" placeholder="name" onChange={changeHandler} />
                                            <label className="validate-field">
                                                <ErrorMessage name="name" component="div" className="has-error" />
                                            </label>
                                           
                                        </div>
                                    
                                        <div className="md-form mb-2">
                                            <Field required type="email" id="emailField" name="email" value={formData.email} className="form-control validate" placeholder="email" onChange={changeHandler}/>
                                            <label className="validate-field">
                                                <ErrorMessage name="email" component="div" className="has-error" />
                                            </label>
                                        </div>

                                        <div className="md-form mb-2">
                                            <Field required type="text" id="subjectField" name="subject" value={formData.subject} className="form-control validate" placeholder="subject" onChange={changeHandler} />
                                            <label className="validate-field">
                                                <ErrorMessage name="subject" component="div" className="has-error" />
                                            </label>
                                        </div>

                                        <div className="md-form">
                                            <textarea required type="textarea" id="messageField" name="message" value={formData.message} className="md-textarea form-control" rows="4" placeholder="message" onChange={changeHandler}></textarea>
                                            <label className="validate-field">
                                                <ErrorMessage name="message" component="div" className="has-error" />
                                            </label>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-center">
                                            <button type="submit" className="btn sendForm">Send</button>
                                        </div>
                                    </Form>
                                
                            </Formik>
                        </div>

                        <div className="tab-pane fade" id="slackInfoCard" role="tabpanel">
                            <div className="card slackInfo">
                                <div className="card-header">slack handler</div>
                                <div className="card-body">
                                    @Sandra Truong
                                    <a className="copy-to-clipboard" 
                                    onClick={() => {
                                        navigator.clipboard.writeText("@Sandra Truong"); 
                                        toastr.info("Copied to clipboard.");}}>
                                            <i className="fa-regular fa-copy ml-2"/>
                                    </a>
                                </div>
                                <div className="modal-footer d-flex justify-content-center"></div>
                            </div>
                        </div>
                            
                        <div className="tab-pane fade" id="phoneInfoCard" role="tabpanel">
                            <div className="card phoneInfo">
                                <div className="card-header">contact number</div>
                                <div className="card-body">
                                    3038018019
                                    <a className="copy-to-clipboard" 
                                    onClick={() => {
                                        navigator.clipboard.writeText("3038018019"); 
                                        toastr.info("Copied to clipboard.");}}>
                                            <i className="fa-regular fa-copy ml-2"/>
                                    </a>
                                </div>
                                <div className="modal-footer d-flex justify-content-center"></div>
                            </div> 
                        </div>


                        <div className="tab-pane fade" id="emailInfoCard" role="tabpanel">
                            <div className="card emailInfo">
                                <div className="card-header">email address</div>
                                <div className="card-body">
                                    sandra.mntru@gmail.com
                                    <a className="copy-to-clipboard" 
                                    onClick={() => {
                                        navigator.clipboard.writeText("sandra.mntru@gmail.com"); 
                                        toastr.info("Copied to clipboard.");}}>
                                            <i className="fa-regular fa-copy ml-2"/>
                                    </a>
                                </div>
                                <div className="modal-footer d-flex justify-content-center"></div>
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

export default ContactModal;