var gulp = require('gulp'),
    gutil = require('gulp-util');
    var typescript = require('gulp-tsc');
 
    gulp.task('compile', function(){
      gulp.src(['*.ts'])
        .pipe(typescript({ emitError: false }))
        .pipe(gulp.dest('compiled_gulp/'))
    });