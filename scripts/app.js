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
        success: function onSuccess(onJson) {
            console.log(onJson);
            var earthquakeMagnitude = $('#earthQuakeMonth').append(onJson.features[0].properties.mag);
            var earthquakeLocation = $('#earthQuakeMonth').append(onJson.features[0].properties.place);
        },
        forEach()
        error: function onError(onJson, status) {
            console.log(onJson, status);
        }

    });
});
