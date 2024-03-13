'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
    },

    babel: {
      plugins: [...require('ember-cli-code-coverage').buildBabelPlugin()],
    },

    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: false,
    },
  });

  return app.toTree();
};
