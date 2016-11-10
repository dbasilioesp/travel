module.exports = function(grunt) {
  grunt.initConfig({
    
    watch: {
        livereload: {
          options: { livereload: true },
          files: ['*.html', 'sass/*.scss'],
        },
        sass: {
            files: ["sass/*.scss"],  
            tasks: ['sass', 'postcss'],
        }
    },

    connect: {
        server: {
          options: {
            port: 9001,
          }
        }
    },

    sass: {
        dist: {
            options: {
                style: 'compressed',
                sourcemap: 'auto',
                lineNumbers: true
            },
            files: {
                'css/app.css': 'sass/app.scss'
            }
        }    
    },

    postcss: {
        options: {
            map: true,
            processors: [require('autoprefixer')({browsers: 'last 4 versions'})]
        },
        dist: {
            src: 'css/app.css'
        }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-sass");
  
  grunt.registerTask("default", ["connect", "watch"]);
};
