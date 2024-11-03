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
    details: "Details",
    blogTitle:
      "Once again DJ Tilo & MC QuanK return to light up the stage with Lavale",
    blogText1:
      "DJ Tilo and MC Quank seemed to be the perfect pairing of vibrant music and audience interaction. The event probably attracted a lot of participants thanks to the enthusiastic atmosphere, especially with the sponsorship from the Lavale wine brand.",
    blogText2:
      "The Lavale Spirit promotion featuring DJ Tilo and MC Quank was perhaps an event that aimed to make a mark for the brand through music and entertainment. With DJ Tilo's vibrant style, specializing in electronic music and catchy sounds, combined with MC Quank's ability to stir up the crowd, the event certainly created an energetic festival atmosphere.",
    blogText3:
      "Lavale Spirit, through this program, not only emphasizes the quality of its products but also builds an image associated with a modern, youthful and dynamic lifestyle. Such promotional activities often take advantage of the prominence of music to reach a young audience who loves to explore and experience.",
    blogText4: "The program includes activities such as:",
    blogText411: "Music Performance:",
    blogText412:
      "DJs and MCs will perform unique music sets, creating a vibrant atmosphere, increasing the audience's connection with the brand.",
    blogText421: "Interact with your audience:",
    blogText422:
      "Games or activities at the event to encourage participants to experience and learn more about Lavale wine products.",
    blogText431: "Wine Tasting Experience:",
    blogText432:
      "Lavale could have organized wine tasting booths to give visitors the opportunity to enjoy and feel the sophistication of the product.",
    blogText441: "Gifts and promotions:",
    blogText442:
      "Small gifts or special offers to attendees to promote the product and stimulate long-term interest.",
    blogText5:
      "The combination of music and brands like Lavale not only brings moments of entertainment but also highlights the image of Lavale products in the minds of customers.",
    otherBlogs: "Other posts",
    otherBlog1:
      "Singer Ha Nhi and the top performance with Lavale Wine brand at Tong Livehouse restaurant.",
    otherBlog2: "Why is it called national spirit?",
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
    details: "Xem chi tiết",
    blogTitle:
      "Một lần nữa DJ Tilo & MC QuanK quay lại thắp sáng sân khấu cùng Lavale",
    blogText1:
      "DJ Tilo và MC Quank có vẻ là cặp đôi mang đến sự kết hợp hoàn hảo giữa âm nhạc sôi động và khả năng tương tác với khán giả. Sự kiện này có lẽ đã thu hút được nhiều người tham gia nhờ không khí cuồng nhiệt, đặc biệt là với sự tài trợ từ thương hiệu rượu Lavale.",
    blogText2:
      "Chương trình quảng bá cho rượu Lavale với sự góp mặt của DJ Tilo và MC Quank có lẽ là một sự kiện nhằm tạo dấu ấn cho thương hiệu thông qua âm nhạc và giải trí. Với phong cách sôi động của DJ Tilo, chuyên về nhạc điện tử và âm thanh cuốn hút, kết hợp với khả năng khuấy động đám đông của MC Quank, sự kiện này chắc chắn đã mang lại một không gian lễ hội đầy năng lượng.",
    blogText3:
      "Rượu Lavale, qua chương trình này, không chỉ nhấn mạnh chất lượng sản phẩm mà còn xây dựng một hình ảnh gắn kết với phong cách sống hiện đại, trẻ trung và năng động. Các hoạt động quảng bá như vậy thường tận dụng sự nổi bật của âm nhạc để tiếp cận đối tượng khán giả trẻ, thích khám phá và trải nghiệm.",
    blogText4: "Chương trình bao gồm các hoạt động như:",
    blogText411: "Trình diễn âm nhạc:",
    blogText412:
      "DJ và MC sẽ biểu diễn những set nhạc độc đáo, tạo ra không khí sôi động, làm tăng thêm sự gắn kết của khán giả với thương hiệu.",
    blogText421: "Tương tác với khán giả:",
    blogText422:
      "Các trò chơi hoặc hoạt động tại sự kiện nhằm khuyến khích người tham gia trải nghiệm và tìm hiểu thêm về sản phẩm rượu Lavale.",
    blogText431: "Trải nghiệm thử rượu:",
    blogText432:
      "Lavale có thể đã tổ chức các quầy thử rượu để khách tham gia có cơ hội thưởng thức và cảm nhận sự tinh tế của sản phẩm.",
    blogText441: "Quà tặng và khuyến mãi:",
    blogText442:
      "Những phần quà nhỏ hoặc ưu đãi đặc biệt cho người tham dự nhằm quảng bá sản phẩm và kích thích sự quan tâm lâu dài.",
    blogText5:
      "Sự kết hợp giữa âm nhạc và thương hiệu như Lavale không chỉ mang lại những phút giây giải trí mà còn làm nổi bật hình ảnh các sản phẩm của Lavale trong tâm trí khách hàng.",
    otherBlogs: "Những bài viết khác",
    otherBlog1:
      "Thần tượng Hà Nhi và đêm diễn đỉnh cao cùng thương hiệu Rượu Lavale tại nhà hàng Tòng Livehouse.",
    otherBlog2: "Vì sao gọi là quốc tửu?",
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

