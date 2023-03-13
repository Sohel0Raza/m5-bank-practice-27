/* 
step 1: add event handler with the withdraw button
step 2: get the withdraw amount from the withdraw input field / also make sure to convert the input into a number by using parseFloat
step 3: get previous withdraw total
step 4: calculate total withdraw amount
step 5: set total withdraw amount
step 6: get the previous total
step 7: clear the withdraw input field
*/
//step 1: 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2:
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }
    //step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step 4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    
    //step 6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(newWithdrawAmount > previousBalanceTotal){
        alert('bap ar bank ar ato taka nai')
        return;
    }
    //step 5:
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step 7: 
})