const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function uglifyJS() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
};

function ignorePath(file) {
    const ignoreFolders = [
        path.join(__dirname, 'src', 'scss', 'mixins'),
        path.join(__dirname, 'src', 'scss', 'variaveis')
    ];

    const filePath = file.path;

    return !ignoreFolders.some(folder => filePath.startsWith(folder));
}

function compileSass() {
    return gulp.src('./src/scss/**/*.scss', { base: './src/scss' })
        .pipe(sourcemaps.init())
        .pipe(gulpIf(ignorePath, sass({
            outputStyle: 'compressed'
        })))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulpIf(ignorePath, gulp.dest('./build/styles')));
}



exports.default = () => {
    gulp.watch('./src/scss/**/*.scss', { ignored: false}, gulp.series(compileSass, uglifyJS));
} 
