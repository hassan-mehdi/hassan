module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			jsMin: {
				files: {
					'assets/min/core.min.js': ['assets/js/core/*.js'],
					'assets/min/home.min.js': ['assets/js/home/*.js'],
					'assets/min/work.min.js': ['assets/js/work/*.js'],
					'assets/min/work-detail.min.js': ['assets/js/work/work-detail/*.js'],
					'assets/min/about.min.js': ['assets/js/about/*.js'],
					'assets/min/contact.min.js': ['assets/js/contact/*.js'],
					'assets/min/standard.min.js': ['assets/js/standard/*.js']
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
					'assets/min/about.min.css': ['assets/css/about/*.less'],
					'assets/min/contact.min.css': ['assets/css/contact/*.less'],
					'assets/min/standard.min.css': ['assets/css/standard/*.less']
				}
			}
		},

		watch: {
			js: {
				files: ['assets/js/core/*.js', 'assets/js/home/*.js', 'assets/js/work/*.js', 'assets/js/work/work-detail/*.js', 'assets/js/about/*.js', 'assets/js/contact/*.js', 'assets/js/standard/*.js'],
				tasks: ['uglify']
			},

			style: {
				files: ['assets/css/core/*.less', 'assets/css/home/*.less', 'assets/css/work/*.less', 'assets/css/work/work-detail/*.less', 'assets/css/about/*.less', 'assets/css/contact/*.less', 'assets/css/standard/*.less'],
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