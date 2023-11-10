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
  let div = document.querySelector(".blue");
  div.classList.toggle("blue-box-active");

  if (blueFlag == true) {
    let blueContentDiv = document.createElement("div");
    blueContentDiv.classList.add("blue-content-div");
    blueDivContentArray.forEach((x) => {
      let blueHrefDiv = document.createElement("div");
      blueHrefDiv.classList.add("blueContentDiv");
      let a = document.createElement("a");
      a.classList.add("remove");
      a.textContent = x;
      blueHrefDiv.appendChild(a);
      blueContentDiv.appendChild(blueHrefDiv);
      div.appendChild(blueContentDiv);
    }),
    blueFlag = false;
  } else {
    document.querySelectorAll(".remove").forEach((x) => x.remove());
    document.querySelectorAll(".blue-content-div").forEach((x) => x.remove());

    blueFlag = true;
  }
}
