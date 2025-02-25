
// var dd = document.getElementById("block")
// dd.addEventListener("scroll", function (tuk) {
//     var tk = (tuk.target.scrollTop)
//     if (Math.floor(tk / 50) % 2 == 0) {
//         tk.target.style = `
//             background: red ;
//             color: black;
//             width: 500px;
//             height: 400px;
//             border: 1px solid;
//             overflow: scroll;
//         `
//     } else  {
//         tk.target.style = `
//             background: blue;
//             color: black;
//             width: 500px;
//             height: 400px;
//             border: 1px solid;
//             overflow: scroll;
//         `}
// })

var ll = document.getElementById("block");
var plusButton = document.querySelector(".plus");
var minusButton = document.querySelector(".minus");

plusButton.addEventListener("click", function () {
    ll.scrollTop -= 20;
});
minusButton.addEventListener("click", function () {
    ll.scrollTop += 20;
});

ll.addEventListener("scroll", function (tuk) {
    var tk = tuk.target.scrollTop;
    if (Math.floor(tk / 50) % 2 == 0) {
        tuk.target.style = `
            background: red;
            color: black;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `;
    } else {
        tuk.target.style = `
            background: blue;
            color: white;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `;
    }
});