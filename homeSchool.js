
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

 let b = {};
 b.name = "Noro";
 b.age = 18;
 b.lastName = "Mirz";

 const i = {
   name : "Rafael",
   age : 21
 };
 for(let ie in b){
   console.log(ie + ":" + b[ie] + "\n" + i[ie]);
 }

 
//  for(z in b){
//    console.log(z + ":" + b[z]);
//  }


//  let userList = [
//     // { 'name': "Armadon", "surname": "Makedonsky", "age": 33 },
//     // { 'name': "Armadon", "surname": "Makedonsky", "age": 33 }

// ];


// function diplayStudnetsList() {
//     if (userList.length > 0) {
//         $('#navUl').empty();
//         userList.map(item => {
//             let listItem = document.createElement('LI');
//             listItem.innerHTML = '<i class="fa fa-trash-o"></i>'
//             let content = document.createTextNode(`${item.name} ${item.surname} ${item.age}`);
//             listItem.appendChild(content);
//             // $(document).ready(function () {
//             //     $('li').css('color', 'red')

//             // })
//             let mainList = document.getElementById('navUl');
//             mainList.appendChild(listItem);
//             $('li').css({'border-bottom' : '1px solid red', "float" : "left"})
//             $('i').css({"color" : "red"})

//         })
//     }
// }

// diplayStudnetsList();

// const button = document.getElementById('button');
// button.addEventListener('click', function () {
//     let newUser = {};
//     let name = $('#name').val();
//     let surname = $('#lastName').val();
//     let age = $('#age').val();
//     newUser.name = name, newUser.surname = surname, newUser.age = age;
//     userList.push(newUser);
//     // $('#studentsList').empty();    
//     diplayStudnetsList();

// })

// const delBtn = document.getElementById('delBtn');
// delBtn.addEventListener('click', function () {
//     let index = $('delStudent').val();
//     userList.splice(index, 1);
//     alert(userList.length);
//     diplayStudnetsList();
// })


// let arr = [15,20,25,36,35,40];
// function filteredArr(arr, index) {
//     return arr.filter(function (val, i) {
//         return i % index;
//     })
// }
// console.log(filteredArr(arr, 2));



// // function bujnery(val) {
// //     return val.split("").reverse().map(function (value, i) {
// //         if (value === "1") {
// //             return Math.pow(2, i);
// //         }
// //             return 0;
        
// //     }).reduce(function (aggr, val) {
// //        return aggr + val ;
// //     }, 0);
// // }

// // alert(bujnery("100101"));