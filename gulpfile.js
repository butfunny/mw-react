var chokidar = require("chokidar");
var q = require("q");
var gulp = require("gulp");

gulp.task("compile-sass", ()=>{

    var compileScss = function() {
        var defer = q.defer();
        var sass = require("gulp-sass");
        gulp.src("./assets/scss/style.scss")
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(gulp.dest("./assets/css/"))
            .on("end", function() {
                console.log("Compiling done");
                defer.resolve();
            })
        ;
        return defer.promise;
    };

var injectScss = function() {
    var defer = q.defer();
    var target = gulp.src('./assets/scss/style.scss');

    var sort = require('gulp-sort');
    var sources = gulp.src(["./src/app/**/*.scss"], {read: false}).pipe(sort());

    var inject = require("gulp-inject");
    target
        .pipe(inject(sources, {
            starttag: '// inject:all',
            endtag: '// endinject',
            transform: function (filepath, file, i, length) {
                return `@import "../..${filepath}";`;
            }
        }))
        .pipe(gulp.dest('./assets/scss'))
        .on("end", ()=>{
        console.log("Inject done");
    defer.resolve();
})
    ;

    return defer.promise;
};

chokidar
    .watch(["./src/**/*.scss"], {
        ignoreInitial: true
    })
    .on('add', function(event, path) {
        injectScss().then(compileScss);
    })
    .on('unlink', function(event, path) {
        injectScss().then(compileScss);
    })
    .on('change', function(event, path) {
        compileScss();
    })
;

injectScss().then(compileScss);

});