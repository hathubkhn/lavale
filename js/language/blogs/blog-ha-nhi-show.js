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
      "Singer Ha Nhi and the top performance with Lavale Wine brand at Tong Livehouse restaurant.",
    blogText1:
      "On a memorable evening at Tong Livehouse restaurant, the audience witnessed a top performance by Ha Nhi - one of the most beloved music idols today. The event was not only a sublime music party, but also a special occasion for the Lavale Wine brand to leave its mark in the hearts of the public.",
    blogText2:
      "Ha Nhi, with her powerful voice and captivating performance style, brought emotional songs, attracting all eyes from the audience. She not only conquered the audience with her top-notch vocal ability but also with her captivating performance style, making the entire Tong Livehouse space explode with each note. Her hits were performed in a fresher and more vivid way than ever, creating a vibrant and energetic atmosphere.",
    blogText3:
      "The highlight of the night was the perfect combination of music and Lavale Wine. This wine brand cleverly took advantage of the event to create memorable moments, not only a spectacular performance but also a sophisticated experience of taste and lifestyle. At the event, the audience had the opportunity to enjoy special glasses of Lavale wine, bringing the perfect combination of music and enjoying high-class wine.",
    blogText4:
      "Tong Livehouse, with its luxurious and cozy space, has become an ideal stage for Ha Nhi and Lavale. Beautiful lighting effects and lively sound have created a perfect music night, connecting art and modern lifestyle.",
    blogText5:
      "This event is not only an opportunity for Ha Nhi to shine but also helps Lavale Wine consolidate its position as a high-end, classy wine brand, always associated with sophisticated and memorable experiences. The show at Tong Livehouse will certainly become an important milestone in Lavale's series of promotional events, when they not only convey the message of quality but also bring a unique cultural and entertainment experience to customers.",
    otherBlogs: "Other posts",
    otherBlog1: "Why is it called national spirit?",
    otherBlog2:
      "Once again DJ Tilo & MC QuanK return to light up the stage with Lavale",
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
      "Thần tượng Hà Nhi và đêm diễn đỉnh cao cùng thương hiệu Rượu Lavale tại nhà hàng Tòng Livehouse.",
    blogText1:
      "Vào một buổi tối đáng nhớ tại nhà hàng Tòng Livehouse, khán giả đã được chứng kiến một đêm diễn đỉnh cao của Hà Nhi - một trong những thần tượng âm nhạc được yêu thích nhất hiện nay. Sự kiện không chỉ là một bữa tiệc âm nhạc thăng hoa, mà còn là dịp đặc biệt để thương hiệu Rượu Lavale ghi dấu ấn trong lòng công chúng.",
    blogText2:
      "Hà Nhi, với giọng hát đầy nội lực và phong cách biểu diễn lôi cuốn, đã mang đến những ca khúc đậm chất cảm xúc, thu hút mọi ánh nhìn từ khán giả. Cô không chỉ chinh phục khán giả bằng khả năng thanh nhạc đỉnh cao mà còn bởi phong cách trình diễn cuốn hút, khiến cả không gian Tòng Livehouse như bùng nổ theo từng nốt nhạc. Những bản hit của cô được thể hiện một cách mới mẻ và sống động hơn bao giờ hết, tạo nên một không khí sôi động và tràn đầy năng lượng.",
    blogText3:
      "Điểm nhấn của đêm diễn không thể không kể đến sự kết hợp hoàn hảo giữa âm nhạc và Rượu Lavale. Thương hiệu rượu này đã khéo léo tận dụng sự kiện để tạo ra những khoảnh khắc đáng nhớ, không chỉ là màn trình diễn mãn nhãn mà còn là một trải nghiệm đầy tinh tế về hương vị và phong cách sống. Tại sự kiện, khán giả có cơ hội thưởng thức những ly rượu Lavale đặc biệt, mang đến sự kết hợp hoàn hảo giữa âm nhạc và thưởng thức rượu cao cấp.",
    blogText4:
      "Tòng Livehouse, với không gian sang trọng và ấm cúng, đã trở thành một sân khấu lý tưởng cho Hà Nhi và Lavale. Những hiệu ứng ánh sáng đẹp mắt cùng âm thanh sống động đã tạo nên một đêm nhạc hoàn hảo, gắn kết giữa nghệ thuật và phong cách sống hiện đại.",
    blogText5:
      "Sự kiện này không chỉ là dịp để Hà Nhi tỏa sáng mà còn giúp Rượu Lavale củng cố vị thế của mình như một thương hiệu rượu cao cấp, đẳng cấp, luôn gắn liền với những trải nghiệm tinh tế và đáng nhớ. Đêm diễn tại Tòng Livehouse chắc chắn sẽ trở thành một dấu mốc quan trọng trong chuỗi sự kiện quảng bá của Lavale, khi họ không chỉ truyền tải thông điệp về chất lượng mà còn mang đến một trải nghiệm văn hóa giải trí độc đáo cho khách hàng.",
    otherBlogs: "Những bài viết khác",
    otherBlog1: "Vì sao gọi là quốc tửu?",
    otherBlog2:
      "Một lần nữa DJ Tilo & MC QuanK quay lại thắp sáng sân khấu cùng Lavale",
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
