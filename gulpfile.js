const gulp    = require("gulp"),
      babel   = require("gulp-babel"),
      plumber = require('gulp-plumber')

gulp.task('babel', () => {
  gulp.src('./src/*.es6')
    .pipe(plumber({
      errorHandler: (err) => {
        console.log(err)
      }
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./bin'))
});

gulp.task('watch', () => {
  gulp.watch('./src/*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch'])
