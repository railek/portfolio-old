import { graphql, useStaticQuery } from 'gatsby';

export default function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "//projects//" } }) {
        nodes {
          id
          frontmatter {
            title
            excerpt
            tags
            url
          }
        }
      }
    }
  `);
  return data.allMdx.nodes.map((project) => ({
    id: project.id,
    title: project.frontmatter.title,
    excerpt: project.frontmatter.excerpt,
    tags: project.frontmatter.tags,
    url: project.frontmatter.url,
  }));
}
