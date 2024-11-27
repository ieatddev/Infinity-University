(function ($) {
  "use strict";

  // 1. Full Height Adjustment
  const setFullHeight = () => {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(() => {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  setFullHeight();

  // 2. Loader Removal
  const removeLoader = () => {
    setTimeout(() => {
      $("#ftco-loader").length && $("#ftco-loader").removeClass("show");
    }, 1);
  };
  removeLoader();

  // 3. Stellar Parallax
  $.stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  // 4. Owl Carousel Initialization
  const initCarousel = () => {
    $(".carousel-testimony").owlCarousel({
      center: false,
      loop: true,
      margin: 30,
      items: 1,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 },
      },
    });
  };
  initCarousel();

  // 5. Navbar Dropdown Hover Effect
  $("nav .dropdown").hover(
    function () {
      $(this).addClass("show").find("> a").attr("aria-expanded", true);
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show").find("> a").attr("aria-expanded", false);
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );

  // 6. Scroll-triggered Navbar Effects
  const handleScrollEffects = () => {
    const navbar = $(".ftco_navbar"),
      scrollWrap = $(".js-scroll-wrap");

    $(window).scroll(function () {
      const st = $(this).scrollTop();
      if (st > 150) {
        navbar.addClass("scrolled");
      } else {
        navbar.removeClass("scrolled sleep");
      }
      if (st > 350) {
        navbar.addClass("awake");
        scrollWrap.length && scrollWrap.addClass("sleep");
      } else {
        navbar.removeClass("awake").addClass("sleep");
        scrollWrap.length && scrollWrap.removeClass("sleep");
      }
    });
  };
  handleScrollEffects();

  // 7. Device Detection
  const isMobile = {
    Android: () => navigator.userAgent.match(/Android/i),
    BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
    iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: () => navigator.userAgent.match(/Opera Mini/i),
    Windows: () => navigator.userAgent.match(/IEMobile/i),
    any: function () {
      return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
    },
  };

  // 8. Counter Animation
  const initCounter = () => {
    const animateNumberStep = $.animateNumber.numberStepFactories.separator(",");
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(".number").each(function () {
            $(this).animateNumber(
              {
                number: $(this).data("number"),
                numberStep: animateNumberStep,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  initCounter();

  // 9. Content Animation
  const initContentAnimation = () => {
    $(".ftco-animate").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(this.element).addClass("item-animate");
          setTimeout(() => {
            $(".item-animate").each(function (k) {
              const el = $(this);
              const effect = el.data("animate-effect");
              el.addClass(`${effect || "fadeInUp"} ftco-animated`).removeClass("item-animate");
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  initContentAnimation();

  // 10. Magnific Popup
  const initMagnificPopup = () => {
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      zoom: {
        enabled: true,
        duration: 300,
      },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };
  initMagnificPopup();

  // 11. Show More Courses Functionality
  const initShowMoreCourses = () => {
    document.querySelector(".show-more").addEventListener("click", function () {
      const hiddenCourses = document.querySelectorAll(".courses-container .col-md-6:nth-child(n+7)");
      hiddenCourses.forEach((course) => {
        course.style.display = "flex"; // Show hidden courses
      });
      this.style.display = "none"; // Hide the button
    });
  };
  initShowMoreCourses();
})(jQuery);
