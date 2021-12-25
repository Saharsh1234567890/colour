function color(col) {
  setClipboard(col);
  alert("You have copied the colour " + col + " to your clipboard");
}

function setClipboard(text) {
  var type = "text/plain";
  var blob = new Blob([text], { type });
  var data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    function () {
      /* success */
    },
    function () {
      /* failure */
    }
  );
}

function textChange() {
  var colorArray = [
    ["#fee2e2", "bg-red-100"],
    ["#fecaca", "bg-red-200"],
    ["#fca5a5", "bg-red-300"],
    ["#f87171", "bg-red-400"],
    ["#ef4444", "bg-red-500"],
    ["#ffe4e6", "bg-rose-100"],
    ["#fecdd3", "bg-rose-200"],
    ["#fda4af", "bg-rose-300"],
    ["#fb7185", "bg-rose-400"],
    ["#f43f5e", "bg-rose-500"],
    ["#ffedd5", "bg-orange-100"],
    ["#fed7aa", "bg-orange-200"],
    ["#fdba74", "bg-orange-300"],
    ["#fb923c", "bg-orange-400"],
    ["#f97316", "bg-orange-500"],
    ["#fef3c7", "bg-amber-100"],
    ["#fde68a", "bg-amber-200"],
    ["#fcd34d", "bg-amber-300"],
    ["#fbbf24", "bg-amber-400"],
    ["#f59e0b", "bg-amber-500"],
    ["#fef9c3", "bg-yellow-100"],
    ["#fef08a", "bg-yellow-200"],
    ["#fde047", "bg-yellow-300"],
    ["#facc15", "bg-yellow-400"],
    ["#eab308", "bg-yellow-500"],
    ["#ecfccb", "bg-lime-100"],
    ["#d9f99d", "bg-lime-200"],
    ["#bef264", "bg-lime-300"],
    ["#a3e635", "bg-lime-400"],
    ["#84cc16", "bg-lime-500"],
    ["#dcfce7", "bg-green-100"],
    ["#bbf7d0", "bg-green-200"],
    ["#86efac", "bg-green-300"],
    ["#4ade80", "bg-green-400"],
    ["#22c55e", "bg-green-500"],
    ["#d1fae5", "bg-emerald-100"],
    ["#a7f3d0", "bg-emerald-200"],
    ["#6ee7b7", "bg-emerald-300"],
    ["#34d399", "bg-emerald-400"],
    ["#10b981", "bg-emerald-500"],
    ["#ccfbf1", "bg-teal-100"],
    ["#99f6e4", "bg-teal-200"],
    ["#5eead4", "bg-teal-300"],
    ["#2dd4bf", "bg-teal-400"],
    ["#14b8a6", "bg-teal-500"],
    ["#cffafe", "bg-cyan-100"],
    ["#a5f3fc", "bg-cyan-200"],
    ["#67e8f9", "bg-cyan-300"],
    ["#22d3ee", "bg-cyan-400"],
    ["#06b6d4", "bg-cyan-500"],
    ["#e0f2fe", "bg-sky-100"],
    ["#bae6fd", "bg-sky-200"],
    ["#7dd3fc", "bg-sky-300"],
    ["#38bdf8", "bg-sky-400"],
    ["#0ea5e9", "bg-sky-500"],
    ["#dbeafe", "bg-blue-100"],
    ["#bfdbfe", "bg-blue-200"],
    ["#93c5fd", "bg-blue-300"],
    ["#60a5fa", "bg-blue-400"],
    ["#3b82f6", "bg-blue-500"],
    ["#e0e7ff", "bg-indigo-100"],
    ["#c7d2fe", "bg-indigo-200"],
    ["#a5b4fc", "bg-indigo-300"],
    ["#818cf8", "bg-indigo-400"],
    ["#6366f1", "bg-indigo-500"],
    ["#ede9fe", "bg-violet-100"],
    ["#ddd6fe", "bg-violet-200"],
    ["#c4b5fd", "bg-violet-300"],
    ["#a78bfa", "bg-violet-400"],
    ["#8b5cf6", "bg-violet-500"],
    ["#fae8ff", "bg-fuchsia-100"],
    ["#f5d0fe", "bg-fuchsia-200"],
    ["#f0abfc", "bg-fuchsia-300"],
    ["#e879f9", "bg-fuchsia-400"],
    ["#d946ef", "bg-fuchsia-500"],
    ["#f5f5f5", "bg-neutral-100"],
    ["#e5e5e5", "bg-neutral-200"],
    ["#d4d4d4", "bg-neutral-300"],
    ["#a3a3a3", "bg-neutral-400"],
    ["#737373", "bg-neutral-500"],
  ];

  var text = "";
  for (let index = 0; index < colorArray.length; index++) {
    const colour = colorArray[index][0].toUpperCase();
    const colourCode = colorArray[index][1];
    text = text + printCard(colour, colourCode);
  }
  document.getElementById("text").innerHTML = text;
}

function printCard(col, colCode) {
  var printingCard = "This is a card!!!";
  printingCard =
    `
        <div class="card mx-2 mt-5" onclick="\color('` +
    col +
    `')\" style="width: 18rem;">
        <div class="card-img-top ` +
    colCode +
    `">
        <div class="card-body">
            <h5 class="card-title">` +
    col +
    `</h5>
        </div>
        </div>
        </div>`;
  return printingCard;
}
