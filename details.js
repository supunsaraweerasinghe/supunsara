const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
//Function to validate the form on submission
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var fullName = document.getElementById("fullName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var gender = document.getElementById("gender").value;

    // Validate full name (not empty)
    if (fullName.trim() === "") {
      alert("Please enter your full name");
      return;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate email and confirm email match
    if (email !== confirmEmail) {
      alert("Email addresses do not match");
      return;
    }

    // Validate gender selection
    if (gender === "") {
      alert("Please select a gender");
      return;
    }

    // If all validations pass, you can submit the form here
    document.getElementById("userDetailsForm").submit();
  }

  // Attach the validateForm function to form submission
  document.getElementById("userDetailsForm").addEventListener("submit", validateForm);