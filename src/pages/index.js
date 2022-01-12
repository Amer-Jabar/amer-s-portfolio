import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeaderComponent from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contant';
import SEO from '../components/seo';

import '../styles/index.sass';


const AmersPortfolio = () => {

  const [landed, setLanded] = React.useState(false);
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);

  React.useEffect(() => setTimeout(() => setLanded(true), 3000), []);
  React.useEffect(() => {}, [landed]);
  React.useEffect(() => {}, [sideBarIsOpen]);

  const Header = React.useCallback(() => HeaderComponent({ pageBackgroundController: setSideBarIsOpen }), []);

  if ( landed )
    return (
      <div className='container'>
        <SEO />
        <div
        className={`page-background ${sideBarIsOpen ? 'background-blur' : 'background-non-blur'}`}
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
        src='../images/amer-logo.svg'
        />
      </div>
    )
}

export default AmersPortfolio;
