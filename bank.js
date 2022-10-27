
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositValueString = depositInput.value;
    const depositValue = parseFloat(depositValueString);

    depositInput.value = '';
    // money add to deposit
    const depositmoneyTo = document.getElementById('money-deposit');
    const currentDepositBalanceString = depositmoneyTo.innerText;
    const currentDepositBalance = parseFloat(currentDepositBalanceString);
    const newBalance = currentDepositBalance + depositValue;
    depositmoneyTo.innerText = newBalance;
    // balance parts codes
    const currentBalanceMoney = document.getElementById('balance');
    const currentBalanceString = currentBalanceMoney.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    const newCurrentBalance = currentBalance + depositValue;
    console.log(newCurrentBalance);
    // replaceing to balance add 
    currentBalanceMoney.innerText = newCurrentBalance;

}



    .document.getElementById('withdraw-button').addEventListener('click', function () {
        const inputWithdraw = document.getElementById('withdraw-input');
        const inputStringValue = inputWithdraw.value;
        const inputValue = parseInt(inputStringValue);
        inputWithdraw.value = '';

        const currentBalanceMoney = document.getElementById('balance');
        const currentBalanceStringValue = currentBalanceMoney.innerText;
        const currentBalance = parseFloat(currentBalanceStringValue);

        const currentBalanceWithdraw = document.getElementById('withdraw');
        const currentWithdrawSting = currentBalanceWithdraw.innerText;
        const currentWithdraw = parseFloat(currentWithdrawSting);
        //  total withdraw

        if (currentBalance > inputValue) {
            const totalWithdraw = inputValue + currentWithdraw;
            currentBalanceWithdraw.innerText = totalWithdraw;
            const balance = currentBalance - inputValue;
            currentBalanceMoney.innerText = balance;
        }
        else {
            alert('Insufficient Balance!')
        }
    })
