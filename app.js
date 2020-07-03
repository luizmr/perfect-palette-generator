// hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// variables from DOM
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const color0 = document.querySelector(".color0");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const span1 = document.querySelector(".btn span:nth-child(1)");
const span2 = document.querySelector(".btn span:nth-child(2)");
const span3 = document.querySelector(".btn span:nth-child(3)");

// hexColor generator
function hexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// convert hex to hsl
function toHSL(hexValue) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    (r /= 255), (g /= 255), (b /= 255);
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    var colorInHSL = [
        "hsl(" + h + ", " + s + "%, " + l + "%)",
        "hsl(" + (h - 30) + ", " + s + "%, " + (l + 5) + "%)",
        "hsl(" + h + ", " + (s - 10) + "%, " + 90 + "%)",
    ];
    return colorInHSL;
}

// generate random colors for the three divs
btn.addEventListener("click", () => {
    // let random = getRandom();

    // let randomArray = random.split(" ");

    let hexColors = hexColor();
    console.log(hexColors);

    let colorArray = toHSL(hexColors);

    btn.style.backgroundColor = `${colorArray[2]}`;

    console.log(color);

    color0.style.backgroundColor = `${colorArray[0]}`;
    color1.style.backgroundColor = `${colorArray[1]}`;
    color2.style.backgroundColor = `${colorArray[2]}`;

    color.style.color = `${colorArray[2]}`;

    span1.style.backgroundColor = `${colorArray[0]}`;
    span2.style.backgroundColor = `${colorArray[0]}`;
    span3.style.backgroundColor = `${colorArray[0]}`;
});

// when the user clicks over the color, shows the value of its color in hex
// first div
color0.addEventListener("click", () => {
    let style = getComputedStyle(color0);
    let hexFinal = rgb2hex(style.backgroundColor);
    console.log(style);
    color.textContent = `${hexFinal}`;
});

// second div
color1.addEventListener("click", () => {
    let style = getComputedStyle(color1);
    let hexFinal = rgb2hex(style.backgroundColor);
    console.log(style);
    color.textContent = `${hexFinal}`;
});

// third div
color2.addEventListener("click", () => {
    let style = getComputedStyle(color2);
    let hexFinal = rgb2hex(style.backgroundColor);
    console.log(style);
    color.textContent = `${hexFinal}`;
});

// generate random values and saves in random
function getRandom() {
    let random = [];

    for (i = 0; i < 3; i++) {
        random += `${Math.floor(Math.random() * colors.length)} `;
    }

    return random;
}

// function to convert the rgb value of style.background to hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
