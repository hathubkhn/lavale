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
    contactTitle: "Contact",
    contactDescription1:
      "Please contact us directly by phone or leave a message.",
    contactDescription2:
      "Customer service staff will call you immediately to advise you.",
    contactPhone: "Phone number",
    contactPhoneDescription1: "Consulting and ordering",
    contactPhoneDescription2: "Monday to Saturday, 8:00 to 17:00",
    contactEmailDescription: "Support, consultation and online ordering",
    contactAddress: "Address",
    contactAddress1: "Northern Region",
    contactAddressDescription1: "18 Lane 35 Cat Linh, Dong Da, Hanoi",
    contactAddress2: "Southern Region",
    contactAddressDescription2:
      "16/11 Street No. 18, Ward 8, Go Vap, Ho Chi Minh City",
    contactFormTitle: "Leave a message",
    contactForm1: "Email address",
    contactFormInput1: "Your contact information",
    contactForm2: "Full name",
    contactFormInput2: "Your name",
    contactForm3: "Title",
    contactFormInput3: "The issue needs to be contacted",
    contactForm4: "Title",
    contactFormInput4: "The issue needs to be contacted",
    contactFormButton: "Send message",
    contactFollow: "Follow Lavale",
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
    contactTitle: "Liên hệ",
    contactDescription1:
      "Quý khách vui lòng liên hệ trực tiếp qua điện thoại hoặc để lại lời nhắn.",
    contactDescription2:
      "Nhân viên chăm sóc khách hàng sẽ gọi điện tư vấn ngay cho quý khách.",
    contactPhone: "Điện thoại",
    contactPhoneDescription1: "Tư vấn và đặt hàng",
    contactPhoneDescription2: "Thứ 2 đến thứ 7, 8:00 đến 17:00",
    contactEmailDescription: "Hỗ trợ, tư vấn và đặt hàng online",
    contactAddress: "Địa chỉ",
    contactAddress1: "Khu vực miền Bắc",
    contactAddressDescription1: "18 ngõ 35 Cát Linh, Đống Đa, Hà Nội",
    contactAddress2: "Khu vực miền Nam",
    contactAddressDescription2:
      "16/11 đường số 18, phường 8, Gò Vấp, Hồ Chí Minh",
    contactFormTitle: "Để lại lời nhắn",
    contactForm1: "Địa chỉ Email",
    contactFormInput1: "Thông tin liên lạc của quý khách",
    contactForm2: "Họ và Tên",
    contactFormInput2: "Danh xưng của quý khách",
    contactForm3: "Tiêu đề",
    contactFormInput3: "Vấn đề cần liên hệ",
    contactForm4: "Tiêu đề",
    contactFormInput4: "Vấn đề cần liên hệ",
    contactFormButton: "Gửi lời nhắn",
    contactFollow: "Theo dõi Lavale",
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

