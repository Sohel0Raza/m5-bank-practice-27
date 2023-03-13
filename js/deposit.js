// step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }
    // step 3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    console.log(typeof previousDepositTotal)
    //step 4: add number to set the total
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    
    //step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    
    //step 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set current total balance
    balanceTotalElement.innerText = currentBalanceTotal;
    
})