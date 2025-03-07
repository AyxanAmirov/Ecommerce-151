const signForm = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

signForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;
  if (email && password) {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        let user = data.find((user) => user.email == email);
        if(user){
            if (user.password == password) {
                localStorage.setItem("id", JSON.stringify(user.id));
                window.location.href = "../home/index.html";
              }else{
                 alert("email ve ya sifre yanlisdir") 
              }
        }else{
            alert("email ve ya sifre yanlisdir") 
         }
      });
  }
});
