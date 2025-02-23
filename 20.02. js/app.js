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
// document.addEventListener("DOMContentLoaded", function(){
//     var yndhanur = document.querySelector(".yndhanur");
//     var small = this.getElementById("small");

//     yndhanur.addEventListener("mousemove", function(event){
//         small.style.left = `${event.clientX}px`;
//         small.style.top = `${event.clientY}px`;
//     });
//     document.querySelectorAll(".color-box").forEach(box=>
//     {
//         box.addEventListener("mouseenter",function(){
//             var newColor = this.getAttribute("data-color");
//             small.style.backgroundColor = newColor;
//         })
//     }
//     )
// })

