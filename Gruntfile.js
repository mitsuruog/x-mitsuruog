'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        src: 'elements/x-mitsuruog/style.css',
        dest: 'elements/x-mitsuruog/style.css'
      }
    },
    processhtml: {
      dist: {
        files: {
          'elements/x-mitsuruog.html': ['elements/x-mitsuruog/element.html']
        }
      }
    },
    'gh-pages': {
      src: [
        'index.html',
        'bower_components/**/*.{js,html}',
        'elements/x-mitsuruog.html',
        'favicon.ico',
        'robots.txt'
      ]
    }
  });

  grunt.registerTask('default', [
    'autoprefixer',
    'processhtml'
  ]);

  grunt.registerTask('deploy', [
    'autoprefixer',
    'processhtml',
    'gh-pages'
  ]);

};
