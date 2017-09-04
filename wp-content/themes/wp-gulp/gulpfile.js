var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var fs = require('node-fs');
var fse = require('fs-extra'); 
var json = require('json-file');
var themeName = json.read('./package.json').get('themeName');
var themeDir = '../' + themeName;


var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');


gulp.task('sass', function () {
    gulp.src(themeDir + '/css/src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(themeDir + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {

 	var browserified = transform(function(filename) {
    	return browserify(filename).bundle();
  	});

 	gulp.src(themeDir + '/js/src/*.js')
 		.pipe(jshint())
		.pipe(jshint.reporter('fail'))
 		.pipe(concat('app.js'))
 		.pipe(browserified)
        .pipe(uglify())
 		.pipe(gulp.dest(themeDir + '/js'));
});

gulp.task('watch', function() {
  gulp.watch(themeDir + '/css/src/*.scss', ['sass']);
  gulp.watch(themeDir + '/js/src/*.js', ['js']);
  //gulp.watch(themeDir + '/img/src/*.{png,jpg,gif}', ['img']);
});
 
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});
 
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['sass', 'js', 'watch', 'serve']);