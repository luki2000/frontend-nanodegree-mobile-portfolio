module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),


        //Allows to customize the re-sizing of images
     responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{png,jpg,gif}'],
          cwd: '../images_src/',
          dest: 're-sized_images/'
        }]
      }
    },
    uncss: {
        dist: {
            files: {
                'css/bootstrap-grid.css' : ['pizza.html']
            }
        }
    },
    //compress image 
     imagemin: {
            dist: {
                options: {

                    optimizationLevel:7
                },
                files: [{
                    expand:true,
                    cwd:'original/',
                    src:['**/*.{png,jpg,gif}'],
                    dest: 'compressed_images/'    
                }]
            }

        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src:['*.css', '!*min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }

        },
        uglify: {
            options: {
                manage:false
            },
            my_target: {
                files: {
                    'uglify/analytics.min.js': ['uglify/analytics.js']
                }
            }
        },


        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../deploy/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['<%= meta.srcPath %>scripts/fileone.js', '<%= meta.srcPath %>scripts/filetwo.js'],
                dest: '<%= meta.deployPath %>scripts/app.js'
            }
        }
    });
 
    // These plugins provide necessary tasks.
  //  grunt.loadNpmTasks('grunt-contrib-concat');

    //minify plugin
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //cssmin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //resize plugin
    grunt.loadNpmTasks('grunt-responsive-images');

    //NORMAL GRUNT TASKING
    grunt.loadNpmTasks('grunt-contrib');

    //unCSS plugin
    grunt.loadNpmTasks('grunt-uncss');

    //uglify plugin
      //unCSS plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    // Default task
  //  grunt.registerTask('default', ['concat']);

    //For image resize
    grunt.loadNpmTasks('grunt-image-resize');

     //grunt.registerTask('default', ['responsive_images']);

};