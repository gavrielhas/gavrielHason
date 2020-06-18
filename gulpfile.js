var gulp    = require('gulp'); 
var cssnano = require('gulp-cssnano'); 
var sass    = require('gulp-sass'); 
var concat  = require('gulp-concat'); 
var uglify  = require('gulp-uglify');
var react   = require('gulp-react');


gulp.task('sass', function(){    
    return gulp.src('src/app/style.scss')       
        .pipe(sass())       
        .pipe(cssnano())       
        .pipe(gulp.dest('src/dist/css')); 
});

gulp.task('js', function(){    
    return gulp.src(['src/app/js/plugins/*.js', 'src/app/js/*.js']) 
        .pipe(concat('all.js'))  
        .pipe(uglify())       
        .pipe(gulp.dest('src/dist')); 
});

gulp.task('watch', function(){
    gulp.watch('src/app/*.scss', gulp.series('sass'));
    gulp.watch('src/app/js/**/*.js', gulp.series('js'));    
});

gulp.task('react', function(){
    return gulp.src['src/components/footerComponents/*.js','src/components/headerComponents/*.js','src/components/pages/*.js','src/components/*.js']
         .pipe(react())
         .pipe(gulp.dest('src/dist'));
})

gulp.task('default', gulp.series('sass', 'js', 'watch', 'react'));

       