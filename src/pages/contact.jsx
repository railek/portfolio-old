import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SectionTitle from '../components/section-title';
import Wrapper from '../components/wrapper';
import Seo from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Button from '../components/button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  input,
  textarea {
    width: 100%;
    margin-bottom: 20px;
    background-color: var(--gray-800);
    border: 1px solid var(--gray-700);
    color: var(--gray-100);
    padding: 10px 16px;
    outline: none;
    resize: none;
    appearance: none;
    transition: all 0.2s ease-in-out;

    :focus {
      border: 1px solid var(--gray-300);
    }

    ::placeholder {
      color: var(--gray-400);
    }
  }

  & > div {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;

export default function Contact() {
  const {
    site: {
      siteMetadata: { title, description, keywords, url, ogImage, favicon, lang },
    },
  } = useSiteMetadata();
  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        ogImage={ogImage}
        favicon={favicon}
        lang={lang}
        type="website"
        page="Contact"
        path="/contact"
      />
      <Layout>
        <Wrapper>
          <SectionTitle title="Have some questions?" />
          <StyledForm name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="* First Name"
                required
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="* Last Name"
                required
              />
            </div>
            <input type="email" id="email" name="email" placeholder="* Email Address" required />
            <input type="phone" id="phone" name="phone" placeholder="* Phone" />
            <textarea
              id="message"
              name="message"
              placeholder="Describe what you're looking for - be as descriptive as possible"
              rows="8"
            />
            <Button type="submit" label="Let's Chat" />
          </StyledForm>
        </Wrapper>
      </Layout>
    </>
  );
}
