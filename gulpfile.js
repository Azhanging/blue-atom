"use strict";

var packageJson = require("./package.json"),
  gulp = require("gulp"),
  sass = require("gulp-dart-sass"),
  header = require("gulp-header"),
  autoprefixer = require("gulp-autoprefixer");

var currentYear = new Date().getFullYear();

var src = {
  sass: "./src/main/blue-atom.scss", //输入路径
  dist: "./dist/css", //输出路径
  watch: {
    sass: {
      path: "./src/**/*.scss",
      task: "sass",
    },
  },
};

//sass
gulp.task("sass", function () {
  return gulp
    .src(src.sass)
    .pipe(
      sass({
        outputStyle: "compressed", //compact//compressed//expanded
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        overrideBrowsersList: ["last 13 versions", "ie >= 9"],
        grid: true,
      })
    )
    .pipe(
      header(
        [
          "/*",
          "*	blue-atom.css v" + packageJson.version,
          "*	(c) 2016-" + currentYear + " Blue",
          "*	Released under the MIT License.",
          "*	https://github.com/azhanging/blue-atom",
          "*/",
          "",
        ].join("\n")
      )
    )
    .pipe(gulp.dest(src.dist));
});

//watch fn
var watch = function (type) {
  gulp.watch(src.watch[type].path, function (ev) {
    console.log("修改路径:" + ev.path + ",修改类型:" + ev.type);
  });
};

//watch
gulp.task("watch", function () {
  watch("sass");
});

//default
gulp.task("default", gulp.parallel("sass", "watch"));
