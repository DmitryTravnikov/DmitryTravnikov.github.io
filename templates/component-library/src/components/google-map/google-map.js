import { Loader } from '@googlemaps/js-api-loader';
import MarkerClusterer from '@google/markerclustererplus';
import {googleMapTheme} from './google-map-theme.js';

const apiOptions = {
	apiKey: process.env.GOOGLE_MAP_API
}

const loader = new Loader(apiOptions);

loader.load().then(() => {
	// console.log('Maps JS API loaded');
	const map = displayMap();
	const markers = addMarkers(map);
	clusterMarkers(map, markers);
	addPanToMarker(map, markers);
});

function displayMap() {
	const mapOptions = {
	center: { lat: -33.860664, lng: 151.208138 },
		zoom: 14,
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
		styles: googleMapTheme, // Theming by JSON (old way)
		// mapId: 'bd205b213a45cca4', // Theming by ID (new way)
	};
	const mapDiv = document.getElementById('google-map');
	const map = new google.maps.Map(mapDiv, mapOptions);
	return map;
}

function addMarkers(map) {
	const locations = {
		operaHouse: { lat: -33.8567844, lng: 151.213108, title: 'Opera House', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Opera House</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		tarongaZoo: { lat: -33.8472767, lng: 151.2188164, title: 'Taronga Zoo', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Taronga Zoo</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		manlyBeach: { lat: -33.8209738, lng: 151.2563253, title: 'Manly Beach', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Manly Beach</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		hyderPark: { lat: -33.8690081, lng: 151.2052393, title: 'Hyder Park', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Hyder Park</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		theRocks: { lat: -33.8587568, lng: 151.2058246, title: 'The Rocks', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is The Rocks</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		circularQuay: { lat: -33.858761, lng: 151.2055688, title: 'Circular Quay', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Circular Quay</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		harbourBridge: { lat: -33.852228, lng: 151.2038374, title: 'Harbour Bridge', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Harbour Bridge</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		kingsCross: { lat: -33.8737375, lng: 151.222569, title: 'Kings Cross', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Kings Cross</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		botanicGardens: { lat: -33.864167, lng: 151.216387, title: 'Botanic Gardens', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Botanic Gardens</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		museumOfSydney: { lat: -33.8636005, lng: 151.2092542, title: 'Museum of Sydney', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Museum of Sydney</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		maritimeMuseum: { lat: -33.869395, lng: 151.198648, title: 'Maritime Museum', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Maritime Museum</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		kingStreetWharf: { lat: -33.8665445, lng: 151.1989808, title: 'King Street Wharf', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is King Street Wharf</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		aquarium: { lat: -33.869627, lng: 151.202146, title: 'Aquarium', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Aquarium</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		darlingHarbour: { lat: -33.87488, lng: 151.1987113, title: 'Darling Harbour', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Darling Harbour</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
		barangaroo: { lat: -33.8605523, lng: 151.1972205, title: 'Barangaroo', popup: '<div class="google-map__pop-up"><h1 class="google-map__pop-up-headline">This is Barangaroo</h1><p class="google-map__pop-up-paragraph">This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veniam molestias assumenda excepturi. Quidem maiores architecto eum illo, est, rerum at adipisci facilis tenetur esse debitis velit quae ipsam hic.</p></div>' },
	}
	const markers = [];
	for (const location in locations) {
		const markerOptions = {
			map: map,
			title: locations[location].title,
			content: locations[location].popup,
			position: locations[location],
			icon: {
				url: require('./img/yellow-pin.png'),
				scaledSize: new google.maps.Size(50, 50)
			},
			animation: google.maps.Animation.DROP
		}
		const marker = new google.maps.Marker(markerOptions);
		markers.push(marker);
		marker.addListener("click", toggleBounce);
		function toggleBounce() {
			marker.setAnimation(google.maps.Animation.BOUNCE);
			window.timerId = window.setInterval(function() {
				marker.setAnimation(null);
			}, 3000);
		}
	}
	return markers;
}

function clusterMarkers(map, markers) {
	const clustererOptions = {
		styles: [{
				anchorText: [20, 0],
				textSize: 12,
				width: 53,
				height: 53,
				url: require('./img/m1.png'),
				fontFamily: "Arial",
				textColor: "#000"
			},
			{
				anchorText: [22, 0],
				textSize: 12,
				width: 56,
				height: 56,
				url: require('./img/m2.png'),
				fontFamily: "Arial",
				textColor: "#000"
			},
			{
				anchorText: [20, 0],
				textSize: 12,
				width: 66,
				height: 66,
				url: require('./img/m3.png'),
				fontFamily: "Arial",
				textColor: "#000"
			},
			{
				anchorText: [20, 0],
				textSize: 12,
				width: 78,
				height: 78,
				url: require('./img/m4.png'),
				fontFamily: "Arial",
				textColor: "#000"
			},
			{
				anchorText: [20, 0],
				textSize: 12,
				width: 90,
				height: 90,
				url: require('./img/m5.png'),
				fontFamily: "Arial",
				textColor: "#000"
			}
		]
	}
	const markerCluster = new MarkerClusterer(map, markers, clustererOptions);
}

function addPanToMarker(map, markers) {
	markers.map(marker => {
		marker.addListener('click', event => {

			const location = { lat: event.latLng.lat(), lng: event.latLng.lng() };

			map.panTo(location);

			const infowindow = new google.maps.InfoWindow({
				content: marker.content,
			});

			infowindow.open({
				anchor: marker,
				map,
				shouldFocus: false,
			});

			// console.log('It\'s marker\'s position: ' + marker.position);
			// console.log('It\'s marker\'s pop-up content: ' + marker.content);

		});
	});
}
