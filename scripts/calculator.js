function updateTextInput(tipPercentage) {
    var bill = document.getElementById('billInput').value;

    if (bill == 0.00) {
        document.getElementById('bill-error').innerHTML = "You must enter a valid amount!"; 
        document.getElementById('bill-error').style.display = "block"; 
    } else {
        document.getElementById('bill-error').style.display = "none";
         
        let tipTotal = (bill / 100 * tipPercentage);
        let billTotal = parseFloat(bill) + parseFloat(tipTotal);
    
    
        document.getElementById('tip-percentage').innerHTML="Tip Percentage: " + tipPercentage;
        document.getElementById('tip').innerHTML="Total Tip: " + tipTotal.toFixed(2);
        document.getElementById('bill').innerHTML="Total Bill: " + billTotal.toFixed(2);
    
        document.getElementById('calculator-output-wrapper').style.display = "block"; 
    }
  }