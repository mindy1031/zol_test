var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
gulp.task("default", function() {
});

gulp.task("sass", function(){
  return gulp.src("./sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir:"../js-job-zol-2017-4-9"
    },
  })
})
gulp.task("watch", ["browserSync", "sass"], function (){
  gulp.watch("./sass/*.scss", ["sass"]);
  gulp.watch("./*.html", browserSync.reload);
  gulp.watch("./js/*.js", browserSync.reload);
  gulp.watch("./css/*.css", browserSync.reload);
});