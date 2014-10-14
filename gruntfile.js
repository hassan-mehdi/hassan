module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			jsMin: {
				files: {
					'assets/min/core.min.js': ['assets/js/core/*.js'],
					'assets/min/home.min.js': ['assets/js/home/*.js'],
					'assets/min/work.min.js': ['assets/js/work/*.js'],
					'assets/min/work-detail.min.js': ['assets/js/work/work-detail/*.js'],
					'assets/min/about.min.js': ['assets/js/about/*.js']
				}
			}
		},

		less: {
			lessCss: {
				files: {
					'assets/min/core.min.css': ['assets/css/core/*.less'],
					'assets/min/home.min.css': ['assets/css/home/*.less'],
					'assets/min/work.min.css': ['assets/css/work/*.less'],
					'assets/min/work-detail.min.css': ['assets/css/work/work-detail/*.less'],
					'assets/min/about.min.css': ['assets/css/about/*.less']
				}
			}
		},

		watch: {
			js: {
				files: ['assets/js/core/*.js', 'assets/js/home/*.js', 'assets/js/work/*.js', 'assets/js/work/work-detail/*.js', 'assets/js/about/*.js'],
				tasks: ['uglify']
			},

			style: {
				files: ['assets/css/core/*.less', 'assets/css/home/*.less', 'assets/css/work/*.less', 'assets/css/work/work-detail/*.less', 'assets/css/about/*.less'],
				tasks: ['less']
			}
		}
	});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};