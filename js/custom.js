function checkAge() {
    // Get the input element
    var ageInput = document.getElementById('check_age')

    // Check if exist
    if (!ageInput) {
      console.error("Element with id 'check_age' not found.")
      return
    }

    // Get the input value
    var ageValue = ageInput.value

    // Check valid number
    if (isNaN(ageValue) || ageValue === '') {
      document.getElementById('msg').innerHTML = 'Please enter a valid age.'
      return
    }

    var age = parseInt(ageValue)

    // Check age
    if (age < 18) {
      document.getElementById('msg').innerHTML =
        'You are not allowed access. You must be 18 or older.'
    } else {
      document.getElementById('msg').innerHTML = 'Access! You are 18.'
    }
  }