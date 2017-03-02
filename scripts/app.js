// define globals


// var onSuccess = function onSuccess(onJson) {
//     console.log(onJson);
//     $('#earthQuakeMonth').append(earthquakeMagnitude, earthquakeLocation);
// }

// var onError = function onError(onJson, status) {
//     console.log(onJson, status);
// }
var monthlyQuakesEndpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

$(document).on("ready", function() {



    $.ajax({
        method: 'GET',
        url: monthlyQuakesEndpoint,
        dataType: 'json',

        success: function onSuccess(onJson) {
            console.log(onJson);

              onJson.features.forEach(function(listElements) {

              var mag = listElements.properties.mag;
              var place = listElements.properties.place;
              console.log(mag);



                $('#earthQuakeMonth').append('<div id="mag"><strong> M </strong>' + mag +'<strong> - </strong>' + place + '</div>');
                });
             }

        // error: function onError(onJson, status) {
        //     console.log(onJson, status);
        // }

    });
});
