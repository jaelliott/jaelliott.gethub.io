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
            url: "https://api.wunderground.com/api/9fc78788ceaa4015/geolookup/astronomy/q/" + lat + "," + lon + ".json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var location1 = parsed_json['location']['city'];
                var location2 = parsed_json['location']['state'];
                var location = location1 + ", " + location2;
                var percent_illuminated = parsed_json['moon_phase']['percentIlluminated'];
                var ageOfMoon = parsed_json['moon_phase']['ageOfMoon'];
                var sunset1 = parsed_json['moon_phase']['sunset']['hour'];
                var sunset2 = parsed_json['moon_phase']['sunset']['minute'];
                var sunset = sunset1 + ":" + sunset2;
                $("#cityDisplay").text(location);
                $("#percentIlluminated").text("The percent illuminated is  " + percent_illuminated);

                $("#ageOfMoon").text("The age Of Moon is  " + ageOfMoon);

                $("#sunset").text("Sun set is " + sunset);

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
