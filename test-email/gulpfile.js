const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const cleanCSS = require('gulp-clean-css');


function sassCompile() {
	return gulp.src('app/sass/*.+(scss|sass)')
		.pipe(sass())
		.on("error", notify.onError())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(cleanCSS())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
}

function pugCompile() {
	return gulp.src('app/*.pug')
		.pipe(pug({
			pretty: false
		}))
		.on('error', function (err) {
			process.stderr.write(err.message + '\n');
			this.emit('end');
		})
		.on("error", notify.onError())
		.pipe(gulp.dest('app/'))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}, 
		notify: false,
		online: true,
	});
	gulp.watch('app/sass/*.+(scss|sass)', sassCompile);
	gulp.watch('app/sass/*.+(scss|sass)', pugCompile);
	gulp.watch('app/*.pug', pugCompile);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/css/*.css').on('change', browserSync.reload);
}

function deleteDist() {
	return del.sync('dist');
}

function build() {
	deleteDist();

	var buildImages = gulp.src('app/assets/**/*')
	.pipe(gulp.dest('dist/assets'))

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))

	var robotsTXT = gulp.src('app/robots.txt')
	.pipe(gulp.dest('dist'));
}

exports.watch = watch;
exports.build = build;