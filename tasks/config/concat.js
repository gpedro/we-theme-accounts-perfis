module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
			src: 'assets/javascript/*.js',
			dest: 'dist/js/themejs.js'
		},
		css: {
			src: 'assets/stylesheet/*.css',
			dest: 'dist/css/themecss.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};