let contactTitle = document.getElementById("contactTitle");
let contactDescription1 = document.getElementById("contactDescription1");
let contactDescription2 = document.getElementById("contactDescription2");
let contactPhone = document.getElementById("contactPhone");
let contactPhoneDescription1 = document.getElementById(
  "contactPhoneDescription1"
);
let contactPhoneDescription2 = document.getElementById(
  "contactPhoneDescription2"
);
let contactEmailDescription = document.getElementById(
  "contactEmailDescription"
);
let contactAddress = document.getElementById("contactAddress");
let contactAddress1 = document.getElementById("contactAddress1");
let contactAddressDescription1 = document.getElementById(
  "contactAddressDescription1"
);
let contactAddress2 = document.getElementById("contactAddress2");
let contactAddressDescription2 = document.getElementById(
  "contactAddressDescription2"
);
let contactFormTitle = document.getElementById("contactFormTitle");
let contactForm1 = document.getElementById("contactForm1");
let contactFormInput1 = document.getElementById("contactFormInput1");
let contactForm2 = document.getElementById("contactForm2");
let contactFormInput2 = document.getElementById("contactFormInput2");
let contactForm3 = document.getElementById("contactForm3");
let contactFormInput3 = document.getElementById("contactFormInput3");
let contactForm4 = document.getElementById("contactForm4");
let contactFormInput4 = document.getElementById("contactFormInput4");
let contactFormButton = document.getElementById("contactFormButton");
let contactFollow = document.getElementById("contactFollow");

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

    contactTitle.innerText = translations.vietnamese.contactTitle;
    contactDescription1.innerText = translations.vietnamese.contactDescription1;
    contactDescription2.innerText = translations.vietnamese.contactDescription2;
    contactPhone.innerText = translations.vietnamese.contactPhone;
    contactPhoneDescription1.innerText =
      translations.vietnamese.contactPhoneDescription1;
    contactPhoneDescription2.innerText =
      translations.vietnamese.contactPhoneDescription2;
    contactEmailDescription.innerText =
      translations.vietnamese.contactEmailDescription;
    contactAddress.innerText = translations.vietnamese.contactAddress;
    contactAddress1.innerText = translations.vietnamese.contactAddress1;
    contactAddressDescription1.innerText =
      translations.vietnamese.contactAddressDescription1;
    contactAddress2.innerText = translations.vietnamese.contactAddress2;
    contactAddressDescription2.innerText =
      translations.vietnamese.contactAddressDescription2;
    contactFormTitle.innerText = translations.vietnamese.contactFormTitle;
    contactForm1.innerText = translations.vietnamese.contactForm1;
    contactFormInput1.placeholder = translations.vietnamese.contactFormInput1;
    contactForm2.innerText = translations.vietnamese.contactForm2;
    contactFormInput2.placeholder = translations.vietnamese.contactFormInput2;
    contactForm3.innerText = translations.vietnamese.contactForm3;
    contactFormInput3.placeholder = translations.vietnamese.contactFormInput3;
    contactForm4.innerText = translations.vietnamese.contactForm4;
    contactFormInput4.placeholder = translations.vietnamese.contactFormInput4;
    contactFormButton.innerText = translations.vietnamese.contactFormButton;
    contactFollow.innerText = translations.vietnamese.contactFollow;
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

    contactTitle.innerText = translations.english.contactTitle;
    contactDescription1.innerText = translations.english.contactDescription1;
    contactDescription2.innerText = translations.english.contactDescription2;
    contactPhone.innerText = translations.english.contactPhone;
    contactPhoneDescription1.innerText =
      translations.english.contactPhoneDescription1;
    contactPhoneDescription2.innerText =
      translations.english.contactPhoneDescription2;
    contactEmailDescription.innerText =
      translations.english.contactEmailDescription;
    contactAddress.innerText = translations.english.contactAddress;
    contactAddress1.innerText = translations.english.contactAddress1;
    contactAddressDescription1.innerText =
      translations.english.contactAddressDescription1;
    contactAddress2.innerText = translations.english.contactAddress2;
    contactAddressDescription2.innerText =
      translations.english.contactAddressDescription2;
    contactFormTitle.innerText = translations.english.contactFormTitle;
    contactForm1.innerText = translations.english.contactForm1;
    contactFormInput1.placeholder = translations.english.contactFormInput1;
    contactForm2.innerText = translations.english.contactForm2;
    contactFormInput2.placeholder = translations.english.contactFormInput2;
    contactForm3.innerText = translations.english.contactForm3;
    contactFormInput3.placeholder = translations.english.contactFormInput3;
    contactForm4.innerText = translations.english.contactForm4;
    contactFormInput4.placeholder = translations.english.contactFormInput4;
    contactFormButton.innerText = translations.english.contactFormButton;
    contactFollow.innerText = translations.english.contactFollow;
  }
};

languageSelector.value = localStorage.getItem("lang") || "Vietnamese";
setLanguage(languageSelector.value);
