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
                src='../images/horizon-project.webp'
                alt='project image'
                quality={50}
                />
                <div className='project-element-body'>
                    <div>
                        <h6>Latest project</h6>
                        <label>Horizon Project</label>
                    </div>
                    <div className='project-element-card'>
                        <p>Horizon project is a suit of services that compose up a web application to serve tv show media contents to users.</p>
                    </div>
                    <div className='project-element-stack-and-links'>
                        <div className='project-element-links'>
                            <a target='__' href='https://github.com/Amer-Jabar/horizon-project'>Source</a>
                            <a target='__' href='https://horizon-rho.vercel.app/'>Visit</a>
                        </div>
                        <div className='project-element-stack'>
                            <h4>Angular</h4>
                            <span></span>
                            <h4>Spring Boot</h4>
                            <span></span>
                            <h4>Node.js</h4>
                            <span></span>
                            <h4>PostgreSQL</h4>
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
                src='../images/aurora-project.webp'
                alt='project image'
                quality={50}
                />
                <div className='project-element-body'>
                    <div>
                        <label>Aurora Shop</label>
                    </div>
                    <div className='project-element-card'>
                        <p>Aurora shop is an online e-commerce website that allows users to signup and post products with the ability to monitor their activity.</p>
                    </div>
                    <div className='project-element-stack-and-links'>
                        <div className='project-element-links'>
                            <a target='__' href='https://gitlab.com/amerjabar0000/aurora-shop'>Source</a>
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
                src='../images/machine-learning-visualizer-project.webp'
                alt='project image'
                quality={50}
                />
                <div className='project-element-body'>
                    <div>
                        <label>Machine Learning Visualier</label>
                    </div>
                    <div className='project-element-card'>
                        <p>A visualization tool that demonstrates the real-time actions of machine learning algorithms.</p>
                    </div>
                    <div className='project-element-stack-and-links'>
                        <div className='project-element-links'>
                            <a target='__' href='https://github.com/Amer-Jabar/machine-learning-visualizer'>Source</a>
                            <a target='__' href='https://machinelearningvisualizer.vercel.app/'>Visit</a>
                        </div>
                        <div className='project-element-stack'>
                            <h4>React.js</h4>
                            <span></span>
                            <h4>Django</h4>
                            <span></span>
                            <h4>Sass</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Projects;