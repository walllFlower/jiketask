var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var htmlmin = require('gulp-htmlmin');
var spriter = require('gulp-css-spriter');
var pump = require('pump');
var gulpSequence = require('gulp-sequence');

gulp.task('sass',function(){
	return gulp.src('./src/css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/temp'))
})

gulp.task('style',function(){
	return gulp.src('./dist/temp/*.css')
		// .pipe(spriter({
		// 	'spriteSheet':'./dist/img/spriter.png',
		// 	'pathToSpriteSheetFromCSS':'../img/spriter.png'
		// }))
		.pipe(cssmin())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('script',function(){
	pump([
		gulp.src('./src/js/imgCarousel.js'),
		uglify(),
		gulp.dest('./dist/js')
	])
})

gulp.task('html',function(){
	return gulp.src('./src/index.html')
		.pipe(htmlmin({
			collapseWhitespace:true
		}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch',function(){
	livereload.listen();
	// gulp.watch('./src/css/*.scss',['sass']);
	gulp.watch('./scr/js/*.js',['script'])
})

gulp.task('seq',gulpSequence('sass','style','script','html','watch'));

