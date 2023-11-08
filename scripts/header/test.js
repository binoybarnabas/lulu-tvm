const blueDivContentArray =  ["About Us", "Lulu International","E-Magazine","Services","Floor Plan","Careers","Licenses & Permits","Mall Timings","Contact Us"];
let blueFlag = true;

function myFunction(x) {
  x.classList.toggle("change");
  let div = document.querySelector(".blue");
  div.classList.toggle("blue-box-active");

  if (blueFlag == true) {
    let blueContentDiv = document.createElement("div");
    blueContentDiv.classList.add("blue-content-div");
    blueDivContentArray.forEach((x) => {
      let h3 = document.createElement("h3");
      h3.classList.add("remove");
    h3.textContent = x;
      blueContentDiv.appendChild(h3);
      div.appendChild(blueContentDiv)
      
    })
    blueFlag = false;
  }
  else {
    document.querySelectorAll(".remove").forEach(x => x.remove());
    blueFlag = true;
  }

  

}
