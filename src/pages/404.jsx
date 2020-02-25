import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import useSiteMetadata from '@/hooks/useSiteMetadata';

export default function NotFound() {
  const {
    site: {
      siteMetadata: { title, description, keywords, siteUrl, ogImage, favicon, lang },
    },
  } = useSiteMetadata();

  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url={siteUrl}
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
