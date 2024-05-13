document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#signup-form');
  const nameInput = document.querySelector('input[name="name"]');
  const ageInput = document.querySelector('input[name="age"]');
  const genderInputs = document.querySelectorAll('input[name="Gender"]');
  const nameError = document.querySelector('.name_field span');
  const ageError = document.querySelector('.age_field span');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // Validate name
    if (!nameInput.value.match(/^[a-zA-Z\u4e00-\u9fa5]+$/)) {
      nameError.textContent = '名稱只能包含字母和中文';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Validate age
    if (ageInput.value < 18 || ageInput.value > 100) {
      ageError.textContent = '年齡必須在 18 到 100 之間';
      isValid = false;
    } else {
      ageError.textContent = '';
    }

    // Validate gender
    if (!Array.from(genderInputs).some(input => input.checked)) {
      isValid = false;
    }

    if (isValid) {
      const username = nameInput.value;
      const age = parseInt(ageInput.value);
      const gender = document.querySelector('input[name="Gender"]:checked').value;

      const newUser = {
        "username": username,
        "age": age,
        "gender": gender,
        "score": 0,
        "music_preference": ""
      };

      // Read users.json
      fetch('./data/users.json')
        .then(response => response.json())
        .then(data => {
          // Add new user
          const newUser = {
            "username": "Otto",
            "age": 65,
            "gender": "male",
            "score": 0,
            "music_preference": ""
          };

          data.users.push(newUser);

          // Write updated data back to users.json
          const jsonData = JSON.stringify(data);

          fetch('./data/users.json', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: jsonData
            })
            .then(response => response.json())
            .then(updatedData => {
              console.log(updatedData);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });

  function goToLogin() {
    window.location.href = 'login.html';
  }
});