(() => {

    const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            }
            else {
                // collapse existing expanded menuItemHasChildren
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });
    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
    }
    function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });

})();



$('.slider').slick({
    dots: true,
    vertical: true
});


$(document).ready(function () {
    console.log("document ready");
  
    const labels = document.querySelectorAll(".accordion-item__label");
    const tabs = document.querySelectorAll(".accordion-tab");
  
    function toggleShow() {
      const target = this;
      const item = target.classList.contains("accordion-tab") ?
        target :
        target.parentElement;
      const group = item.dataset.actabGroup;
      const id = item.dataset.actabId;
  
      tabs.forEach(function (tab) {
        if (tab.dataset.actabGroup === group) {
          if (tab.dataset.actabId === id) {
            tab.classList.add("accordion-active");
          } else {
            tab.classList.remove("accordion-active");
          }
        }
      });
  
      labels.forEach(function (label) {
        const tabItem = label.parentElement;
  
        if (tabItem.dataset.actabGroup === group) {
          if (tabItem.dataset.actabId === id) {
            tabItem.classList.add("accordion-active");
          } else {
            tabItem.classList.remove("accordion-active");
          }
        }
      });
    }
  
    labels.forEach(function (label) {
      label.addEventListener("click", toggleShow);
    });
  
    tabs.forEach(function (tab) {
      tab.addEventListener("click", toggleShow);
    });
  
  });
