

let nameError=document.getElementById("name-error");//errors messages to be displayed if the inputs are invalid
let cardNameError=document.getElementById("cardName-error");
let cardNumberError=document.getElementById("cardNumber-error");
let cardMonthError=document.getElementById("cardMonth-error");
let cardYearError=document.getElementById("cardYear-error");
let cardCodeError=document.getElementById("cardCode-error");
let submitError=document.getElementById("submit-error");
let addressError=document.getElementById("address-error");
let elementpop = document.getElementById("pop");//this is the pop up message
let month=document.getElementById("month");
const submit=document.getElementById("submit");

submit.addEventListener("click",validateName);//event listerners are added to the submit button so that all validate functions will take place
submit.addEventListener("click",validateCardNumber);
submit.addEventListener("click",validateCardName);
submit.addEventListener("click",validateCardMonth);
submit.addEventListener("click",validateCardYear);
submit.addEventListener("click",validateCardCode); 
submit.addEventListener("click",validateAddress);
submit.addEventListener("click",validateForm);
submit.addEventListener("click",handleClick);
month.addEventListener("change",changeMonth);

function changeMonth(){  //to put an 0 in front of the selected integer to get the 01,02,04,05 format when giving the month
  if(parseInt(this.value,10)<10)this.value='0'+this.value
}


//all the validations. name , card name ,address, card number, expiry date and month. security code 
function validateName(){
  let name=document.getElementById("fName").value;
 if (name.length==0){
    nameError.innerHTML="name is required";
    return false;
 }

 return true;
}

function validateAddress(){
  let address=document.getElementById("address").value;
 if (address.length==0){
    addressError.innerHTML="Address is required";
    return false;
 }

 return true;
}



function validateCardNumber(){
    let cardnumber=document.getElementById("card-no").value;
    if (cardnumber.length <16){
        cardNumberError.innerHTML="valid card number is required";
        return false;
    }
   
    return true;
}
function validateCardName(){
  let cardname=document.getElementById("card-name").value;
  if (cardname.length ==0){
      cardNameError.innerHTML="valid card name is required";
      return false;
  }
 
  return true;
}
function validateCardMonth(){
  let cardmonth=document.getElementById("month").value;
  if (cardmonth.length !==2){
      cardMonthError.innerHTML="valid card month is required";
      return false;
  }

  return true;
}
function validateCardYear(){
  let cardyear=document.getElementById("year").value;
  if (cardyear.length !==2){
      cardYearError.innerHTML="valid card year is required";
      return false;
  }

  return true;
}
function validateCardCode(){
  let cardcode=document.getElementById("sec-code").value;
  if (cardcode.length !==3){
      cardCodeError.innerHTML="valid security code is required";
      
      return false;
  }
 
  return true;
}

function myFunction() { //the function to display the pop up
 
  elementpop.style.display="block";
cardCodeError.innerHTML="";
cardMonthError.innerHTML="";
cardNameError.innerHTML="";
cardYearError.innerHTML="";
cardNumberError.innerHTML="";
nameError.innerHTML="";
  
setTimeout(function(){ 
  elementpop.style.display= "none"
 }, 3000);
 ;}

function validateForm(){ //if all inputs are valid then the function to display the popup is executed
  
    if(validateName() && validateCardName()  && validateAddress() && validateCardNumber()  && validateCardYear()  && validateCardMonth()  && validateCardCode()) {

         myFunction();
       }
         
    
   }
 

function handleClick(event){   
  // 👇️ if you are submitting a form  to refresh all inputs after submission
  event.preventDefault();

  const inputs = document.querySelectorAll('#fName,#card-no,#card-name,#address,#month,#year,#sec-code');

  inputs.forEach(input => {
    input.value = '';
  });
};

