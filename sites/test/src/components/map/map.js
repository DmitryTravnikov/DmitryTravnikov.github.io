// Map 
ymaps.ready(init);

var placemarks = [
  {
    latitude: 59.94,
    longitude: 30.31,
    hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger" src="" alt"Бургер"/>',
      'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
      '</div>'
    ]
  },
  {
    latitude: 59.95,
    longitude: 30.31,
    hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger" src="" alt"Бургер"/>',
      'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
      '</div>'
    ]
  }
],
  geoObjects = [];//var placemarks end

function init() {
  var map = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 13,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });// var map end

  for (var i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
      hintContent: placemarks[i].hintContent,
      balloonContent: placemarks[i].balloonContent.join('')
    }, 
    {
      iconLayout: 'default#image',
      iconImageHref: require('./img/pin.png'),
      iconImageSize: [36, 48],//размер изображения
      iconImageOffset: [0, -33]//смещение изображения относительно его размеров
    });
  }//for end

  //Кластеризация
  var clusterer = new ymaps.Clusterer({
    clusterIcons: [
      {
        href: require('./img/pin.png'),//изображение кластеризатора
        size: [60, 90],
        offset: [-50, -50]
      }
    ],
    clusterIconContentLayout: null//отключает визуальное отображение количества точек при кластеризации
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
  
  //на мобильных устройствах... (проверяем по userAgent браузера)
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      //... отключаем перетаскивание карты
      map.behaviors.disable('drag');
  }

}//init end