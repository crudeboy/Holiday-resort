function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}
//setFormMessage(loginForm, "success", "Login Successful!")

//function to show or clear error message
function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

//for the login and create account link
// document.addEventListener("DOMContentLoaded", () => {
//   let loginForm = document.querySelector("#login");
//   let createAccountForm = document.querySelector("#createAccount");

//   document
//     .querySelector("#linkCreateAccount")
//     .addEventListener("click", (e) => {
//       e.preventDefault();
//       loginForm.classList.add("form--hidden");
//       createAccountForm.classList.remove("form--hidden");
//     });

//   document.querySelector("#linkLogin").addEventListener("click", (e) => {
//     e.preventDefault();
//     loginForm.classList.remove("form--hidden");
//     createAccountForm.classList.add("form--hidden");
//   });

  //login error message
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //perform your node/fetch login

    setFormMessage(loginForm, "error", "Invalid Username/password combination");
  });

  //error message and condition for the create account form
//   document.querySelectorAll(".form__input").forEach((inputElement) => {
//     inputElement.addEventListener("blur", (e) => {
//       if (
//         e.target.id === "signupUsername" &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 7
//       ) {
//         setInputError(
//           inputElement,
//           "Username must be at least 7 character in length"
//         );
//         // document.getElementById("signupSubmit").disabled = true;
//       }

//       if (
//         e.target.id === "signupEmail" &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 7
//       ) {
//         setInputError(inputElement, "incorrect email!");
//         //document.getElementById("signupSubmit").disabled = true;
//       }

//       if (
//         e.target.id === "signupPassword" &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 5
//       ) {
//         setInputError(inputElement, "weak password, try again!");
//         // document.getElementById("signupSubmit").disabled = true;
//       }

//       if (
//         e.target.id === "signupConfirmPassword" &&
//         e.target.value.length > 0 &&
//         e.target.value !== document.getElementById("signupPassword").value
//       ) {
//         setInputError(inputElement, "password do not match!");
//         // document.getElementById("signupSubmit").disabled = true;
//       }
//     });

//     inputElement.addEventListener("input", (e) => {
//       clearInputError(inputElement);
//       document.getElementById("signupSubmit").disabled = true;
//     });
//   });
// });

// function check_pass() {
//   if (
//     document.getElementById("signupPassword").value !==
//     document.getElementById("signupConfirmPassword").value
//   ) {
//     document.getElementById("signupSubmit").disabled = true;
//   } else {
//     document.getElementById("signupSubmit").disabled = false;
//   }
// }
