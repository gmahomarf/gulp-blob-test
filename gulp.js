var gulp = require('gulp');
var debug = require('gulp-debug');

gulp.src('build/*/')
        .pipe(debug());