let form = document.querySelector("#form");
let login = document.querySelector("#login");
let singin = document.querySelector("#singin");
login.addEventListener("click", loadLogIn);
singin.addEventListener("click", loadSingin);

function loadLogIn() {
  form.innerHTML = `<input type="email"  class="form-control" placeholder="Email address" />
    <input type="password"  class="form-control" placeholder="Password" />
    <a href="#!" class="text-dark"  class="form-control">Forgot password?</a>
    <button type="button" class="btn btn-primary btn-block mb-4 "id="submit">Login</button>`;
}

function loadSingin() {
  form.innerHTML = `
  <input type="text" required class="form-control" placeholder="Enter Your FirstName" id="firstname"/>
  <input type="text" required  class="form-control" placeholder="Enter Your LastName" />
  <input type="email" required   class="form-control" placeholder="Enter Your Email" />
  <input type="password" required   class="form-control" placeholder="Enter Your Password" />
    <button type="button" class="btn btn-primary btn-block mb-4 id="submit">SignIn</button>`;
}
