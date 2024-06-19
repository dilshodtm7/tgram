
const mybalanceref = document.getElementById("mybalanceref");
const balance = localStorage.getItem('balance');
const copyBtn = document.getElementById("copy-btns");


mybalanceref.innerHTML = balance



document.getElementById("copy-btns").addEventListener("click", async function() {
    try {
        var copyText = document.getElementById("referal-link");
        await navigator.clipboard.writeText(copyText.value);
        alert("Referal link copied");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
  });
  