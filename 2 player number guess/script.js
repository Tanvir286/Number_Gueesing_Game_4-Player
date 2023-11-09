let oneinput = document.querySelector(".oneinput");
let onebutton = document.querySelector(".onebutton");
let oneinput2 = document.querySelector(".oneinput2");
let onebutton2 = document.querySelector(".onebutton2");
let error = document.querySelector(".error");
let title = document.querySelector(".title");
let chance = document.querySelector(".chance");
let span = document.querySelector("span");

let playeronenumber = "";
let count = 5;

onebutton.addEventListener("click", function () {
  if (oneinput.value == "") {
    error.classList.remove("d-none");

    error.innerHTML = "Please give a number";
  } else {
     if (!(oneinput.value - 1 == 0 ? true : oneinput.value - 1)) {
           error.classList.remove("d-none");
           error.innerHTML = "Please give a number not text or other symbols"; }
     else {
         if (oneinput.value > 10 || oneinput.value < 1) {
            error.classList.remove("d-none");
            error.innerHTML = "Number must be in between 1 to 10";}
        else {
     
        error.classList.add("d-none");
        title.innerHTML = "Player 2";
        oneinput2.classList.remove("d-none");
        onebutton2.classList.remove("d-none");
        oneinput.classList.add("d-none");
        onebutton.classList.add("d-none");
        chance.classList.remove("d-none");
        span.innerHTML = count;}
    }
  }
});

onebutton2.addEventListener("click", function () {
  if (count > 1) {
    count--;
    span.innerHTML = count;
    if (oneinput.value == oneinput2.value) {
      console.log("player two winner");
      oneinput2.classList.add("d-none");
      onebutton2.classList.add("d-none");
      oneinput.classList.add("d-none");
      onebutton.classList.add("d-none");
      chance.classList.add("d-none");
      title.innerHTML = "Player 2 Winner";
    }
  }
   else {
    console.log("player one winner");
    console.log("player two winner");
    oneinput2.classList.add("d-none");
    onebutton2.classList.add("d-none");
    oneinput.classList.add("d-none");
    onebutton.classList.add("d-none");
    chance.classList.add("d-none");
    title.innerHTML = "Player 1 Winner";
  }
});
