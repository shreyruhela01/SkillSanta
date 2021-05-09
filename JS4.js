function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 100) || (y >= 50 && y <= 100))
  {
    document.write("No. lies in the range: "+ x + " " + y)
  } 
  else 
  {
    document.write("No. doesn't lies in the range: "+ x + " " + y)
  }
}

check_numbers(12, 101);

//test cases
//34,50
//77,89
