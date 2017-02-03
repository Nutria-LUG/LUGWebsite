var addr = "http://localhost"


function initialize() {
   var mapCanvas = document.getElementById('map-canvas');
   var mapOptions = {
         center: new google.maps.LatLng(26.802100, 75.822739),
         zoom: 8,
         mapTypeId: google.maps.MapTypeId.ROADMAP
        }
   var map = new google.maps.Map(mapCanvas, mapOptions);
}

function getnews(){
	var url = addr + "/news.json"; 
	$.get(url).done(function(data){
		json = JSON.parse(data);
		for (i=0; i<json.length; i++){
			$(".news").html($(".news").html()+"<div class='new'>");
			$(".news").html($(".news").html()+"<h3>"+json[i]["title"]+"</h3>");
			$(".news").html($(".news").html()+"<h5>"+json[i]["date"]+"</h5>");
			$(".news").html($(".news").html()+"<p>"+json[i]["description"]+"</h3>");
			$(".news").html($(".news").html()+"</div>");
		}
	});
}

function initPage(){
    var id = $(".nav .active").attr("href");
    $(id).show();
}

$(".nav a").bind("click",function(){
    $(".container-fluid").hide();
    $($(this).attr("href")).show();
    $(".active").removeClass("active");
    $(this).addClass("active");
});


initPage();


google.maps.event.addDomListener(window, 'load', initialize);




