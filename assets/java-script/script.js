// console.log("salam");


$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

})

$(function () {
  // eye function==================================
  function show() {
    let p = document.getElementById('password');
    p.setAttribute('type', 'text');
  }

  function hide() {
    let p = document.getElementById('password');
    p.setAttribute('type', 'password');
  }

  let pwShown = 0;

  document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  }, false);



})
// section2==========================================
window.onload = function () {
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
};



$(function () {
  $('.section11_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.toggle-menu').click(function () {
    $('.exo-menu').toggleClass('display');

  });
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
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



  $('.5_section_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


});

// section4 slider cardlarin
const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is-active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  document.querySelector("#" + content).classList.add("is-active");
  btnTarget.classList.add("is-active");
}
// first section slider=============================================
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
});

$(document).ready(function () {
  //basket

  let cardBtns = document.querySelectorAll("#tab-menu .tab .tab-bar .cards .product-card .add-btn button");

  let products = [];


  if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));

  }
  cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector("#nav-area .chek-card-box .alert").classList.add("d-none")
      document.querySelector("#nav-area .chek-card-box .subtotal").classList.remove("d-none")

      let productImage = this.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");
      let productName = this.parentNode.parentNode.children[2].children[1].innerText;
      let productPrice = parseInt(this.parentNode.parentNode.children[3].children[1].children[0].innerText);
      let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

      let existProduct = products.find(m => m.id == productId);

      if (existProduct != undefined) {
        existProduct.count += 1;
        existProduct.price = productPrice * existProduct.count;
      }
      else {

        products.push({
          id: productId,
          img: productImage,
          name: productName,
          price: productPrice,
          count: 1

        })

      }

      localStorage.setItem("basket", JSON.stringify(products));


      getBasketCount();
      chekCard()
      subTotal();
      deleteIcons()

    })
  });







  function getBasketCount() {
    let sum = 0;

    for (const item of products) {

      sum += item.count;
    }

    document.querySelector(".count").innerText = sum;
    document.querySelector(".check-card .count").innerText = sum + " ITEM";

  }

  getBasketCount();


  //basket icon 

  $(document).on("click", "#nav-area .cart", function (e) {
    e.preventDefault()

    $(".chek-card-box").toggleClass("d-none");


  });





  //Check-card

  function chekCard() {
    let chekCard = document.querySelector("#nav-area .chek-card-item")

    chekCard.innerHTML = "";
    for (const product of products) {
      let nativePrice = product.price / product.count;
      document.querySelector("#nav-area .chek-card-box .alert").classList.add("d-none")
      document.querySelector("#nav-area .chek-card-box .subtotal").classList.remove("d-none")
      chekCard.classList.remove("d-none")

      chekCard.innerHTML += `
        <div class="chek-card-item" data-id = ${product.id}>
            <div class="product-detail">
                <div class="text">
                    <p>${product.name}</p>
                    <span>${product.count} x ${nativePrice}</span>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-trash-can delete-icon"></i>
                </div>
            </div>
        </div>
       `
    }

  }


  chekCard()


  //checkCard total

  function subTotal() {
    let sum = 0;
    for (const product of products) {
      sum += product.price;
    }
    document.querySelector(".subtotal span").innerText = `$${sum}.00`;
    document.querySelector(".basket-subtotal ").innerText = `$${sum}.00`;

  }

  subTotal();




  //delete from check card

  function deleteFromChekCard(id) {
    products = products.filter(m => m.id != id)

    localStorage.setItem("basket", JSON.stringify(products));
    subTotal();
    getBasketCount()
  }




  function deleteIcons() {
    let deletIcons = document.querySelectorAll("#nav-area .chek-card-box .chek-card-item .icon .delete-icon");
    deletIcons.forEach(deletIcon => {

      deletIcon.addEventListener("click", function () {
        let id = this.parentNode.parentNode.parentNode.getAttribute("data-id")
        deleteFromChekCard(id);
        this.parentNode.parentNode.remove();


        if (products.length == 0) {
          localStorage.removeItem("basket")
          document.querySelector("#nav-area .chek-card-box .alert").classList.remove("d-none")
          document.querySelector("#nav-area .chek-card-box .subtotal").classList.add("d-none")
          document.querySelector("#nav-area .check-border").classList.add("d-none")
        }

      })
    });
  }

  deleteIcons();

  //responsiv navbar

  $(document).on("click", ".hamburger-menu", function () {
    $(".sidebar").removeClass("hide-sidebar");
    $("#overlay").css("display", "block")
  })

  $(document).on("click", ".x-icon", function () {
    $(".sidebar").addClass("hide-sidebar");
    $("#overlay").css("display", "none")
  })

  $(document).on("click", ".sidebar-pages", function (e) {
    e.preventDefault()
    $(".sidebar-pages-list").toggleClass("d-none");
  })
})






