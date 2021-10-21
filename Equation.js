let a = 1;
let b = 3;
let c = 2;

let desc = b**2 - 4*a*c;

if (a === 0) {
    console.log("X is equal" + -c / b);
} else if (desc < 0) {
    console.log("Unsolveable");
} else if (desc === 0) {
    console.log("X is equal" + -b / 2*a);
} else {
    X1 = (-b + Math.sqrt(desc)) / 2*a
    X2 = (-b - Math.sqrt(desc)) / 2*a
    console.log("X1 = " + X1 + " X2 = " + X2);
}