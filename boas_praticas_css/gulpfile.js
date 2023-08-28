const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function watchFiles() {
    gulp.watch('./src/scss/**/*.scss', compileSass);
}

exports.default = watchFiles;