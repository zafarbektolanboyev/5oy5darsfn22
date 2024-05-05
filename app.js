import data from "./data.js";

const cards = document.getElementById("cards");


data(cards) 
    cards.forEach(({id, title, price, brand, category, thumbnail}) => {
        const cards = document.getElementById("card")

        cards.classList("product");

        cards.innerHTML = `
        <div class="card" id="card">
            <img src="${thumbnail}" alt="">
            <p>id :${id}</p><br>
            <p>title :${title}</p><br>
            <p>price :${price}</p><br>
            <p>brand :${brand}</p><br>
            <p>category :${category}</p><br>
        </div>
        `
        cards.appendChild(cards);
    })
console.log(cards)

