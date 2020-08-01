({
    plugins: ['jsdom-quokka-plugin'],
    // jsdom: {html: `<div id="test">Hello</div>`}
})

const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
},
{
    img: "images/img2.jpg",
    text: 'Drugi tekst'
},
{
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}];

// const whichSpan = [{
//     span: document.querySelector('span#one'),
//     // goThrough: 0
// },
// {
//     span: document.querySelector('span#two'),
//     // goThrough: 1,
// },

// {
//     span: document.querySelector('span#three'),
//     // goThrough: 2,
// }]
const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const spans = [...document.querySelectorAll('span')];
let amountToChangeImg = 0;
const ChangeImg = () => {
    console.log(amountToChangeImg);
    //amountToChangeImg++;
    if (amountToChangeImg == slideList.length) {
        amountToChangeImg = 0;
    } else if (amountToChangeImg < 0) {
        amountToChangeImg = 2;
    }
    img.src = slideList[amountToChangeImg].img;
    h1.textContent = slideList[amountToChangeImg].text;
    for (span of spans) {
        span.classList.remove('active');
    }
    spans[amountToChangeImg].classList.add("active");
}

//setInterval(ChangeImg, 5000);
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        amountToChangeImg++;
        ChangeImg();
    }
    else if (e.keyCode == 37) {
        amountToChangeImg += -1;
        ChangeImg();
        //amountToChangeImg = 0;
    }
})

