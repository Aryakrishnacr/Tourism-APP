function validateemail(email) {
  var emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  let check = emailPattern.test(email)
  if (check == true) {
    document.getElementById('mailerror').innerText = "";
    return true;
  }
  else {
    console.log("cgxvgv")
    document.getElementById('mailerror').innerText = "invalid..!";
    return false;
  }
}
function validatephone(mob) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let check = phoneno.test(mob);
  if (check == true) {
    document.getElementById('moberror').innerText = "";
    return true;
  }
  else {
    document.getElementById('moberror').innerText = "invalid!";
    return false;
  }
}
function validatepassword (password) {
  // if (password != "" ){
    var re = /[0-9]/;
    if (password.length < 8) {
      document.getElementById('passerror').innerText = "Error: Password must contain at least eight characters!";
      return false;
    }
    if (!re.test(password) ){
      document.getElementById('passerror').innerText = "Error: password must contain at least one number (0-9)!";
      return false;
    }
    re = /[a-z]/;
    if (!re.test(password)) {
      document.getElementById('passerror').innerText = "Error: password must contain at least one lowercase letter (a-z)!";
      return false;
    }
    re = /[A-Z]/;
    if (!re.test(password)) {
      document.getElementById('passerror').innerText = "Error: password must contain at least one uppercase letter (A-Z)!";
      return false;
    }
  
  document.getElementById('passerror').innerText = "";
  return true;
}


function validateconfirm(password,conpassword) {

  var conpassw = /^[A-Za-z]\w{7,14}$/;

  if (conpassword == password) {
    document.getElementById('conpasserror').innerText = "";
    return true;
  }
  else {
    document.getElementById('conpasserror').innerText = "Password not Match";
    return false;
  }
}


function validForm() {

  var email = document.getElementById('email').value;
  var mob = document.getElementById("mob").value;
  var password = document.getElementById("password").value;
  var conpassword = document.getElementById("conpassword").value;

  if (!validateemail(email)) {
    return false;
  }

  if (!validatephone(mob)) {

    return false;
  }

  if (!validatepassword(password)) {
    return false;
  }

  if (!validateconfirm(password,conpassword)) {
    return false;
  }

  return true;



}