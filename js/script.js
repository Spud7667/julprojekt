document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");
  let clickCount = 0;

  message.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      // Första klicket: julrim
      message.innerHTML = `
        Ej något som samlar damm på en hylla,<br>
        istället en kväll som sinnet ska fylla.<br>
        Mat, dryck och lyx i perfekt balans,<br>
        en middag på Moon Thai med härlig elegans.
      `;
      message.style.color = "green";
      message.style.fontSize = "1.0rem";
      message.style.lineHeight = "1.4";
    } else if (clickCount === 2) {
      // Andra klicket: inbjudningskort
      message.innerHTML = `
        <div class="invitation">
          <h4>Inbjudningskort</h4>
          <p>Moon Thai Kitchen</p>
          <p>Den 30/12 klockan 18:00</p>
          <p>En kväll med mat, dryck och härlig atmosfär</p>
        </div>
      `;
      message.style.color = "";       // låt texten följa invitation-klassens färg
      message.style.fontSize = "";    // återställ font-size
      message.style.lineHeight = "";  // återställ line-height
    }
  });
});
