function makeDonation() {
    var donationConfirmation = document.getElementById('confirmation');
    var personFirst = document.getElementById('firstName');
    var donationThirty = document.getElementById('thirty');
    var donationFifty = document.getElementById('fifty');
    var donationHundred = document.getElementById('hundred');
    var donationOther = document.getElementById('other');
    // var amount = document.getElementById('amount');
    var donationAmount = document.getElementById('other');

    // // selectAmount
    // document.getElementById('amount').addEventListener('click', function () {
    //     var target = evt.target;

    //     if (target.id === 'thirty') {
    //         donationAmount = '30.00';
    //     }
    //     else if (target.id === 'fifty') {
    //         donationAmount = '50.00';
    //     }
    //     else if (target.id === 'hundred') {
    //         donationAmount = '100.00';
    //     }
    // })

    // // setAmount
    // document.getElementById('amount').addEventListener('click', function () {
    //     var target = evt.target;

    //     if (target.id === 'other') {
    //         donationAmount = other.value;
    //     }
    // })

    donationConfirmation.innerHTML =
        personFirst.value + ", thank you for your donation of $" + donationAmount.value + ". For tax purposes, a gift receipt has been emailed to you at " + email.value + ".";
}
