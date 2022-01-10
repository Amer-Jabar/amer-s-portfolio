import * as React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineGitlab } from 'react-icons/ai';

import brandLogoSrc from '../images/icon.png';

import '../styles/header.sass';

const Header = () => (
    <div className='header'>
        <section className='navbar'>
            <span className='brand-container'><img src={brandLogoSrc} alt='brand logo' /></span>
            <div className='link-group'>
                <p><span>1.</span>Home</p>
                <p><span>2.</span>Skills</p>
                <p><span>3.</span>Projects</p>
                <p><span>4.</span>Contact</p>
            </div>
        </section>
        <section className='introduction'>
            <h3>Hello, my name is</h3>
            <h1>Amer Muhammad<span>.</span></h1>
            <h1>I am a Web Developer<span>.</span></h1>
            <p>I am an enthusiastic web developer with a wide informational background in front-end and back-end developement. 
                I like to create systems and optimize them for real life experiences.</p>
            <div className='button-group'>
                <div className='resume-container'>
                    <button className='resume'>Resume</button>
                </div>
                <div className='external-links'>
                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiOutlineGitlab />
                </div>
            </div>
        </section>
    </div>
)

export default Header;