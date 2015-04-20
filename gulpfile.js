var gulp = require('gulp');
var nib = require('nib');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('css', function(){
  gulp.src('./src/stylus/style.styl')
    .pipe(stylus({use: nib(), import: ['nib']}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  browserify({
    entries: './src/js/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist/js'));
});
 
gulp.task('default', ['css', 'js']);