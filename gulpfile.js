const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){ 
    return src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(dest('assets/css'));
}

function watchTask(){ 
    watch(['assets/scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);