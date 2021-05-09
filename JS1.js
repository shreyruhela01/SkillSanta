const num1 = prompt("Enter the first number:")
const  num2 = prompt("Enter the second number:")
const  num3 = prompt("Enter the third number:")
let largest;
if (num1 >= num2 && num1 >= num3){
  largest = num1;
}
else if (num2 >= num1 && num2 >= num3){
  largest = num2;
}
else {
  largest = num3;
}
document.write("The largest no. is :" + largest);

//num1 : 56
//num2 : 67
//num3 : 46
//largest no is : 67
 