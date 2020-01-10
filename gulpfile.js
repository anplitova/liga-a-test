const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const path = {
    style: {
        src: './static/less/style.less',
        watch: './style/**/*.less',
        build: './build/css/'
    }
};

function style() {
    return gulp.src(path.style.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.style.build));
}

function watch() {
    gulp.watch(path.style.watch, style);
}

exports.default = watch;
exports.build = style;