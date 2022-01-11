import * as React from 'react';
import { DiJava, DiNodejsSmall, DiPostgresql, DiAngularSimple } from 'react-icons/di';
import { SiSpring, SiNextdotjs, SiMongodb, SiJavascript, SiDocker } from 'react-icons/si';

import '../styles/skills.sass';


const Skills = () => (
    <div className='skills' id='skills'>
        <h1 className='skills-header'>Technical Skills & Stack</h1>
        <section className='skills-list'>
            <div className='skills-column'>
                <div className='skill-element first-element'><DiJava /><label>Java</label></div>
            </div>
            <div className='skills-column'>
                <div className='skill-element second-element'><SiSpring /><label>Spring</label></div>
                <div className='skill-element third-element'><SiNextdotjs /><label>Next.js</label></div>
            </div>
            <div className='skills-column'>
                <div className='skill-element fourth-element'><DiNodejsSmall /><label>Node.js</label></div>
                <div className='skill-element fifth-element'><DiPostgresql /><label>Postgres</label></div>
                <div className='skill-element sixth-element'><SiMongodb /><label>MongoDB</label></div>
            </div>
            <div className='skills-column'>
                <div className='skill-element seventh-element'><SiJavascript /><label>JavaScript</label></div>
                <div className='skill-element eigth-element'><DiAngularSimple /><label>Angular</label></div>
            </div>
            <div className='skills-column'>
                <div className='skill-element ninth-element'><SiDocker /><label>Docker</label></div>
            </div>
        </section>
    </div>
)

export default Skills;