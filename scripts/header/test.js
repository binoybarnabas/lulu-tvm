const blueDivContentArray = [
  "About Us",
  "Lulu International",
  "E-Magazine",
  "Services",
  "Floor Plan",
  "Careers",
  "Licenses & Permits",
  "Mall Timings",
  "Contact Us",
];

const links = ["https://facebook.com/", "test.com"];
let blueFlag = true;

function myFunction(x) {
  x.classList.toggle("change");
  let div = document.querySelector(".blue-box-active");
  div.classList.toggle("block");

  // if (blueFlag == true) {
  //   blueFlag = false;
  // } else {

  //   blueFlag = true;
  // }
}


const input = () => {
  let inputbutton = document.querySelector(".search-input");
  inputbutton.classList.toggle("block");
}
