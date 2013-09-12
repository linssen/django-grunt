'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        paths: {
            'scripts': './django_icons/static/scripts/',
            'images': './django_icons/static/images/',
            'styles': './django_icons/static/styles/'
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