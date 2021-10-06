const gulp = require('gulp');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const del = require('del');
const rename = require('gulp-rename');
const mjml = require('gulp-mjml');

function pugCompile() {
	return gulp.src('app/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.on('error', function (err) {
			process.stderr.write(err.message + '\n');
			this.emit('end');
		})
		.on("error", notify.onError())
		.pipe(rename("index.mjml"))
		.pipe(mjml())
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
	gulp.watch('app/*.pug', pugCompile);
	gulp.watch('app/*.html').on('change', browserSync.reload);
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