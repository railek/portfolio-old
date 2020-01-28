import React from 'react';
import styled from 'styled-components';
import {
  SiJavascript,
  SiCsharp,
  SiFigma,
  SiUnity,
  SiVisualstudiocode,
  SiVisualstudio,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiReact,
  SiBootstrap,
  SiBlender,
  SiSass,
  SiHtml5,
  SiCss3,
  SiWebpack,
  SiJquery,
  SiGulp,
} from 'react-icons/si';
import Wrapper from './wrapper';
import SectionTitle from './section-title';

const StyledItem = styled.li`
  display: flex;
  gap: var(--space-8);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--gray-300);
  margin-bottom: var(--space-16);

  :last-of-type {
    margin-bottom: var(--space-0);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  strong {
    font-weight: 500;
    color: var(--gray-50);
    font-family: 'Bungee', sans-serif;
  }

  a {
    display: flex;
    gap: var(--space-8);
    align-items: center;
    justify-content: center;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  gap: var(--space-48);

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledHeading = styled.h3`
  margin-bottom: var(--space-20);
`;

const Item = ({ name, description, icon, link }) => {
  return (
    <StyledItem>
      <a href={link} rel="noopener nofollow noreferrer">
        {icon}
        <strong>{name}</strong>
      </a>
      <span>{description}</span>
    </StyledItem>
  );
};

export default function Stack() {
  return (
    <Wrapper>
      <SectionTitle title="Tech Stack" />
      <StyledGrid>
        <div>
          <StyledHeading>Software</StyledHeading>
          <ul>
            <Item
              name="Figma"
              description="Vector graphics editor and prototyping tool"
              link="https://www.figma.com/"
              icon={<SiFigma />}
            />
            <Item
              name="XD"
              description="Vector-based user experience design tool"
              link="https://www.adobe.com/products/xd.html"
              icon={<SiAdobexd />}
            />
            <Item
              name="Unity"
              description="Cross-platform game engine"
              link="https://unity.com/"
              icon={<SiUnity />}
            />
            <Item
              name="Visual Studio Code"
              description="Source-code editor"
              link="https://code.visualstudio.com/"
              icon={<SiVisualstudiocode />}
            />
            <Item
              name="Visual Studio"
              description="Integrated development environment"
              link="https://visualstudio.microsoft.com/"
              icon={<SiVisualstudio />}
            />
            <Item
              name="Photoshop"
              description="Raster graphics editor"
              link="https://www.adobe.com/products/photoshop.html"
              icon={<SiAdobephotoshop />}
            />
            <Item
              name="Illustrator"
              description="Vector graphics editor"
              link="https://www.adobe.com/products/illustrator.html"
              icon={<SiAdobeillustrator />}
            />
            <Item
              name="Blender"
              description="3D Creation Suite"
              link="https://www.blender.org/"
              icon={<SiBlender />}
            />
          </ul>
        </div>
        <div>
          <StyledHeading>Frontend</StyledHeading>
          <ul>
            <Item
              name="Javascript"
              description="Interpreted programming language"
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              icon={<SiJavascript />}
            />
            <Item
              name="C#"
              description="Object-oriented programming language"
              link="https://docs.microsoft.com/en-us/dotnet/csharp/"
              icon={<SiCsharp />}
            />
            <Item
              name="React"
              description="Front-end JavaScript library"
              link="https://reactjs.org/"
              icon={<SiReact />}
            />
            <Item
              name="Bootstrap"
              description="CSS Framework"
              link="https://getbootstrap.com/"
              icon={<SiBootstrap />}
            />
            <Item
              name="SASS"
              description="Stylesheet Language"
              link="https://sass-lang.com/"
              icon={<SiSass />}
            />
            <Item
              name="HTML"
              description="Hypertext Markup Language"
              link="https://developer.mozilla.org/en-US/docs/Web/HTML"
              icon={<SiHtml5 />}
            />
            <Item
              name="CSS"
              description="Stylesheet Language"
              link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              icon={<SiCss3 />}
            />
            <Item
              name="Webpack"
              description="Module bundler"
              link="https://webpack.js.org/"
              icon={<SiWebpack />}
            />
            <Item
              name="jQuery"
              description="JavaScript library"
              link="https://jquery.com/"
              icon={<SiJquery />}
            />
            <Item
              name="Gulp"
              description="Task runner"
              link="https://gulpjs.com/"
              icon={<SiGulp />}
            />
          </ul>
        </div>
      </StyledGrid>
    </Wrapper>
  );
}
