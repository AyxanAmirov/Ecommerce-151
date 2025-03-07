let navIconsBody = document.querySelector("#nav-icons");
const homeProducts = document.querySelector(".home-products");
window.addEventListener("DOMContentLoaded", () => {
  let user = localStorage.getItem("id");
  if (user) {
    navIconsBody.innerHTML += `
        <i class="fa-solid fa-right-from-bracket nav-icon"  onclick="logOut()"></i>

        `;
  } else {
    navIconsBody.innerHTML += `
        <a href="../signIn/signIn.html"><i class="fa-regular fa-user nav-icon"></i></a>

        `;
  }
  addProductUi()
});

function logOut() {
  localStorage.removeItem("id");
  window.location.href = "../signIn/signIn.html";
}

function addProductUi(){
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(data=>{
        data.slice(0,4).forEach(product=>{
            homeProducts.innerHTML+= `
            <div class="col-lg-3 p-10">
                    <div class="product-box">
                        <img src="${product.image}" alt="product"
                            class="product-img">
                        <div class="products-info">
                            <p class="category-name">${product.category}</p>
                            <p class="product-name">${product.title}</p>
                            <p class="product-price">${product.price}</p>
                        </div>
                        <div class="add-icons">
                            <i class="fa-solid fa-cart-shopping add-icon"></i>
                            <i class="fa-solid fa-heart add-icon"></i>
                        </div>
                    </div>

                </div>
            `
            
        })
    })
}