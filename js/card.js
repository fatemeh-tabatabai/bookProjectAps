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
  MoreBooke();
};
const discription = document.querySelector(".discription");
function MoreBooke() {
  dataApi.forEach((item, i) => {
    const p = document.createElement("p");
    const h4 = document.createElement("h4");
    p.classList.add('card' , 'p-3')
    const img = document.createElement("img");
    if (!(item.volumeInfo.description == undefined)) {
      img.src = item.volumeInfo.imageLinks.thumbnail;
      h4.innerHTML=`TiTLE: ${item.volumeInfo.title}`
      p.innerHTML = `DISCRIPTION :${item.volumeInfo.description}`;
      discription.append(img,h4, p);
    }
  });
}
getDataFromApiFitst();
