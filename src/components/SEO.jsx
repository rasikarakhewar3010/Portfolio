import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    const siteTitle = "Rasika Rakhewar | Full-Stack Developer";
    const defaultDescription = "Portfolio of Rasika Rakhewar, a Full-Stack MERN Developer and AI Enthusiast specializing in scalable web applications.";
    const defaultKeywords = "Rasika Rakhewar, Full-Stack Developer, MERN Stack, React Developer, AI Engineer";
    const siteUrl = "https://rasikarakhewar.vercel.app/";

    return (
        <Helmet>
            <title>{title ? `${title} | Rasika Rakhewar` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title ? `${title} | Rasika Rakhewar` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={url || siteUrl} />

            {/* Twitter */}
            <meta property="twitter:title" content={title ? `${title} | Rasika Rakhewar` : siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;
