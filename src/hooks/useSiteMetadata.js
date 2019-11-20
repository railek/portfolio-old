import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            url
            ogImage
            lang
          }
        }
      }
    `,
  );
}