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
    productsTitle: "Lavale wine",
    productsDescription:
      "Every detail on the packaging is meticulously cared for to create a product that is not only beautiful but also conveys the message of the quintessence and high quality of fruit wine from the Northern mountains.",
    lavalePlumSpirit: "Lavale Man",
    lavaleAppleSpirit: "Lavale Tao Meo",
    lavaleLycheeSpirit: "Lavale Vai",
    details: "Details",
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
    productsTitle: "Rượu lavale",
    productsDescription:
      "Mỗi chi tiết trên bao bì đều được chăm chút tỉ mỉ để tạo nên một sản phẩm không chỉ đẹp mắt mà còn truyền tải được thông điệp về sự tinh túy và chất lượng cao của rượu trái cây từ vùng núi phía Bắc.",
    lavalePlumSpirit: "Lavale Mận",
    lavaleAppleSpirit: "Lavale Táo Mèo",
    lavaleLycheeSpirit: "Lavale Vải",
    details: "Xem chi tiết",
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

let productsTitle = document.getElementById("productsTitle");
let productsDescription = document.getElementById("productsDescription");
let lavalePlumSpirit = document.getElementById("lavalePlumSpirit");
let lavaleAppleSpirit = document.getElementById("lavaleAppleSpirit");
let lavaleLycheeSpirit = document.getElementById("lavaleLycheeSpirit");
let details1 = document.getElementById("details1");
let details2 = document.getElementById("details2");
let details3 = document.getElementById("details3");

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

    productsTitle.innerText = translations.vietnamese.productsTitle;
    productsDescription.innerText = translations.vietnamese.productsDescription;
    lavalePlumSpirit.innerText = translations.vietnamese.lavalePlumSpirit;
    lavaleAppleSpirit.innerText = translations.vietnamese.lavaleAppleSpirit;
    lavaleLycheeSpirit.innerText = translations.vietnamese.lavaleLycheeSpirit;
    details1.innerText = translations.vietnamese.details;
    details2.innerText = translations.vietnamese.details;
    details3.innerText = translations.vietnamese.details;
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

    productsTitle.innerText = translations.english.productsTitle;
    productsDescription.innerText = translations.english.productsDescription;
    lavalePlumSpirit.innerText = translations.english.lavalePlumSpirit;
    lavaleAppleSpirit.innerText = translations.english.lavaleAppleSpirit;
    lavaleLycheeSpirit.innerText = translations.english.lavaleLycheeSpirit;
    details1.innerText = translations.english.details;
    details2.innerText = translations.english.details;
    details3.innerText = translations.english.details;
  }
};

languageSelector.value = localStorage.getItem("lang") || "Vietnamese";
setLanguage(languageSelector.value);
