var initialPrice=document.querySelector("#initial-price").value;
var quantity=document.querySelector("#quantity").value;
var currentPrice=document.querySelector("#current-price").value;
var output=document.querySelector("#output");
const btnSubmit=document.querySelector("#submitBtn");


function calculateProfitAndLoss(initialPrice,quantity,currentPrice){
    if(initialPrice>currentPrice){
        var loss= (initialPrice-currentPrice)*quantity;
         var lossPercent= (loss/initialPrice)*100;
         output.style.color="red";
         output.innerText=`Hey, the loss is ${Math.abs(loss)} and the percent is ${lossPercent.toFixed(2)}%`;

    }
    else if(currentPrice>initialPrice){
        var profit= (currentPrice-initialPrice)*quantity;
         var profitPercent= (profit/initialPrice)*100;
         output.style.color="green";
         output.innerText=`Hey, the profit is ${profit} and the percent is ${profitPercent.toFixed(2)}%`;

    }
    else{
        output.innerText=`Hey, you have neither made a profit nor a loss.`;

    }

}
function clickHandler(){
    var ip= Number(initialPrice);
    var qty= Number(quantity);
    var cp= Number(currentPrice);
    calculateProfitAndLoss(ip, qty, cp);
}

btnSubmit.addEventListener("click",clickHandler);

