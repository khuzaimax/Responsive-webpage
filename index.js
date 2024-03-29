var nameError = document.getElementById("name-error")
var emailError = document.getElementById("email-error")
var numberError = document.getElementById("number-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")


function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){  
    nameError.innerHTML = 'Name is required';
    return false;
}
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
}
  nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;

if(email.length == 0){
  emailError.innerHTML ='Email is required'
  return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML = 'Email invalid'
  return false;
}

  emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
  return true;

}


function validateNumber(){
  var number = document.getElementById('contact-number').value;

if(number.length !== 10){
    numberError.innerHTML = 'Number should be 10';
    return false;
}
if(!number.match(/^[0-9]{10}$/)){
    numberError.innerHTML = 'only digits please';
    return false;
}
  numberError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage(){
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left + 'more character required';
    return false;
  }

  messageError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
  return true;
}

function validateForm(){
  if(!validateName() || !validateNumber() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to Submit';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false;
  }
}


