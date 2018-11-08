var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

gulp.task('sass:watch', function() {
    gulp.watch('app/scss/main.scss', ['sass']);
});
