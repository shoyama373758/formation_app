const fw = document.getElementById("fw");
const mf = document.getElementById("mf");
const df = document.getElementById("df");
const gk = document.getElementById("gk");
const button = document.getElementById("button");

const fwArea = document.getElementById("fw-area");
const mfArea = document.getElementById("mf-area");
const dfArea = document.getElementById("df-area");
const gkArea = document.getElementById("gk-area");

function makeFormation() {
  fwArea.innerText = fw.value;
  mfArea.innerText = mf.value;
  dfArea.innerText = df.value;
  gkArea.innerText = gk.value;
}
button.addEventListener("click", makeFormation);
