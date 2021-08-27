const ui = new UI();
const ft = new Fetch();

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
    ui.saveToLS(data);


  ft.getCurrent2(data).then((data2) =>{
    ui.populateNewsUi(data2)
  });
  });
});

