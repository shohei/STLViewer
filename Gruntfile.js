module.exports = function(grunt){
    grunt.initConfig({
        connect:{
            server: {
                options : {
                    port: 8000,
                    keepalive: true
                }
            }
        },
        watch:{
            files:{
                "example.stl":["example.jscad"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default','connect:server');
}
