
function clear_me()
{
	
	document.getElementById("res").innerHTML="";

}

function dis(val){
  

if ((document.getElementById("res").innerHTML).length<=8){
document.getElementById("res").innerHTML+=val ;  
}
else
{
 //document.getElementById("res").innerHTML="E"; 
 alert("Limit Exceeded");
}
}
function calc()
{
		let str= document.getElementById("res").innerHTML ;
	
		   
      var end=0,strt=0,i,u=0;
       
        var arr1=[];
        for (i=0;i<str.length;i++)
        {
           var p=str.charAt(i);
            if (p=='+'||p=='-'||p=='*'||p=='/')
            {
            end= i;
          arr1[u++]=str.substring(strt,end);
          arr1[u++]=p;
          strt=i+1;
            }
            }
            end=str.length;
             arr1[u++]=str.substring(strt,end);
            console.log(arr1);
            solve();
 function solve () {
 if (arr1.length==1){
   console.log(arr1);
 }  
else{
 if (arr1.includes('/')){
   var ct=arr1.indexOf('/');
   var ct1=parseFloat(arr1[ct-1])/parseFloat(arr1[ct+1]);
  arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
  solve();
  }
   

   else if (arr1.includes('*')){
   var ct=arr1.indexOf('*');
   var ct1=parseFloat(arr1[ct-1])*parseFloat(arr1[ct+1]);
   arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
   solve();
  }

   else if (arr1.includes('+')){
   var ct=arr1.indexOf('+');
   var ct1=parseFloat(arr1[ct-1])+parseFloat(arr1[ct+1]);
   arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
   solve(); 
  }

   else if (arr1.includes('-')){
   var ct=arr1.indexOf('-');
   var ct1=parseFloat(arr1[ct-1])-parseFloat(arr1[ct+1]);
   arr1.splice(ct-1,3);
   arr1.splice(ct-1,0,ct1);
   solve();
  }
  }
}


		document.getElementById("res").innerHTML = arr1;
}
function clr1(){
  var clr_r= document.getElementById("res").innerHTML;
  document.getElementById("res").innerHTML=clr_r.substring(0,clr_r.length -1);
}