document.addEventListener("DOMContentLoaded",()=>
{
var karmir =  document.querySelector(".karmir");
var sev = document.getElementById("sev")

karmir.addEventListener("mousemove",(event)=>
{
    var rect = karmir.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    sev.style.left = `${x}px`;
    sev.style.top = `${y}px`;
})
})



document.addEventListener("click", function (event) {
    const blackBox = document.getElementById("black-box");
    
    if (event.target.classList.contains("color-box")) {
        switch (event.target.id) {
            case "blue-box":
                blackBox.style.backgroundColor = "orange";
                break;
            case "yellow-box":
                blackBox.style.backgroundColor = "blue";
                break;
            case "orange-box":
                blackBox.style.backgroundColor = "yellow";
                break;
        }
    } else {
        blackBox.style.backgroundColor = "black";
    }

    blackBox.style.left = `${event.clientX - 25}px`;
    blackBox.style.top = `${event.clientY - 25}px`;
    blackBox.style.display = "block";
});