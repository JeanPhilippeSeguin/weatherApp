class Fetch {
    async getCurrent(input) {
      const myKey = "555064c60d984dd8bb4f296ce9716a8b";
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
      );
  
      const data = await response.json();

  
      console.log(data);
  
      return data;
    }
  }




