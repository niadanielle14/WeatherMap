$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current); // Current Data

    console.log('A step further - information for tomorrow: ', data.daily[1]); // Daily Data



    data.daily.forEach(function (dailyForcast, index){
        if (index < 5 ){
            console.log(new Date(dailyForcast.dt*1000)); // Current Date Display
            console.log(dailyForcast.temp.max)
            console.log(dailyForcast.humidity)
            console.log(dailyForcast.pressure)
            console.log(dailyForcast.wind_speed)
            console.log(dailyForcast.weather[0].description)
            console.log(data.current.weather[0].description)

            var html1 = '<div class="col card" >';
            html1 += "<p>" + new Date(data.current.dt*1000) + "</p>";
            html1 += "<p><img src='http://openweathermap.org/img/wn/" + dailyForcast.weather[0].icon + "@2x.png'></p>"
            html1 += "<p> Temperature: " + data.current.temp.max + " °F</p>"
            html1 += "<p> Description: " + data.current.weather[0].description + " </p>"
            html1 += "<p> Humidity: " + data.current.humidity + "% </p>"
            html1 += "<p> Pressure: " + data.current.pressure + "</p>"
            html1 += "<p> Wind: " + data.current.wind_speed + " mph</p>"
            html1 += '</div>';
            $('#current-weather').append(html1);



            var html = '<div class="col card" >';
            html += "<p>" + new Date(dailyForcast.dt*1000) + "</p>";
            html += "<p><img src='http://openweathermap.org/img/wn/" + dailyForcast.weather[0].icon + "@2x.png'></p>"
            html += "<p> Temperature: " + dailyForcast.temp.max + " °F</p>"
            html += "<p> Description: " + dailyForcast.weather[0].description + " </p>"
            html += "<p> Humidity: " + dailyForcast.humidity + "% </p>"
            html += "<p> Pressure: " + dailyForcast.pressure + "</p>"
            html += "<p> Wind: " + dailyForcast.wind_speed + " mph</p>"
            html += '</div>';
            $('#forcast').append(html);

        }

        let current_datetime = new Date()
        console.log(current_datetime.toString()) // Creates Current Date


    })

});
