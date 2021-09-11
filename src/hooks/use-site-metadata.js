import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            ogImage
            lang
          }
        }
      }
    `,
  );
}
