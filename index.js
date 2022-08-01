"use strict";
// otp autofill function
function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

// Function that executes on click of first next button.
function next_step1() {
  document.getElementById("step1").style.left = "-700px";
  document.getElementById("step2").style.left = "80px";
  document.getElementById("second").style.backgroundColor = "#fca311";
  document.getElementById("first").style.backgroundColor = "#d4cece";

  if (window.matchMedia("(max-width: 375px)")) {
    document.getElementById("step2").style.left = "8px";
    document.getElementById("step-col").style.left = "40px";
  }
}
// Function that executes on click of second next button.
function next_step2() {
  document.getElementById("step2").style.left = "-700px";
  document.getElementById("step3").style.left = "80px";
  document.getElementById("last").style.backgroundColor = "#fca311";
  document.getElementById("second").style.backgroundColor = "#d4cece";

  if (window.matchMedia("(max-width: 375px)")) {
    document.getElementById("step3").style.left = "8px";
    document.getElementById("step-col").style.left = "40px";
  }
}

// input validation
const regNum = document.getElementById("regNum");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function checkInput() {
  const regNumValue = regNum.value.trim();
  if (regNumValue === "") {
    document.getElementById("regNum").style.borderColor = "red";
    document.querySelector("#error").style.display = "block";
  } else {
    next_step1();
  }
}

function checkInput2() {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (passwordValue === "") {
    document.getElementById("password").style.borderColor = "red";
    document.querySelector("#error1").style.display = "block";
  } else if (passwordValue.length < 8) {
    document.getElementById("password").style.borderColor = "red";
    document.querySelector("#error1").style.display = "block";
    document.querySelector("#error1").innerHTML =
      "Password must be at least 8 character.";
  } else {
    document.querySelector("#error1").style.display = "none";
    document.getElementById("password").style.borderColor = "rgb(99, 221, 255)";
  }

  if (password2Value === "") {
    document.getElementById("password2").style.borderColor = "red";
    document.querySelector("#error2").style.display = "block";
    document.querySelector("#error2").innerHTML =
      "Please confirm your password";
  } else if (password2Value !== passwordValue) {
    document.getElementById("password2").style.borderColor = "red";
    document.querySelector("#error2").style.display = "block";
    document.querySelector("#error2").innerHTML = "Passwords doesn't match";
  } else {
    document.querySelector("#error1").style.display = "none";
    document.getElementById("password2").style.borderColor =
      "rgb(99, 221, 255)";
  }
}
