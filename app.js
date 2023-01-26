//document.body.children[1].children[0].href = 'https://google.com'

/*let anchorElement = document.getElementById('anchor');
anchorElement.href  = 'https://google.com'*/

/*let highlighted = document.querySelector('p');

function changeHighlighted() {
    highlighted.textContent = "Clicked Hurray!!";
}

highlighted.addEventListener('click', changeHighlighted);*/


let element = document.querySelector('input');
function retrieveUser(event) {
    //let enteredText = element.value;
    //let enteredText = event.target.value
    console.log(enteredText);
    //console.log(event)
}

element.addEventListener('input', retrieveUser);


