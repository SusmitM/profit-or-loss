var initialPrice=document.querySelector("#initial-price").value;
var quantity=document.querySelector("#quantity").value;
var currentPrice=document.querySelector("#current-price").value;
const btnSubmit=document.querySelector("#submitBtn");

function clickHandler(){
    var spending= investment(initialPrice,quantity);
    var afterPrice= outcome(currentPrice,quantity);
    
    if (initialPrice !== '' && quantity !== '' && currentPrice !== ''){
        var result=afterPrice-spending;
        console.log(result);
        if(result>0){
            var profitPercent=result/initialPrice * 100;
            console.log(`Hey, the profit is ${result} and the percent is ${profitPercent}%`);
        }
        else{
            var lossPercent=result/initialPrice * 100;
            console.log(`Hey, the loss is ${Math.abs(result)} and the percent is ${Math.abs(lossPercent)}%`);

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