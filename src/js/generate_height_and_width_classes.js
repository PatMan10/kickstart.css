function printPerc_height() {
  for (let i = 1; i <= 100; i++) {
    console.log(`.h-${i}p {`);
    console.log(`\theight: ${i}%;`);
    console.log(`}`);
  }
}

function printVH_height() {
  for (let i = 1; i <= 100; i++) {
    console.log(`.h-${i}vh {`);
    console.log(`\theight: ${i}vh;`);
    console.log(`}`);
  }
}

function printPerc_width() {
  for (let i = 1; i <= 100; i++) {
    console.log(`.w-${i}p {`);
    console.log(`\twidth: ${i}%;`);
    console.log(`}`);
  }
}

function printVH_width() {
  for (let i = 1; i <= 100; i++) {
    console.log(`.w-${i}vw {`);
    console.log(`\twidth: ${i}vw;`);
    console.log(`}`);
  }
}

printVH_width();
