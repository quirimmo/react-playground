'use strict';

const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;

const PATH = {
    test: './test/e2e/**/*.spec.js',
    protractorConfig: './protractor.config.js'
};

gulp.task('protractor-test', protractorTestTask);

function protractorTestTask() {
	return gulp.src(PATH.test)
        .pipe(protractor({
            configFile: PATH.protractorConfig
        }))
        .on('close', () => {
            console.log('exit');
        })
        .on('error', e => { throw e; });
}