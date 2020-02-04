//var name = prompt("Как тебя зовут?");
//console.log("Ваше имя " + name);
window.onload = function(){
  var todolist = [];
  if(localStorage.getItem('todo')!=undefined){
    todolist=JSON.parse(localStorage.getItem('todo'));
    out();
  }
  document.getElementById('add').onclick = function(){
    var d= document.getElementById('in').value;
    var temp = {};
    temp.todo =d;
    temp.check=false;
    var i = todolist.length;
    todolist[i]=temp;
    console.log(todolist);
    out();
    localStorage.setItem('todo', JSON.stringify(todolist));
  }
  function out(){
    var out ='';
    for(var key in todolist){
      if (todolist[key].check ==true){
        out +='<input type="checkbox"checked>';

      }
      else{
        out+='<input type = "checkbox">';
      }
      out += todolist[key].todo +'<br>';
    

    }
    document.getElementById('out').innerHTML = out;
  }
}