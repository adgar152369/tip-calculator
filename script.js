const billInput = document.getElementById('bill-input');
const numPeopleInput = document.getElementById('people-input');
const tipAmounts = document.querySelectorAll('.percentage');
const fivePercent = document.getElementById('five-percent');
const tenPercent = document.getElementById('ten-percent');
const fifteenPercent = document.getElementById('fifteen-percent');
const twentyFivePercent = document.getElementById('twentyfive-percent');
const fiftyPercent = document.getElementById('fifty-percent');
const customTip = document.getElementById('custom-btn');
const customAmountContainer = document.querySelector('.custom-amount-container');
const tip = document.getElementById('tip');
const gridItems = document.querySelectorAll('.grid-item');
const total = document.getElementById('total');

total.innerHTML = 0;
tip.innerHTML = 0;

function calculateTip() {
    let amount = 0;
    for (let i = 0; i < tipAmounts.length; i++) {
        tipAmounts[i].addEventListener('click', () => {
            amount = tipAmounts[i].innerHTML;
            // console.log(amount);
            tip.innerHTML = (billInput.value * (amount * .01)).toFixed(2);
            total.innerHTML = '$' + ((parseFloat(billInput.value) + parseFloat(tip.innerHTML)).toFixed(2));
        });
    }
}

tipAmounts.forEach(tip => {
    tip.addEventListener('click', () => {
        tipAmounts.forEach(tip => {
            tip.classList.contains('toggle-selected');
            tip.classList.remove('toggle-selected');
            customAmountContainer.classList.remove('toggle-custom-amount-container');
        });
        tip.classList.toggle('toggle-selected');
    });

    calculateTip();
});
customTip.addEventListener('click', () => {
    customAmountContainer.classList.toggle('toggle-custom-amount-container');
    tipAmounts.forEach(tip => {
        tip.classList.contains('toggle-selected');
        tip.classList.remove('toggle-selected');
    });
});


