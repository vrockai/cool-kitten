'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var lib = require('bower-files')();
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var usemin = require('gulp-usemin');
var inject = require('gulp-inject');
var rev = require('gulp-rev');
var _ = require('lodash');
var htmlmin = require('gulp-htmlmin');


gulp.task('index', ['less'], function () {
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var jsInjector = gulp.src(['./src/js/**/*.js'], {read: false});
  var cssInjector = gulp.src(['./.tmp/css/*.css'], {read: false});

  return gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(inject(jsInjector, {
      ignorePath: 'dist',
      addRootSlash: false,
      addPrefix: '..'
    }))
    .pipe(inject(cssInjector, {
      //name: 'pipik',
      //ignorePath: 'dist',
      addRootSlash: false,
      addPrefix: '..'
    }))

    .pipe(usemin({
      //css: [rev()],
      css: [],
      js: []
    }))

    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['index'], function () {
  return gulp.src('./dist/index.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('less', ['lessBower', 'lessPaff']);

gulp.task('lessBower', function () {
  var lessBower = lib.ext('less').files;

  console.log('lessBower', lessBower);

  return gulp.src(lessBower)
    .pipe(less())
    .pipe(gulp.dest('./.tmp/css'));
});

gulp.task('lessPaff', function () {
  var lessSrc = ['./src/less/**/*.less'];

  return gulp.src(lessSrc)
    .pipe(less())
    .pipe(gulp.dest('./.tmp/css'))
});

gulp.task('fonts', function () {
  return gulp.src([
    'bower_components/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('images', function () {
  return gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['less', 'images', 'fonts', 'index'], function () {

  browserSync.init({
    server: "./dist"
  });

  gulp.watch(['src/index.html'], ['html-watch']);
  gulp.watch(['src/less/**/*'], ['less-watch']);
  gulp.watch(['src/js/**/*'], ['js-watch']);
});

gulp.task('html-watch', ['index'], browserSync.reload);
gulp.task('less-watch', ['less', 'index'], browserSync.reload);
gulp.task('js-watch', ['index'], browserSync.reload);

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */

gulp.task('default', ['serve']);
gulp.task('build', ['less', 'images', 'fonts', 'minify']);

