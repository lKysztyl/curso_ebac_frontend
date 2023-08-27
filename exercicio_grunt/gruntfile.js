module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    './build/styles/style.css': './src/styles/style.less'
                }
            }
        },
        uglify: {
            options: {
                compress: true,
            },
            target: {
                files: {
                    './build/scripts/script.min.js': './src/scripts/script.js'
                }
            },
        },
        watch: {
            scripts: {
                files: ['src/scripts/*.js','src/styles/**/*.less'],
                tasks: ['concurrent'], 
                options: {
                    livereload: true
                }
            }
        },
        concurrent: {
            target: {
                tasks: ['test','less:development','uglify','watch'], 
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.registerTask("test", function() {
        console.log('Running tests')
    })
    
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks("grunt-contrib-less"); 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-concurrent"); 
    
    grunt.registerTask("default", ['concurrent']);
}