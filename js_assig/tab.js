var arr=[10,20,30,40,50,60,70];
var inp=8;
inp=inp%arr.length;
console.log(arr);
var temp=arr[inp];

for (var i=inp-1;i>=0;i--){
    arr[i+1]=arr[i];
}
arr[0]=temp;
console.log(arr);