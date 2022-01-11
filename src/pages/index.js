import * as React from 'react';

import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contant';

import '../styles/index.sass';


const AmersPortfolio = () => {

  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
  }, []);

  return (
    <div className='container'>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default AmersPortfolio;
