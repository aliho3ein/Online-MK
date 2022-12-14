import anime from "animejs/lib/anime.es.js";
import AOS from "aos";

/* Jump to Up */
function headerOpacity() {
  let toTopBtn = document.querySelector(".jumpTop");
  /* Header Opacity*/
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header && (header.style.opacity = 1 - window.scrollY / 300);

    window.scrollY >= 400
      ? (toTopBtn.style.display = "block")
      : (toTopBtn.style.display = "none");
  });
}

/* Nav Effect*/
function navEffect() {
  let back = document.querySelector(".backNavEffect");
  document.querySelector(".lgNav").addEventListener("click", (e) => {
    let item = parseInt(e.target.getAttribute("data-left"));
    let width = parseInt(e.target.getAttribute("data-width"));
    back.style.left = `${item}px`;
    back.style.width = `${45 + width * 15}px`;
  });
}

/* Toggle Burger Menu */
function toggleMenu() {
  document.querySelector(".burgerMenu").classList.toggle("activeNav");
}

/* Header Text Animation*/
function headerText() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml5 .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml5 .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => -0.625 + 0.625 * 3 * i + "em",
    })
    .add({
      targets: ".ml5 .ampersand",
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".ml5 .letters-left",
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=300",
    })
    .add({
      targets: ".ml5 .letters-right",
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".ml5",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

/* Office Movement */
function officeMove() {
  let firstP = document.querySelector(".firstP");
  let frTop = parseInt(getComputedStyle(firstP).top.replace("px", ""));
  let frLeft = parseInt(getComputedStyle(firstP).left.replace("px", ""));

  let secondP = document.querySelector(".secondP");
  let scTop = parseInt(getComputedStyle(secondP).top.replace("px", ""));
  let scLeft = parseInt(getComputedStyle(secondP).left.replace("px", ""));

  let laptop = document.querySelector(".laptop");
  let lpLeft = parseInt(getComputedStyle(laptop).left.replace("px", ""));

  window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    /** */
    firstP.style.top = `${y / -200 + frTop}px`;
    firstP.style.left = `${x / 300 + frLeft}px`;

    /** */
    secondP.style.top = `${y / 200 + scTop}px`;
    secondP.style.left = `${x / -250 + scLeft}px`;

    /** */
    laptop.style.left = `${x / 100 + lpLeft}px`;
  });
}

/* aos Animation */
function aosInit() {
  AOS.init();
}

/* Form Inputs Effect */
function selectForm() {
  let forms = document.querySelectorAll(".formItems");
  forms.forEach((form) => {
    form.addEventListener("click", () => {
      let act = document.querySelectorAll(".selectForm");
      act &&
        act.forEach((active) => {
          let id = active.getAttribute("data-id");
          let inpValue = document.querySelector(`.in-${id}`).value.length;
          inpValue === 0 && active.classList.remove("selectForm");
        });

      form.classList.add("selectForm");
    });
  });
}

/* Show Password in Login Page */
function showPass() {
  const eye = document.querySelector(".fa-eye-slash");
  let pass = document.getElementById("pass");
  if (eye) {
    eye.addEventListener("mouseover", () => {
      eye.classList.add("fa-eye");
      pass.type = "text";
    });
    eye.addEventListener("mouseout", () => {
      eye.classList.remove("fa-eye");
      pass.type = "password";
    });
  }
}

/* Export Functions */
export {
  headerOpacity,
  toggleMenu,
  navEffect,
  headerText,
  officeMove,
  aosInit,
  selectForm,
  showPass,
};
