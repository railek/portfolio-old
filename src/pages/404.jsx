import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function NotFound() {
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
        page="404"
        path=""
      />
      <Layout>
        <h1>404: Not Found</h1>
      </Layout>
    </>
  );
}
