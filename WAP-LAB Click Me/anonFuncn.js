window.onload = function(){
    document.getElementById("clickme", "body").onclick = changeColor;
} 
function changeColor(){
    var clickMe = document.getElementById("clickme")
    var bodyColor = document.getElementById("body")

    bodyColor.style.backgroundColor = "brown"

    clickMe.style.color = "red";

    alert("Get Ready the Backgroung color is about to change")
}


