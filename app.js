const shoppingBag = document.getElementsByClassName("bag-icon")[0];
const heroButton = document.getElementsByClassName("hero-button")[0]

heroButton.addEventListener("mouseover", () => {
    shoppingBag.style.color = "black"
    shoppingBag.style.transition = "all 1s"
})

heroButton.addEventListener("mouseout", () => {
    shoppingBag.style.color = "#dcdfe4"
    shoppingBag.style.transition = "all 1s"
})