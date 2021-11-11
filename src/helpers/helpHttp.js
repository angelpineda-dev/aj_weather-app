import Swal from "sweetalert2";

//const WEATHER_KEY = "ddb12dfe0c97dfe3a4fc0222612c0e9c";
const WEATHER_KEY = "a4091adafda6b36daf58b1d0213f12b8";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const helpHttp = () => {
  const customFetch = async (url) => {
    let data = null;
    let err = null;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        err = new Error("Error fetching city");
        err.status = res.status;
        err.statusText = res.statusText;
        throw err;
      }

      data = await res.json();
      err = null;

      return { data, err };
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No city found",
        text: "Please try with a valid city name",
      });

      data = null;
      err = error;

      return { data, err };
    }
  };

  const current = (cityName) => {
    const URL = `${BASE_URL}weather?q=${cityName}&appid=${WEATHER_KEY}&units=metric`;

    return customFetch(URL);
  };

  const citiesById = (id) => {
    const URL = `${BASE_URL}weather?id=${id}&appid=${WEATHER_KEY}&units=metric`;

    return customFetch(URL);
  };

  return {
    current,
    citiesById,
  };
};
