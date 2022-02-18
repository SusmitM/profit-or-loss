var initialPrice=document.querySelector("#initial-price").value;
var quantity=document.querySelector("#quantity").value;
var currentPrice=document.querySelector("#current-price").value;
var output=document.querySelector("#output");
const btnSubmit=document.querySelector("#submitBtn");



function clickHandler(){
    var spending= investment(initialPrice,quantity);
    var afterPrice= outcome(currentPrice,quantity);
    
    if (initialPrice !== '' && quantity !== '' && currentPrice !== ''){
        var result=afterPrice-spending;
        if(result>0){
            output.style.color="green";
            var profitPercent=result/spending * 100;
            output.innerText=`Hey, the profit is ${result} and the percent is ${profitPercent.toFixed(2)}%`;
        }
        else{
            output.style.color="red";
            var lossPercent=result/spending * 100;
            output.innerText=`Hey, the loss is ${Math.abs(result)} and the percent is ${Math.abs(lossPercent.toFixed(2))}%`;

        }
       

        
    }
}


function investment(initialPrice,quantity){
    var investment=initialPrice*quantity;
    return investment;
}
function outcome(currentPrice,quantity){
    var result=currentPrice*quantity;
    return result;
}




btnSubmit.addEventListener("click",clickHandler);
setTimeout(click,5000);
