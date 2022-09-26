const gulp = require('gulp');
const webp = require('gulp-webp');

const createWebp = () => {
    return gulp.src('source/img/**/*.{jpg,png}')
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest('source/img'))
}

exports.createWebp = createWebp;
