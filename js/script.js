window.addEventListener("load", () =>
   document.querySelector(".preloader").classList.add("hidePreloader")
);

let card = document.querySelectorAll(".car-card");
let show = document.querySelector(".show");
let hide = document.querySelector(".hide");
let container = document.querySelector(".row-container");

let dataApi = [];
const getDataFromApiFitst = async () => {
  try {
    const respons = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=search+terms"
    );
    if (respons.status <= 299 && respons.status >= 200) {
      data = await respons.json();
      dataApi = data.items;
    } else if (respons.status === 404) {
      throw "error 404";
    } else {
      throw "unknown error";
    }
  } catch (eroor) {
    console.log(eroor);
  }
  getDataCard();

};
let itemsApi = [];
const getDataFromApiSecond = async () => {
  try {
    const responsSecond = await fetch(
      "https://www.abibliadigital.com.br/api/books"
    );
    // itemsApi = await responsSecond.json();
    if (responsSecond.status <= 299 && responsSecond.status >= 200) {
      itemsApi = await responsSecond.json();
    } else if (responsSecond.status === 404) {
      throw "error 404";
    } else {
      throw "unknown error";
    }
  } catch (eroor) {
    console.log(eroor);
  }
  getdatacardbooks();
  //prop();
};
function getDataCard() {
  let img = document.querySelectorAll(".book-img");
  let cardFooter = document.querySelectorAll(".card-footer");
  let description = document.querySelectorAll(".similar-prop");
  let languege = document.querySelectorAll(".lan");
  dataApi.forEach((item, i) => {
    if (img[i] && cardFooter[i]) {
      img[i].src = item.volumeInfo.imageLinks.thumbnail;
      cardFooter[
        i
      ].innerHTML = `<span class="publisher"><i class="fas fa-book"></i> <span>publisher: ${item.volumeInfo.publisher}</span></span><span class="group"> <i class="fa fa-users"></i> <span>group: ${item.volumeInfo.printType}</span></span>`;
    }
    if (description[i] && languege[i]) {
      description[i].innerHTML = `TITLE: ${item.volumeInfo.title}`;
      languege[i].innerHTML = `language ${item.volumeInfo.language}`;
    }
  });
}

function getdatacardbooks() {
  let authorName = document.querySelectorAll(".author");
  let bookName = document.querySelectorAll(".model");
  let chapters = document.querySelectorAll(".chapters");
  itemsApi.forEach((item, i) => {
    if (authorName[i]) {
      authorName[i].innerHTML = `author: ${item.author}`;
      bookName[i].innerHTML = `Name: ${item.name}`;
      chapters[i].innerHTML = `chapters:${item.chapters}`;
    }
  });
}


let cards = document.querySelectorAll(".card");
const input = document.querySelector(".search");
cards.forEach((ele) => {
  hide.addEventListener("click", () => {
    ele.style.display = "none";
  });
  show.addEventListener("click", () => {
    ele.style.display = "block";
  });
});
//if (input.value === "") getDataCard();
// input.addEventListener("keyup", (e) => {
//   const searchTerm = e.target.value.toLowerCase();
//   let myArr = [];
//   itemsApi.map((p) => {
//     if (Object.values(p).join(" ").toLowerCase().includes(searchTerm)) {
//       myArr.push(p);
//     }
//     getDataCard(myArr);

//     //console.log(getdatacardbooks(myArr));
//   });
// });

// const search = document.querySelector(".search");
// let x = document.querySelectorAll(".card");
// let Name = document.querySelectorAll(".model");
// search.addEventListener("keyup", (e) => {
//   input = e.target.value.toLowerCase();
//   for (let i = 0; i < Name.length; i++) {
//     //console.log(x[i].innerHTML);
//     if (Name[i].innerHTML.includes(input)) {
//       card[i].style.display = "flex";
//     } else {
//       card[i].style.display = "none";
//     }
//   }
// });

getDataFromApiFitst();
getDataFromApiSecond();
