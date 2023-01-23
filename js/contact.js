//craeate contact Page :
const contactUscontainer = document.querySelector(".contactUs-container");
const div = document.createElement("div");
div.classList.add("left-section");
div.innerHTML = `<img src="../img/book.jfif" > `;
const div2 = document.createElement("div");
div2.classList.add("right-section");
div2.innerHTML = `<h2>Request CallBack</h2>
<form action="" class="form-contact d-flex">
<input type="text" placeholder="Enter Name">
<input type="email" placeholder="Enter Email">
<textarea cols="30" rows="5" placeholder="Enter Message" class="m-2"></textarea>
<a href="" class="form-btn">Send</a>
</form>`;


contactUscontainer.append(div, div2);
