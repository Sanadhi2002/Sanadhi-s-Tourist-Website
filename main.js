

let nameError=document.getElementById("name-error");
let cardNameError=document.getElementById("cardName-error");
let cardNumberError=document.getElementById("cardNumber-error");
let cardMonthError=document.getElementById("cardMonth-error");
let cardYearError=document.getElementById("cardYear-error");
let cardCodeError=document.getElementById("cardCode-error");
let submitError=document.getElementById("submit-error");
let element = document.getElementById("pop");
const submit=document.getElementById("submit");

submit.addEventListener("click",validateName)
submit.addEventListener("click",validateCardNumber)
submit.addEventListener("click",validateCardName)
submit.addEventListener("click",validateCardMonth)
submit.addEventListener("click",validateCardYear)
submit.addEventListener("click",validateCardCode)
submit.addEventListener("click",validateForm)
submit.addEventListener("click",handleClick);




function validateName(){
  let name=document.getElementById("fName").value;
 if (name.length==0){
    nameError.innerHTML="name is required";
    return false;
 }

 return true;
}
function validateCardNumber(){
    let cardnumber=document.getElementById("card-no").value;
    if (cardnumber.length !==19){
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

function myFunction() {
 
  element.style.display="block";
cardCodeError.innerHTML="";
cardMonthError.innerHTML="";
cardNameError.innerHTML="";
cardYearError.innerHTML="";
cardNumberError.innerHTML="";
nameError.innerHTML="";
  
setTimeout(function(){ 
  element.style.display= "none"
 }, 3000);
 ;}

function validateForm(){
  
    if(validateName() && validateCardName()  && validateCardNumber()  && validateCardYear()  && validateCardMonth()  && validateCardCode()) {

         myFunction();
       }
         
    
   }
 

function handleClick(event){
  // 👇️ if you are submitting a form
  event.preventDefault();

  const inputs = document.querySelectorAll('#fName,#card-no,#card-name,#month,#year,#sec-code');

  inputs.forEach(input => {
    input.value = '';
  });
};