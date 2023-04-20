// console.log("salam");

// let btn = document.querySelector(".all_categories_btn");
// let ddd = document.querySelector(".all_categories_list");
// let list= document.querySelector(".header_section2");
// btn.addEventListener("mouseover", function(){
//     ddd.classList.remove("d-none");
// })

// list.addEventListener("mouseout", function(){
//     ddd.classList.add("d-none");
// })
// let hov_li=document.querySelectorAll(".all_categories_btn.li");
// hov_li.addEventListener("mouseover",function(){
//     hov_li.classList.add(" background-color: blueviolet;");
// })

// $(document).ready(function(){
//     $(".all_categories_btn button").click(function(){
//       $(".all_categories_list").slideToggle("slow");
//     });
//   });

$(function () {

    $('.first_section_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
   
   
})
window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1
    });
  };
  