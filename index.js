/**
 * Default We.js theme
 */

module.exports = {
  // theme config
  configs: {
    //sails.js views config
    views: {
      path: 'templates/sails',
      layout: 'templates/sails/layouts/default.ejs',
      filesToInjectCssJs: 'templates/sails/**/*.ejs',
    },

    emailTemplates: {
      path: 'templates/email',
    },
    emberTemplates: {
      path: 'templates/ember',
    },

    assetsFolderToCopy: 'assets/**/*',

    // one theme javascript file
    javascript: 'assets/javascript/script.js',
    // one css file
    stylesheet: 'assets/stylesheet/style.css'
  }
};