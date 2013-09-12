'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        paths: {
            'scripts': './static/scripts/',
            'images': './static/images/',
            'styles': './static/styles/'
        },

        sass: {
            dist: {
                files: {
                    "<%= paths.styles %>dist/screen.css": [
                        "<%= paths.styles %>*.scss"
                    ]
                },
                options: {
                    style: "expanded"
                }
            }
        },

        grunticon: {
            dist: {
                options: {
                    src: "<%= paths.images %>icons/",
                    dest: "<%= paths.styles %>icons/",
                    datapngcss: "icons.data.png.scss"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-grunticon")
    grunt.loadNpmTasks("grunt-contrib-sass")

    grunt.registerTask('default', ['grunticon', 'sass']);
};