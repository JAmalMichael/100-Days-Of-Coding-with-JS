//console.dir(document);
//1a(selecting the first button)
let firstButton = document.body.children[0].children[2].children[1].children[6];
// const firstButton = document.querySelector('button')
//console.dir(firstButton);
//1b
let secondButton = document.body.children[0].children[2].children[1].children[8];
//console.log(secondButton);

/*2a
function firstClick() {
    console.dir(event.target)
}

firstButton.addEventListener('click', firstClick);*/

/*2b
function secondClick() {
    let clickedButton = document.getElementById('btn-2');
    console.dir(clickedButton);
}

secondButton .addEventListener('click', secondClick);*/

//3a
let firstPara = document.getElementById('first-para');
//console.log(firstPara)
//3b
let thirdPara = document.getElementById('third-para');
// const thirdPara = firstPara.nextElementSibling;
// console.log(thirdPara);

//4a
function clearPara() {
   let removePara = firstPara.style.display = 'none';
   //thirdPara.remove();
}

firstButton.addEventListener('click', clearPara)

//4b 
function changePara2() {
    let removePara = thirdPara.style.backgroundColor = '#0615CC';
}

secondButton.addEventListener('click', changePara2); 