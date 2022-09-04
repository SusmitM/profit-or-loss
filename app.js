var initialPrice=document.querySelector("#initial-price");
var quantity=document.querySelector("#quantity");
var currentPrice=document.querySelector("#current-price");
var output=document.querySelector("#output");
const btnSubmit=document.querySelector("#submitBtn");


function calculateProfitAndLoss(initialPrice,quantity,currentPrice){
    if(initialPrice>currentPrice){
        var loss= (initialPrice-currentPrice)*quantity;
         var lossPercent= (loss/initialPrice)*100;
         output.style.color="red";
         output.innerHTML=`Hey, the loss is ${Math.abs(loss)} and the percent is ${lossPercent.toFixed(2)}%`;

    }
    else if(currentPrice>initialPrice){
        var profit= (currentPrice-initialPrice)*quantity;
         var profitPercent= (profit/initialPrice)*100;
         output.style.color="green";
         output.innerHTML=`Hey, the profit is ${profit} and the percent is ${profitPercent.toFixed(2)}%`;

    }
    else{
        output.style.color="black";
        output.innerHTML=`Hey, you have neither made a profit nor a loss.`;

    }

}
function clickHandler(){
    if(initialPrice.value=="" || quantity.value=="" || currentPrice.value=="" ){
        output.innerText = "Enter all the fields"
    }
    else{
        var ip= Number(initialPrice.value);
        var qty= Number(quantity.value);
        var cp= Number(currentPrice.value);
        calculateProfitAndLoss(ip, qty, cp);

    }
   
}

btnSubmit.addEventListener("click",clickHandler);

