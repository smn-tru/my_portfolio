/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Modal } from 'bootstrap';

import AboutMeModal from '../aboutMe/AboutMeModal';
import ContactModal from '../contact/ContactModal';


import './menu.css';


function Menu(){

    const contactModalHandler = () => { 
        const contactModal = new Modal("#contactModal");
        contactModal.show(); 
    };

    const aboutMeModalHandler = () => { 
        const aboutMeModal = new Modal("#aboutMeModal");
        aboutMeModal.show(); 
    };

    return ( 
        <>
        <nav className='menu'>
        <input type='checkbox' href='#' className='menu-open' name='menu-open' id='menu-open' />
        <label className='menu-open-button' htmlFor='menu-open'>
                <span className='lines line-1'></span>
                <span className='lines line-2'></span>
                <span className='lines line-3'></span>
        </label>

        <a href='#' id='aboutMe' className='menu-item' onClick={aboutMeModalHandler}><i className="fa-regular fa-id-card" /></a> 
        <a href='#' id='work' className='menu-item' onClick={()=>console.log("WorkExperience")}><i className='fa-solid fa-laptop-code' /></a> 
        <a href='#' id='skills' className='menu-item' onClick={()=>console.log("Skills")}><i className='fa-solid fa-rectangle-list' /></a>
        <a href='#' id='contact' className='menu-item' onClick={contactModalHandler}><i className='fa-regular fa-paper-plane' /></a> 
        <a href='#' id='projects' className='menu-item' onClick={()=>console.log("Projects")}><i className='fa-regular fa-folder-open' /></a> 
        <a href='#' id='resume' className='menu-item' onClick={()=>console.log("Resume")}><i className='fa-regular fa-file'></i></a> 

        </nav>

        <ContactModal />
        <AboutMeModal />
    </>
    )

}

export default Menu;