$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $("h2").html(number);
});



$.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
    var lat = data['iss_position']['latitude'];
    var lon = data['iss_position']['longitude'];
    console.log("Lat: " + lat);
    console.log("Long: " + lon);
});

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var marker = L.circle([200, 200], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    });

function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];

        marker.setLatLng([lat, lon]);

        // See leaflet docs for setting up icons and map layers
        // The update to the map is done here:
        
        myMap.panTo([lat, lon], animate=true);
    });
    setTimeout(moveISS, 5000); 
}