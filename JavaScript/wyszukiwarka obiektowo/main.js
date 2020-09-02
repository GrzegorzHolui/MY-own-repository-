const input = document.querySelector('input');
const ul = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')]
class Find {
    // constructor(){
    //     this.value = input.value;
    // }
    FindWord() {
        let value = input.value;
        console.log(value)
        let arr = [];
        arr = listItems.filter(li => li.textContent.includes(value))
        console.log(arr)
        ul.textContent = "";
        arr.forEach((el) => { ul.appendChild(el) });
    }
}

let Finder = new Find()
input.addEventListener('input', Finder.FindWord)