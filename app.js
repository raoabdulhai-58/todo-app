var database = firebase.database().ref('todo');

function submitdata(){
       var inp = document.getElementById('data');
      
       var key = database.push().key;
      
       var todo = {
          inp_data : inp.value,
          key : key
       };
       database.child(key).set(todo);
       
       inp.value = "";
}

database.on('child_added',function(data){
      


          var div = document.createElement('div');
          div.setAttribute('class','li_container');
          
          var li = document.createElement('li');

          var span = document.createElement('span');
          span.setAttribute('id','li-para');
          var span_text = document.createTextNode(data.val().inp_data);
          span.appendChild(span_text);
          li.appendChild(span);


            var edit_button = document.createElement('button');
           var edit_text = document.createTextNode('Edit');
           edit_button.appendChild(edit_text);
           edit_button.setAttribute('class','edit-btn')
           edit_button.setAttribute('id', data.val().key)
           edit_button.setAttribute('onclick','edit(this)')
           li.appendChild(edit_button);



           var delete_button = document.createElement('button');
           var delete_text = document.createTextNode('Delete');
           delete_button.appendChild(delete_text);
           delete_button.setAttribute('class','del-btn')
           delete_button.setAttribute('id', data.val().key)
           delete_button.setAttribute('onclick','del(this)')
           li.appendChild(delete_button);


            div.appendChild(li);
           list.appendChild(div);

})

function delall(){
     firebase.database().ref('todo').remove();
     var list = document.getElementById('list');
     list.innerHTML = "";
}

function del(e){
   firebase.database().ref('todo').child(e.id).remove();
   e.parentNode.remove(); 
}



function edit(e){

    var inp = prompt("Plz Enter data", e.parentNode.firstChild.value);
     var edit_todo = {
      inp_data : inp,
      key : e.id 
   }
   firebase.database().ref('todo').child(e.id).set(edit_todo);
    e.parentNode.firstChild.innerHTML = inp;

}


