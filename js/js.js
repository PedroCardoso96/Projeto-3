window.onload = function(){


	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-22.736326,-42.834520),
			scroollWheel:false,
			zoom:17,
			MapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}


	function addMarker(lat,long,icon,content){
		var latLng = {"lat":lat,"lng":long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.size(0,20)
		});



		google.maps.event.addListener(marker,"click",function(){
			infoWindow.open(map,marker);
		});
		

	}

	initialize();
	var conteudo = "<p style='color:black;font-size:13px;paddding:10px 0;'>Meu endereço</p>";
	addMarker(-22.736326,-42.834520,"",conteudo);


	setTimeout(function(){

		map.panTo({'lat':-22.7404136,'lng':-42.844021});

	},4000);
	






}