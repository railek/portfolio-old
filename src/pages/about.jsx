import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import CallToAction from '@/components/modules/call-to-action';
import Introduction from '@/components/modules/introduction';
import Stack from '@/components/modules/stack';
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
