window.addEventListener("load", () => {
  let weather = {
    apiKey: "0781b17db05d10aa388fa867a87f6b24",
    fetchWeather: function (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=0781b17db05d10aa388fa867a87f6b24`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.displayWeather(data);
        });
    },

    displayWeather: function (data) {
      console.log("[debug]", data, "datas");
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;

      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity:" + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind Speed:" + speed + "km/h";
      document.body.style.backgroundImage =
        "url('http://source.unsplash.com/1600x900/?weather" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };

  document
    .querySelector(".search button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      weather.search();
    });
});
