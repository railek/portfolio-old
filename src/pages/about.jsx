import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import CallToAction from '@/components/modules/call-to-action';
import Experience from '@/components/modules/experience';
import Introduction from '@/components/modules/introduction';
import Stack from '@/components/modules/stack';

export default function About() {
  return (
    <>
      <Seo page="About" path="/about" />
      <Layout>
        <Introduction />
        <Stack />
        <Experience />
        <CallToAction />
      </Layout>
    </>
  );
}
