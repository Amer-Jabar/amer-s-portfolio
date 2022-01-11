import * as React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineGitlab } from 'react-icons/ai';

import brandLogoSrc from '../images/icon.png';

import '../styles/header.sass';

const Header = () => (
    <div className='header' id='header'>
        <section className='navbar'>
            <span className='brand-container'><img src={brandLogoSrc} alt='brand logo' /></span>
            <div className='link-group'>
                <a href='#home'><span>1.</span>Home</a>
                <a href='#skills'><span>2.</span>Skills</a>
                <a href='#projects'><span>3.</span>Projects</a>
                <a href='#contact'><span>4.</span>Contact</a>
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
    </div>
)

export default Header;