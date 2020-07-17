const div = document.querySelector('div');
//document.querySelector('input').focus();
document.querySelector('input').select();
let Names = [];
let addName = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
        e.preventDefault();
        const input = document.querySelector('input');
        let inputValue = input.value;
        if (input.value.length) {
            for (name of Names) {
                if (name === inputValue) {
                    input.value = "";
                    return
                }
            }
            Names.push(inputValue);
            div.textContent += inputValue + ", ";
            input.value = "";
            document.querySelector('input').select();
        }
    }
}
//document.querySelector('button').addEventListener("click", addName)
window.addEventListener('keydown', addName)