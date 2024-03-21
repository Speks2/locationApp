 function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   } else {
     x.innerHTML = "Geolocation is not supported by this browser.";

   }
 }

 function PositionRecieved(position) {
  
   console.log(position.coords.longtitude);
   console.log(position.coords.latitude);

   GetHumanReadableLocation(position.coords.latitude, position.coords.longtitude)

  
 }

 function geoError() {

     console.log('geo error');
 }

 function GetHumanReadableLocation(lat, long) {
    // https://geocode.maps.co/reverse?lat=latitude&lon=longitude&api_key=65fbf400da53d041385145rdze5e04b

    let myUrl='https://geocode.maps.co/reverse?lat=${lat}latitude&lon=${long}longitude&api_key=65fbf400da53d041385145rdze5e04b'
    
    console.log(myUrl);

  
 }