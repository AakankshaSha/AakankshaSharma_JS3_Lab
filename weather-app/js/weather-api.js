const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5b81cb0f315429769eaecea22d8e5e13";

class WeatherAPI {
  constructor(cityName) {
    this.cityName = cityName;
    this.apiUrl = new URL(API_BASE_URL);
  }

  async invoke() {
    this.buildURL();
    try {
      const response = await fetch(this.apiUrl.toString());
      const responseAsJSON = await response.json();
      console.log(responseAsJSON);
      return responseAsJSON;
    } catch (error) {
      console.log("Error while invoking the API");
      console.log(error);
      return;
    }

  }

  buildURL() {
    this.apiUrl.searchParams.append("q", this.cityName);
    this.apiUrl.searchParams.append("appid", API_KEY);
    this.apiUrl.searchParams.append("units", "metric");

    console.log(`URL is ${this.apiUrl}`);
  }
}

export { WeatherAPI }
