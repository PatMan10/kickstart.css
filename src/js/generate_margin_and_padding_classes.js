function Num() {
  let a = 0,
    b = 0;
  this.getVal = () => `${a}${b}`;
  this.getValRad = () => `${a}.${b}`;
  this.inc = () => {
    if (b < 9) b++;
    else {
      a++;
      b = 0;
    }
  };
}

function printMargin_em() {
  const num = new Num();
  for (let i = 1; i <= 20; i++) {
    num.inc();
    console.log(`.m-${num.getVal()}e {`);
    console.log(`\tmargin: ${num.getValRad()}em;`);
    console.log(`}`);
  }
}
function printMargin_rem() {
  const num = new Num();
  for (let i = 1; i <= 20; i++) {
    num.inc();
    console.log(`.m-${num.getVal()}r {`);
    console.log(`\tmargin: ${num.getValRad()}rem;`);
    console.log(`}`);
  }
}

function printPadding_em() {
  const num = new Num();
  for (let i = 1; i <= 20; i++) {
    num.inc();
    console.log(`.p-${num.getVal()}e {`);
    console.log(`\tpadding: ${num.getValRad()}em;`);
    console.log(`}`);
  }
}
function printPadding_rem() {
  const num = new Num();
  for (let i = 1; i <= 20; i++) {
    num.inc();
    console.log(`.p-${num.getVal()}r {`);
    console.log(`\tpadding: ${num.getValRad()}rem;`);
    console.log(`}`);
  }
}

printPadding_rem();
