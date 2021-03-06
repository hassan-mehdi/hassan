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
					'assets/css/core/core.less.css': ['assets/css/core/*.less'],
					'assets/css/home/home.less.css': ['assets/css/home/*.less'],
					'assets/css/work/work.less.css': ['assets/css/work/*.less'],
					'assets/css/work/work-detail/work-detail.less.css': ['assets/css/work/work-detail/*.less'],
					'assets/css/about/about.less.css': ['assets/css/about/*.less'],
					'assets/css/contact/contact.less.css': ['assets/css/contact/*.less'],
					'assets/css/standard/standard.less.css': ['assets/css/standard/*.less'],
					'assets/css/fallbacks/ie9/ie9.less.css': ['assets/css/fallbacks/ie9/*.less']
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'assets/min/core.min.css': ['assets/css/core/core.less.css'],
					'assets/min/home.min.css': ['assets/css/home/home.less.css'],
					'assets/min/work.min.css': ['assets/css/work/work.less.css'],
					'assets/min/work-detail.min.css': ['assets/css/work/work-detail/work-detail.less.css'],
					'assets/min/about.min.css': ['assets/css/about/about.less.css'],
					'assets/min/contact.min.css': ['assets/css/contact/contact.less.css'],
					'assets/min/standard.min.css': ['assets/css/standard/standard.less.css'],
					'assets/min/fallbacks/ie9.min.css': ['assets/css/fallbacks/ie9/ie9.less.css']
				}
			}
		},

		watch: {
			js: {
				files: ['assets/js/core/*.js', 'assets/js/home/*.js', 'assets/js/work/*.js', 'assets/js/work/work-detail/*.js', 'assets/js/about/*.js', 'assets/js/contact/*.js', 'assets/js/standard/*.js'],
				tasks: ['uglify']
			},

			style: {
				files: ['assets/css/core/*.less', 'assets/css/home/*.less', 'assets/css/work/*.less', 'assets/css/work/work-detail/*.less', 'assets/css/about/*.less', 'assets/css/contact/*.less', 'assets/css/standard/*.less', 'assets/css/fallbacks/ie9/*.less'],
				tasks: ['less']
			},

			minstyles: {
				files: ['assets/css/core/core.less.css','assets/css/home/home.less.css','assets/css/work/work.less.css','assets/css/work/work-detail/work-detail.less.css','assets/css/about/about.less.css','assets/css/contact/contact.less.css','assets/css/standard/standard.less.css','assets/css/fallbacks/ie9/ie9.less.css'],
				tasks: ['cssmin']
			}
		}
	});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};