let blogTitle = document.getElementById("blogTitle");
let blogText1 = document.getElementById("blogText1");
let blogText2 = document.getElementById("blogText2");
let blogText3 = document.getElementById("blogText3");
let blogText4 = document.getElementById("blogText4");
let blogText411 = document.getElementById("blogText411");
let blogText412 = document.getElementById("blogText412");
let blogText421 = document.getElementById("blogText421");
let blogText422 = document.getElementById("blogText422");
let blogText431 = document.getElementById("blogText431");
let blogText432 = document.getElementById("blogText432");
let blogText441 = document.getElementById("blogText441");
let blogText442 = document.getElementById("blogText442");
let blogText5 = document.getElementById("blogText5");
let otherBlogs = document.getElementById("otherBlogs");
let otherBlog1 = document.getElementById("otherBlog1");
let otherBlog2 = document.getElementById("otherBlog2");
let details1 = document.getElementById("details1");
let details2 = document.getElementById("details2");

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

    blogTitle.innerText = translations.vietnamese.blogTitle;
    blogText1.innerText = translations.vietnamese.blogText1;
    blogText2.innerText = translations.vietnamese.blogText2;
    blogText3.innerText = translations.vietnamese.blogText3;
    blogText4.innerText = translations.vietnamese.blogText4;
    blogText411.innerText = translations.vietnamese.blogText411;
    blogText412.innerText = translations.vietnamese.blogText412;
    blogText421.innerText = translations.vietnamese.blogText421;
    blogText422.innerText = translations.vietnamese.blogText422;
    blogText431.innerText = translations.vietnamese.blogText431;
    blogText432.innerText = translations.vietnamese.blogText432;
    blogText441.innerText = translations.vietnamese.blogText441;
    blogText442.innerText = translations.vietnamese.blogText442;
    blogText5.innerText = translations.vietnamese.blogText5;
    otherBlogs.innerText = translations.vietnamese.otherBlogs;
    otherBlog1.innerText = translations.vietnamese.otherBlog1;
    otherBlog2.innerText = translations.vietnamese.otherBlog2;
    details1.innerText = translations.vietnamese.details;
    details2.innerText = translations.vietnamese.details;
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

    blogTitle.innerText = translations.english.blogTitle;
    blogText1.innerText = translations.english.blogText1;
    blogText2.innerText = translations.english.blogText2;
    blogText3.innerText = translations.english.blogText3;
    blogText4.innerText = translations.english.blogText4;
    blogText411.innerText = translations.english.blogText411;
    blogText412.innerText = translations.english.blogText412;
    blogText421.innerText = translations.english.blogText421;
    blogText422.innerText = translations.english.blogText422;
    blogText431.innerText = translations.english.blogText431;
    blogText432.innerText = translations.english.blogText432;
    blogText441.innerText = translations.english.blogText441;
    blogText442.innerText = translations.english.blogText442;
    blogText5.innerText = translations.english.blogText5;
    otherBlogs.innerText = translations.english.otherBlogs;
    otherBlog1.innerText = translations.english.otherBlog1;
    otherBlog2.innerText = translations.english.otherBlog2;
    details1.innerText = translations.english.details;
    details2.innerText = translations.english.details;
  }
};

languageSelector.value = localStorage.getItem("lang") || "Vietnamese";
setLanguage(languageSelector.value);
