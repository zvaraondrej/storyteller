var Teller = (function(){

	var m1, m2, m3;

	function p(arg){
		console.log(arg);
	}

	function init(){
		addTestMarkers();
		$('#pan').click(function(){
			panMap(m3);
		});
	}

	function panMap(to){
		panOpt = {
			animate: true,
			duration: 3,
			easeLinearity: 0.01
		}
		var map = AppController.getMap();
		map.panTo(to.getLatLng(), panOpt);

	}

	function addTestMarkers(){
		var map = AppController.getMap();
		m1 = L.marker([48.6967, 17.6585]).addTo(map);
		m2 = L.marker([48.7020, 17.6674]).addTo(map);
		m3 = L.marker([48.7006, 17.6870]).addTo(map);
	}

	return{
		panMap: panMap,
		init: init
	};
})();