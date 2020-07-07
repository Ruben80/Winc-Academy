let body = document.querySelector('.blue-background');
let buttonChangeBg = document.querySelector('.btn-background');
// let button = document.getElementById('mybutton');

// button.addEventListener("click", function(){
//     alert('Button clicked!');
// });

var mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", function () {
  alert("Button Clicked");
});


buttonChangeBg.addEventListener("click", function() {
    body.classList.toggle("red-background");
})


//     body.classList.add = ("redBackground");
//     alert("Button 2 Clicked");
//     console.log(body);
// // mybutton2.addEventListener("click", function () {

// });
// var myButton2 = function () {
//     const bodyElement = document.body;
//     bodyElement.classList.add("red-background");
//     alert("Button Clicked");
//   };
