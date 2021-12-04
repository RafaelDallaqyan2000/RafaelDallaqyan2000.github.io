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

function drowResponseDataToPage(data) {
    if (data.length === 0) {
        const emptyInfo = document.createElement('H1');
        const textInfo = document.createTextNode('There is not student list!!!!!');
        emptyInfo.appendChild(textInfo);
        document.body.appendChild(emptyInfo);
    } else {
        for (const key in data) {
            let unpackageData = data[key];
            let listItem = document.createElement('LI');
            let content = document.createTextNode(`${unpackageData.firstname} ${unpackageData.lastname} ${unpackageData.email}`);
            listItem.innerHTML = `<div class="container"><i class="fa fa-trash-o" name="delete" id=${unpackageData._id}></i><i class="fa fa-edit" name="edit" id=${unpackageData._id}></i></div>`
            listItem.appendChild(content);
            let mainList = document.getElementById('studentsList');
            mainList.appendChild(listItem);
            $('li').css({ 'border-bottom': '1px solid black', 'padding': '5px' });
            $('i').css({'font-size': '20px', 'cursor': 'pointer' });
            $('.container').css({ 'float': 'right' });
            $('.fa-trash-o').css({'color' : 'red'})
            $('.fa-edit').css({'color' : 'green'})
        }
    }
    handleRemoveClick();
    handleEditClick();
}


function handleRemoveClick() {
    let removeIcons = document.getElementsByName('delete');
    for (let index = 0; index < removeIcons.length; index++) {
        removeIcons[index].addEventListener('click', showAlert)

    }
}
function handleEditClick() {
    let editIcons = document.getElementsByName('edit');
    for (let index = 0; index < editIcons.length; index++) {
        editIcons[index].addEventListener('click', function (e) {
            console.log('iddddddddddd---->>>', e.target.id)

            $.ajax({
                url: `http://127.0.0.1:3000/students//${e.target.id}`,
                success: function (data) {
                    editResponseData(data)

                }

            })
        })
    }

}

function showAlert(ev) {
    $.ajax({
        url: `http://127.0.0.1:3000/students/${ev.target.id}`,
        method: 'DELETE',
        success: function () {
            alert('Student is deleted successfully!!!');
            window.location.replace("ind.html")
        },
        error: function (xhr, status, error) {
            alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
        }
    })

}

function editResponseData(responseObject) {
    console.log('AAAAAAAAA---->>>', responseObject);
    let inputFieldFirstName = document.createElement('INPUT');
    inputFieldFirstName.value = responseObject.firstname;
    document.getElementById('inputConteiner').appendChild(inputFieldFirstName);
    let inputFieldLastName = document.createElement('INPUT');
    inputFieldLastName.value = responseObject.lastname;
    document.getElementById('inputConteiner').appendChild(inputFieldLastName);
    let inputFieldEmail = document.createElement('INPUT');
    inputFieldEmail.value = responseObject.email;
    document.getElementById('inputConteiner').appendChild(inputFieldEmail);
    let inputFieldPhone = document.createElement('INPUT');
    inputFieldPhone.value = responseObject.mobile;
    document.getElementById('inputConteiner').appendChild(inputFieldPhone);
    let inputFieldAge = document.createElement('INPUT');
    inputFieldAge.value = responseObject.age;
    document.getElementById('inputConteiner').appendChild(inputFieldAge);
    let confirmBotton = document.createElement('BUTTON');
    confirmBotton.innerText = "Submit"
    document.getElementById('inputConteiner').appendChild(confirmBotton);
    let dataId = responseObject._id;

    confirmBotton.addEventListener('click', function () {
        let objForEditedData = {};
        objForEditedData.firstname = inputFieldFirstName.value;
        objForEditedData.lastname = inputFieldLastName.value;
        objForEditedData.email = inputFieldEmail.value;
        objForEditedData.mobile = inputFieldPhone.value;
        objForEditedData.age = inputFieldAge.value;
        console.log('object', objForEditedData);
        $.ajax({
            url: `http://127.0.0.1:3000/students/${dataId}`,
            method:'PUT',
            data:objForEditedData,
            success:function(){
                alert('Yes')
                window.location.replace('/')
            },
            error: function (xhr, status, error) {
                alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
            }

            
        }

        )
    })

}




$(document).ready(function () {
    $('#someRequest').click(function () {
        $.ajax({
            url: "http://127.0.0.1:3000/students",
            success: function (returnData) {
                console.log('AAAAAAAAAAAAAA---->>>', returnData);
                drowResponseDataToPage(returnData);
            },
            error: function (xhr, status, error) {
                alert('Something went wrong \n ' + xhr.statusText + ' : ' + xhr.status);
            }
        })
    })
})

     // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addStudent");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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
            console.log('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
         }
     });
     
     })
    
// function deleteAllStudents(params) {
//     const idLists = [];
//     params.map((item) => {
//         idLists.push(item._id);
//     })

//     for (let index = 0; index < idLists.length; index++) {
//         $.ajax({
//             method:"DELETE",
//             url: `http://127.0.0.1:3000/students/${idLists[index]}`,
//             success: function (returnData) {
//                 console.log('AAAAAAAAAAAAAA---->>>', returnData);
//                 deleteAllStudents(returnData);
//             },
//             error: function (xhr, status, error) {
//                 alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
//             }
//         })

//     }
// }


// $.ajax({
//     type: "POST",
//     url: "https://127.0.0.1:3000/students",
//     data: JSON.stringify({
//         firstname: "Test",
//         lastname: 'Testyan',
//         email: 'test@mail.com',
//         mobile: 077777777,
//         age:18
//       }),
//       contentType: 'application/json',
//     success: function(msg){
//           alert( "Data Saved: " + msg );
//     },
//     error: function(XMLHttpRequest, textStatus, errorThrown) {
//        alert("some error");
//     }
//   });
