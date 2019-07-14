function weatherService() {
  const store = {
    Montreal: "https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt",
    Toronto: "https://www.theweathernetwork.com/api/obsdata/caon0696/c?ref=rt"
  };

  return {
    getWeather: async function(city) {
      let url = store[city];
      let response = await fetch(url);
      return await response;
    }
  };
}

export default weatherService;
