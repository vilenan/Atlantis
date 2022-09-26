const gulp = require('gulp');
const webp = require('gulp-webp');

const createWebp = () => {
    return gulp.src('img/**/*.{jpg,png}')
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest('img'))
}

exports.createWebp = createWebp;
