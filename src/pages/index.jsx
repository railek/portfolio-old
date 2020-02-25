import React from 'react';

import CallToAction from '@/components/call-to-action';
import Hero from '@/components/hero';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
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
        <CallToAction />
      </Layout>
    </>
  );
}
