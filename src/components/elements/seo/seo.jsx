import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import useSiteMetadata from '@/hooks/use-site-metadata';

export default function SEO({ description, ogImage, type, page, path }) {
  const {
    site: { siteMetadata },
  } = useSiteMetadata();

  return (
    <Helmet>
      <title>{`${siteMetadata.title} | ${page}`}</title>
      <html lang={siteMetadata.lang} />
      <meta name="description" content={description || siteMetadata.description} />
      <meta name="image" content={`${siteMetadata.url}/${ogImage || siteMetadata.ogImage}`} />
      <meta name="image:alt" content={`${siteMetadata.title} ${page}`} />
      <meta name="keywords" content={siteMetadata.keywords.join(', ')} />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={page} />
      <meta property="og:url" content={`${siteMetadata.url}${path}`} />
      <meta property="og:description" content={description || siteMetadata.description} />
      <meta
        property="og:image"
        content={`${siteMetadata.url}/${ogImage || siteMetadata.ogImage}`}
      />
      <meta property="og:image:alt" content={`${siteMetadata.title} ${page}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page} />
      <meta name="twitter:url" content={`${siteMetadata.url}${path}`} />
      <meta name="twitter:description" content={description || siteMetadata.description} />
      <meta
        name="twitter:image"
        content={`${siteMetadata.url}/${ogImage || siteMetadata.ogImage}`}
      />
      <meta name="twitter:image:alt" content={`${siteMetadata.title} ${page}`} />
    </Helmet>
  );
}

SEO.defaultProps = {
  type: 'website',
};

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  type: PropTypes.string,
  page: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
