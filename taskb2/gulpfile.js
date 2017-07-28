var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleancss = require('gulp-clean-css');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
//try:静态资源的缓存与更新
var rev = require('gulp-rev');//添加md5后缀
var collector = require('gulp-rev-collector');//替换文件路径

gulp.task('style',function(){
	return gulp.src('./src/css/*.scss')
		.pipe(sass())
		.pipe(cleancss())
		.pipe(concat('style.css'))
		.pipe(rev())
		.pipe(gulp.dest('./dist/css'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./rev'))
})

gulp.task('rev',function(){
	return gulp.src(['./rev/*.json','./src/index.html'])
		.pipe(htmlmin())
		.pipe(collector())
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch',function(){
	gulp.watch('./src/css/*.scss',['style']);
})

gulp.task('default',['style','rev','watch']);