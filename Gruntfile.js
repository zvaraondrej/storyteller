module.exports = function(grunt) {

	grunt.initConfig({
		
		bowerInstall: {
		  target: {
	      src: 'index.html', // point to your HTML file
		  }
		},
		
		jshint: {
      all: ['js/main.js'] //files to lint
    },

    concat: {
	    options: {
	      separator: ';' //separates scripts
	    },
	    dist: {
	      src: ['js/*.js', 'js/**/*.js'], //Using mini match for your scripts to concatenate
	      dest: 'js/script.js' //where to output the script
	    }
	  },

	  uglify: {
   	  js: {
        files: {
          'js/script.js': ['js/script.js'] //save over the newly created script
        }
      }
  	}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-install');

  //default tasks to run
  grunt.registerTask('default', ['jshint', 'bowerInstall']);

  grunt.registerTask('development', ['jshint']);
	grunt.registerTask('production', ['jshint', 'concat', 'uglify']);

};