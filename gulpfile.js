var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var run = require('gulp-run');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');

gulp.task('sass', function() {
  return gulp.src('resources/assets/sass/app.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
              	'node_modules/sass-mq',
    	        'node_modules/sass-bem',
                'node_modules/bulma/sass'
                ]
      }))
      .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
   return gulp.src('resources/assets/js/customJS/*.js')
    //  .pipe(jshint())
    //  .pipe(jshint.reporter('default'))
      .pipe(concat('application.js'))
      .pipe(gulp.dest('public/js/'))
      .pipe(uglify())
      .pipe(concat('application.min.js'))
      .pipe(gulp.dest('public/js/'));
});


gulp.task('live',['sass', 'js', 'html', 'ts'], function() {
	gulp.watch('resources/assets/sass/**/*.scss',function() {
        runSequence('sass');
    });
  gulp.watch('resources/assets/js/customJS/*.js', function() { 
               runSequence('js');
             }); 
       gulp.watch('resources/assets/typescript/**/*.ts', function() { 
               runSequence('ts');
             }); 
        gulp.watch('resources/assets/typescript/html/*.html', function() { 
               runSequence('html');
             }); 
});

gulp.task('ts', function () {
    return gulp.src('resources/assets/typescript/**/*.ts')
        .pipe(ts({
             "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }))
        .pipe(gulp.dest('public/app'));
});

gulp.task('html', function () {
    return gulp.src('resources/assets/typescript/html/*.html')
        .pipe(gulp.dest('public/app/html'));
});



