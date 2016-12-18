

if (global.Promise == null) {
    global.Promise = require('es6-promise')
}

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

gulp.task('styles', function() {
  return sass('scss/style.scss', { style: 'expanded' })
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('scss/*.scss', ['styles']);

});
