'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass'),
    mocha = require('gulp-mocha'),
    exit = require('gulp-exit');

gulp.task('sass', function () {
  return gulp.src('./public/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js jade'
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});

gulp.task('test', function() {
  process.env.NODE_ENV = 'test';
  return gulp.src('test/*.js')
    .pipe(mocha({
      reporter: 'spec'
    }))
    .pipe(exit());
});

gulp.task('default', [
  'sass',
  'watch',
  'develop'
]);
