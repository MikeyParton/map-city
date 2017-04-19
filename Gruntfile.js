module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      app: {
        src: 'src/browser/app.js',
        dest: 'public/app.js'
      }
    },
  })

  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['browserify']);
}
