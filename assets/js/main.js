  // menu
window.onload = function () {
  window.addEventListener('scroll', function(e) {
      if (window.pageYOffset > 100) {
          document.querySelector("header").classList.add('is-scrolling');
      } else {
          document.querySelector("header").classList.remove('is-scrolling');
      }
  });

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  })
}


// owl-slider
document.addEventListener('DOMContentLoaded', function () {
  featuredSlider();
});

featuredSlider = ()=> {
  $('.reviews .owl-carousel, .technoloies .owl-carousel').owlCarousel({
      loop:true,
      margin:25,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayInterval:20000,
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
}


// accordion 
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});


//back to top
  $(function(){
    $("body").append('<div class="backtotop"><i class="fa fa-angle-up" aria-hidden="true"></i></div>');
      $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
          $('.backtotop').fadeIn();
        } else {
          $('.backtotop').fadeOut();
        }
      });

    $(".backtotop").click(function(){	
        $("html, body").animate({scrollTop: 0}, 1000);
    }); 
  });
  
  // window Load 
  $(window).on('load',function(){
    setTimeout(function(){
      $('.overlay').fadeOut('slow');
    },2500);
  });