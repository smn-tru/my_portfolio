/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Document, Page, pdfjs} from 'react-pdf';
import resume from './Sandra Truong_Software Engineer.pdf'
import "./resume.css"
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeModal(){

    const [width, setWidth] = useState(1200);

    useEffect(() => {
    // default width is 1200px, but this hook sets the width of the resume to be the inner width of whatever screen the user is using
        setWidth(window.innerWidth);
    }, []);
    return (
        <>
        <div className="modal fade" id="resumeModal" tabIndex="-1" role="dialog" aria-labelledby="resumeModal" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen" role="document">
                <div className="modal-content">
                    <div className="modal-header text-start">
                        <h4 className="modal-title w-100 font-weight-bold">Resume</h4>
                        <a href="#" type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span className="close-modal" aria-hidden="true"><i className="fa-regular fa-circle-xmark fa-xl" /></span>
                        </a>
                    </div>
                    <div className="modal-body mx-3">
                    <Container fluid className="resume-section">
                        <Button
                            variant="primary"
                            href={resume}
                            target="_blank"
                            style={{ maxWidth: "250px" }}
                        >
                            &nbsp;Download CV
                        </Button>
                        <Row className="resume">
                {/* this component takes the link provided above and renders it on your page */}
                            <Document file={resume} className="d-flex justify-content-center">
                {/*if width is greater than 786px, scale by 1.7x if not, 0.6x */}
                                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                            </Document>
                        </Row>
                    </Container>
                    <div className="modal-footer d-flex justify-content-center mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResumeModal;