var people = [
    { name: "Alisa", surname: "Poxosyan",country: "Hayastan" },
    { name: "Karen", surname: "Mxitaryan", country: "Shotlandia" },
    { name: "Abraham", surname: "Hakobyan", country: "Hayastan" },
    { name: "Nelli", surname: "Sahakyan", country: "Vrastan" },
    { name: "Anna", surname: "Soxomonyan", country: "Hayastan" }
];                                                                                                                          
function hay(people) {
    var mardik = [];
    for (var i = 0; i < people.length; i++) {
        if (people[i].country == "Hayastan") {
            mardik[mardik.length] = people[i]
        }
    }
    console.log(mardik);
}
var mardik = hay(people);
console.log(mardik);



var mard1 = {
    name: "Karine",
    surname: "Manucharyan",
    age: "25",
    number: "096584575",
    city: "Armenia"
}
var mard2 = {
    name: "Lilit",
    surname: "Poxosyan",
    age: "35",
    number: "077858560",
    city: "Armenia"
}
var mard3 = {
    name: "Aram",
    surname: "Miqayelyan",
    age: "29",
    number: "044585872",
    city: "Armenia"
}
var mard4 = {
    name: "Siranush",
    surname: "Siradexyan",
    age: "42",
    number: "093254565",
    city: "Armenia"
}
var mard5 = {
    name: "Sahak",
    surname: "Zaqaryan",
    age: "38",
    number: "099747421",
    city: "Armenia"
}

var arr = [mard1, mard2, mard3, mard4, mard5];
for (var i = 0; i < arr.length; i++) {
  document.write("<ul>");
  document.write("<li> name: ", arr[i]["name"], "</li>");
  document.write("<li> surname: ", arr[i]["surname"], "</li>");
  document.write("<li> age: ", arr[i]["age"], "</li>");
  document.write("<li> number: ", arr[i]["number"], "</li>");
  document.write("<li> city: ", arr[i]["city"], "</li>");
  document.write("</ul>");
}



var a = 7;
var b = 17;
var number = 1;
for (var i = 0; i < b; i++) {
    number *= a;
}
console.log(number); 