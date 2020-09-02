let msg = "abc";
let key = 1;
let alfabeth = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'.split('');

function enrcypt(msg, key) {
    let result = [];
    let arraymsg = msg.split('');
    let newIndex = 0;
    for (let i = 0; i < arraymsg.length; i++) {
        newIndex = alfabeth.indexOf(arraymsg[i]) + key;
        result.push(alfabeth[newIndex % alfabeth.length]);
    }
    console.log(result.join(""))
    return result.join("");
}

function dercypt(msg, key) {
    let result = [];
    let arraymsg = msg.split('');
    let newIndex = 0;
    for (let i = 0; i < arraymsg.length; i++) {
        newIndex = alfabeth.indexOf(arraymsg[i]) - key + alfabeth.length;
        result.push(alfabeth[newIndex % alfabeth.length]);
    }
    console.log(result.join(""));
}

dercypt(enrcypt(msg, key), key);
//enrcypt(msg,key);