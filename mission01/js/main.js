class User {
  constructor(id, pw) {
    this.id = id;
    this.pw = pw;
  }
}

class UserManager {
  constructor() {
    if (!UserManager.instance) {
      this.users = [];
      UserManager.instance = this;
    }

    return UserManager.instance;
  }

  addUser(id, pw) {
    this.users.push(new User(id, pw));
  }

  findUser(id, pw) {
    return this.users.find(user => user.id === id && user.pw === pw);
  }
}

function initElem(errElements) {
  errElements.forEach(elem => {
    document.querySelector(elem).style.display = "none";
  });
}

function showError(errorNode) {
  document.querySelector(errorNode).style.display = "block";
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function clearInputFields(...elem) {
  for (let item of elem) {
    item.value = "";
    item.classList.remove("is--invalid");
  }
}

function handleLogin(_userId, _userPw) {
  let userId = document.querySelector(".user-email-input");
  let userPw = document.querySelector(".user-password-input");

  const currentUser = userManager.findUser(_userId, _userPw);

  if (!_userId) {
    userId.focus();
    showError(".err_empty_id");
  } else if (!_userPw) {
    userPw.focus();
    showError(".err_empty_pw");
  } else if (!currentUser) {
    showError(".err_wrong");
    clearInputFields(userId, userPw);
  } else {
    window.location.href = "welcome.html";
  }
}

function handleInput(e) {
  let target = e.target;
  if (target.name === "userEmail") {
    emailReg(target.value)
      ? target.classList.remove("is--invalid")
      : target.classList.add("is--invalid");
  } else {
    pwReg(target.value)
      ? target.classList.remove("is--invalid")
      : target.classList.add("is--invalid");
  }
}

const userManager = new UserManager();
userManager.addUser("asd@naver.com", "spdlqj123!@");
userManager.addUser("jjj@naver.com", "jjj123!@");

//* singleton test
const userManager2 = new UserManager();
userManager2.addUser("dfsad@daum.net", "adios3@1a");

let userId = document.querySelector(".user-email-input");
let userPw = document.querySelector(".user-password-input");

const btnLogin = document.querySelector(".btn-login");
btnLogin.addEventListener("click", e => {
  e.preventDefault();
  initElem([".err_empty_id", ".err_empty_pw", ".err_wrong"]);
  handleLogin(userId.value, userPw.value);
});

userId.addEventListener("input", handleInput);
userPw.addEventListener("input", handleInput);
