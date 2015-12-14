module.exports = function (grunt) {
  // ��Ŀ����
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      "my_target": {
        "files": {
          'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Ĭ������
  grunt.registerTask('default', ['uglify']);
}