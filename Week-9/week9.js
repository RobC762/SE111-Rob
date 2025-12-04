
var foodImage = document.getElementById("food")

var foodButton  = document.getElementById("foodButton")

function changeImage() {
    console.log(foodImage.src)
    foodImage.src = "hotdog.jpg" // changes from bruger to hotdog
}
foodButton.addEventListener('click',changeImage)

//-----parent & child objects

document.querySelector('p')

console.log(document.getElementById("divContainer").children[0])

var divPTag = document.getElementById("divContainer").children[0];

divPTag.setAttribute('id','bacon')

var text = document.getElementById('bacon')

//can also use css ids and classes

//creating & adding elements

var h1Element = document.createElement('h1')
h1Element.innerHTML = "This is a new H1 tag"
divPTag.appendChild(h1Element)

function bf() {
    var youGONE = document.getElementById('divContainer')
    document.querySelector('body').removeChild(youGONE)
}

document.getElementById('order66').addEventListener('click', bf)

var names = document.querySelectorAll('.names')

for (var i = 0; i < names.length; i++) {
    console.log(names[i].innerHTML)
    names[i].style.color = "blanchedalmond"
}