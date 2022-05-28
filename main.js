window.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tabheader__item"),
    tabParents = document.querySelector(".tabheader__items"),
    tabcontent = document.querySelectorAll(".tabcontent");
    function showheadr() {
      tabcontent.forEach((item) => {
        item.classList.add("none");
        item.classList.remove("show", "fade");
      });
      tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
      });
    }
  function table(i = 0) {
    tabcontent[i].classList.add("show", "fade");
    tabcontent[i].classList.remove("none");
    tabs[i].classList.add("tabheader__item_active");
  }
  showheadr();
  table();
  tabParents.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (event.target === item) {
          showheadr();
          table(i);
        }
      });
    }
  });
});
