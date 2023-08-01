const search = document.querySelector(".search");
const btn = document.querySelector(".search button");
const input = document.querySelector(".search input");

btn.addEventListener("click",function(){
    search.classList.toggle("active");
    input.focus();
})