$('#query').keyup(function () {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data); // test for JSON received
        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function (key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page


        console.log(data);



    }); // end getJSON


    $("#searchResults").on("click", "a", function (evt) {
        evt.preventDefault();
        var i = $(this).index('a');
        console.log(i);
        $("#searchResults").hide();
        $("#resultsHeading").hide();
        $("#iconFig").show();
        var city = $(this).text(); // Franklin, etc...
        console.log(city);
        getData(i.lat, i.lon);




    }); // end onkeyup




    // Get weather data from wunderground.com
    function getData(lat, lon) {
        var cityDisplay = $('.cityDisplay');

        $.ajax({
            url: "https://api.wunderground.com/api/9fc78788ceaa4015/geolookup/conditions/q/" + lat + "," + lon + ".json",
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
