var gulp = require('gulp');
var uglify = require('gulp-uglify');//压缩js
var minifycss = require('gulp-minify-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//css添加前缀
var concat = require('gulp-concat');//合并js和css
var spriter = require('gulp-css-spriter');//合并js和css
var imgmin = require('gulp-imagemin');//压缩图片
var htmlmin = require('gulp-htmlmin');//压缩html
var livereload = require('gulp-livereload');//页面自动刷新
var watch = require('gulp-watch');//监听，自动编译

//handle js
gulp.task('script',function(){
	gulp.src('./app/js/*.js')
		.pipe(uglify({
			preserveComments: 'false'
		}))
		.pipe(gulp.dest('./temp/script'))
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./dist/script'));
})

//handle css
gulp.task('style',function(){
	gulp.src('./app/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(spriter({
			'spriteSheet': './dist/img/_spritesheet.png', //生成的雪碧图的路径
			 'pathToSpriteSheetFromCSS': '../img/_spritesheet.png' //css中引用雪碧图的路径
		}))
		.pipe(minifycss({
			compatibility:'ie7',//保留ie7及以下兼容写法
			keepSpecialComments:'*'//保留特殊前缀
		}))
		.pipe(gulp.dest('./temp/style'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./dist/css'));
})

//handle img
gulp.task('images',function(){
	gulp.src(['./app/img/*.{png,jpg,gif,ico}','./app/img/**/*.{png,jpg,gif,ico}'])//**选择文件夹
		.pipe(imgmin())
		.pipe(gulp.dest('./dist/img'));
		
})

gulp.task('html',function(){
	gulp.src('./app/*.html')
		.pipe(htmlmin({
			removeComments: true,//清除页面注释
			collapseWhitespace: true,//配置此项才会压缩html
			removeScriptTypeAttributes: true,//去除text/javascript
			removeStyleLinkTypeAttributes: true,//去除text/css
		}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch',function(){
	gulp.watch('./app/js/*.js',['script']);
	gulp.watch('./app/css/*.css',['style']);
	gulp.watch('./app/*.html',['html']);
})