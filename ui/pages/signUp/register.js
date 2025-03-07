const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const registerForm = document.querySelector("#form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = nameInput.value;
  let userEmail = emailInput.value;
  let userPassword = passwordInput.value;
  if (userName && userEmail && userPassword) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        password: userPassword,
        email: userEmail,
      }),
    });
    window.location.href="../signIn/signIn.html"
  }else{
    alert("Melumatlari tam daxil edin")
  }
});
