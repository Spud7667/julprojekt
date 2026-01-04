document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");
  let clickCount = 0;

  message.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      // Första klicket: julrim
      message.innerHTML = `
        Snö!
      `;
      message.style.color = "green";
      message.style.fontSize = "1.0rem";
      message.style.lineHeight = "1.4";
    } else if (clickCount === 2) {
      // Andra klicket: inbjudningskort
      message.innerHTML = `
        Kyssar!
      `;
      message.style.color = "";       // låt texten följa invitation-klassens färg
      message.style.fontSize = "";    // återställ font-size
      message.style.lineHeight = "";  // återställ line-height
    }
  });
});
