function main(password, psw){
  if(password.length < 8){
    alert("Error: Password must be at least 8 characters!");
  }
  else if(password != psw){
    alert("Error: Passwords don't match!");
  }
  else {
    alert("Passwords validated!")
  }
}
