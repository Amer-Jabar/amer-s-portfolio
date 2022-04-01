import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeaderComponent from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contant';
import SEO from '../components/seo';

import '../styles/index.sass';


const AmersPortfolio = () => {

  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);

  React.useEffect(() => {}, [sideBarIsOpen]);

  const Header = React.useCallback(() => HeaderComponent({ pageBackgroundController: setSideBarIsOpen }), []);

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
}

export default AmersPortfolio;
