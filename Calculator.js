let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    }) 
})












// let dataEntered = []
// let num1 = prompt('enter first number')//9
// let operator = prompt('enter operator')///
// let num2 = prompt('enter second number')//7

// dataEntered.unshift(num1)
// //  dataEntered.unshift(operator)
// dataEntered.unshift(num2)

// //  console.log(dataEntered.join(operator));
//  let result = dataEntered.join(operator);
//  console.log(eval(result));