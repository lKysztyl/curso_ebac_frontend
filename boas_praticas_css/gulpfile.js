const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', compileSass);
}

exports.default = watchFiles;