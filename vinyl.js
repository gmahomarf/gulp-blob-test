var vfs = require('vinyl-fs');
var debug = require('gulp-debug');

vfs.src('build/*/').pipe(debug());