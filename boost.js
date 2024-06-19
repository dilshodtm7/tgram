
const mybalanceboost = document.getElementById("mybalanceboost");
const balance = localStorage.getItem('balance');
const hands = document.getElementById("hands");
const energy = localStorage.getItem("energy");
const energylimit = document.getElementById("energylimit");
const level = localStorage.getItem('level');
const recharge = localStorage.getItem('recharge');
const rechargespeed = document.getElementById("rechargespeed");
const clickprice = localStorage.getItem('clickprice');
const energyprice = localStorage.getItem('energyprice');
const rechargeprice = localStorage.getItem('rechargeprice');
const clickprices = document.getElementById("clickprices");
const rechargesprices = document.getElementById("rechargesprices");
const energyprices = document.getElementById("energyprices");


if(!clickprice){
    localStorage.setItem("clickprice", 2000);
}

if(!energyprice){
    localStorage.setItem("energyprice", 2000);
}

if(!rechargeprice){
    localStorage.setItem("rechargeprice", 2000);
}

console.log();
console.log();


hands.addEventListener("click", function () {
if (Number(balance)>Number(clickprice)) {
    localStorage.setItem("level", parseInt(level) + 1);
    localStorage.setItem("clickprice", parseInt(clickprice) *2);
    localStorage.setItem("balance", Number(balance) - clickprice);
    document.location.reload();}
    else {
        alert("Not enough money");
    }
});



function formatNumberWithSpaces(clickprice) {
    let numberString = clickprice.toString();
    let formattedString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedString;
}

let formattedNumber = formatNumberWithSpaces(localStorage.getItem("clickprice"));


clickprices.innerHTML = formattedNumber



energylimit.addEventListener("click", function () {
if (Number(balance)>Number(energyprice)) {
    localStorage.setItem("energy", parseInt(energy) + 1);
    localStorage.setItem("energyprice", parseInt(energyprice) *2);
    localStorage.setItem("balance", Number(balance) - energyprice);
    document.location.reload();
} else {
    alert("Not enough money");
}
});


function formatNumberWithenergylimit(energyprice) {
    let numberString = energyprice.toString();
    let formattedStrin = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedStrin;
}

let formattedenergy = formatNumberWithenergylimit(localStorage.getItem("energyprice"));


energyprices.innerHTML = formattedenergy



rechargespeed.addEventListener("click", function () {
if (
    Number(balance)>Number(rechargeprice)
) {
    localStorage.setItem("recharge", parseInt(recharge) + 1);
    localStorage.setItem("rechargeprice", parseInt(rechargeprice) *2);
    localStorage.setItem("balance", Number(balance) - rechargeprice);
    document.location.reload();
}
else {
    alert("Not enough money");
}
});


function formatNumberWithrechargespeed(rechargeprice) {
    let numberString = rechargeprice.toString();
    let formattedString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedString;
}

let formattedrecharge = formatNumberWithrechargespeed(localStorage.getItem("rechargeprice"));

rechargesprices.innerHTML = formattedrecharge






mybalanceboost.innerHTML = balance
