window.__karma__.loaded = function() {};

var dojoConfig = {
  async: true,

  isDebug: true,

  parseOnLoad: false,

  baseUrl: '/base/js',

  packages: [

  ],

  // ask Require.js to load these files (all our tests)
  deps: [
    '/base/test/testSpec.js'
  ],

  // start test run, once Require.js is done
  callback: window.__karma__.start
};