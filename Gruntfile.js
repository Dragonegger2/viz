module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');
  // Project configuration.
  grunt.initConfig({
    shell: {
      cloneBuzz: {
        command: [
          'git clone http://tlennon@stash/scm/inter/eds2.git',
          'cd eds2',
          'git pull origin develop'
        ].join('&&')
      },
      options: {
        failOnError: false
      }
    }
  });

  //Default task
  grunt.registerTask('default', ['shell:cloneBuzz']);
};
