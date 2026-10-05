

const container = document.getElementById("card-container");


const search = document.getElementById('search');   
const input = document.getElementById("input");

 const url= "https://http.cat/";

search.addEventListener("click",()=>{
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    const value = input.value;;
   image.src = `${url}${value}`
   card.append(image);

   container.append(card);

})




