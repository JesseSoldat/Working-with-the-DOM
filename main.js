// grab on to the elements in the page
var box1 = document.querySelector('#num_one');
var box2 = document.querySelector('#num_two');
var box3 = document.querySelector('#operator')
var calcBtn = document.querySelector('#calculateBtn');
var answ = document.querySelector('#answer')

// calculate function
var calculate = function() {

  var firstNum = box1.value;
  var secondNum = box2.value;
  var firstNum1 = parseInt(firstNum);
  var secondNum2 = parseInt(secondNum);
  var operator = box3.value;
   // console.log(firstNum);
   // console.log(secondNum);
   // console.log(operator);

   
        if(operator == '+') {
          console.log(firstNum1 + secondNum2);
            var calc = firstNum1 + secondNum2;
            return calc;  
        }
        else if(operator == '-') {
          console.log(firstNum1 - secondNum2);
          var calc = firstNum1 - secondNum2;
            return calc;  
        }
        else if(operator == '*') {
          console.log(firstNum1 * secondNum2);
          var calc = firstNum1 * secondNum2;
            return calc;  
        }
        else if(operator == '/') {
          console.log(firstNum1 / secondNum2);
          var calc = firstNum1 / secondNum2;
            return calc;  
        }
        else 
          console.log('check what you entered');    
}; 
// add an eventListener for when the user clicks the button
 calcBtn.addEventListener('click', calculate);

 

  


   
