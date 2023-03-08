// Cabeçalho

let header = document.querySelector(".content_header");

addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    header.style.backgroundColor = "rgba(33, 33, 33, 0.7)";
  } else {
    header.style.backgroundColor = "";
  }
});

// NavBar Mobile

const btnBurguer = document.querySelector("#burguer");
const btnCloseNav = document.querySelector(".img-close");
const navBar = document.querySelector(".navbar");
const listNav = document.querySelectorAll(".content_li");

function btnNavbar() {
  navBar.classList.add("active");
  listNav.forEach((lista) => {
    lista.classList.add("executando_animacao");
    setTimeout(() => {
      lista.classList.remove("executando_animacao");
    }, 100);
  });
}

function btnCloseNavbar() {
  navBar.classList.remove("active");
}

// NavBar Desk

const btnHome = document.querySelector("#navHome");
const btnAbaut = document.querySelector("#navAbaut");
const btnSkills = document.querySelector("#navSkills");
const btnFormation = document.querySelector("#navFormation");
const btnProjects = document.querySelector("#navProjects");
const btnContact = document.querySelector("#navContact");

btnHome.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

btnAbaut.addEventListener("click", function () {
  window.scrollTo(0, 986);
});

btnSkills.addEventListener("click", function () {
  window.scrollTo(0, 1820);
});

btnFormation.addEventListener("click", function () {
  window.scrollTo(0, 2580);
});

btnProjects.addEventListener("click", function () {
  window.scrollTo(0, 3350);
});

btnContact.addEventListener("click", function () {
  window.scrollTo(0, 4250);
});


function updateColors() {
  const scrollY = window.scrollY;

  if (scrollY >= 0 && scrollY < 966) {
    btnHome.style.color = "#ffffff";
    btnAbaut.style.color = "";
    btnSkills.style.color = "";
    btnFormation.style.color = "";
    btnProjects.style.color = "";
    btnContact.style.color = "";
  } else if (scrollY >= 966 && scrollY < 1800) {
    btnHome.style.color = "";
    btnAbaut.style.color = "#ffffff";
    btnSkills.style.color = "";
    btnFormation.style.color = "";
    btnProjects.style.color = "";
    btnContact.style.color = "";
  } else if (scrollY >= 1800 && scrollY < 2560) {
    btnHome.style.color = "";
    btnAbaut.style.color = "";
    btnSkills.style.color = "#ffffff";
    btnFormation.style.color = "";
    btnProjects.style.color = "";
    btnContact.style.color = "";
  } else if (scrollY >= 2560 && scrollY < 3300) {
    btnHome.style.color = "";
    btnAbaut.style.color = "";
    btnSkills.style.color = "";
    btnFormation.style.color = "#ffffff";
    btnProjects.style.color = "";
    btnContact.style.color = "";
  } else if (scrollY >= 3300 && scrollY < 4100) {
    btnHome.style.color = "";
    btnAbaut.style.color = "";
    btnSkills.style.color = "";
    btnFormation.style.color = "";
    btnProjects.style.color = "#ffffff";
    btnContact.style.color = "";
  } else {
    btnHome.style.color = "";
    btnAbaut.style.color = "";
    btnSkills.style.color = "";
    btnFormation.style.color = "";
    btnProjects.style.color = "";
    btnContact.style.color = "#ffffff";
  }
}

window.addEventListener("scroll", updateColors);


// Seção Apresentação

let bar = document.querySelector("#bar");
let txtDev = document.querySelector("#txtDev");
let txtFront = document.querySelector("#txtFront");

bar.innerHTML = "|";
txtDev.innerHTML = "Desenvolvedor";
txtFront.innerHTML = "Front-End";
