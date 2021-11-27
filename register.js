$(document).ready(function(){
 window.onscroll = function() {myFunction()};

 var navbar = document.getElementById("navbar");
 var sticky = navbar.offsetTop;
 
 function myFunction() {
   if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
   } else {
     navbar.classList.remove("sticky");
   }
 }

 $("#button_1").click(function(){
 let array = {
     "firstname" : "",
     "lastname" : "",
     "email" : "",
     "mobile" : "",
     "age" : ""
 };

    let firstname = document.getElementById("studentName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("Email").value;
    let mobile = document.getElementById("phone").value;
    let age = document.getElementById("age").value;

     array.firstname = firstname;
     array.lastname = lastName;
     array.email = email;
     array.mobile = mobile;
     array.age = age;
   
    console.log("Arrr-->>>", array);
    
    $.ajax({
      url: "http://127.0.0.1:3000/students",
      method: 'POST',
      data: array,
      success: function (returnData) {
          alert("Student is added successfully");
          window.location.replace('/')
      },
      error: function (xhr, status, error) {
          alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
      }
  });
  
  })
 
   
})
// function selectAlert(){
//   let option1 = document.getElementById("opt_1").value;
//   let option2 = document.getElementsById("opt_2");
//   let option3 = document.getElementsById("opt_3");
//   let globalOption = document.querySelector("option");

//     option1.addEventListener("click", (val) => {
//       alert("aaaa--->", val)
//     })
// }

