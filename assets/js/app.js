$(function () {

  let mobileSearchIcon = document.querySelector(".mobile_search")
  let mobileSearchBody = document.querySelector("#search")
  let mobileMenuCross = document.querySelector(".mobile_menu_cross")

  mobileSearchIcon.addEventListener("click", function () {

    mobileSearchBody.classList.add("search_active")
  })

  mobileMenuCross.addEventListener("click", function () {
    mobileSearchBody.classList.remove("search_active")
  });

  // * BANNER ITEM FOR SLIDER *
  $('.sliders').slick({
    dots: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow: `<span class="prev"><iconify-icon icon="tdesign:arrow-left" width="24" height="24"></iconify-icon></span>`,
    nextArrow: `<span class="next"><iconify-icon icon="tdesign:arrow-right" width="24" height="24"></iconify-icon></span>`,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // *PRODUCT *
  $('.product_parent_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<span class="prev"><iconify-icon icon="tdesign:arrow-left" width="24" height="24"></iconify-icon></span>`,
    nextArrow: `<span class="next"><iconify-icon icon="tdesign:arrow-right" width="24" height="24"></iconify-icon></span>`,
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
          slidesToScroll: 1,
        }
      }
    ]
  });
  // *PRODUCT END*

  // * TOOLTIP *
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  // * TOOLTIP END*

  // * PRODUCT START *
  $('.category-button').categoryFilter();
  // * PRODUCT END *


  // * TIMER *
  $('.countDown').countdown({
    date: '12/24/2025 23:59:59'
  }, function () {
    alert('Merry Christmas!');
  });
  // * TIMER END*

  // * ADD CART SLIDER*
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    dots: false,
    vertical: true,
    centerMode: false,
    centerPadding: '0px',
    arrows: true,
    prevArrow: `<span class="up_arrow"><iconify-icon icon="solar:alt-arrow-up-linear" width="24" height="24"></iconify-icon></span>`,
    nextArrow: `<span class="down_arrow"><iconify-icon icon="solar:alt-arrow-down-linear" width="24" height="24"></iconify-icon></span>`,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        }
      },
    ],
  });
  // * ADD CART SLIDER end*



  $(function () {
    $(".example").imagezoomsl();
  });




  // ** VENOBOX *
  $('.venobox').venobox({

  });

  new VenoBox();
  // ** VENOBOX END*
})