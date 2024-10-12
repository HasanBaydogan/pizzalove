const validateForm = (form) => (value) => {
  let errors = {};
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+₺/;
  const numberRegex = /\d/;
  if (form === "newsletter") {
    if (!value.email) {
      errors.email = "Lütfen bir e-posta girin";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Lütfen geçerli bir e-posta girin";
    }
  } else if (form === "kayıt") {
    if (!value.fullname) {
      errors.fullname = "Lütfen tam adı girin";
    } else if (value.fullname.length < 3) {
      errors.fullname = "İsim çok kısa";
    } else if (
      value.fullname === "test" ||
      value.fullname === "testtest" ||
      value.fullname === "Test" ||
      value.fullname === "admin" ||
      value.fullname === "name" ||
      value.fullname === "Name" ||
      value.fullname === "Fullname"
    ) {
      errors.fullname = "Geçersiz isim!";
    }
    if (!value.email) {
      errors.email = "Lütfen e-posta giriniz";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Lütfen geçerli bir e-posta girin";
    } else if (
      value.email === "test@gmail.com" ||
      value.email === "test@mail.com" ||
      value.email === "test@hotmail.com" ||
      value.email === "admin@gmail.com"
    ) {
      errors.email = "Invalid email!";
    }
    if (!value.password) {
      errors.password = "Lütfen geçerli bir şifre giriniz";
    } else if (value.password.length < 8 || value.repeatPassword.length < 8) {
      errors.password = "Şifre minimum olmalıdır. 8 karakter";
    } else if (
      value.password === "12345678" ||
      value.password === "qwerty1" ||
      value.password === "test1234" ||
      value.password === "abcd1234" ||
      value.password === "123456789" ||
      value.password === "1234567890"
    ) {
      errors.password = "Güvenli olmayan şifre!";
    } else if (/\s/.test(value.password)) {
      errors.password = "Şifrede boşluk olmamalıdır";
    }
    if (!value.repeatPassword) {
      errors.repeatPassword = "Lütfen şifreyi tekrar girin";
    }
    if (value.password !== value.repeatPassword) {
      errors.password = "Şifreler eşleşmiyor";
    }
  } else if (form === "profile") {
    if (value.fullname.length !== 0 && value.fullname.length < 3) {
      errors.fullname = "Tam ad çok kısa";
    } else if (
      value.fullname === "test" ||
      value.fullname === "testtest" ||
      value.fullname === "Test" ||
      value.fullname === "admin" ||
      value.fullname === "name" ||
      value.fullname === "Name" ||
      value.fullname === "Fullname"
    ) {
      errors.fullname = "Geçersiz isim!";
    }
    if (value.address.length !== 0 && value.address.length < 5) {
      errors.address = "Adres çok kısa";
    }
    if (value.email.length !== 0 && !emailRegex.test(value.email)) {
      errors.email = "Lütfen geçerli bir e-posta girin";
    } else if (
      value.email === "test@gmail.com" ||
      value.email === "test@mail.com" ||
      value.email === "test@hotmail.com" ||
      value.email === "admin@gmail.com"
    ) {
      errors.email = "geçersiz e-posta adresi";
    }
    if (value.password.length !== 0 && value.password.length < 8) {
      errors.password = "şifre minimum olmalıdır. 8 karakter";
    } else if (
      value.password === "12345678" ||
      value.password === "qwerty1" ||
      value.password === "test1234" ||
      value.password === "abcd1234" ||
      value.password === "123456789" ||
      value.password === "1234567890"
    ) {
      errors.password = "güvenli olmayan şifre!";
    }
    if (value.number.length !== 0 && value.number.length < 5) {
      errors.number = "Telefon numarası geçerli değil";
    } else if (value.number.length !== 0 && !numberRegex.test(value.number)) {
      errors.number = "Telefon numarası geçerli değil";
    }
  } else if (form === "login") {
    if (!value.email) {
      errors.email = "Lütfen e-posta giriniz";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Lütfen geçerli bir e-posta girin";
    }

    if (!value.password) {
      errors.password = "Lütfen geçerli bir şifre giriniz";
    } else if (value.password.length < 8) {
      errors.password = "Şifre minimum olmalıdır. 8 karakter";
    }
  } else if (form === "contact") {
    if (!value.fullname) {
      errors.fullname = "Lütfen tam adı girin";
    } else if (numberRegex.test(value.fullname)) {
      errors.fullname = "Lütfen geçerli bir isim girin";
    } else if (value.fullname && value.fullname.length < 3) {
      errors.fullname = "Lütfen geçerli bir isim girin";
    }
    if (!value.email) {
      errors.email = "Lütfen e-posta giriniz";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Lütfen e-posta adresi girin";
    } else if (
      value.email === "test@gmail.com" ||
      value.email === "test@mail.com" ||
      value.email === "test@hotmail.com" ||
      value.email === "admin@gmail.com"
    ) {
      errors.email = "Geçersiz e-posta adresi";
    }
    if (!value.message) {
      errors.message = "Lütfen mesaj giriniz";
    } else if (value.message && value.message.length < 10) {
      errors.message = "Mesaj minimum 10 karakter olmalıdır";
    }
  } else if (form === "payment") {
    if (!value.firstname) {
      errors.firstname = "Lütfen ad giriniz";
    }
    if (!value.lastname) {
      errors.lastname = "Lütfen soyad giriniz";
    }
    if (!value.cardNumber || value.cardNumber.length < 16) {
      errors.cardNumber = "Lütfen geçerli bir kart numarası girin";
    }
    if (!value.cvv || value.cvv.length < 3) {
      errors.cvv = "Lütfen geçerli bir CVV girin";
    }
    if (!value.month || value.month > 12 || value.month < 1) {
      errors.year = "Lütfen geçerli bir ay girin";
    }
    if (!value.year || value.year > 28 || value.year < 17) {
      errors.year = "Lütfen geçerli bir yıl girin";
    }
  }

  return errors;
};

export default validateForm;
