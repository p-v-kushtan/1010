const { src, dest, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const image = require('gulp-image');

function html() {
    return src('src/templates/*.pug')
        .pipe(pug())
        .pipe(dest('build/html'))
}

function css() {
    return src('src/styles/style.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
}

function js() {
    return src('src/js/*.js', { sourcemaps: true })
        .pipe(concat('app.min.js'))
        .pipe(dest('build/js', { sourcemaps: true }))
}

function images() {
    return src('src/img/**/*')
        .pipe(image())
        .pipe(dest('build/img'))
}

function files() {
    return src(['src/audio/*', 'src/video/*'])
        .pipe(dest('build/audio'))
}

function watcher() {
  watch('src/templates/**/*', { events: 'all' }, html);
  watch('src/styles/**/*', { events: 'all' }, css);
  watch('src/js/*', { events: 'all' }, js);
}

exports.watcher = watcher;
exports.js = js;
exports.css = css;
exports.html = html;
exports.images = images;
exports.files = files;
exports.default = parallel(html, css, js, watcher);
// exports.default = parallel(html, css, js);
