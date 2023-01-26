
let productInputName = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

//console.dir(productInputName);
let maxAllowedChars = productInputName.maxLength;

function updateCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;
    
    remainingCharsElement.textContent = remainingCharacters;

   /*(my own code) if(remainingCharsElement.textContent <= 10) {
        remainingCharsElement.style.color = 'red';
    }*/

    if (remainingCharacters === 0) {
            remainingCharsElement.classList.add('error');
            productInputName.classList.add('error');
    }
    else if (remainingCharacters <= 10 ) {
        remainingCharsElement.classList.add('warning');
        productInputName.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productInputName.classList.remove('error');
    }
    else {
        remainingCharsElement.classList.remove('warning');
        productInputName.classList.remove('warning');
    }
    /* or else {
        remainingCharsElement.classList.remove('error', warning');
        productInputName.classList.remove('error',warning');
    }*/  
    
}

productInputName.addEventListener('input', updateCharacters);