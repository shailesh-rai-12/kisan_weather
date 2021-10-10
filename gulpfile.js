const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const cleancss = require('gulp-clean-css')


//wenfonts
function webfonts(){
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('assets/dist/webfonts'))
}

exports.webfonts=webfonts;

//all css bundled
function cssBundle(){
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/@fortawesome/fontawesome-free/css/all.css',
        'assets/css/*.css'
    ])
    .pipe(concat("style.css"))
    .pipe(cleancss())
    .pipe(gulp.dest('assets/dist/css'))
}
exports.cssBundle=cssBundle;

//all javascrpit bundled

function jsBundle(){
    return gulp.src([
        'assets/js/jquery-3.6.0.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'assets/js/bootstrap-datepicker.min.js',
        'assets/js/jquery-clockpicker.js',
        'node_modules/angular/angular.js',
        'node_modules/angular/angular-ui-router.js',
        'node_modules/angular/ocLazyLoad.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/dist/js'))
}

exports.jsBundle=jsBundle;

//automate tasks

gulp.task('default',gulp.parallel(webfonts,cssBundle,jsBundle));
