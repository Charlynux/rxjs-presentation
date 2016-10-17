var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('./examples/**')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./examples/**'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
