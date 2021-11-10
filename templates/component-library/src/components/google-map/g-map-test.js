// import { Loader } from '@googlemaps/js-api-loader';
// import MarkerClusterer from '@google/markerclustererplus';
// import {googleMapTheme} from './google-map-theme.js';


// const apiOptions = {
// 	apiKey: process.env.GOOGLE_MAP_API
// }

// const loader = new Loader(apiOptions);

// loader.load().then(() => {
// 	// console.log('Maps JS API loaded');
// 	const map = displayMap();
// 	const markers = addMarkers(map);
// });

// function displayMap() {
// 	const mapOptions = {
// 	center: { lat: -33.860664, lng: 151.208138 },
// 		zoom: 14,
// 		mapTypeControl: false,
// 		fullscreenControl: false,
// 		streetViewControl: false,
// 		// styles: googleMapTheme, // Theming by JSON (old way)
// 		mapId: 'bd205b213a45cca4', // Theming by ID (new way)
// 	};
// 	const mapDiv = document.getElementById('google-map');
// 	const map = new google.maps.Map(mapDiv, mapOptions);
// 	return map;
// }

// function addMarkers(map) {

// 	const markers = [
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">Opera House</h1><p class="google-map__info-window-paragraph">This is Opera House description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.8567844,
// 			151.213108,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">Taronga Zoo</h1><p class="google-map__info-window-paragraph">This is Taronga Zoo description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.8472767,
// 			151.2188164,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">Manly Beach</h1><p class="google-map__info-window-paragraph">This is Manly Beach description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.8209738,
// 			151.2563253,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">Hyder Park</h1><p class="google-map__info-window-paragraph">This is Hyder Park description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.8690081,
// 			151.2052393,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">The Rocks</h1><p class="google-map__info-window-paragraph">This is The Rocks description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.8587568,
// 			151.2058246,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">Circular Quay</h1><p class="google-map__info-window-paragraph">This is Circular Quay description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.858761,
// 			151.2055688,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">Harbour Bridge</h1><p class="google-map__info-window-paragraph">This is Harbour Bridge description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.852228,
// 			151.2038374,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 		[
// 			'<div class="google-map__info-window"><h1 class="google-map__info-window-headline">King Cross</h1><p class="google-map__info-window-paragraph">This is King Cross description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia atque rem reiciendis illum nesciunt architecto reprehenderit fugit molestiae deserunt!</p></div>',
// 			-33.8737375,
// 			151.222569,
// 			require('./img/google-pin.webp'),
// 			40,
// 			40
// 		],
// 	];

// 	for (let i = 0; i < markers.length; i++) {
// 		const currMarker = markers[i];

// 		const marker = new google.maps.Marker({
// 			position: { lat: currMarker[1], lng: currMarker[2] },
// 			map,
// 			title: currMarker[0],
// 			icon: currMarker[3],
// 			scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
// 			animation: google.maps.Animation.DROP
// 		})
// 		const infowindow = new google.maps.InfoWindow({
// 			content: currMarker[0],
// 		});

// 		marker.addListener('click', () => {
// 			infowindow.open(map, marker);
// 		})
// 	}
// }
