const gulp = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');

const dirs = {
  dist: 'dist',
};

gulp.task('minify-js', () => {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js',
      },
    }))
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('minify-css', () => gulp.src('src/*.css')
  .pipe(cleanCSS({ compatibility: 'ie11' }))
  .pipe(gulp.dest(dirs.dist)));

gulp.task('default', gulp.parallel(['minify-js', 'minify-css']));
