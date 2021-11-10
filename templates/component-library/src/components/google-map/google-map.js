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
		operaHouse: { lat: -33.8567844, lng: 151.213108 },
		tarongaZoo: { lat: -33.8472767, lng: 151.2188164 },
		manlyBeach: { lat: -33.8209738, lng: 151.2563253 },
		hyderPark: { lat: -33.8690081, lng: 151.2052393 },
		theRocks: { lat: -33.8587568, lng: 151.2058246 },
		circularQuay: { lat: -33.858761, lng: 151.2055688 },
		harbourBridge: { lat: -33.852228, lng: 151.2038374 },
		kingsCross: { lat: -33.8737375, lng: 151.222569 },
		botanicGardens: { lat: -33.864167, lng: 151.216387 },
		museumOfSydney: { lat: -33.8636005, lng: 151.2092542 },
		maritimeMuseum: { lat: -33.869395, lng: 151.198648 },
		kingStreetWharf: { lat: -33.8665445, lng: 151.1989808 },
		aquarium: { lat: -33.869627, lng: 151.202146 },
		darlingHarbour: { lat: -33.87488, lng: 151.1987113 },
		barangaroo: { lat: -33.8605523, lng: 151.1972205 },
	}
	const markers = [];
	for (const location in locations) {
		const markerOptions = {
			map: map,
			title: 'Hello world!',
			position: locations[location],
			icon: require('./img/google-pin.webp')
		}
		const marker = new google.maps.Marker(markerOptions);
		markers.push(marker);
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

			const contentString =
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
			'<div id="bodyContent">' +
			"<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
			"sandstone rock formation in the southern part of the " +
			"Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
			"south west of the nearest large town, Alice Springs; 450&#160;km " +
			"(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
			"features of the Uluru - Kata Tjuta National Park. Uluru is " +
			"sacred to the Pitjantjatjara and Yankunytjatjara, the " +
			"Aboriginal people of the area. It has many springs, waterholes, " +
			"rock caves and ancient paintings. Uluru is listed as a World " +
			"Heritage Site.</p>" +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			"https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
			"(last visited June 22, 2009).</p>" +
			"</div>" +
			"</div>";

			const infowindow = new google.maps.InfoWindow({
				content: contentString,
			});

			infowindow.open({
				anchor: marker,
				map,
				shouldFocus: false,
			});

		});
	});
}
