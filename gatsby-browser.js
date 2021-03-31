const React = require('react');
const { AnimatePresence } = require('framer-motion');

exports.wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
