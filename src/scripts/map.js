import ymaps from 'ymaps';

ymaps.load('https://api-maps.yandex.ru/2.1/?lang=en_US').then(maps => {
 const map = new maps.Map('map', {
    center: [-8.369326, 115.166023],
    zoom: 7
  });
});