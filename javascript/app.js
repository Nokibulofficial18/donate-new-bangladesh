// to add donation balance and subtracting the total balance of a user

function addDonationAmount(inputFieldId,donationId,donationType){
    let remainBalance = getTextFieldValById('initital-money')
    let donateBalance = getTextFieldValById(donationId);
    
    let inputAmount = getInputFieldValById(inputFieldId);

    if(inputAmount === 0){
        return alert("Please Enter an amount");
    }

    if(isNaN(inputAmount) || inputAmount<0){
        return alert("***Please Enter a valid amount***")
    }
    if(inputAmount>remainBalance){
        return alert("Opps! You don't have sufficient balance!!!!")
    }

    setTextFieldValById('initital-money', remainBalance-inputAmount);
    setTextFieldValById(donationId, donateBalance+inputAmount);
    showDonationModal();
    makeDonationHistory(donationType,inputAmount);
}
// show and hide history and donation section
document.getElementById('donation-btn').addEventListener('click',function(){
    showHideToggle('donation-section');
    showHideToggle('history-section');
    document.getElementById('donation-btn').style.backgroundColor ='#B4F461';
    document.getElementById('history-btn').style.backgroundColor='transparent';
})

document.getElementById('history-btn').addEventListener('click',function(){
    showHideToggle('donation-section');
    showHideToggle('history-section');
    document.getElementById('donation-btn').style.backgroundColor ='transparent';
    document.getElementById('history-btn').style.backgroundColor='#B4F461';
})