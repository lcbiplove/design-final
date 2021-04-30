window.onload = function () {
  var ham_icon = document.getElementById("ham-icon");
  var nav_content = document.getElementsByClassName("mbl-nav-content")[0];

  ham_icon.onclick = function () {
    if (ham_icon.classList.contains("open")) {
      ham_icon.classList.remove("open");
      nav_content.style.transform = "scaleX(0)";
    } else {
      ham_icon.classList.add("open");
      nav_content.style.transform = "scaleX(1)";
    }
  };
};

window.onscroll = function () {
  var gotoBtn = document.getElementById("goto-top");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    gotoBtn.style.display = "block";
  } else {
    gotoBtn.style.display = "none";
  }
};

function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 10);
  } else clearTimeout(scrollAnimation);
}
