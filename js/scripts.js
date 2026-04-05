function validateForm() {
let mobile = document.getElementById("mobile").value;

if (mobile.length !== 10 || isNaN(mobile)) {
alert("Mobile must be 10 digits");
return false;
}

alert("Form submitted successfully!");
return true;
}
