import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


const SEO = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `);

    return (
        <Helmet htmlAttributes={{ lang: `en` }}>
            <title>{data.site.siteMetadata.title || 'Amer Muhammed'}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content={data.site.siteMetadata.description || 'I am Amer. This is my personal portfolio on the web.'} />
            <meta name='author' content='Amer Muhammed' />
            <meta name='keywords' content='Portfolio, Software engineering, Amer' />
            <link rel='canonical' href={data.site.siteMetadata.siteUrl || 'https://amer.netlify.app'} />
            <link rel='preload' href='../styles/header.sass' />
            <link rel='preload' href='../styles/index.sass' />
            <link rel='author' href='https://www.linkedin.com/in/amer-jabar-216318201' />
            <link rel='license' href='https://gitlab.com/amerjabar0000/amer-personal-portfolio' />
        </Helmet>
    );
};
  
SEO.prototype = {
    title: PropTypes.string,
    meta: PropTypes.string
}

export default SEO;