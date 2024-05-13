document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.querySelector('input[name="name"]').value;
    const age = parseInt(document.querySelector('input[name="age"]').value);
    const gender = document.querySelector('input[name="Gender"]:checked').value;
    
    fetch('http://127.0.0.1:5500/data/users.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
        const userExists = users.some(user => user.username === username && user.age === age && user.gender === gender);
        
        if (userExists) {
          window.location.href = 'main.html';
        } else {
          alert('老人資料不存在 請先使用eCare手機App輸入資料');
        }
      })
      .catch(error => console.log(error));
  });
});

function goToSignUp() {
  window.location.href = 'signup.html';
}