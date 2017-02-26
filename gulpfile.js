var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {//定义目录路径
    srcPath: 'src/',
    devPath: 'build/',
    prdPath: 'dist/'
};

gulp.task('lib', function () {
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload())
});

gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload())
});

gulp.task('json',function () {
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload())
});

gulp.task('less',function () {
    gulp.src(app.srcPath + 'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe($.rename('index.min.css'))
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload())
});

gulp.task('js',function () {
    gulp.src(app.srcPath + 'script/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())
        .pipe($.rename('index.min.js'))
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload())
});

gulp.task('image',function () {
    gulp.src(app.srcPath + 'image/**/*')
        .pipe(gulp.dest(app.devPath + 'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prdPath + 'image'))
        .pipe($.connect.reload())
});

gulp.task('build',['lib','html','json','less','js','image']);
gulp.task('clean',function () {
    gulp.src([app.devPath,app.prdPath])
        .pipe($.clean())
});

gulp.task('server',['build'],function () {
    $.connect.server({
        root:[app.devPath],
        livereload:true,
        port:8080
    });
    open('http://localhost:8080');

    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'style/index.less',['less']);
    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch(app.srcPath + 'image/**/*',['image']);
});

gulp.task('default',['server']);