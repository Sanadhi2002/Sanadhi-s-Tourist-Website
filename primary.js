//javascript code for the ticket booking page


let total;
let ticket="";
let ticketCost;
let durationCost;
let totalCost;
let foodCost;
let loyaltyPoints;
let output=" ";
let overallQuantity;

const theForm=document.getElementById("Form");
let BtnAdd=document.getElementById("addCart");
let txtOutput=document.getElementById("Output");
let txtCost=document.getElementById("cost");
let txtTime=document.getElementById("time");
let Count=document.getElementById("count");
let ticketChoices=document.getElementById("selectTicket");
let txtNumber=document.getElementById("num");
let durationChoices=document.getElementById("SelectDuration");
let txtOverall=document.getElementById("Overall");
let btnplaceOrder=document.getElementById("placeOrder");
let element = document.getElementById("pop");
let elementtwo = document.getElementById("error-pop");
let Quantity=document.getElementById("qty");
let txtToken=document.getElementById("food");
let btnAddtoFav=document.getElementById("AddtoFav");
let btnOrderFav=document.getElementById("OrderFav");
let error=document.getElementById("error");
/*
durationChoices.addEventListener("change",findDuration);*/


btnplaceOrder.addEventListener("click",PlaceOrder);
BtnAdd.addEventListener("click",AddtoCart);
btnOrderFav.addEventListener("click",OrderFav);
btnAddtoFav.addEventListener("click",FavouriteOrder);
window.addEventListener("load",init);
ticketChoices.addEventListener("change",checkTicket);
durationChoices.addEventListener("change",findDuration);




function init(){
    document.getElementById("Output").innerText=" ";
   txtCost.innerText=0.00;
    Count.innerText=0;
    txtTime.innerText=0;
    overallQuantity=0;
}

function checkTicket() {

 
    if (ticketChoices.value== "Foreign Adult Pass") {
        ticketCost = 5000.00;
        ticket = "Foreign Adult Pass";

       
        } 
        
        else if (ticketChoices.value == "Foreign Child Pass") {
        ticketCost = 2500.00;
        ticket = "Foreign Child Pass";
       
        } 
        else if (ticketChoices.value == "Local Adult Pass") {
            ticketCost = 1000.00;
            ticket = "Local Adult Pass";
            
         
            }
            
        else if (ticketChoices.value == "Local Child Pass") {
                ticketCost = 500.00;
                ticket = "Local Child Pass";
              
                } 

        else if (ticketChoices.value == "Annual Pass- Foreign") {
                    ticketCost = 15000.00;
                    ticket = "Annual Pass- Foreign";
                    food.disabled = true;
                   
                   
             } 

         else  if(ticketChoices.value == "Annual Pass- Local"){
             ticketCost = 4500.00;
             ticket = "Annual Pass- Local";
             food.disabled = true;
           
             
             } 
             else{
                ticketCost=0
                
             }

            
             txtCost.innerText =  `${ticketCost.toFixed(2)}`; 
             
             txtOutput.innerText="ticket : "+ ticket+"LKR";
  
           
            
        };
         
           
        
 function findDuration(){
            if(durationChoices.value=="half-day" &&(ticketChoices.value=="Local Adult Pass"||ticketChoices.value=="Local Child Pass")){
            durationCost=250.00;
           
            }
            else if(durationChoices.value=="half-day" &&(ticketChoices.value=="Foreign Adult Pass" || ticketChoices.value=="Foreign Child Pass")){
              durationCost=500.00;
              
            }
            else if(durationChoices.value=="full-day" &&(ticketChoices.value=="Local Adult Pass" || ticketChoices.value=="Local Child Pass")){
              durationCost=500.00;
              
            }
            else if(durationChoices.value=="full-day" &&(ticketChoices.value=="Foreign Adult Pass" || ticketChoices.value=="Foreign Child Pass")){
              durationCost=1000.00;
             
            }
            else{
              durationCost=0;
            }
            
        
          
            txtTime.innerText=durationCost+"LKR  is charged per ticket for "+ durationChoices.value;

           // txtOutput.innerText+="\nduration cost:"+durationChoices.value+"\n qty:"+txtNumber.value;
             
      };


