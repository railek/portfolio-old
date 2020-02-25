import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function SEO({
  title,
  description,
  keywords,
  url,
  ogImage,
  lang,
  type,
  page,
  path,
}) {
  return (
    <Helmet>
      <title>{`${title} | ${page}`}</title>
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${url}/${ogImage}`} />
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={page} />
      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/${ogImage}`} />
      <meta property="og:image:alt" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page} />
      <meta name="twitter:url" content={`${url}${path}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/${ogImage}`} />
      <meta name="twitter:image:alt" content={description} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  type: 'website',
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  url: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  lang: PropTypes.string,
  type: PropTypes.string,
  page: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
