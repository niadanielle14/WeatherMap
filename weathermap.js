
function updateWeather (loc) {

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: loc[1],
        lon: loc[0],
        units: "imperial"
    }).done(function (data) {
        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current); // Current Data

        console.log('A step further - information for tomorrow: ', data.daily[1]); // Daily Data

        $('#current-weather').empty();
        $('#forecast').empty();


        data.daily.forEach(function (dailyforecast, index) {
            if (index < 1) {
                console.log(new Date(dailyforecast.dt * 1000)); // Current Date Display
                console.log(dailyforecast.temp.max)
                console.log(dailyforecast.humidity)
                console.log(dailyforecast.pressure)
                console.log(dailyforecast.wind_speed)
                console.log(dailyforecast.weather[0].description)
                console.log(data.current.weather[0].description)

                var html1 = '<div class="col card" >';
                html1 += "<p>" + new Date(data.current.dt * 1000) + "</p>";
                html1 += "<p><img src='http://openweathermap.org/img/wn/" + dailyforecast.weather[0].icon + "@2x.png'></p>"
                html1 += "<p> Temperature: " + data.current.temp.max + " °F</p>"
                html1 += "<p> Description: " + data.current.weather[0].description + " </p>"
                html1 += "<p> Humidity: " + data.current.humidity + "% </p>"
                html1 += "<p> Pressure: " + data.current.pressure + "</p>"
                html1 += "<p> Wind: " + data.current.wind_speed + " mph</p>"
                html1 += '</div>';
                $('#current-weather').append(html1);
            }

            if (index < 5) {
                var html = '<div class="col card" >';
                html += "<p>" + new Date(dailyforecast.dt * 1000) + "</p>";
                html += "<p><img src='http://openweathermap.org/img/wn/" + dailyforecast.weather[0].icon + "@2x.png'></p>"
                html += "<p> Temperature: " + dailyforecast.temp.max + " °F</p>"
                html += "<p> Description: " + dailyforecast.weather[0].description + " </p>"
                html += "<p> Humidity: " + dailyforecast.humidity + "% </p>"
                html += "<p> Pressure: " + dailyforecast.pressure + "</p>"
                html += "<p> Wind: " + dailyforecast.wind_speed + " mph</p>"
                html += '</div>';
                $('#forecast').append(html);
            }


            let current_datetime = new Date()
            console.log(current_datetime.toString()) // Creates Current Date


        })

    });
}

updateWeather([-98.48527, 29.423017]);


function tellCityName() {
    return $('#cityname')
}
console.log(tellCityName());

