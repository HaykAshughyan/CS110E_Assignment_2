let x1 = 3;
let y1 = 6;
let x2 = 4;
let y2 = 1;

if (x1 < 0 || y1 < 0 || x2 < 0 || y2 < 0) {
    console.log("One of the numbers are negative!");
} else {
    console.log(Math.sqrt(((x2-x1)**2) + ((y2-y1)**2)));
}