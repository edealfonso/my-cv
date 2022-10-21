const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const { series } = require('gulp');

function buildSASS() {
    return gulp
        .src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({ outputStyle: 'compressed' }).on('SASS error', sass.logError)
        )
        .pipe(gulp.dest('./css/'))
        .pipe(sourcemaps.write('.'));
}

exports.watch = function () {
    gulp.watch('./scss/**/*.scss', buildSASS);
};

exports.default = buildSASS;
