/**
 * Basic GULP setup
 */

'use strict';

/**
 * Define source and build path, devserver ip
 */
var sourceDir = 'src/',
    bowerDir = 'src/bower_components',
    serverIp = '0.0.0.0', // 0.0.0.0 binds to localhost and your local ip
    serverPort = '8001';

/**
 * Load dependencies
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'), // development & production
    autoprefixer = require('gulp-autoprefixer'), // development & production
    notify = require('gulp-notify'), // development & production
    webserver = require('gulp-webserver'), // development
    wiredep = require('wiredep').stream; // development

/**
 * DEV SERVER: development
 */
gulp.task('webserver', function() {
    gulp.src(sourceDir)
        .pipe(webserver({
            host: serverIp,
            port: serverPort,
            livereload: true,
            directoryListing: false,
            open: false,
            fallback: 'index.html'
        })
    );
});

/**
 * SASS COMPILING: development
 */
gulp.task('sass', function() {
    gulp.src(sourceDir + 'scss/**/*.scss')
        .pipe(sass({
            'outputStyle': 'expanded',
            'sourceComments': true,
            'lineNumbers': true
        }).on('error', function(err) {
            console.error('Sass error: ', err.message);
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest(sourceDir + 'css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

/**
 * BOWER INJECTING: development
 */
gulp.task('bower', function () {
    gulp.src(sourceDir + '/**/*.html')
        .pipe(wiredep({
            directory: bowerDir,
            exclude: [

            ],
        }))
        .pipe(gulp.dest(sourceDir));
});

/**
 * Watch for changes | Executes sass and jshint
 */
gulp.task('watch', function(){

    // Watch for sass changes
    gulp.watch(sourceDir + 'scss/**/*.scss', ['sass']);

});


gulp.task('dev', ['webserver', 'watch', 'bower']);