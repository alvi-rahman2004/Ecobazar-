let mobileSearchIcon = document.querySelector(".mobile_search")
let mobileSearchBody = document.querySelector("#search")
let mobileMenuCross = document.querySelector(".mobile_menu_cross")


mobileSearchIcon.addEventListener("click",function(){

    mobileSearchBody.classList.add("search_active")
})

mobileMenuCross.addEventListener("click",function(){
    mobileSearchBody.classList.remove("search_active")
})