document.getElementById("playButton").addEventListener("click", function () {
  var dropdown = document.getElementById("myDropdown");
  var selectedValue = "./audio/" + dropdown.options[dropdown.selectedIndex].value;
  var audio = new Audio(selectedValue);
  audio.play();
});

document.getElementById("submitButton").addEventListener("click", function () {
  var dropdown = document.getElementById("myDropdown");
  var selectedValue = "./audio/" + dropdown.options[dropdown.selectedIndex].value;

  // 使用AJAX或fetch將selectedValue提交到JSON文件的後端處理程序
  // 例如：
  // fetch('/update_json', {
  //   method: 'POST',
  //   body: JSON.stringify({ selectedValue }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => response.json())
  // .then(data => {
  //   // 根據後端處理程序的回應進行相應的處理
  // });

  alert("已提交選擇：" + selectedValue);
});

function goToMainPage() {
  // Code to navigate to the main.html page
  window.location.href = 'main.html';
}