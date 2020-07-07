document.body.addEventListener("mousemove",((event)=>{ 
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const red = Math.floor(x/width * 100);
    const green = Math.floor(y/height * 100);
    let blue = Math.floor((x/width * 100) / (y/height * 100));
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    document.querySelector('h1').textContent = red + "," + green + "," + blue;
        
}))