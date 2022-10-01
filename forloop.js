// var myArray= [];
// for (var i=0; i<5; i++){
//     myArray.push(i);

// }
// console.log(myArray);


// var ourArray=[];
// for(var i=10; i>0; i-=2){
//     ourArray.push(i);
// }
// console.log(ourArray);


// var ourArr =[9,10,11,12];
// var ourTotal=0;

// for (var i=0; i<ourArr.length; i++){
//     ourTotal+=ourArr[i];
// }
// console.log(ourTotal);


function multiplyAll(arr){
    var product =1;
    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr[i].length;j++){
            product*=arr[i][j]
        }11

    }
    return product;

}
var product =multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);