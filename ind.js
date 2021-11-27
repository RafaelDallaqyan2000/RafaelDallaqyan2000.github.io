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
            $('i').css({ 'font-size': '20px', 'cursor': 'pointer' });
            $('.container').css({ 'float': 'right' });
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
        },
        error: function (xhr, status, error) {
            alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
        }
    })

}

function editResponseData(responseObject) {
    console.log('AAAAAAAAA---->>>', responseObject);
    let inputFieldTitle = document.createElement('INPUT');
    inputFieldTitle.value = responseObject.firstname;
    document.getElementById('inputConteiner').appendChild(inputFieldTitle);
    let inputFieldBody = document.createElement('INPUT');
    inputFieldBody.value = responseObject.lastname;
    document.getElementById('inputConteiner').appendChild(inputFieldBody);
    let changeValue = document.createElement("BUTTON").value = "Na";
    

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
                alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
            }
        })
    })
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
