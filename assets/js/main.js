(function($) {

  // var wow = new WOW({
  //   boxClass: 'wow',
  //   animateClass: 'animated',
  //   offset: 0,
  //   mobile: false,
  //   live: true,
  //   scrollContainer: null,
  //   });
  // wow.init();

  $(".btn-join-now").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(".section_mentor").offset().top - 20 // Отступ в 20px
    }, 600); // 600 мс для плавного скролла
  });

  $(window).scroll(function(){
    // Show button after 100px
    var showAfter = 100;
    if ($(this).scrollTop() > showAfter ) { 
     $('.back-to-top').fadeIn();
    } else { 
     $('.back-to-top').fadeOut();
    }
  });
   
   //Click event to scroll to top
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - $(window).height();;
      if ($(window).scrollTop() > navHeight) {
          $('#header').addClass('on');
      } else {
          $('#header').removeClass('on');
    }
  });

  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;

  function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
          sections[index].scrollIntoView({ behavior: "smooth" });
          currentIndex = index;
      }
  }

  document.getElementById("scrollDown").addEventListener("click", () => {
      if (currentIndex < sections.length - 1) {
          scrollToSection(currentIndex + 1);
      }
  });

  document.getElementById("scrollUp").addEventListener("click", () => {
      if (currentIndex > 0) {
          scrollToSection(currentIndex - 1);
      }
  });

  window.addEventListener("scroll", () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
          let distance = Math.abs(section.getBoundingClientRect().top);
          if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
          }
      });

      currentIndex = closestIndex;
  });

  (function($) {
    'use strict'
      document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  });


})(jQuery);