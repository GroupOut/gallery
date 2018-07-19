/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  'parser': 'babel-eslint',
  'extends': ['./node_modules/eslint-config-hackreactor/index.js',
            'airbnb'],
  'plugins': ['react','jsx-ally','import']
};