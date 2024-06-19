const token = document.getElementById("token");
const balance = localStorage.getItem("balance");
const level = localStorage.getItem("level");
const energy = localStorage.getItem("energy");
const mylevelpush = document.getElementById("level");
const mybalance = document.getElementById("mybalance");

const mylevel = parseInt(level);
const earned = document.getElementById("earned");
const allearn = document.getElementById("allearn");
const forMinus = localStorage.getItem("minus");
const recharge = localStorage.getItem("recharge");
const slider = document.getElementById("slider");





// Initialize balance and level if they are not set in localStorage
if (balance === null) {
  localStorage.setItem("balance", 0);
}
if (level === null) {
  localStorage.setItem("level", 1);
}

if (energy === null) {
  localStorage.setItem("energy", 1);
}




mylevelpush.innerHTML = mylevel;

const mylevelpilus = 500 * energy;
const minuses = mylevelpilus;

mybalance.innerHTML = localStorage.getItem("balance");

if (!recharge) {
  localStorage.setItem("recharge", 1);
}

const rechargeLimit = parseInt(recharge);

if (forMinus) {
  earned.innerHTML = forMinus;
} else {
  localStorage.setItem("minus", minuses);
  earned.innerHTML = localStorage.getItem("minus");
}
allearn.innerHTML = mylevelpilus;
token.addEventListener("click", function () {
  if (level) {
    if (parseInt(earned.innerHTML) >= mylevel) {
      localStorage.setItem(
        "balance",
        parseInt(localStorage.getItem("balance")) + mylevel
      );
      localStorage.setItem(
        "minus",
        parseInt(localStorage.getItem("minus")) - mylevel
      );
      mybalance.innerHTML = localStorage.getItem("balance");
      earned.innerHTML = localStorage.getItem("minus");
    }
  }
});

function updateValues() {
  if (parseInt(localStorage.getItem("minus")) < mylevelpilus) {
    localStorage.setItem("minus", parseInt(earned.innerHTML) + rechargeLimit);
    earned.innerHTML = localStorage.getItem("minus");
    const pros = minuses / 100;
    const resultpros = earned.innerHTML / pros;
    slider.value = resultpros;
  } else if (parseInt(localStorage.getItem("minus")) > mylevelpilus) {
    localStorage.setItem("minus", mylevelpilus);
    earned.innerHTML = localStorage.getItem("minus");
    const pros = minuses / 100;
    const resultpros = earned.innerHTML / pros;
    slider.value = resultpros;
  }
}

setInterval(updateValues, 1000);






