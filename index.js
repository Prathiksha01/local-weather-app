$(document).ready(function(){
  var latitude, longitude;
  
$.ajax({
  url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB4tIkjXzLaYPT1q2D962fIGjqkYdIdDP8',
  type: 'POST',
  dataType : 'json'
}).done(function(data){
  latitude = data.location.lat;
  longitude = data.location.lng;
  

  
  
 $.ajax({
   url: 'https://simple-weather.p.mashape.com/weatherdata?lat=' + latitude + '&lng=' + longitude,
   headers : {
     'X-Mashape-Key': 'LooNERZMqYmshhH8hFlrwD77dmxHp1Hbif0jsnAB7Ele8B2Gvi',
     'Accept': 'application/json'
   },
   dataType : 'json'
 }).done(function(data)
         { 
           $("#location").text(data.query.results.channel.location.city);
                        $("#weather").text(data.query.results.channel.item.condition.text);
          
 var weather = data.query.results.channel.item.condition.text ;
   
          
  //Adding the animated icon.
 
  var skycons = new Skycons({"color": "pink"});
   
  skycons.add("icon-animated", Skycons.CLEAR_DAY);
 
  skycons.play();
   
  if(weather.indexOf("Rain") >= 0) {
		skycons.set("icon-animated", Skycons.RAIN);
	}

	else if (weather.indexOf("Sunny") >= 0) {
		skycons.set("icon-animated", Skycons.CLEAR_DAY);
	}

	else if (weather.indexOf("Clear") >= 0) {
    skycons.set("icon-animated", Skycons.CLEAR_NIGHT);	
	}

	else if (weather.indexOf("Cloudy") >= 0) {
		skycons.set("icon-animated",Skycons.CLOUDY);
	}

	else if (weather.indexOf("Thunderstorm") >= 0) {
		skycons.set("icon-animated", Skycons.SLEET);
	}

	else if (weather.indexOf("Snow") >= 0) {
		skycons.set("icon-animated", Skycons.SNOW);
	}
   else if(weather.indexOf("Breezy") >= 0){
     skycons.set("icon-animated",Skycons.WIND);
   }
   

          //To toggle
     var cel = data.query.results.channel.item.condition.temp ;
     var far = (cel * 1.8) + 32;
    
          $(".temp-celsius").html(cel  + " °C");
          $(".temp-fahrenheit").html(far + " °F");
          $(".temp-fahrenheit").hide();
          $("#toggle").click(function(){
            $(".temp-celsius").toggle();
            $(".temp-fahrenheit").toggle();
       });
                                  
                                  
          
          
           }); 
});
  

});