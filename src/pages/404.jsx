import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import CallToAction from '@/components/modules/call-to-action';
import Error from '@/components/modules/error';

export default function NotFound() {
  return (
    <>
      <Seo page="404" path="" />
      <Layout>
        <Error message="404: Not Found" />
        <CallToAction />
      </Layout>
    </>
  );
}
