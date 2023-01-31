//craeate contact Page :
const contactUscontainer = document.querySelector(".contactUs-container");
const div = document.createElement("div");
div.classList.add("left-section");
div.innerHTML = `<img src="../img/book.jfif" > `;
const div2 = document.createElement("div");
div2.classList.add("right-section");
div2.innerHTML = `<h2>Request CallBack</h2>
<form action="" class="form-contact d-flex">
<input type="text" class="username" placeholder="Enter Name">
<p class="parasDescriptionUser"></p>
<input type="email" class="email" placeholder="Enter Email">
<p class="parasDescriptionEmail"></p>
<textarea cols="30" rows="5" placeholder="Enter Message" class="m-2"></textarea>
<button type="submit" class="form-btn" value="Send">Send</button>
</form>`;
contactUscontainer.append(div, div2);

const form = document.querySelector(".form-contact");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector(".username");
  const parasDescriptionUser = document.querySelector(".parasDescriptionUser");
  const parasDescriptionEmail = document.querySelector(
    ".parasDescriptionEmail"
  );
  const email = document.querySelector(".email");
  const formPattern = /[a-zA-Z]{3,12}/;
  const formPatternEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (formPattern.test(username.value) && formPatternEmail.test(email.value)) {
    parasDescriptionUser.textContent = "this is valid User :)";
    parasDescriptionUser.style.color = "green";
    parasDescriptionEmail.textContent = "this is valid Email :)";
    parasDescriptionEmail.style.color = "green";
  } else {
    parasDescriptionEmail.textContent = "cheack your input values Email:(";
    parasDescriptionUser.textContent = "cheack your input values UserName:(";
    parasDescriptionEmail.style.color = "red";
    parasDescriptionUser.style.color = "red";
  }
});
