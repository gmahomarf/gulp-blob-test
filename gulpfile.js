var gulp = require('gulp');
var debug = require('gulp-debug');

gulp.task('default', function() {
    return gulp.src('build/*/')
        .pipe(debug());
});