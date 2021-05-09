
function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F. <br> <br>`;
  document.write(message);
    
}

function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
  document.write(message);
} 
cToF(60);
fToC(45);

//test cases:
//56 ,77
//87 ,50
