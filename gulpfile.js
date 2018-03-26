var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify');

gulp.task('pug', function () {
  return gulp.src('app/*.pug')
    .pipe(pug({
    	pretty: true
    }))
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .on("error", notify.onError())
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({stream: true}));
});

// gulp.task('rebuild', ['pug'], function () {
//   browserSync.reload();
// });

gulp.task('sass', function() {
	return gulp.src('app/css/*.+(scss|sass)')
	// .pipe(sass().on('error', sass.logError))
	.pipe(sass().on("error", notify.onError()))
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch',['browser-sync', 'sass'], function() {
	gulp.watch('app/css/*.+(scss|sass)', ['sass']);
	gulp.watch('app/*.pug', ['pug'] /*['rebuild']*/);
	gulp.watch('app/*html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);