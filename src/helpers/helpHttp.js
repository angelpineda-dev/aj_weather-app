const WEATHER_KEY = "ddb12dfe0c97dfe3a4fc0222612c0e9c";
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
      console.error(error);

      data = null;
      err = error;

      return { data, err };
    }
  };

  const current = (cityName) => {
    const URL = `${BASE_URL}weather?q=${cityName}&appid=${WEATHER_KEY}&units=metric`;

    return customFetch(URL);
  };

  return {
    current,
  };
};
