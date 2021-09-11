const React = require('react');
const { AnimatePresence } = require('framer-motion');

require('@fontsource/open-sans/variable.css');
require('@fontsource/bungee'); // Contains ONLY variable weights and no other axes.

exports.wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
