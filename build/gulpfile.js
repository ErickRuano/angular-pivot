var gulp = require('gulp'),
gp_concat = require('gulp-concat'),
gp_rename = require('gulp-rename'),
gp_minify = require('gulp-minify');
gp_selfExecute = require('gulp-self-execute');
runSequence = require('run-sequence');

gulp.task('merge', function(){
    return gulp.src(["../src/index.js", "../src/angular-pivot.js"])
        .pipe(gp_concat('angular-pivot.js'))
        .pipe(gulp.dest('../dist'))
});

gulp.task('wrap', function(){
    return gulp.src(["../dist/angular-pivot.js"])
        .pipe(gp_selfExecute({
            'window': 'window'
        }))
        .pipe(gulp.dest('../dist'))
        .pipe(gp_minify({
            mangle : false
        }))
        .pipe(gulp.dest('../dist'))
});

gulp.task('build', function(){
    runSequence('merge', function(){
        console.log('Wraping in self executing anonymous function');
        runSequence('wrap', function(){
            console.log('done!');
        });
    });
})

gulp.task('default', ['build'   ], function(){});