function AddtoCart(){
 

    let numofTickets=txtNumber.value;
    let numofTokens=txtToken.value;
    let foodCost=numofTokens*500;
    let AddtogettotQty=parseInt(document.getElementById("qtyofcurrentorder").innerText);
    total=(ticketCost+durationCost+foodCost)*(numofTickets);
    totalCost=+total;
     txtOverall.innerText+=`Qty: ${numofTickets} \n tickets: ${ticket} \n Food Cost: ${foodCost}LKR\n  ticket cost: ${ticketCost}LKR \n Duration Cost: ${durationCost}LKR \n total:   ${total.toFixed(2)}LKR \n Overall Cost: ${totalCost.toFixed(2)}LKR \n`;

            txtCost.innerText=0;
            Count.innerText++;
            txtOutput.innerText="";
            ticketChoices.selectedIndex = 0;
            durationChoices.selectedIndex = 0;
            Quantity.innerText+=numofTickets;
            txtTime.innerText=0;
            txtNumber.value = '';
            txtToken.value='';
            document.getElementById("output").innerText ="";
          
          
            //let AddtogettotQty=parseInt(document.getElementById("qtyofcurrentorder").innerText);
            parseInt(overallQuantity)=  parseInt(overallQuantity)+parseInt( AddtogettotQty);
            
            parseInt(document.getElementById("qtyofcurrentorder").innerText)=overallQuantity;       

};


function PlaceOrder(){
  if(txtOverall.value=" "){
    elementtwo.style.display="block";

    setTimeout(function(){ 
        elementtwo.style.display= "none"
       }, 3000);
    return false
  }
else{
  element.style.display="block";

setTimeout(function(){ 
    element.style.display= "none"
   }, 3000);


  txtCost.innerText="";
  txtOutput.innerText="";
  Count.innerText="";
  txtOverall.innerText="";
  txtTime.innerText="";
  ticketChoices.selectedIndex = 0;
  durationChoices.selectedIndex = 0;
  Quantity.innerText=" ";
  elementTwo.innerText="";

}

};

function FavouriteOrder(){
 

  localStorage.setItem('Favourites',`${JSON.stringify(document.getElementById("output").innerText)}`);
};



function OrderFav(event){
  event.preventDefault();



  Count.innerText++;
  document.getElementById("Overall").innerText+=JSON.parse(localStorage.getItem('Favourites'));
 

}


btnLoyaltyPoints=document.getElementById("loyaltyPoints");

btnLoyaltyPoints.addEventListener("click",checkPoints);

let elementTwo=document.getElementById("lolPop");

function checkPoints(){
  
  let totQuantity=parseInt(Quantity.innerText);
   if(totQuantity> 3){
    loyaltyPoints = (totQuantity) *20;
    localStorage.setItem('loyalty-points' ,JSON.stringify(loyaltyPoints));
    elementTwo.innerText="YOUR LOYALTY POINTS:"+ loyaltyPoints;

}
else{
  
elementTwo.innerText="YOU HAVE NO LOYALTY POINTS";
localStorage.setItem('loyalty-points' ,JSON.stringify(0));

}
//Count.innerText++;

  };

btnGenerate=document.getElementById("generate");
btnGenerate.addEventListener("click",display);
function display(){


  let numofTickets=txtNumber.value;
  let numofTokens=txtToken.value;
  let foodCost=numofTokens*500;
  let AddtogettotQty=parseInt(document.getElementById("qtyofcurrentorder").innerText);
 


  total=(ticketCost+durationCost+foodCost)*(numofTickets);
  totalCost=+total;

  document.getElementById("output").innerText =`Qty: ${numofTickets} \n tickets: ${ticket} \n Food Cost: ${foodCost}LKR\n  ticket cost: ${ticketCost}LKR \n Duration Cost: ${durationCost}LKR  \n  total:   ${total.toFixed(2)}LKR \n   `;

};