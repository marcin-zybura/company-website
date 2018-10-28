// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();
// const autoprefixer = require('gulp-autoprefixer');

// gulp.task('sass', function() {
//   return gulp.src('scss/**/*.scss')
//   .pipe(sass())
//   .pipe(gulp.dest('css'))
  // .pipe(browserSync.reload({
  //   stream: true
  // }))
// });

// gulp.task('watch', ['browserSync', 'sass', 'autoprefix'], function() {
//   gulp.watch('scss/**/*.scss', ['sass']);
  // gulp.watch('./*.html', browserSync.reload);
  // gulp.watch('./*.js', browserSync.reload);
// });

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     }
//   });
// });

// gulp.task('autoprefix', () =>
//   gulp.src('scss/style.scss')
//   .pipe(autoprefixer({
//     browsers: ['>1%'],
//     cascade: false
//   }))
//   .pipe(gulp.dest('css'))
// );

const gulp = require('gulp');
const sass = require('gulp-sass');
const input = './scss/**/*.scss';
const output = './css';
const sassOptions = {
  errLogConsole: true,
  outputStyle: 'expanded'
};
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  gulp.src(input)
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest(output))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('watch', ['browserSync'], () => {
  gulp.watch(input, ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});