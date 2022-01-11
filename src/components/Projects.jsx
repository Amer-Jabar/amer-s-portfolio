import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import '../styles/projects.sass';


const Projects = () => (
    <div className='projects' id='projects'>
        <h1 className='projects-header'>Projects</h1>
        <section className='projects-list'>
            <div className='project-element'>
                <StaticImage
                className='project-element-image'
                src='../images/aurora-project.png'
                alt='project image'
                />
                <div className='project-element-body'>
                    <div>
                        <h6>Latest project</h6>
                        <label>Aurora Shop</label>
                    </div>
                    <div className='project-element-card'>
                        <p>Aurora shop is an online e-commerce website that allows users to signup and post products with the ability to monitor their activity.</p>
                    </div>
                    <div className='project-element-stack-and-links'>
                        <div className='project-element-links'>
                            <a target='__' href='https://gitlab.com/amer-org/ecommerce-website'>Source</a>
                            <a target='__' href='https://aurora-shop.vercel.app'>Visit</a>
                        </div>
                        <div className='project-element-stack'>
                            <h4>Next.js</h4>
                            <span></span>
                            <h4>Node.js</h4>
                            <span></span>
                            <h4>MongoDB</h4>
                            <span></span>
                            <h4>Sass</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-element'>
                <StaticImage
                className='project-element-image'
                src='../images/snake-game.png'
                alt='project image'
                />
                <div className='project-element-body'>
                    <div>
                        <h6>First project</h6>
                        <label>Snake Game</label>
                    </div>
                    <div className='project-element-card'>
                        <p>The famous snake game implemented in react using linked-list data structure.</p>
                    </div>
                    <div className='project-element-stack-and-links'>
                        <div className='project-element-links'>
                            <a target='__' href='https://gitlab.com/amerjabar0000/snake-game'>Source</a>
                            <a target='__' href='https://reactsnakegameproject.azurewebsites.net/'>Visit</a>
                        </div>
                        <div className='project-element-stack'>
                            <h4>React.js</h4>                            
                            <span></span>
                            <h4>Sass</h4>
                            <span></span>
                            <h4>HTML</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


export default Projects;