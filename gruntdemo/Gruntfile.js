module.exports = function (grunt) {
  // ��Ŀ����
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%=pkg.file %>.js',
        dest: 'dest/<%= pkg.file %>11.min.js'
      }
    }
  });
  // �����ṩ"uglify"����Ĳ��
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Ĭ������
  grunt.registerTask('default', ['uglify']);
}