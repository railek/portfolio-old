import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import CallToAction from '@/components/modules/call-to-action';
import Capabilities from '@/components/modules/capabilities';
import Hero from '@/components/modules/hero';
import useSiteMetadata from '@/hooks/useSiteMetadata';

export default function Home() {
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
        page="Home"
        path=""
      />
      <Layout>
        <Hero />
        <Capabilities />
        <CallToAction />
      </Layout>
    </>
  );
}
