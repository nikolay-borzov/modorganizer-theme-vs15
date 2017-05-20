var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var rename = require("gulp-rename");

gulp.task('build-css', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(replace('/*POSTSASS ', ''))
    .pipe(replace(' POSTSASS*/', ''))
    .pipe(replace(/\nSTUB/g, ''))
    .pipe(rename({
      extname: '.qss'
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['build-css']);
});