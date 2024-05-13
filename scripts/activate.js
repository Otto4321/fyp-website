function isChecked() {
    var messageElement = document.getElementById("message");
    var checkboxElement = document.getElementById("check");
    var checkedAudio = new Audio("./audio/checked.mp3");
    var uncheckedAudio = new Audio("./audio/disabled.mp3");
    
    if (checkboxElement.checked) {
      messageElement.textContent = "已激活";
      messageElement.style.color = "green";
      checkedAudio.play();
    } else {
      messageElement.textContent = "未激活";
      messageElement.style.color = "red";
      uncheckedAudio.play();
    }
  }
