// ----------------------- add money ------------------------

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-feld').classList.remove('hidden');
});

document.getElementById('add-money-btn').addEventListener('click', function(){
    const addMoney = Number(document.getElementById('add-money-input').value);
    const pinNumber = document.getElementById('pin-number-input').value;
    if(pinNumber === '1122'){
        const currentAccountBalance = Number(document.getElementById('account-balance').innerText);
        const updatedAccountBalance = currentAccountBalance + addMoney;
        document.getElementById('account-balance').innerText = updatedAccountBalance;
    }
    else{
        alert('wrong pin');
    }
})



// -------------------- cash out ------------------------------
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('add-money-feld').classList.add('hidden');
    document.getElementById('cash-out-feld').classList.remove('hidden');
});


document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = Number(document.getElementById('cash-out-input').value);
    const pinNumber2 = document.getElementById('pin-number-input2').value;
    if(pinNumber2 === '1122'){
        const currentAccountBalance = Number(document.getElementById('account-balance').innerText);
        const updatedAccountBalance = currentAccountBalance - cashOut;
        document.getElementById('account-balance').innerText = updatedAccountBalance;
    }
    else{
        alert('wrong pin')
    }
});



// ----------------- log out ------------------------
document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href = './index.html'
});