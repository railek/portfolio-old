import React from 'react';
import { AnimatePresence } from 'framer-motion';

const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export default wrapPageElement;
