var AppController = (function(){
	
	var _controls;
	var _map;

	function init(){
		_map = _setMap();
		_initBaseLayers(_map);
	}

	function p(arg){
		console.log(arg);
	}

	function _setMap(){
		/*var southWest = L.latLng(48.07784956312408, 16.889762878417965),
    		northEast = L.latLng(48.22055542444503, 17.343978881835934),
    		bounds = L.latLngBounds(southWest, northEast);
		*/
		var map = L.map('map',{
			zoom: 14,
			minZoom: 12
			//maxBounds: bounds 
		});
		map.setView([48.6967, 17.6585], 16);
		return map;	
	}

	function _initBaseLayers(map){
		var baseLayer = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; 2013 OpenStreetMap contributors'
		}).addTo(map);
		// var baseLayer = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',{opacity: 1.0}).addTo(map);
		// var baseLayer = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',{opacity: 1.0}).addTo(map);
		// var baseLayer = L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',{opacity: 1.0}).addTo(map);

		var baseLayers = {
		  "OSM outdoors": baseLayer
		};
		_controls = L.control.layers(baseLayers, null, {collapsed: false}).addTo(map);
	}

	function getMap(){
		return _map;
	}

	return{
		init: init,
		getMap: getMap
	};

	//test comment
})();