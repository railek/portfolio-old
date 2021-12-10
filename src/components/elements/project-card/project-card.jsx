import React from 'react';
import { IoIosGlobe, IoLogoGithub, IoMdOpen } from 'react-icons/io';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import ScrollFade from '@/components/elements/scroll-fade';

import { StyledCard } from './project-card.styled';

const Bounce = {
  transition: {
    duration: 0.1,
    ease: 'easeOut',
  },
  translateY: -4,
};

export default function ProjectCard({ title, url, tags, excerpt }) {
  return (
    <a href={url} target="_blank" rel="nofollow noopener noreferrer">
      <ScrollFade threshold={0}>
        <StyledCard as={motion.div} whileHover={Bounce}>
          <header>
            <div>
              {url.match(/github/gi) ? <IoLogoGithub /> : <IoIosGlobe />}
              <IoMdOpen />
            </div>
            <h5>{title}</h5>
            <p>{excerpt}</p>
          </header>
          <footer>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </footer>
        </StyledCard>
      </ScrollFade>
    </a>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
