import * as React from 'react';
import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineGitlab } from 'react-icons/ai';

import brandLogoSrc from '../images/amer-logo.svg';

import '../styles/header.sass';


const Header = ({ pageBackgroundController }) => {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const toggle = () => {
        setSideBarIsOpen(!sideBarIsOpen)
        pageBackgroundController(!sideBarIsOpen);
    };

    return (
        <div className='header' id='header'>
            <section className='navbar'>
                <span className='brand-container'>
                    <img src={brandLogoSrc} alt='brand logo' width='50' height='50' />
                </span>
                <div className='link-group'>
                    <a href='#home'><span>1.</span>Home</a>
                    <a href='#skills'><span>2.</span>Skills</a>
                    <a href='#projects'><span>3.</span>Projects</a>
                    <a href='#contact'><span>4.</span>Contact</a>
                </div>
                <div 
                className='link-sidebar-menu' 
                id='link-sidebar-menu'
                onClick={() => toggle()}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>
            <section className='introduction'>
                <h3>Hello, my name is</h3>
                <h1>Amer Muhammed<span>.</span></h1>
                <h1>I am a Web Developer<span>.</span></h1>
                <p>I am an enthusiastic web developer with a wide informational background in front-end and back-end developement. 
                    I like to create systems and optimize them for real life experiences.</p>
                <div className='button-group'>
                    <div className='resume-container'>
                        <button className='resume'>Resume</button>
                    </div>
                    <div className='external-links'>
                        <a target='__' href='https://www.linkedin.com/in/amer-jabar-216318201/'><AiFillLinkedin /></a>
                        <a target='__' href='https://github.com/AmerJabar'><AiFillGithub /></a>
                        <a target='__' href='https://gitlab.com/amerjabar0000'><AiOutlineGitlab /></a>
                    </div>
                </div>
            </section>
            <div 
            className='side-link-group'
            id='side-link-group'
            style={
                sideBarIsOpen ? {
                    right: '0vw'
                } : {
                    right: '-45vw'
                }
            }
            >
                <a
                className='close-button'
                id='close-button'
                onClick={() => toggle()}
                >
                    <div className='link-sidebar-menu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <a href='#home' id='sidebar-link' onClick={() => toggle()}><span>1.</span>Home</a>
                <a href='#skills' id='sidebar-link' onClick={() => toggle()}><span>2.</span>Skills</a>
                <a href='#projects' id='sidebar-link' onClick={() => toggle()}><span>3.</span>Projects</a>
                <a href='#contact' id='sidebar-link' onClick={() => toggle()}><span>4.</span>Contact</a>
            </div>
        </div>
    )
}

export default Header;