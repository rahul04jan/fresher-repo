var j=m=n=ids;
var flg=0;
var input;
var ids=0;
var edit_flag=0;
var mid=0,mid1=0;
var li_status;
 var edt_date;
    var edt_typeid,gt_status,gt_dsc,gt_status1;
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
   var inrval=document.getElementById("text").value;
    var ts = new Date();
  if (edit_flag==1){

    var inrval=document.getElementById("text").value;
     console.log("himid"+mid1);
   var type=document.getElementById("select_type").value;
    console.log(type)
    if  (type=='Daily Task'){
        var type_val=1;
    }
    else  if  (type=='Weekend Task'){
        var type_val=2;
    }
    else{
     var type_val=null;
    }
    console.log("typval"+type_val);
   

            
    $.ajax({
    type: "PUT",
    url: 'http://localhost:56830/api/Todoes/'+ids,
    async:true, 
    dataType:"json",
    data:{"Id":ids,"Description":inrval,"Status":"1","Created_At":ts.toISOString(),"Type_Id":type_val},
    crossDomain:true,
    success: function(response) {
       
       console.log(response);
      mid=ids;
      console.log("responsemid"+mid);
      var ul = document.getElementById("result");
var candidate = document.getElementById("text").value;
if (candidate==""){
  alert("You must write Something!");
}
else{
var li = document.createElement("li");
if (ids!=0){
  
  var li_id="li"+ids ;
  console.log(ids);
}
else{
 
var li_id="li"+ mid;
console.log("responsemid"+mid);
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
 n=mid;
 m=mid;
 console.log("del_n="+n);
 del.setAttribute('onclick',"delete1("+n+")");
 
 edit.setAttribute('onclick',"edit("+m+")");
 
var inrval=document.getElementById("text").value;
 document.getElementById("text").value=""; 
 document.getElementById("text").focus();
 flg=0;
ids=0;
mid=0;

}
    }
});

 document.getElementById("select_type").value="select_type";
    edit_flag=0;
        flg=0;
  }
  else{
    var type=document.getElementById("select_type").value;
    if  (type=='Daily Task'){
        var type_val=1;
    }
    else  if  (type=='Weekend Task'){
        var type_val=2;
    }
    else{
     var type_val=null;
    }

   $.ajax({
    type: "POST",
    url: 'http://localhost:56830/api/Todoes',
    async:true, 
    dataType:"json",
    data:{"Description":inrval,"Status":"1","Created_At":ts.toISOString(),"Type_Id":type_val},
    crossDomain:true,
    success: function(response) {
       console.log(response);
      mid= response["Id"];
      mid1=response["Type_Id"];

     var ul = document.getElementById("result");
var candidate = document.getElementById("text").value;
if (candidate==""){
  alert("You must write Something!");
}
else{
var li = document.createElement("li");
if (ids!=0){
  
  var li_id="li"+ids ;
  console.log(ids);
}
else{
 
var li_id="li"+ mid;
console.log("responsemid"+mid);
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
 n=mid;
 m=mid;
 console.log("del_n="+n);
 del.setAttribute('onclick',"delete1("+n+")");
 
 edit.setAttribute('onclick',"edit("+m+")");
 
var inrval=document.getElementById("text").value;
 document.getElementById("text").value=""; 
 document.getElementById("text").focus();
 flg=0;
ids=0;
mid=0;

}
      
    },
    error:function(ERR) {
      console.log(ERR);
    }
});
 document.getElementById("select_type").value="select_type"; 

}
}
  function edit(val2){
   
    if (flg==1)
    {
    alert("You Can edit only one task at a time ");
    document.getElementById("text").focus();
    }else
    {
           $.ajax({
          type: "GET",
          url: 'http://localhost:56830/api/Todoes/'+val2,
          async:true, 
          dataType:"json",
          crossDomain:true,
          success: function(response) {
                edt_date=response["Created_At"];
                console.log("Created_At"+edt_date);
                 edt_typeid=response["Type_Id"];
                 gt_status1=response["Status"];

                 console.log(response["Type_Id"]);
                 if (edt_typeid==1){
                    document.getElementById("select_type").selectedIndex="1";
                  }
                else if (edt_typeid==2){
                      document.getElementById("select_type").selectedIndex="2";
                 }
                 else{
                     document.getElementById("select_type").selectedIndex="0";
                  }
        }
        });
           


           console.log("Type_Idarun"+ edt_typeid);

           

      flg=1;
    var vlk2="li"+val2;
    console.log("id he"+val2);
    var rt=document.getElementById(vlk2).childNodes.item(vlk2).nodeValue;
    document.getElementById("text").value=rt;
    document.getElementById("text").focus();
    document.getElementById("li"+val2).remove();
        ids=val2;
    edit_flag=1;

    
  }
  
}

  function delete1(val1)
  {
    console.log(val1);
   
    $.ajax({
    type: "DELETE",
    url: 'http://localhost:56830/api/Todoes/'+val1,
    async:true, 
    dataType:"json",
    crossDomain:true,
    success: function(response) 
    {

       console.log(response);
       console.log("deletedid="+val1);
        document.getElementById("li"+val1).remove();


    }
});
    
  }
  function li_act()
  {
    alert("hi");
  }

  function display(){
    f1();
    
                $.ajax({
          type: "GET",
          url: 'http://localhost:56830/api/Todoes',
          async:true, 
          dataType:"json",
          crossDomain:true,
          success: function(response) {
              for (let x=0;x<response.length;x++){
              var cand=response[x]["Description"];
              var idd=response[x]["Id"];
              mid= response[x]["Id"];
              var stat=response[x]["Status"];
              ++mid;
              cret(idd,cand,stat);
            }
            }
            });
             $.ajax({
          type: "GET",
          url: 'http://localhost:56830/api/Todo_type',
          async:true, 
          dataType:"json",
          crossDomain:true,
          success: function(response) {
            for (let x=0;x<response.length;x++){
              var tsk=response[x]["Name"];
              let tsk_id=response[x]["ID"];
              console.log(tsk);
              var opt=document.createElement("option");
              opt.innerHTML=tsk;
              opt.value=tsk_id;
              
              var sel=document.getElementById("select_id");
               sel.appendChild(opt);

               sel.setAttribute("onchange","get_req()");
             
              var opt1=document.createElement("option");
              opt1.innerHTML=tsk;
              opt1.value=tsk;
              
              var sel1=document.getElementById("select_type");
               sel1.appendChild(opt1);
              
            }
                        
            console.log(response);
           
            }
            });        





    change_status_dis();
        }
  
  function cret(id,cand,stat=1){
li_status=stat;
    console.log("arun");
    //console.log(li_status);
    var ul = document.getElementById("result");
    var candidate=cand;
    
    var li_id="li"+id;
    var li = document.createElement("li");
    li.setAttribute('id',li_id);
   
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
 console.log("del_id="+id);
 li.setAttribute('onclick',"change_status("+id+")");
 del.setAttribute('onclick',"delete1("+id+")");

 edit.setAttribute('onclick',"edit("+id+")");

 j=m=n=id;
  if (li_status==2){
      li.setAttribute("class","checked");
    }
   
}


function get_req(){
var optid=document.getElementById("select_id").value;
   $.ajax({
          type: "GET",
          url: 'http://localhost:56830/api/Todoes',
          async:true, 
          dataType:"json",
          crossDomain:true,
          success: function(response) {
             document.getElementById("result").innerHTML="";
           for (let x=0;x<response.length;x++){
              
              var typeid= response[x]["Type_Id"];
              
             
              if (typeid==optid){
               
                console.log(optid);
                console.log(response[x]["Description"]);
                var cand=response[x]["Description"];
              var idd=response[x]["Id"];
               mid= response[x]["Id"];
              ++mid;
                
                 cret(idd,cand);
                 //document.getElementById("li"+idd).remove();
              }
              else if (typeid==optid){

                console.log(optid);
                console.log(response[x]["Description"]);
                
                var cand=response[x]["Description"];
              var idd=response[x]["Id"];
               mid= response[x]["Id"];
              ++mid;
               /*/ var list = document.getElementById("result");
                 while (list.hasChildNodes()) {
                     list.removeChild(list.firstChild);
                 }*/
                 cret(idd,cand);
                   //document.getElementById("li"+idd).remove();
              } 
            }
            if (optid==0){
            location.reload();
            }
            }
            });
            }
function change_status_dis(){
  var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    
  }
}, false);
}
function change_status(idl){
  var ts = new Date();
  console.log("lidelete"+idl);
   $.ajax({
          type: "GET",
          url: 'http://localhost:56830/api/Todoes/'+idl,
          async:true, 
          dataType:"json",
          crossDomain:true,
          success: function(response) {
                
                li_status=response["Status"];
                
                console.log(idl);
                var li_dsc=response["Description"];
                 var li_tp=response["Type_Id"];
                if (li_status==1){
                  li_status=2;
                }
               else if (li_status==2){
                  li_status=1;
                }
             $.ajax({
                    type: "PUT",
                    url: 'http://localhost:56830/api/Todoes/'+idl,
                    async:true, 
                    dataType:"json",
                    data:{"Id":idl,"Description":li_dsc,"Status":li_status,"Created_At":ts.toISOString(),"Type_Id":li_tp},
                    crossDomain:true,
                    success: function(response) {
                      console.log("put response"+response);
                    },
                    error: function(err) {
                      console.log("inside error");
                      console.log(err);
                    }
                  });
                
        }
        });
}