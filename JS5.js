function reverseString(str) {

    let newString = "";      // empty string
    for (let i = str.length - 1; i >= 0; i--) 
    {
        newString += str[i];
    }
    return newString;
}
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

function check_palindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ; //forward character 
      let y = str[j-i]; //backward character
      if( x != y)
      {
        return false;
      }
    }
    return true;   
  }
  
  function is_palidrome( str )
  {
    
    let ans = check_palindrome(str);

    if( ans == true )
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }
  }

  let test = prompt("enter the string: ");
  is_palidrome(test);


  //test cases:
  //string: shrey
  //palindrom: raman
  