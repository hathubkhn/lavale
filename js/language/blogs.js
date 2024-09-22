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
    news: "News",
    latestNews: "Lavale's latest wine news and insights",
    blogTitle1: "Why is it called national wine?",
    blogTitle2:
      "Once again DJ Tilo & MC QuanK return to light up the stage with Lavale",
    blogTitle3: "Singer Ha Nhi and the ultimate performance at Tong Livehouse",
    blogTitle4: "Join outstanding cultural events with Lavale",
    blogTitle5: "Join outstanding cultural events with Lavale",
    blogTitle6: "Once again DJ Tilo & MC QuanK light up the stage with Lavale",
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
    news: "Tin tức",
    latestNews: "Các tin tức mới nhất và kiến thức về rượu của Lavale",
    blogTitle1: "Vì sao gọi là quốc tửu?",
    blogTitle2:
      "Một lần nữa DJ Tilo & MC QuanK quay lại thắp sáng sân khấu cùng Lavale",
    blogTitle3:
      "Thần tượng Hà Nhi và đêm diễn đỉnh cao cùng tại Tòng Livehouse",
    blogTitle4: "Tham gia các sự kiện văn hóa nổi bật cùng Lavale",
    blogTitle5: "Tham gia các sự kiện văn hóa nổi bật cùng Lavale",
    blogTitle6:
      "Một lần nữa DJ Tilo & MC QuanK lại thắp sáng sân khấu cùng Lavale",
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

let news = document.getElementById("news");
let latestNews = document.getElementById("latestNews");
let blogTitle1 = document.getElementById("blogTitle1");
let blogTitle2 = document.getElementById("blogTitle2");
let blogTitle3 = document.getElementById("blogTitle3");
let blogTitle4 = document.getElementById("blogTitle4");
let blogTitle5 = document.getElementById("blogTitle5");
let blogTitle6 = document.getElementById("blogTitle6");
let details1 = document.getElementById("details1");
let details2 = document.getElementById("details2");
let details3 = document.getElementById("details3");
let details4 = document.getElementById("details4");
let details5 = document.getElementById("details5");
let details6 = document.getElementById("details6");

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

    news.innerText = translations.vietnamese.news;
    latestNews.innerText = translations.vietnamese.latestNews;
    blogTitle1.innerText = translations.vietnamese.blogTitle1;
    blogTitle2.innerText = translations.vietnamese.blogTitle2;
    blogTitle3.innerText = translations.vietnamese.blogTitle3;
    blogTitle4.innerText = translations.vietnamese.blogTitle4;
    blogTitle5.innerText = translations.vietnamese.blogTitle5;
    blogTitle6.innerText = translations.vietnamese.blogTitle6;
    details1.innerText = translations.vietnamese.details;
    details2.innerText = translations.vietnamese.details;
    details3.innerText = translations.vietnamese.details;
    details4.innerText = translations.vietnamese.details;
    details5.innerText = translations.vietnamese.details;
    details6.innerText = translations.vietnamese.details;
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

    news.innerText = translations.english.news;
    latestNews.innerText = translations.english.latestNews;
    blogTitle1.innerText = translations.english.blogTitle1;
    blogTitle2.innerText = translations.english.blogTitle2;
    blogTitle3.innerText = translations.english.blogTitle3;
    blogTitle4.innerText = translations.english.blogTitle4;
    blogTitle5.innerText = translations.english.blogTitle5;
    blogTitle6.innerText = translations.english.blogTitle6;
    details1.innerText = translations.english.details;
    details2.innerText = translations.english.details;
    details3.innerText = translations.english.details;
    details4.innerText = translations.english.details;
    details5.innerText = translations.english.details;
    details6.innerText = translations.english.details;
  }
};

languageSelector.value = localStorage.getItem("lang") || "Vietnamese";
setLanguage(languageSelector.value);
