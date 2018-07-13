$(window).on("load", function() {
  // =============================================
  // Sticky header

  const header = $(".fixedHeaderContainer");

  if ($(".sideNavVisible").length == 0) {
    $(window).on("scroll", function() {
      let scrollTop = window.pageYOffset;

      if (scrollTop >= 10) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  }

  // =============================================
  // Featherlight

  $(".post img, .featherGallery img, img.featherGallery").featherlightGallery({
    targetAttr: "src",
    persist: true,
    previousIcon: "&#9664;",
    nextIcon: "&#9654;",
    galleryFadeIn: 200,
    galleryFadeOut: 200,
  });

  $(".featherImage img, img.featherImage").featherlight({
    targetAttr: "src",
    persist: true,
  });

  // =============================================
  // Scrollspy

  let offset = 100;

  scrollSpy();
  $(window).scroll(function() {
    scrollSpy();
  });

  function scrollSpy() {
    var sections = $(".anchor").map(function() {
      return $(this).attr("id");
    });

    var current;
    for (var i = 0; i < sections.length; i++) {
      if ($("#" + sections[i]).offset().top <= $(window).scrollTop() + offset) {
        current = sections[i];
      }
    }

    $(".onPageNav a[href='#" + current + "']").addClass("active");
    $(".onPageNav a")
      .not("a[href='#" + current + "']")
      .removeClass("active");
  }
});
