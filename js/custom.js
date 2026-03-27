
$(document).ready(function() {
    $(window).scroll(function() {
     if ($(document).scrollTop() > 0) {
          $("header").addClass("headerfixed");
        } else {
    $("header").removeClass("headerfixed");
        }
      });
});
   
$(document).ready(function(){
    var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
    var rootElement = document.documentElement;
    
    function handleScroll() {
      // Do something on scroll
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.3) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
      } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
      }
    }
    
    function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
  });


$('.main_banner').owlCarousel({
  loop:true,
  margin:0,
  dots:true,
  nav:false,
  autoplay:false,
//autoplayTimeout:3000,
  items:1,
  responsive:{
      0:{
          items:1
      },
      992:{
          items:1
      }
  }
})



$('.popular_products_slider').owlCarousel({
  loop:true,
  margin:30,
  dots:true,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      992:{
          items:3
      },
	  767:{
          items:2
      },
      
  }
})





$('.major_clients_slider').owlCarousel({
  loop:true,
  margin:10,
  dots:true,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
	  1024:{
          items:4
      },
      992:{
          items:3
      },
      767:{
          items:3
      },
	  576:{
          items:3
      },
    481:{
          items:3
      },
    401:{
          items:2
      }
  }
})





$('.owl-testi').owlCarousel({
  loop:true,
  margin:0,
  dots:false,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      992:{
          items:1
      }
  }
})



document.addEventListener('DOMContentLoaded', function() {
  const inputBoxes = document.querySelectorAll('.cont-frmgrp');
  inputBoxes.forEach(box => {
      const inputElements = box.querySelectorAll('input, select, textarea');

      inputElements.forEach(input => {
          input.addEventListener('input', function() {
              if (input.value) {
                  box.classList.add('active');
              } else {
                  box.classList.remove('active');
              }
          });
          if (input.tagName.toLowerCase() === 'select') {
              input.addEventListener('change', function() {
                  if (input.value) {
                      box.classList.add('active');
                  } else {
                      box.classList.remove('active');
                  }
              });
          }
          if (input.value) {
              box.classList.add('active');
          } else {
              box.classList.remove('active');
          }
      });
  });
});



$(".js-example-matcher").select2({ });

   $(document).ready(function() {
    
    $('#productSelect, #serviceSelect').select2({
        minimumResultsForSearch: Infinity,
        placeholder: function() {
            return $(this).data('placeholder');
        },
        allowClear: true
    }).next(".select2-container").hide(); 
    $("input[name='prod-serv']").on("change", function() {
        if ($(this).val() === "products") {
            $(".product-box").show(); 
            $(".service-box").hide(); 

            $('#productSelect').next(".select2-container").show();
            $('#serviceSelect').next(".select2-container").hide(); 
        } else if ($(this).val() === "services") {
            $(".product-box").hide(); 
            $(".service-box").show();

            $('#serviceSelect').next(".select2-container").show(); 
            $('#productSelect').next(".select2-container").hide(); 
        }
    });
});
