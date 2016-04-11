var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins(),
  runSequence = require('run-sequence');
var files = {
  mainStylesheet: 'stylesheets/main.scss',
  pdfStylesheet: 'stylesheets/pdf.scss',
  stylesheets: 'stylesheets/*.scss',
  js: 'js/*js',
  templates: 'templates/*.html',
  index: 'index.html',
  json: '*.json'
};

gulp.task('clean', function() {
  return gulp.src('css')
    .pipe(plugins.clean());
});

gulp.task('sass', ['clean'], function() {
  return gulp.src(files.mainStylesheet)
    .pipe(plugins.sass())
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(gulp.dest('css'));
});

gulp.task('pdfsass', ['clean'], function() {
  return gulp.src(files.pdfStylesheet)
    .pipe(plugins.sass())
    .pipe(plugins.rename('main.css'))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(gulp.dest('css'));
});

gulp.task('pdf', ['pdfsass'], plugins.shell.task([
  'wkhtmltopdf --margin-left 15 --margin-right 15 --zoom 1.0 --viewport-size 1280x1024 http://localhost:8080/#/en curriculum-javisantos-en.pdf',
  'wkhtmltopdf --margin-left 15 --margin-right 15 --zoom 1.0 --viewport-size 1280x1024 http://localhost:8080/#/es curriculum-javisantos-es.pdf'
]));


gulp.task('build', function(callback) {
  runSequence('pdf', 'sass');
});

gulp.task('watch', function() {
  gulp.watch(files.index, ['build']);
  gulp.watch(files.js, ['build']);
  gulp.watch(files.json, ['build']);
  gulp.watch(files.templates, ['build']);
  gulp.watch(files.stylesheets, ['build']);
});
