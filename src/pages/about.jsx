import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';
import CallToAction from '../components/call-to-action';
import Introduction from '../components/introduction';
import Stack from '../components/stack';

export default function About() {
  const {
    site: {
      siteMetadata: { title, description, keywords, url, ogImage, favicon, lang },
    },
  } = useSiteMetadata();
  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        ogImage={ogImage}
        favicon={favicon}
        lang={lang}
        type="website"
        page="About"
        path="/about"
      />
      <Layout>
        <Introduction />
        <Stack />
        <CallToAction />
      </Layout>
    </>
  );
}
