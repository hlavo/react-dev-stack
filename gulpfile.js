var gulp = require('gulp-param')(require('gulp'), process.argv);
var sass = require('gulp-sass');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var template = require('gulp-template');
var dest = require('gulp-dest');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');
var fs = require("fs");
var browserify = require("browserify");
var source = require('vinyl-source-stream')
var glob = require("glob");
var file = require('gulp-file');
var _ = require('lodash');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var control = require("jsx-control-statements");
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('clean', function() {
    return del.sync(['dist/*']);
});

gulp.task('scripts', function(){
   return browserify("./src/client.js")
        .transform("babelify", {presets: ["es2015", "react"],plugins:[control]})
        .bundle()
        .on('error', function (err) {
           console.log(err.toString());
           this.emit("end");
        })
        .pipe(source("client.js"))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.stream());
});


gulp.task('styles', function() {
    runSequence('injectedScss','sass');
});

gulp.task('injectedScss', function() {
    var content = "";
    glob("src/**/**/*.scss", function (er, files) {
        _(files).forEach(function(value) {
            if( !/(injected|global)/.test(value) ){
                content+= "@import './"+value+"';\n";
            }
        });
        return file('injected.scss', content, { src: true })
               .pipe(gulp.dest('src/styles'));
    })

});

gulp.task('sass', function () {

    return gulp.src('src/styles/global.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
});


gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/images'))
});


gulp.task('html', function() {
    return gulp.src("src/index.html")
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('generate',function(type,name){
    name = _.capitalize(name);
    console.log("I MADE : "+type+" - "+name+" !");

    if(type==="component"){
        gulp.src('dev/templates/component.js')
            .pipe(template({name:name}))
            .pipe(rename(name+".jsx"))
            .pipe(gulp.dest("src/components/"+name));

        gulp.src('dev/templates/component.scss')
            .pipe(template({name:name}))
            .pipe(rename(name+".scss"))
            .pipe(gulp.dest("src/components/"+name));

    }else if(type==="container"){
        gulp.src('dev/templates/container.js')
            .pipe(template({name:name}))
            .pipe(rename(name+".jsx"))
            .pipe(gulp.dest("src/containers/"+name));

        gulp.src('dev/templates/container.scss')
            .pipe(template({name:name}))
            .pipe(rename(name+".scss"))
            .pipe(gulp.dest("src/containers/"+name));
    }

});

gulp.task('watch', ['html','sass','scripts','images'], function() {

    runSequence('injectedScss','sass');

    browserSync.init({
        server : {
            baseDir:'./dist',
            middleware: [ historyApiFallback() ]
        }
    });

    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/**/**/*.scss', ['sass']);
    gulp.watch(['src/**/*.jsx','src/**/*.js'], ['scripts']);
    gulp.watch('src/images/**/*', ['images']);

});