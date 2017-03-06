'use strict';
/*deklaracja zmiennych*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

/* taski gulpa */

/*test*/

gulp.task('hello', function() {
  console.log('Hello Sokalla');
});


/* kompilowanie plików scss w css*/

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
/* obserwowanie */

gulp.task('watch', ['sass', 'browserSync'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})

/* live reload*/

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})