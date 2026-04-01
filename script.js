let step = 0;

function nextStep() {
  step++;

  if (step === 1) {
    document.getElementById("title").innerText = "Wait... 😶";
    document.getElementById("text").innerText = "Thoda serious hai 😐";
  }

  else if (step === 2) {
    document.getElementById("title").innerText = "Sach me...";
    document.getElementById("text").innerText = "Dhyaan se screen dekhna 👀";
  }

  else if (step === 3) {
    document.getElementById("title").innerText = "Ready? 😶";
    document.getElementById("text").innerText = "Ab kuch hone wala hai...";
  }

  else if (step === 4) {

    // BLACK SCREEN
    document.body.innerHTML = `
      <div style="background:black; height:100vh;"></div>
    `;

    // ⏳ 6.5 sec delay
    setTimeout(() => {

      // 💥 IMAGE POP
      document.body.innerHTML = `
        <div style="background:black; height:100vh; display:flex; justify-content:center; align-items:center;">
          <img src="data:image/jpeg;base64,PASTE_YOUR_BASE64_HERE"
          style="width:320px; border-radius:20px; box-shadow:0 0 40px white;">
        </div>
      `;

      // 🔊 FAAA SOUND (FIXED)
      let sound = new Audio("faah.mpeg");
      sound.volume = 1.0;
      sound.play();

    }, 6500);

    // 😂 APRIL FOOL
    setTimeout(() => {
      document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
          <h1 style="color:red;">APRIL FOOL 🤡</h1>
          <p style="font-size:22px;">
            FAAAaaahhh 😱😂<br><br>
            Dar gayi kya? 😜
          </p>
          <button onclick="location.reload()">Phir se dekh 😏</button>
        </div>
      `;
    }, 9000);
  }
}