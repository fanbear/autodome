let preprocessor = 'sass'; // Выбор препроцессора в проекте - sass или less
const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');

// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');

function serve() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'app/' }, // Указываем папку сервера
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}

function critical() {
	return src('app/sass/critical.sass') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
		.pipe(dest('build/css/')) // Выгрузим результат в папку "build/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function product() {
	return src('app/sass/product.sass')
		.pipe(eval(preprocessor)())
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'], grid: true }))
		.pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
		.pipe(dest('build/css/'))
		.pipe(browserSync.stream())
}

function homeStyles() {
	return src('app/sass/home-style.sass') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
		.pipe(dest('build/css/')) // Выгрузим результат в папку "build/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function footer() {
	return src('app/sass/footer.sass') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
		.pipe(dest('build/css/')) // Выгрузим результат в папку "build/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function category() {
	return src('app/sass/category.sass') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
		.pipe(dest('build/css/')) // Выгрузим результат в папку "build/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function basket() {
	return src('app/sass/basket.sass') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
		.pipe(dest('build/css/')) // Выгрузим результат в папку "build/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function order() {
	return src('app/sass/order.sass') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
		.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
		.pipe(dest('build/css/')) // Выгрузим результат в папку "build/css/"
		.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}


function startwatch() {

	// Мониторим файлы препроцессора на изменения
	watch('app/sass/critical.sass', critical);
	watch('app/sass/home-style.sass', homeStyles);
	watch('app/sass/basket.sass', basket);
	watch('app/sass/order.sass', order);
	watch('app/sass/category.sass', category);
	watch('app/sass/footer.sass', footer);
	watch('app/sass/product.sass', product);

	// Мониторим файлы HTML на изменения
	watch('app/**/*.html').on('change', browserSync.reload);
}

// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = serve;

// Экспортируем функцию styles() в таск styles
exports.homeStyles = homeStyles;
exports.critical = critical;

exports.footer = footer;

exports.basket = basket;
exports.order = order;
exports.category = category;
exports.product = product;

// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(serve, startwatch);