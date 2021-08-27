class Fetch {
    async getCurrent(input) {
      const myKey = "555064c60d984dd8bb4f296ce9716a8b";
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
      );
      const data = await response.json();
    console.log(data);

    return data
    }

    async getCurrent2(data){
      const response2 = await fetch(`https://gnews.io/api/v4/top-headlines?&token=463e3769b0c5591447a533c3495956dc&country=${data.sys.country.toLowerCase()}`);

      const data2 = await response2.json()
      console.log(data2)
      return data2
    }
  }

  






