module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.',
          keepalive: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};