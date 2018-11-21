var jsonstr,u=2,i=1;
var arr=[];
var edinx;
var name1,age1,regno1;//stores post response
 var table =document.getElementById("myTable");
 localStorage.setItem("tbl_val", table);
 var flg=0,rd_id;
function register () {
     console.log("flagrec="+flg);
    if (flg==1){
       var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var regno=document.getElementById("regno").value;
        $.ajax({
        type: "PUT",
        url: 'http://localhost:8083/update/student/'+rd_id,
        async:true, 
        dataType:"json",
        data:{"name":name,"age":age,"registrationNumber":regno},
        crossDomain:true,
        success: function(response) {
            alert("Updated successfully");  
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

    
    else if (flg==0){
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
    flg=0;
}
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
            edt_bt.setAttribute("onclick","edt_row("+i+")");
            edinx=i;
            cell4.appendChild(edt_bt);

            var del_bt=document.createElement("button");
            del_bt.setAttribute("value","Delete");
            del_bt.innerHTML="Delete";
            del_bt.setAttribute("class","btn-primary");
            del_bt.setAttribute("id","d"+row_id);
            del_bt.setAttribute("onclick","del_row("+row_id+","+i+")");
            cell4.appendChild(del_bt);
            row.setAttribute("id",row_id)

            }

                	}
	});
      }
function del_row(drow,dindx){
    console.log("delete_id"+drow);
    console.log("delete_indx"+dindx);
$.ajax({
        type: "DELETE",
        url: "http://localhost:8083/delete/student/"+dindx,
        async:true, 
        dataType:"json",
       crossDomain:true,
        success: function(response) {
            console.log("Deleted File"+response);
            window.location.href="index2.html";
        },
        error: function(er){
           
         }
    });
    }
function edt_row(eindx){
    
    console.log("delete_indx"+eindx);

         

          $.ajax({
        type: "GET",
        url: "http://localhost:8083/student/getOneStudent/"+eindx,
        async:true, 
        dataType:"json",
        crossDomain:true,
        success: function(response) {
            console.log(response);

            
            localStorage.setItem('rsp_nm',response["name"]);
            localStorage.setItem('rsp_ag',response["age"]);
            localStorage.setItem('rsp_rg',response["registrationNumber"]);
            localStorage.setItem('rsp_id',edinx);
             
            window.location.href="index.html";
            
           
        },
        error:function(err)
        {
            console.log(err);
        }
    });
         
     
 }
    

function test()
{
            var rd_nm=localStorage.getItem('rsp_nm');
             var rd_ag=localStorage.getItem('rsp_ag');
             var rd_rg=localStorage.getItem('rsp_rg');
            rd_id=localStorage.getItem('rsp_id');
                
             if(rd_nm)
             {
             console.log(rd_nm);
             console.log(rd_ag);
             console.log(rd_rg);
              document.getElementById("name").value=rd_nm;
            document.getElementById("age").value=rd_ag
            document.getElementById("regno").value=rd_rg;
            document.getElementById("name").focus();


            localStorage.removeItem('rsp_nm');
            localStorage.removeItem('rsp_ag');
            localStorage.removeItem('rsp_rg');

             flg=1;
         console.log("flagset="+flg);

            } 
            localStorage.removeItem('rsp_id');
}