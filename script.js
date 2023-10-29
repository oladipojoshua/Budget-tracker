

function addUp(){
  var pName = productName.value;
  var quant = quantityOwn.value;
  var prices = priceName.value;
  var budgetObj = {pName, quant, prices};
  var budgetArray = JSON.parse(localStorage.getItem("budget")) || [];
  
  
  if (budgetObj.quant !== "" && budgetObj.prices !== ""&& pName !== ""){
    budgetArray.push(budgetObj)
    localStorage.setItem("budget", JSON.stringify(budgetArray))
    window.location.href = "result.html"
  }
  else{
    display.innerHTML =`<p class="bg-danger w-25 text-white">please fill the inputs</p>`
  }


}

