var arr = [42,21,31,20,3,13,17,29,9,22,34,61,48,8,11]
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}

var arr = [7,14,25,48,63,8,5]
for(var i = arr.length -1; i >= 0; i--){
    console.log(arr[i])
}

var arr = [4,21,35,22,12]
 var b = 0;
 for(var i = 0; i < arr.length; i++){
    b = b + arr[i];
 }
 console.log(b)


 var arr = [25,12,8,7,31,24]
 var k = 0;
 var z = 0
 for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        z = z + arr[i];
    }else{
        k = k + arr[i];
    }
 }
 console.log(k);
 console.log(z);

 if(k > z){
    console.log("kent tveri gumary mec e", k);
 }else if(z > k){
    console.log("zuyg tveri gumary mec e", z);
 }else{
    console.log("havasar en", k);
 }