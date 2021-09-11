import React from 'react';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import CallToAction from '@/components/modules/call-to-action';
import ProjectGrid from '@/components/modules/project-grid';

const ProjectPage = () => (
  <>
    <Seo page="Projects" path="/projects" />
    <Layout>
      <ProjectGrid />
      <CallToAction />
    </Layout>
  </>
);

export default ProjectPage;
