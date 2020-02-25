import React from 'react';

import CallToAction from '@/components/call-to-action';
import Introduction from '@/components/introduction';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Stack from '@/components/stack';
import useSiteMetadata from '@/hooks/useSiteMetadata';

export default function About() {
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
