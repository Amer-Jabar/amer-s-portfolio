import * as React from 'react';
import { DiJava, DiNodejsSmall, DiPostgresql, DiAngularSimple } from 'react-icons/di';
import { SiSpring, SiNextdotjs, SiMongodb, SiJavascript } from 'react-icons/si';

import '../styles/skills.sass';


const Skills = () => (
    <div className='skills'>
        <h1 className='skills-header'>Technical Skills & Stack</h1>
        <section className='skills-list'>
            <div className='skill-element'><DiJava /><label>Java</label></div>
            <div className='skill-element'><SiSpring /><label>Spring</label></div>
            <div className='skill-element'><SiNextdotjs /><label>Next.js</label></div>
            <div className='skill-element'><DiNodejsSmall /><label>Node.js</label></div>
            <div className='skill-element'><DiPostgresql /><label>Postgres</label></div>
            <div className='skill-element'><SiMongodb /><label>MongoDB</label></div>
            <div className='skill-element'><SiJavascript /><label>JavaScript</label></div>
            <div className='skill-element'><DiAngularSimple /><label>Angular</label></div>
        </section>
    </div>
)

export default Skills;