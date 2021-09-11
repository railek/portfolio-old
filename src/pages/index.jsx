import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import CallToAction from '@/components/modules/call-to-action';
import Capabilities from '@/components/modules/capabilities';
import Hero from '@/components/modules/hero';

export default function Home() {
  return (
    <>
      <Seo page="Home" path="" />
      <Layout>
        <Hero />
        <Capabilities />
        <CallToAction />
      </Layout>
    </>
  );
}
