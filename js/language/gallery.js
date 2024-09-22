let translations = {
  english: {
    linkHome: "Home",
    linkIntroduction: "Introduction",
    linkProducts: "Products",
    linkGallery: "Gallery",
    linkBlogs: "Blogs",
    linkContact: "Contact",
    phone: "Phone number",
    footer1: "Please use alcohol responsibly",
    footer2: "Only share this product with people over 18 years old",
    galleryTitle: "Photo Gallery",
    galleryDescription:
      "Lavale becomes the host of many cultural and artistic events across the country",
  },
  vietnamese: {
    linkHome: "Trang chủ",
    linkIntroduction: "Giới thiệu",
    linkProducts: "Sản phẩm",
    linkGallery: "Thư viện ảnh",
    linkBlogs: "Tin tức",
    linkContact: "Liên hệ",
    phone: "Số điện thoại",
    footer1: "Hãy sử dụng rượu bia có trách nhiệm",
    footer2: "Chỉ chia sẻ sản phẩm này với người trên 18 tuổi",
    galleryTitle: "Thư viện ảnh",
    galleryDescription:
      "Lavale trở thành đối của nhiều sự kiện văn hóa nghệ thuật trên khắp cả nước",
  },
};

const languageSelector = document.querySelector(".language-selector");

let linkHome1 = document.getElementById("linkHome1");
let linkHome2 = document.getElementById("linkHome2");
let linkHome3 = document.getElementById("linkHome3");
let linkIntroduction1 = document.getElementById("linkIntroduction1");
let linkIntroduction2 = document.getElementById("linkIntroduction2");
let linkIntroduction3 = document.getElementById("linkIntroduction3");
let linkProducts1 = document.getElementById("linkProducts1");
let linkProducts2 = document.getElementById("linkProducts2");
let linkProducts3 = document.getElementById("linkProducts3");
let linkGallery1 = document.getElementById("linkGallery1");
let linkGallery2 = document.getElementById("linkGallery2");
let linkGallery3 = document.getElementById("linkGallery3");
let linkBlogs1 = document.getElementById("linkBlogs1");
let linkBlogs2 = document.getElementById("linkBlogs2");
let linkBlogs3 = document.getElementById("linkBlogs3");
let linkContact1 = document.getElementById("linkContact1");
let linkContact2 = document.getElementById("linkContact2");
let linkContact3 = document.getElementById("linkContact3");
let phone = document.getElementById("phone");
let footer1 = document.getElementById("footer1");
let footer2 = document.getElementById("footer2");

let galleryTitle = document.getElementById("galleryTitle");
let galleryDescription = document.getElementById("galleryDescription");

languageSelector.addEventListener("change", (e) => setLanguage(e.target.value));

const setLanguage = (language) => {
  localStorage.setItem("lang", language);

  if (language === "Vietnamese") {
    linkHome1.innerText = translations.vietnamese.linkHome;
    linkHome2.innerText = translations.vietnamese.linkHome;
    linkHome3.innerText = translations.vietnamese.linkHome;
    linkIntroduction1.innerText = translations.vietnamese.linkIntroduction;
    linkIntroduction2.innerText = translations.vietnamese.linkIntroduction;
    linkIntroduction3.innerText = translations.vietnamese.linkIntroduction;
    linkProducts1.innerText = translations.vietnamese.linkProducts;
    linkProducts2.innerText = translations.vietnamese.linkProducts;
    linkProducts3.innerText = translations.vietnamese.linkProducts;
    linkGallery1.innerText = translations.vietnamese.linkGallery;
    linkGallery2.innerText = translations.vietnamese.linkGallery;
    linkGallery3.innerText = translations.vietnamese.linkGallery;
    linkBlogs1.innerText = translations.vietnamese.linkBlogs;
    linkBlogs2.innerText = translations.vietnamese.linkBlogs;
    linkBlogs3.innerText = translations.vietnamese.linkBlogs;
    linkContact1.innerText = translations.vietnamese.linkContact;
    linkContact2.innerText = translations.vietnamese.linkContact;
    linkContact3.innerText = translations.vietnamese.linkContact;
    phone.innerText = translations.vietnamese.phone;
    footer1.innerText = translations.vietnamese.footer1;
    footer2.innerText = translations.vietnamese.footer2;

    galleryTitle.innerText = translations.vietnamese.galleryTitle;
    galleryDescription.innerText = translations.vietnamese.galleryDescription;
  } else if (language === "English") {
    linkHome1.innerText = translations.english.linkHome;
    linkHome2.innerText = translations.english.linkHome;
    linkHome3.innerText = translations.english.linkHome;
    linkIntroduction1.innerText = translations.english.linkIntroduction;
    linkIntroduction2.innerText = translations.english.linkIntroduction;
    linkIntroduction3.innerText = translations.english.linkIntroduction;
    linkProducts1.innerText = translations.english.linkProducts;
    linkProducts2.innerText = translations.english.linkProducts;
    linkProducts3.innerText = translations.english.linkProducts;
    linkGallery1.innerText = translations.english.linkGallery;
    linkGallery2.innerText = translations.english.linkGallery;
    linkGallery3.innerText = translations.english.linkGallery;
    linkBlogs1.innerText = translations.english.linkBlogs;
    linkBlogs2.innerText = translations.english.linkBlogs;
    linkBlogs3.innerText = translations.english.linkBlogs;
    linkContact1.innerText = translations.english.linkContact;
    linkContact2.innerText = translations.english.linkContact;
    linkContact3.innerText = translations.english.linkContact;
    phone.innerText = translations.english.phone;
    footer1.innerText = translations.english.footer1;
    footer2.innerText = translations.english.footer2;

    galleryTitle.innerText = translations.english.galleryTitle;
    galleryDescription.innerText = translations.english.galleryDescription;
  }
};

languageSelector.value = localStorage.getItem("lang") || "Vietnamese";
setLanguage(languageSelector.value);
