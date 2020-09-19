module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts:{
            main:{
                src:['*.ts'],
                dest:'compiled_grunt/'
            }
        }
    });
    grunt.registerTask('default',['ts']);
}