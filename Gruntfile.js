module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      all: {
        files: ["*.html"],
        options: {
          livereload: true
        }
      }
    },

    connect: {
        server: {
          options: {
            port: 9001,
            open: true
          }
        }
      }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  
  grunt.registerTask("default", ["connect", "watch"]);
};