// Ticker + fake live feed. No deps.
var tick = "PITCH \u00B7 SHARKS DECIDE \u00B7 LAUNCH \u00B7 YOUR FEES \u00B7 ";
document.getElementById("tickerTrack").textContent = (tick.repeat(6) + tick.repeat(6));
var sharks = ["BLOODFORK", "HARBOR", "SHELLY", "MEGALODON"];
var coins = ["$FINN", "$CHUM", "$REEF", "$GILLZ", "$BUBBLE", "$KRILL", "$TIDE"];
var log = document.getElementById("log");
var n = 0;
function entry() {
  var s = sharks[n % sharks.length];
  var c = coins[Math.floor(Math.random() * coins.length)];
  var amt = (Math.random() * 2 + 0.1).toFixed(1);
  var verdict = Math.random() > 0.45 ? "IN" : "OUT";
  n++;
  var li = document.createElement("li");
  var cls = verdict === "IN" ? "in" : "out";
  li.innerHTML = "<b></b> called <span></span> on <b></b>";
  li.children[0].textContent = s;
  li.children[1].textContent = verdict;
  li.children[1].className = cls;
  li.children[2].textContent = c + " \u2192 " + amt + " SOL";
  log.prepend(li);
  while (log.children.length > 14) log.lastChild.remove();
}
entry(); entry(); entry();
var timer = setInterval(entry, 3000);
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  clearInterval(timer); // ponytail: add pause/play button when motion toggles matter
}
