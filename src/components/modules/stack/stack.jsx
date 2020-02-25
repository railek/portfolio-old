import React from 'react';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiBlender,
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiFigma,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiReact,
  SiSass,
  SiUnity,
  SiVisualstudio,
  SiVisualstudiocode,
  SiWebpack,
} from 'react-icons/si';
import PropTypes from 'prop-types';

import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';

import { StyledGrid, StyledHeading, StyledItem } from './stack.styled';

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

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
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
