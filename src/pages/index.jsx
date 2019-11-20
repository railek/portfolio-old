import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
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
        <h1>Hello, World!</h1>
      </Layout>
    </>
  );
}
