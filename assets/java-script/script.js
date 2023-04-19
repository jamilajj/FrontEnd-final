console.log("salam");

let btn = document.querySelector(".all_categories_btn");
let ddd = document.querySelector(".all_categories_list");
let list= document.querySelector(".header_section2");
btn.addEventListener("mouseover", function(){
    ddd.classList.remove("d-none");
})

list.addEventListener("mouseout", function(){
    ddd.classList.add("d-none");
})
let hov_li=document.querySelectorAll(".all_categories_btn.li");
// hov_li.addEventListener("mouseover",function(){
//     hov_li.classList.add(" background-color: blueviolet;");
// })