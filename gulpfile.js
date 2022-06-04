const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');

const compileCjs = () => {
	process.env.BABEL_ENV = 'cjs';
	return gulp
		.src('companents/**/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('lib'));
};

const compileEsm = () => {
	process.env.BABEL_ENV = 'esm';
	return gulp
		.src('companents/**/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('esm'));
};

const compileLess = () => {
	return gulp
		.src('companents/**/**/*.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(gulp.dest('lib'))
		.pipe(gulp.dest('esm'))
};

exports.default = gulp.series(compileEsm, compileCjs, compileLess);