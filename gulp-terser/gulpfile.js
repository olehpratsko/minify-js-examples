// Import required modules
var gulp = require('gulp');
var terser = require('gulp-terser');

// JavaScript minification task function
function scripts() {
  return gulp.src('./script.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist'));
}

// Watch task function
function watch() {
  gulp.watch('./script.js', scripts);
}

// `gulp watch` task declaration
exports.watch = watch;

// `gulp` task declaration
exports.default = scripts;
