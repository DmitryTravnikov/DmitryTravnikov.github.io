// import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './favicons/favicons';
import 'normalize.css';
import './scss/main.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./components', true, /\.(scss|js)$/));
importAll(require.context('./pages', true, /\.(scss|js)$/));
importAll(require.context('./templates', true, /\.(scss|js)$/));
