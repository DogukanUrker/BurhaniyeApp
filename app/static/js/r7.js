function trueAnswer() {
  var audio = document.getElementById("audioCorrect");
  audio.play();
  alert("🎉 TEBRİKLER DOĞRU CEVAP 🎉");
  window.location.replace("/tekrar8");
}

function falseAnswer() {
  var audio = document.getElementById("audioWrong");
  audio.play();
  alert("☹️ ÜZGÜNÜM TEKRAR DENEMELİSİN ☹️");
}
