var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('babel', function() {
  gulp.src('./src/*.es6')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./src/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);
