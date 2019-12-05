import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import CallToAction from '../components/call-to-action';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Home() {
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
        page="Home"
        path=""
      />
      <Layout>
        <Hero />
        <CallToAction />
      </Layout>
    </>
  );
}
