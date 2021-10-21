let tBase = 5;
let tHeight = 2;
let rWidth = 7;
let rHeight = 4;

let tArea = (tBase * tHeight) / 2;
let rArea = rWidth * rHeight;

if (tArea > rArea) {
    console.log("Triangle has a bigger area");
} else if (tArea < rArea) {
    console.log("Rectangle has a bigger area");
} else {
    console.log("The areas are equal");
}