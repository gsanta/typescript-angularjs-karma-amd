/// <reference path="../lib/js/require.d.ts" />

window.__karma__.loaded = function() {};

var dojoConfig = {
  async: true,

  isDebug: true,

  parseOnLoad: false,

  packages: [
    {
      name: '../js',
      location: '/base/js'
    },
    {
      name: 'test',
      location: location.pathname + 'test'
    }
  ],

  // ask Require.js to load these files (all our tests)
  deps: [
    '/base/test/testSpec.js'
  ],

  // start test run, once Require.js is done
  callback: window.__karma__.start
};