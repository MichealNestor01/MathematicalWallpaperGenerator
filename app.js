//I am currently working through 'The new turing omnibus' and this is the task at the end of the first exercise
//This allows a user to explore an infinately sized wallpaper with loads of patterns
//User can enter the coordinates of a corner of a square on this wallpaper, and then the side length of the square, and then the program will generate said square

//Getting the elemebts from the html
const wallpaperbox = document.querySelector(".wallpaper-box");
const generateBtn = document.querySelector(".generate");
const cornAinput = document.querySelector(".cornA");
const cornBinput = document.querySelector(".cornB");
const sideInput = document.querySelector(".side");

//generating the rows on the screen (each row has 100 pixels and there are 100rows
for (let i = 1; i - 1 < 100; i++) {
  let row = document.createElement("div");
  row.classList.add(`row${i}`);
  row.classList.add("row");
  wallpaperbox.appendChild(row);
}
const rows = document.querySelectorAll(".row");

//this fucntion runs when a user clicks generate, it allows the user to select a new square of wallpaper
generateBtn.addEventListener("click", () => {
  clearScreen();
  let sideIn = parseInt(sideInput.value);
  let cornAin = parseInt(cornAinput.value);
  let cornBin = parseInt(cornBinput.value);
  if (isNaN(sideIn)) {
    sideIn = 20;
  }
  if (isNaN(cornAin)) {
    cornAin = 0;
  }
  if (isNaN(cornBin)) {
    cornBin = 0;
  }
  generate(sideIn, cornAin, cornBin);
});

//generate creates 10,000 new pixels and places them in the screen, it colours the pixels depending on whether they are a multiple of 3, 2 or niether
function generate(side, cornA, cornB) {
  for (let i = 1; i - 1 < 100; i++) {
    for (let j = 1; j - 1 < 100; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      let x = cornA + i * (side / 100);
      let y = cornB + j * (side / 100);
      let c = Math.round(x ** 2 + y ** 2);
      if (c % 3 === 0) {
        pixel.style.backgroundColor = "red";
      } else if (c % 2 == 0) {
        pixel.style.backgroundColor = "blue";
      } else {
        pixel.style.backgroundColor = "black";
      }
      let selectedRow = document.querySelector(`.row${j}`);
      selectedRow.appendChild(pixel);
    }
  }
}

//clear screen removes all of the pixels form all of the rows, it is needs to be ran before a user generates a new pattern or 10,000 pixels will be added next to the previously generated patern
function clearScreen() {
  rows.forEach((row) => {
    for (let i = row.childNodes.length - 1; i >= 0; i--) {
      row.removeChild(row.childNodes[i]);
    }
  });
}

//this just generates the default patern
generate(17, 0, 0);
