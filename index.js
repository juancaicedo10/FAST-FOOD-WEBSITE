

  const cart = document.querySelector(".products-container");
  console.log(cart)

const arrows = document.querySelectorAll("i");
const slider = document.querySelector(".food-container");
const products = document.querySelectorAll(".slider > .food-container > div");


arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const productWidth = products[0].clientWidth; // Tomamos el ancho del primer elemento
        if (arrow.id === "left") {
            slider.scrollBy({
                left: -productWidth,
                behavior: "smooth"
            });
        } else if (arrow.id === "right"){
            slider.scrollBy({
                left: productWidth,
                behavior: "smooth",
                inline: "start"
            });
        }
    });
});

const navButtons = document.querySelectorAll(".navbar ul li");

navButtons.forEach(button => {
  button.addEventListener("click", () => {

    if(button.id === "products") {
      const products = document.querySelector(".products")
      products.scrollIntoView({behavior: "smooth"})
    }else if (button.id === "about"){
      const about = document.querySelector(".about");
      about.scrollIntoView({
        behavior:"smooth"
      }) 
    }else {
      const contact = document.querySelector(".contact");

      contact.scrollIntoView({
        behavior:"smooth"
      })
    }
  })
})

const productsList = document.querySelector(".product ul")
const hamburger = document.querySelector(".product li.hamburger");
const hotDog = document.querySelector(".product li.hot-dog");
const pizza = document.querySelector(".product li.pizza");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const hotDogBtn = document.querySelector("#hot-dogBtn");
const pizzaBtn = document.querySelector("#pizzaBtn");


hamburgerBtn.addEventListener("click", () => {
  scrollToElement(hamburger);
  hamburgerBtn.style.borderBottom = "5px solid red";
  hotDogBtn.style.borderBottom = "";
  pizzaBtn.style.borderBottom = "";
});

hotDogBtn.addEventListener("click", () => {
  scrollToElement(hotDog);
  hotDogBtn.style.borderBottom = "5px solid red";
  hamburgerBtn.style.borderBottom = "none";
  pizzaBtn.style.borderBottom = "";
});

pizzaBtn.addEventListener("click", () => {
  scrollToElement(pizza);
  pizzaBtn.style.borderBottom = "5px solid red";
  hamburgerBtn.style.borderBottom = "none";
  hotDogBtn.style.borderBottom = "";
});

function scrollToElement(element) {
 const elementOffsetLeft = element.offsetLeft;
 const containerOffsetLeft = productsList.offsetLeft;
 const scrollLeft = elementOffsetLeft - containerOffsetLeft;

 productsList.scrollTo({
  left: scrollLeft,
  behavior: "smooth",
 })
}

const addButton = document.querySelectorAll(".product button");

console.log(addButton)

addButton.forEach(button => {
  button.addEventListener("click", addToCart)
})

function addToCart(event) {
  const button = event.target;

  if (button.classList.contains("disabled")) {
    return;
  }

  button.innerHTML = "IN CART";

  button.classList.add("disabled");
}

function iniciarMap(){
  var coord = {lat:6.1533333333333 ,lng: -75.374166666667};
  var map = new google.maps.Map(document.querySelector(".map"),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

const contactInputs = document.querySelectorAll("form input")

contactInputs.forEach(input => {
  input.addEventListener("input", () => {
    if(input.id == "nameInput") {
      input.value = input.value.replace(/\b\w/g, char => char.toLocaleUpperCase())
                               .replace(/[^a-zA-Z\s]+/g, "");
    }else if (input.id == "emailInput") {
      input.value = input.value.replace(/\s/, "")
    }else {
      input.value = input.value.replace(/[^0-9]/g, "")
    }
  })
});


const contactButton = document.querySelector("form button");

contactButton.addEventListener("click", () => {
const form = document.querySelector("form");

form.innerHTML = `<h1>Thanks for get in touch we'll contact you as soon as posible</h1>`;
})

