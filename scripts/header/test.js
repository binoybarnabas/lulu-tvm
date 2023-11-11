

function myFunction(x) {
  x.classList.toggle("change");
  let div = document.querySelector(".blue-box-active");
  div.classList.toggle("block");
}

const input = () => {
  let inputbutton = document.querySelector(".search-input");
  inputbutton.classList.toggle("block");
};
