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
    productTitle: "Lavale Man",
    productInformation1: "Volume: 500ml",
    productInformation2: "Concentration: 25% vol ±2°",
    productInformation3: "Taste: mildly sour, sweet and creamy",
    productInformation4: "Tendency: female, youthful",
    buttonBuy: "Contact to order",
    productDescription:
      "Plum is a typical berry of the Northern mountainous region in particular and of Vietnam in general. Plum in season has a sweet and fragrant taste. Through our special recipe, Lavale Plum Wine has a sweet aroma like chocolate. Unlike other fruits used to soak in wine, we choose plum, a rare fruit found in wine.",
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
    productTitle: "Lavale Mận",
    productInformation1: "Thể tích: 500ml",
    productInformation2: "Nồng độ: 25% vol ±2°",
    productInformation3: "Hương vị: chua nhẹ nhàng, ngọt ngậy",
    productInformation4: "Thiên hướng: nữ giới, trẻ trung",
    buttonBuy: "Liên hệ để đặt mua",
    productDescription:
      "Mận là quả mọng đặc chưng của vùng núi phía Bắc nói riêng cũng như của Việt Nam nói chung. Mận đến mùa cho mùi vị ngọt ngậy thơm phưng phức. Qua công thức đặc biệt của chúng tôi Rượu Mận Lavale có mùi thơm ngọt ngỡ như sô cô la. Khác với những hoa quả để ngâm rượu, chúng tôi chọn mận là một loại quả khá hiếm được tìm thấy trong vị rượu.",
  },
};

const languageSelector = document.querySelector(".language-selector");
const languageSelector1 = document.querySelector(".language-selector-1");
const languageSelector2 = document.querySelector(".language-selector-2");

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

let productTitle = document.getElementById("productTitle");
let productInformation1 = document.getElementById("productInformation1");
let productInformation2 = document.getElementById("productInformation2");
let productInformation3 = document.getElementById("productInformation3");
let productInformation4 = document.getElementById("productInformation4");
let buttonBuy = document.getElementById("buttonBuy");
let productDescription = document.getElementById("productDescription");

languageSelector.addEventListener("change", (e) => setLanguage(e.target.value));
languageSelector1.addEventListener("change", (e) =>
  setLanguage(e.target.value)
);
languageSelector2.addEventListener("change", (e) =>
  setLanguage(e.target.value)
);

const setLanguage = (language) => {
  localStorage.setItem("lang", language);
  languageSelector.value = language;
  languageSelector1.value = language;
  languageSelector2.value = language;

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

    productTitle.innerText = translations.vietnamese.productTitle;
    productInformation1.innerText = translations.vietnamese.productInformation1;
    productInformation2.innerText = translations.vietnamese.productInformation2;
    productInformation3.innerText = translations.vietnamese.productInformation3;
    productInformation4.innerText = translations.vietnamese.productInformation4;
    buttonBuy.innerText = translations.vietnamese.buttonBuy;
    productDescription.innerText = translations.vietnamese.productDescription;
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

    productTitle.innerText = translations.english.productTitle;
    productInformation1.innerText = translations.english.productInformation1;
    productInformation2.innerText = translations.english.productInformation2;
    productInformation3.innerText = translations.english.productInformation3;
    productInformation4.innerText = translations.english.productInformation4;
    buttonBuy.innerText = translations.english.buttonBuy;
    productDescription.innerText = translations.english.productDescription;
  }
};

languageSelector.value = localStorage.getItem("lang") || "Vietnamese";
setLanguage(languageSelector.value);
