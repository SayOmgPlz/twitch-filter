var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');
var jshint = require('gulp-jshint');

gulp.task('compile', function () {
    var javaScriptFromCoffeeScript = gulp.src('src/*.coffee')
        .pipe(coffee());

    var javaScript = gulp.src('src/*.js');

    return es.merge(javaScriptFromCoffeeScript, javaScript)
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

gulp.task('watch',function(){
    return gulp.watch('src/*.{js,coffee}', ['compile']);
});