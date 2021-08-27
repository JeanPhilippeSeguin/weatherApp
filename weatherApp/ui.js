class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.newsContainer = document.getElementById('newsContainer')
      this.city;
    }
    
  
    populateUI(data) {
        
    this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}, ${data.sys.country}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max }. Lows of ${data.main.temp_min}</h6>
                  <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                  
              </div>
          </div>
          
          
          `
        }
    
    
    populateNewsUi(data2){
        this.newsContainer.innerHTML =
    `<div class="row d-flex justify-content-center">
            <div class="card newsCard" style="width: 18rem; height:30rem">
                <img class="card-img-top" src="${data2.articles[0].image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${data2.articles[0].title}</h5>
                <p class="card-text">${data2.articles[0].description.substring(0,200)}</p>
                <a href="${data2.articles[0].url}" target="#" class="newsSource">${data2.articles[0].source.name}</a>
                </div>
            </div>
            <div class="card newsCard" style="width: 18rem; height:30rem;">
                <img class="card-img-top" src="${data2.articles[1].image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${data2.articles[1].title}</h5>
                <p class="card-text">${data2.articles[1].description.substring(0,200)}</p>
                <a href="${data2.articles[1].url}" target="#" class="newsSource">${data2.articles[1].source.name}</a>
                </div>
            </div>
            <div class="card newsCard" style="width: 18rem; height:30rem">
                <img class="card-img-top" src="${data2.articles[2].image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${data2.articles[2].title}</h5>
                <p class="card-text">${data2.articles[2].description.substring(0,200)}</p>
                <a href="${data2.articles[2].url}" target="#" class="newsSource">${data2.articles[2].source.name}</a>
                </div>
            </div>
            <div class="card newsCard" style="width: 18rem; height:30rem">
                <img class="card-img-top" src="${data2.articles[3].image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${data2.articles[3].title}</h5>
                <p class="card-text">${data2.articles[3].description.substring(0,200)}</p>
                <a href="${data2.articles[3].url}" target="#" class="newsSource">${data2.articles[3].source.name}</a>
                </div>
            </div>
        </div>`
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }