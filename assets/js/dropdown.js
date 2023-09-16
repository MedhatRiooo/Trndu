const dropdown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selected-img");
const hamburger = document.querySelector(".hamburger-menu");
const headerMenu = document.querySelector(".header-menu");
const header = document.querySelector("header.header");

$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();
  if (windowScroll >= 110) {
    header.classList.add("header2");
    header.classList.add("shadow");
  } else {
    header.classList.remove("header2");
    header.classList.remove("shadow");
  }
});

let currentLanguage = "en"; // Default language is English

let languages = [
  {
    id: 1,
    name: "العربية",
    img: "assets/img/eg.png",
    code: "ar", // Add language code here for Arabic (ar)
  },
  {
    id: 2,
    name: "English",
    img: "assets/img/united-kingdom.png",
    code: "en", // Add language code here for English (en)
  },
];

const displayLanguages = () => {
  languages.map((item) => {
    list.innerHTML += `
      <li class="item" onclick="getLanguages(${item.id})">
        <img src="${item.img}" alt="image" class="me-2" />
        <div class="text">${item.name}</div>
      </li>
    `;
  });
};

displayLanguages();

dropdown.addEventListener("click", () => {
  list.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    list.classList.remove("show");
  }
});

const getLanguages = (id) => {
  const language = languages.find((item) => item.id === id);
  selected.innerHTML = language.name;
  selectedImg.src = language.img;
  list.classList.remove("show");

  // Update the current language code
  currentLanguage = language.code;

  // Update the href of the "Contact Us" and "Blog" links based on the selected language
  const contactUsLink = document.querySelector(".nav-item:nth-child(1) .nav-link");
  const blogLink = document.querySelector(".nav-item:nth-child(3) .nav-link");

  // Check if the selected language is Arabic, then update href to the Arabic version
  if (currentLanguage === "ar") {
    window.location.href = "index.html";
  } else {
    // Otherwise, update href to the English version
    window.location.href = "index-en.html";
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("scale-up-center");
});
