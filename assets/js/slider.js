(function($) {
  
  (function() {
    'use strict';
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;
    const breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
        } else if ( breakpoint.matches === false ) {
          return enableSwiper();
        }
    };
    const enableSwiper = function() {
      mySwiper = new Swiper ('.swiper-container-episodes', {
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        threshold: 10,
      });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();

  (function() {
    'use strict';
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper2;
    const breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
      if ( mySwiper2 !== undefined ) mySwiper2.destroy( true, true );
      return;
        } else if ( breakpoint.matches === false ) {
          return enableSwiper();
        }
    };
    const enableSwiper = function() {
      mySwiper2 = new Swiper ('.swiper-container-guests', {
        loop: true,
        slidesPerView: 1.4,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        threshold: 10,
      });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();

  (function() {
    'use strict';
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper3;
    const breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
      if ( mySwiper3 !== undefined ) mySwiper3.destroy( true, true );
      return;
        } else if ( breakpoint.matches === false ) {
          return enableSwiper();
        }
    };
    const enableSwiper = function() {
      mySwiper3 = new Swiper ('.portfolio-slider', {
        // loop: true,
        slidesPerView: 1.4,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          575: {
            slidesPerView: 2.2,
          },
          767: {
            slidesPerView: 2.6,
          },
        },
        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        threshold: 10,
      });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();

  const swiper = new Swiper(".testimonials-slider", {
    spaceBetween: 30,
    // slidesPerView: 1,
    speed: 1500,
    // loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2.2,
      },
      1200: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3.2,
        spaceBetween: 30,
      },
      1820: {
        slidesPerView: 3.2,
        spaceBetween: 30,
      },
    },
  });
  

  const swiperreviews = new Swiper(".swiper-container-reviews", {
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

})(jQuery);