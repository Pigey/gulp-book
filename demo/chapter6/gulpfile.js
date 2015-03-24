// 获取 gulp
var gulp = require('gulp');
// 获取 gulp-sass 模块
var sass = require('gulp-sass');

// 编译sass
// 在命令行输入 gulp images 启动此任务
gulp.task('sass', function () {
    // 1. 找到 scss 文件
    gulp.src('sass/**.scss')
    // 2. 编译为css
        .pipe(sass())
    // 3. 另存文件
        .pipe(gulp.dest('dist/css'));
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('sass/**.scss', ['sass']);
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto']);