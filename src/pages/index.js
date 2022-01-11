import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contant';

import '../styles/index.sass';


const AmersPortfolio = () => {

  const [landed, setLanded] = React.useState(false);

  React.useEffect(() => setTimeout(() => setLanded(true), 3000), []);

  React.useEffect(() => {}, [landed]);

  if ( landed )
    return (
      <div className='container'>
        <div
        className='page-background'
        id='page-background'
        ></div> 
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    )
  else
    return (
      <div className='opening'>
        <StaticImage
        className='opening-logo'
        alt='opening logo'
        src='../images/Aurora-icon.png'
        />
      </div>
    )
}

export default AmersPortfolio;
