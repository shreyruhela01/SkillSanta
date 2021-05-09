
var date = prompt("Enter date in DD/MM/YYYY format : ");
date = date.split("/");
var current_year = new Date().getFullYear();
if (current_year - date[2] >= 18 && current_year - date[2] <= 44)
    location.href = "https://selfregistration.cowin.gov.in";
else
    alert("Wait for your chance to get vaccinated");



//test cases:
//07/07/2000 --> open portal
//08/06/2003 --> Wait for your chance to get vaccinated

  
  