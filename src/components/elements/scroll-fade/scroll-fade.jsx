import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

export const Easing = [0.6, -0.05, 0.01, 0.99];

export const FadeIn = {
  initial: { y: 32, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: Easing,
      type: 'spring',
    },
  },
};

export default function ScrollFade({ threshold, children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div variants={FadeIn}>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.2, ease: Easing }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 32 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

ScrollFade.defaultProps = {
  threshold: 0.5,
};

ScrollFade.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
};
