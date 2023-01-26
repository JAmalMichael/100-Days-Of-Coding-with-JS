//console.dir(document)
//1
 let headElement = 
document.body.children[0];
//or
document.body.firstElementChild;
console.dir(headElement);
//2
console.dir(headElement.parentElement);
//BONUS
console.dir(headElement.nextElementSibling);
//3
let headElement2 = 
document.getElementById('heading');
console.dir(headElement2);
//4
let smallElement =
document.querySelector('.graph');
console.log(smallElement)
//5 BONUS
smallElement.textContent = 'This is a google link!'