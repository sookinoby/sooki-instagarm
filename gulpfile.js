var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var recess = require('gulp-recess');
var header = require('gulp-header');
var gulpFilter = require('gulp-filter');
var complexity = require('gulp-complexity');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
 
var banner = ['/**',
    ' * instagram Demo',
    ' * (c) 2014 Author Name',
    ' * License: MIT',
    ' * Last Updated: <%= new Date().toUTCString() %>',
    ' */',
    ''].join('\n');

gulp.task('minify', function() {
    var templatesFilter = gulpFilter('clients/views/*.html');

    return gulp.src([
        'client/vendor/angular.js',
        'client/vendor/*.js',
        'client/scripts/app.js',
        'client/scripts/templates.js',
        'client/scripts/controllers/*.js',
        'client/scripts/services/*.js',
        'client/scripts/directives/*.js'
    ])
        .pipe(templatesFilter)
        .pipe(templateCache({ root: 'views', module: 'instagram' }))
        .pipe(templatesFilter.restore())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(gulp.dest('client'));
});

gulp.task('styles', function() {
  gulp.src([
    'client/styles/bootstrap.css',
    'client/styles/sweet-alert.css',
    'client/styles/main.css'
    
  ])
    .pipe(concat('styles.min.css'))
    .pipe(csso())
    .pipe(gulp.dest('client/styles'));
});

gulp.task('complexity', function() {
    return gulp.src([
        '!client/vendor/*.*',
        '!client/app.min.js',
        'client/**/*.js'
    ])
        .pipe(complexity());
});



gulp.task('recess', function() {
 gulp.src('client/styles/styles.css')
 .pipe(recess())
 .pipe(recess.reporter())
 .pipe(gulp.dest('client/styles'));
});

gulp.task('watch', function() {
  gulp.watch(['client/styles/*.css', '!client/styles/styles.min.css'], ['styles']);
  gulp.watch([
    'client/scripts/app.js',
    'client/scripts/services/*.js',
    'client/scripts/directives/*.js',
    'client/scripts/controllers/*.js',
    'client/scripts/views/*.html'
  ], ['minify']);
});
gulp.task('default', ['watch', 'styles', 'minify']);