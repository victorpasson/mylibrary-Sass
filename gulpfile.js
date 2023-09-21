const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({
            content: ['index.html']
        }))
        .pipe(dest('css'));
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask)

// /**/ means any subfolder in the current folder as well

// gulp-purgecss is a plugin that removes unused CSS. We need add one more pass in buildStyles function e sinalize what file to look for the unused CSS. In this case, index.html. If we put *.html it will look for all html files in the folder. Recomended make it just in the final version.