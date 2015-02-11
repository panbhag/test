var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require("gulp-concat");


gulp.task("browserify",function(){
	gulp.src('client/src/js/main.js')
	.pipe(browserify({transform:'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('client/dist/js'))

    gulp.src('client/src/js/jquery.geocomplete.js')
	.pipe(browserify())
	.pipe(concat('jquery.geocomplete.js'))
	.pipe(gulp.dest('client/dist/js'))

});



gulp.task('copy',function(){
	gulp.src('client/src/index.html')
	.pipe(gulp.dest('client/dist'));
});

gulp.task('default',['browserify','copy']);

gulp.task("watch",function(){
	gulp.watch("client/src/**/*.*",['default']);
})