var j=0;
var m=0;
var n=0,flg=0;
var input;
var ids=0;
function f1(){
	input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("mybtn").click();
    }
});	
}

function add () {
	
var ul = document.getElementById("result");
var candidate = document.getElementById("text").value;
if (candidate==""){
	alert("You must write Something!");
}
else{
var li = document.createElement("li");
if (ids!=0){
	var li_id="li"+ids;
}
else{
var li_id="li"+j++;
}
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
var inrval=document.getElementById("text").value;
 document.getElementById("text").value=""; 
 document.getElementById("text").focus();
 flg=0;
ids=0;
 var today = new Date();
    var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today =dd + '/'+ mm + '/' + yyyy;

$.ajax({
    type: "POST",
    url: 'http://localhost:56830/api/Todoes',
    async:true, 
    dataType:"json",
    data:{"Description":inrval,"Status":"1","Created_At":today},
    crossDomain:true,
    success: function(response) {
       console.log(response);
    }
});

}
}
	function edit(val2){
		
		if (flg==1)
		{
		alert("You Can edit only one task at a time ");
		document.getElementById("text").focus();
		}else
		{
			flg=1;
		var vlk2="li"+val2;
		var rt=document.getElementById(vlk2).childNodes.item(vlk2).nodeValue;
		document.getElementById("text").value=rt;
		document.getElementById("text").focus();
		delete1(val2);
		ids=val2;

		
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

	function display(){
		f1();
		/*var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:56830/api/Todoes", true);
    xhr.send();

    xhr.addEventListener("readystatechange", processRequest, false);
    xhr.onreadystatechange = processRequest;
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);*/
            $.ajax({
					type: "GET",
					url: 'http://localhost:56830/api/Todoes',
					async:true, 
					dataType:"json",
					crossDomain:true,
					success: function(response) {
						
					
						console.log(response);
           	for (let x=0;x<response.length;x++){
           		var cand=response[x]["Description"];
           		var idd=response[x]["Id"];
           		cret(idd,cand);
           	}


        }
    });
        }
	
	function cret(id,cand){
		var ul = document.getElementById("result");
		var candidate=cand;
		console.log(candidate);
		var li_id="li"+id;
		var li = document.createElement("li");
		li.setAttribute('id',li_id);
li.setAttribute('class',"a");
li.appendChild(document.createTextNode(candidate));
var myNodelist = document.getElementsByTagName("LI");
var i;
var span = document.createElement("SPAN");
var span1=document.createElement("SPAN");
  var edit = document.createElement("button");
  var edit_id="edit"+id;
  edit.setAttribute('id',edit_id);
  edit.setAttribute('value',"editor");
  edit.setAttribute('class',"et");
  edit.innerHTML="&#xf044";
  span.className = "close";
  span.appendChild(edit);
   
   var del = document.createElement("button");
  var del_id="del"+id;
  del.setAttribute('id',del_id);
  del.setAttribute('value',"delete");
  del.setAttribute('class',"dt");
  del.innerHTML="&#xf014";
 
  span1.className = "close";
 span1.appendChild(del);
 li.appendChild(span);
 li.appendChild(span1);
 
 ul.appendChild(li);
 del.setAttribute('onclick',"delete1("+id+")");
 
 edit.setAttribute('onclick',"edit("+id+")");
 id++;
 j=m=n=id;
}