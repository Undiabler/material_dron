var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// Compile Our less
gulp.task('less', function() {
    return gulp.src('bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('../'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../'));
});