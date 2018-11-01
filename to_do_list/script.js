var j=1;
var m=1;
var n=1,flg=0;
var input;
window.onload=function f1(){
	input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("mybtn").click();
    }
});	
};

function add () {
	
var ul = document.getElementById("result");
var candidate = document.getElementById("text").value;
if (candidate==""){
	alert("You must write Something!");
}
else{
var li = document.createElement("li");
var li_id="li"+j++;
li.setAttribute('id',li_id);
li.setAttribute('class',"a");
li.appendChild(document.createTextNode(candidate));
var myNodelist = document.getElementsByTagName("LI");
var i;
var span = document.createElement("SPAN");
var span1=document.createElement("SPAN");
  var edit = document.createElement("button");
  var edit_id="edit"+m;
  edit.setAttribute('id',edit_id);
  edit.setAttribute('value',"editor");
  edit.setAttribute('class',"et");
  edit.innerHTML="&#xf044";
  span.className = "close";
  span.appendChild(edit);
   
   var del = document.createElement("button");
  var del_id="del"+n;
  del.setAttribute('id',del_id);
  del.setAttribute('value',"delete");
  del.setAttribute('class',"dt");
  del.innerHTML="&#xf014";
 
  span1.className = "close";
 span1.appendChild(del);
 li.appendChild(span);
 li.appendChild(span1);
 
 ul.appendChild(li);
 del.setAttribute('onclick',"delete1("+n+")");
 n++;
 edit.setAttribute('onclick',"edit("+m+")");
 m++;

 document.getElementById("text").value=""; 
 document.getElementById("text").focus();
 flg=0;

}
}
	function edit(val2){
		
		if (flg==1)
		{
		alert("Can edit only one task at a time ");
		document.getElementById("text").focus();
		}else
		{
			flg=1;
		var vlk2="li"+val2;
		var rt=document.getElementById(vlk2).childNodes.item(vlk2).nodeValue;
		document.getElementById("text").value=rt;
		document.getElementById("text").focus();
		delete1(val2);
		
	}
	
}

	function delete1(val1)
	{
		var vlk1="li"+val1;
		
	document.getElementById(vlk1).remove();
	}
	function li_act()
	{
		alert("hi");
	}
