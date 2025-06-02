
alert("Hello everone!");




const themeToggleBtn = document.getElementById("toggle-theme");
themeToggleBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark-mode");
});

//Getting the contact me form active

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  
  const nameValue = document.getElementById("name").value;
  const emailvalue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;
  
  //Steps to store it in backend Database - (HERE INOUR CASE) local Storage of the Browser
  //Session based Storage
  
  //JSON - Format of the data that most of the Servers and APIs expect us to give.
  const response = { nameValue, emailvalue, messageValue, date: new Date().toISOString() };
  
  //We wiill create an empty list named responses, and keep storing all Userresponses in it.
  
  //You can be usng the website for the first time, or you can be ina repeated session.
  const responses = JSON.parse(localStorage.getItem('responses')) || [] ;
  
  //To store userResponse in responses list
  responses.push(response);
  
  //When you send data to backend you need to send as JSON
  //When you are getting it to frontend you need to convet to string in order to display it.
  
  //Now we have to send the list to the localStorage
  localStorage.setItem("responses", JSON.stringify(responses));
  
  alert("Thankyou for your message, I will get in touch with you ASAP!");
  
  this.reset();
  
});