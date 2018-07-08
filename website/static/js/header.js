window.onload = function () {
  const header = $(".fixedHeaderContainer");

  window.onscroll = () => {
    let scrollTop = window.pageYOffset;

    if (scrollTop >= 10) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  };
};