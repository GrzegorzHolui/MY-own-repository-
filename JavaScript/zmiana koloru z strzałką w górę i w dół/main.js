let red = 255;
let green = 255;
let blue = 255;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

// const changeColor = (e) => {
//     if (e.keyCode == 38 && e.which == 38) {
//         if (red <= 0, green <= 0, blue <= 0) {
//             red = 0;
//             green = 0;
//             blue = 0;
//         } else {
//             red -= 5;
//             green -= 5;
//             blue -= 5;
//             document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//             console.log(red, green, blue);
//         }
//     } else if (e.keyCode == 40 && e.which == 40) {
//         if (red >= 255, green >= 255, blue >= 255) {
//             red = 255;
//             green = 255;
//             blue = 255;
//         } else {
//             red += 5;
//             green += 5;
//             blue += 5;
//             document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//             console.log(red, green, blue);
//         }
//     }
// }

window.addEventListener("keyup", changeColor);