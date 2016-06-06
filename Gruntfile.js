module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');
  // Project configuration.
  grunt.initConfig({
    shell: {
      gitclone: {
        command: 'git clone http://tlennon@stash/scm/buzz/buzzframework.git'
      }
    }
  });

  // Load the plugin for grunt-git.
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  //TODO: Add tasks as ['','',etc]
  grunt.registerTask('default', ['shell:gitclone']);
};
