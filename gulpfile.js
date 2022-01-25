import gulp from 'gulp';
const { task, watch, src, dest, parallel, series } = gulp;
import { init, reload, stream } from 'browser-sync';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import { sync } from 'del';
import ttfToWoff2 from 'gulp-ttf2woff2';
import webpack from 'webpack-stream';
import { config } from './webpack.config.js';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

task('server', function () {
	init({
		server: {
			baseDir: 'dist',
		},
	})

	watch('src/*.html').on('change', reload)
})

task('styles', function () {
	return src('src/scss/**/*.+(scss|sass)')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(
			rename({
				prefix: '',
				suffix: '.min',
			})
		)
		.pipe(autoprefixer())
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(dest('dist/css'))
		.pipe(stream())
})

task('scripts', function () {
	return src('src/js/_script.js')
		.pipe(webpack(config))
		.pipe(dest('dist/js'))
		.pipe(stream())
})

task('watch', function () {
	watch('src/scss/**/*.+(scss|sass|css)', parallel('styles'))
	watch(['src/js/**/*.js'], parallel('scripts'))
	watch('src/*.html').on('change', parallel('html'))
	watch('src/img/**/*').on('add', parallel('images'))
	watch('src/icons/**/*').on('add', parallel('icons'))
	watch('src/fonts/**/*').on('add', parallel('fonts'))
})

task('html', function () {
	return src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist/'))
})

task('fonts', function () {
	src('src/fonts/*.ttf')
		.pipe(ttfToWoff2())
		.pipe(dest('dist/fonts'))
		.pipe(stream());
	return src('src/fonts/icomoon/**')
		.pipe(dest('dist/fonts'))
		.pipe(stream())
})

task('icons', function () {
	return src('src/icons/**/*')
		.pipe(dest('dist/icons'))
		.pipe(stream())
})

task('mailer', function () {
	return src('src/mailer/*').pipe(dest('dist/mailer'))
})

task('images', function () {
	return src('src/img/**/*')
		.pipe(imagemin())
		.pipe(dest('dist/img'))
		.pipe(stream())
})

task('del', function (done) {
	sync(['dist']);
	done();
});

task('JSON', function () {
	return src('src/*.json')
		.pipe(dest('dist/'))
		.pipe(stream());
})

task(
	'default',
	series(
		'del',
		parallel(
			'watch',
			'server',
			'styles',
			'scripts',
			'fonts',
			'icons',
			'mailer',
			'html',
			'images',
			'JSON'
		)
	)
)
