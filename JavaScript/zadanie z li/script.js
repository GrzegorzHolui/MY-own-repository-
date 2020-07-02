const ul = document.querySelector("ul");
const btn = document.querySelector("button");

let interior = 1;
function addLi (){
    const li = document.createElement('li');
    li.textContent = interior;
    if(interior % 3 == 0){
        li.classList.add('bigger');
    }
    interior+=2;
    ul.appendChild(li);
}

btn.addEventListener("click", addLi)