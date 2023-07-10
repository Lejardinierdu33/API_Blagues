const contBlag = document.getElementById("container_blagues");
const title = document.getElementById("title_blagues");
const text = document.getElementById("text_blagues");
const textHidden = document.getElementById("text_hidden");
const categorieBlagues = document.getElementById("categorie_blagues");
let resquestString = `https://api.blablagues.net/?rub=blagues`;
var url = 'https://api.blablagues.net/?rub=blagues'

async function success() {
    selectBlagues();
  let data = await fetch(resquestString);
  console.log(data);

  let response = await data.json();
  console.log(response);


  if (resquestString === url)
  {
  title.innerHTML = response.data.content["text_head"];
  text.innerHTML = response.data.content["text"];
  textHidden.innerHTML = response.data.content["text_hidden"];
  }
  else {
    title.innerHTML = response[0].data.content["text_head"];
    text.innerHTML = response[0].data.content["text"];
    textHidden.innerHTML = response[0].data.content["text_hidden"];
  }
}


function autosave() {
    if (sessionStorage.getItem("autosave")) {
        categorieBlagues.value = sessionStorage.getItem("autosave");
      }
      categorieBlagues.addEventListener("change", () => {
        sessionStorage.setItem("autosave", categorieBlagues.value);
      });
}

function selectBlagues() {
    if (categorieBlagues.value === "belges") {
        let urlBelges = "para=[{%22rub%22:%22blagues%22,%22cat%22:%22belges%22}]";
        resquestString = url.replace("rub=blagues", urlBelges);
    }
    else if (categorieBlagues.value === "blondes") {
        let urlBlonde = "para=[{%22rub%22:%22blagues%22,%22cat%22:%22blondes%22}]";
        resquestString = url.replace("rub=blagues", urlBlonde);
    }
    else if (categorieBlagues.value === "animaux"){
        let urlAnimaux = "para=[{%22rub%22:%22blagues%22,%22cat%22:%22animaux%22}]";
        resquestString = url.replace("rub=blagues", urlAnimaux);
    }
    else if (categorieBlagues.value === "devinettes") {
        let urlDevinettes = "para=[{%22rub%22:%22blagues%22,%22cat%22:%22devinettes%22}]";
        resquestString = url.replace("rub=blagues", urlDevinettes);
    }
    else {
    }
}

contBlag.addEventListener("click", (e) => {
    e.stopPropagation();
  });
document.body.addEventListener("click", () => {
    success();
});

selectBlagues();  
success();
