var list = document.getElementById("list");

function addtodo() {



  var todoitem = document.getElementById("todo-item");
    if (todoitem.value === "") {
      alert("plz fill the input");
    }

   else{
    var div = document.createElement('div');
    var inp = document.createElement('input');
    inp.disabled = true;
    inp.type = "Text";
    inp.setAttribute("class","list-inp");
    div.setAttribute("class","item")
    inp.setAttribute("value",todoitem.value);
    div.appendChild(inp);
    list.appendChild(div);
 
   todoitem.value = "";


  //edit button
 
 var editbtn = document.createElement("button");
 var edittext = document.createTextNode("Edit");
 editbtn.setAttribute("onclick","edititem(this)")
 editbtn.setAttribute("class","edit")
 editbtn.appendChild(edittext);
 div.appendChild(editbtn)


 // delete button

 var delbtn = document.createElement("button");
 var deltext = document.createTextNode("Delete");
 delbtn.setAttribute("onclick","del(this)")
 delbtn.setAttribute("class","delt")
 delbtn.appendChild(deltext);
 div.appendChild(delbtn);


   }  
  
}
// for  delete all 

function deleteall(){
    list.innerHTML = "";
}

// for delete one

function del(e) {
    e.parentNode.remove();
}

// for edit 

function edititem(e){
    var val = prompt("enter updated value", e.parentNode.firstChild.value);
    e.parentNode.firstChild.value = val;
    
}