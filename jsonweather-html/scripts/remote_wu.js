// Current Location Scripts
$(function () {


    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, lon);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, lon) {
        var cityDisplay = $('.cityDisplay');

        $.ajax({
            url: "http://api.wunderground.com/api/9fc78788ceaa4015/geolookup/conditions/q/" + lat + "," + lon + ".json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var location1 = parsed_json['location']['city'];
                var location2 = parsed_json['location']['state'];
                var location = location1 + ", " +
                    location2;
                var temp_f = parsed_json['current_observation']['temp_f'];
                var relative_humidity = parsed_json['current_observation']['relative_humidity'];
                var wind_mph = parsed_json['current_observation']['wind_mph'];
                var UV = parsed_json['current_observation']['UV'];



                $("#cityDisplay").text(location);
                $("#currentTemp").text(temp_f + "f");
                $("#summary").text("Current temperature in " + location + " is: " + temp_f);
                $("#add1").text("The relative humidity is " + relative_humidity);
                $("#add2").text("The wind mph is " + wind_mph + "mph");
                $("#add3").text("The uv radiation is " + UV);
            }
        });



        cityDisplay.val(location);


        $("#cover").fadeOut(250);
    }
});



// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
