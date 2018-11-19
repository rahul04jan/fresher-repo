var jsonstr,u=2,i=1;
var arr=[];
var name1,age1,regno1;//stores post response
 var table =document.getElementById("myTable");
 localStorage.setItem("tbl_val", table);
function register () {
		var name=document.getElementById("name").value;
	var age=document.getElementById("age").value;
	var regno=document.getElementById("regno").value;
	$.ajax({
    	type: "POST",
   		url: 'http://localhost:8083/register/student',
    	async:true, 
    	dataType:"json",
    	data:{"name":name,"age":age,"registrationNumber":regno},
    	crossDomain:true,
    	success: function(response) {
            alert("Registered successfully");  
            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("regno").value="";
            document.getElementById("name").focus();
        },
        error: function(er){
            var err = JSON.parse(er.responseText);
            alert(err.message);
         }
	});
}

function retrieve(){
	$.ajax({
    	type: "GET",
   		url: 'http://localhost:8083/student/allstudent',
    	async:true, 
    	dataType:"json",
    	crossDomain:true,
    	success: function(response) {
    		console.log(response);
           
            for(var i=0;i<response.length;i++)
            {
             var row_id=response[i].registrationNumber;
            var table = document.getElementById("myTable");
            console.log(table);
            var row = table.insertRow(i+1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            
            cell1.innerHTML = response[i].name;
            cell2.innerHTML = response[i].age;
            cell3.innerHTML = response[i].registrationNumber;

             var edt_bt=document.createElement("button");
            edt_bt.setAttribute("value","Edit");
            edt_bt.innerHTML="Edit";
            edt_bt.setAttribute("class","btn-primary");
            edt_bt.setAttribute("id","e"+row_id);
            cell4.appendChild(edt_bt);

            var del_bt=document.createElement("button");
            del_bt.setAttribute("value","Delete");
            del_bt.innerHTML="Delete";
            del_bt.setAttribute("class","btn-primary");
            del_bt.setAttribute("id","d"+row_id);
            del_bt.setAttribute("onclick","del_row("+row_id+")");
            cell4.appendChild(del_bt);
            row.setAttribute("id",row_id)

            }

                	}
	});
      }
function del_row(drow){
    $.ajax({
        type: "DELETE",
        url: 'http:/localhost:8083/delete/student/'+drow,
        async:true, 
        dataType:"json",
       crossDomain:true,
        success: function(response) {

        },
        error: function(er){
           
         }
    });
    
    
}

