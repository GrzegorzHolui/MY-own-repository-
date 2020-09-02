let p = document.querySelector('p');
let regex = /\b\w+@\w+\.\w{2,4}/gim;

////////////////////  1. Metoda exec


// let search1 = regex.exec(p.textContent)
// console.log(search1);
// let search2 = regex.exec(p.textContent)
// console.log(search2)

// let cos = new RegExp("\\b\\w+@\\w+\\.\\w{2,4}","gim");
// let searches = cos.exec(p.textContent);

// let search 
//     domains = [];
// while(search = regex.exec(p.textContent)){
//     console.log(search)
//     domains.push(search[0])
// }
// console.log(domains)

/////////////////////// 2 match

// let search3 = p.textContent.match(regex)
// console.log(search3)

//  let search4 = p.textContent.search(/i/gim)

// function StringContains(string, pattern) {
//     let regex = new RegExp(pattern);
//     return string.search(regex) > -1; 
// }
// StringContains("jankow","kow");