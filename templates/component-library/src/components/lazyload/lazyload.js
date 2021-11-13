const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMapBlock = document.querySelector('.__load-map');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
