var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp
    .src("frontend/static/dist/index.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("frontend/static/dist"));
});
