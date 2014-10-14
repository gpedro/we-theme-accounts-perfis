/**
 * Gruntfile.js
 * With grunt tasks
 *
 * Beware if run grunt wacth here we.js subprojects wacth will now work
 */

module.exports = function(grunt) {

  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    },
    watch: {
      // live reload config for all watch's
      options: { livereload: 5500 },
      less: {
        // Assets to watch:
        files: [
          'src/less/**/*'
        ],
        // When assets are changed:
        tasks: [
          'copy',
          'less:dev'
        ]
      },
      // reload page on change html file
      exampleFiles: {
        // Assets to watch:
        files: [
          'example/**/*.html'
        ],
        // When assets are changed:
        tasks: []
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          hostname: '*',
          base: [
            'dist',
            'bower_components',
            'tests',
            'example'
          ],
          index: 'index.html'
        }
      }
    },
    less: {
      dev: {
        files: {
          'dist/stylesheet/style.css': 'src/less/importer.less'
        }
      }
    },
    copy: {
      js: {
        files: [{
          expand: true,
          flatten: true,
          filter: 'isFile',
          src: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js'
          ],
          dest: 'example/js/'
        }]
      },
      bowerCss: {
        files: [{
          expand: true,
          flatten: true,
          filter: 'isFile',
          src: [
            'bower_components/bootstrap/dist/css/bootstrap.css'
          ],
          dest: 'example/js/'
        }]
      },
      fonts: {
        files: [{
          expand: true,
          flatten: true,
          filter: 'isFile',
          src: [
            'bower_components/bootstrap/dist/fonts/*',
            'bower_components/font-awesome/fonts/*',
          ],
          dest: 'dist/fonts'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-link-html');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('default', [
    'copy',
    'less',
    'connect:server',
    'watch'
  ]);

  // grunt.registerTask('test', [
  //   'jshint'
  // ]);

  grunt.registerTask('publish', [
    //hint after publish
    // 'jshint',
    //hint update version tags and publish it to github
    'bump'
  ]);

};
