const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
const submitFormButton = document.getElementById("submitForm");
submitFormButton.addEventListener("click", () => {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();
});

const showError = (id, msg, input) => {
  const error_icon = document.createElement("span");
  error_icon.setAttribute("data-id", id);
  error_icon.setAttribute("class", "error-icon");
  error_icon.innerHTML = '<img src="images/icon-error.svg"/>';
  const error_msg = document.createElement("span");
  error_msg.setAttribute("data-id", id);
  error_msg.setAttribute("class", "warning-msg");
  error_msg.textContent = msg;
  input.after(error_icon);
  input.after(error_msg);
  input.classList.add("warning-input");
};

const removeError = (id, input) => {
  const el = document.querySelectorAll(`[data-id='${id}']`);
  el.forEach((element) => {
    element.remove();
  });
  input.classList.remove("warning-input");
};

const checkEmail = () => {
  const emailInput = document.getElementById("email");
  const emailInputValue = emailInput.value;
  const id = "email";
  const msg = "Looks like this is not an email";
  if (emailInputValue === "" || !emailInputValue.includes("@")) {
      if(!emailInput.classList.contains('warning-input')){
        showError(id, msg, emailInput);
        emailInput.setAttribute("placeholder", "email@example/com");
      }
  } else {
    removeError(id, emailInput);
    emailInput.setAttribute("placeholder", "Email Address");
  }
};

const checkFirstName = () => {
  const firtNameInput = document.getElementById("name");
  const firtNameInputValue = firtNameInput.value;
  const id = "firstName";
  const msg = "First Name cannot be empty";
  if (firtNameInputValue === "") {
    if (!firtNameInput.classList.contains("warning-input")) {
      showError(id, msg, firtNameInput);
      firtNameInput.setAttribute("placeholder", "");
    }
  } else {
    removeError(id, firtNameInput);
  }
};
const checkLastName = () => {
  const lastNameInput = document.getElementById("last-name");
  const lastNameInputValue = lastNameInput.value;
  const id = "lastName";
  const msg = "Last Name cannot be empty";
  if (lastNameInputValue === "") {
    if (!lastNameInput.classList.contains("warning-input")) {
      showError(id, msg, lastNameInput);
      lastNameInput.setAttribute("placeholder", "");
    }
  } else {
    removeError(id, lastNameInput);
  }
};
const checkPassword = () => {
  const passwordInput = document.getElementById("passwd");
  const passwordInputValue = passwordInput.value;
  const id = "passwd";
  const msg = "Password cannot be empt";
  if (passwordInputValue === "") {
    if (!passwordInput.classList.contains("warning-input")) {
      showError(id, msg, passwordInput);
      passwordInput.setAttribute("placeholder", "");
    }
  } else {
    removeError(id, passwordInput);
  }
};
