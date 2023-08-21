const gulp = require('gulp');
const less = require('gulp-less');

function lessc() {
    return gulp.src('src/styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/styles'));
}

function watch() {
    gulp.watch('src/styles/**/*.less', lessc);
}

exports.default = gulp.series(lessc, watch);
