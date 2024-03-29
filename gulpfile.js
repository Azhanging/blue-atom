"use strict";

var packageJson = require("./package.json"),
  gulp = require("gulp"),
  sass = require("gulp-sass"),
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
        browsers: ["last 13 versions", "ie 6-8"],
        flexbox: true,
      })
    )
    .pipe(
      header(
        [
          "/*",
          "*	blue-atom.css v" + packageJson.version,
          "*	(c) 2016-" + currentYear +" Blue",
          "*	Released under the MIT License.",
          "*	https://github.com/azhanging/blue-atom",
          "*	time:${new Date()}",
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
    gulp.start(src.watch[type].task);
    console.log("修改路径:" + ev.path + ",修改类型:" + ev.type);
  });
};

//watch
gulp.task("watch", function () {
  watch("sass");
});

//default
gulp.task("default", ["watch", "sass"]);
