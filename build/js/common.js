document.addEventListener('DOMContentLoaded', function() {
    //Верхная часть шапки
    const address = document.querySelector('.top__line-text__hover');
    const addressBtn = document.querySelector('.top__line-button__open');
    
    // шапка сайта
    const searchList = document.querySelector('.header-search__category .dropdown-menu');
    const searchBtn = document.querySelector('.header-search__open-category');

    // elem - элемент который нужно скрыть/отобразить
    // btn - кнопка (img) которой нужно задать действие при открытии
    // вложеность для кнопки например: <span><img src="arrow"></span>
    function toggleSelector(elem, btn) {
        if (elem.classList.contains('open-selector')) {
            elem.classList.remove('open-selector');
            btn.querySelector('img').style.transform = 'rotate(' + 0 + 'deg)';
        } else {
            elem.classList.add('open-selector');
            btn.querySelector('img').style.transform = 'rotate(' + 180 + 'deg)';
        }
    }



    addressBtn.addEventListener('click', function() {
        toggleSelector(address, addressBtn)
    })
    searchBtn.addEventListener('click', function() {
        toggleSelector(searchList, searchBtn)
    })
})