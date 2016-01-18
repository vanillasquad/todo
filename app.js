// select task click handler
var clickHandler = function(e) {
   this.classList.toggle('completed');
};

// add todo item when pressing return key
document.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    var newTask = document.getElementById('input-new-task').value;
    if (newTask !== '') {
       var node = document.createElement("li")
       node.className += 'task';
       var textnode = document.createTextNode(newTask);
       node.appendChild(textnode);
       var finalNode = document.getElementById('tasks').appendChild(node);
       finalNode.addEventListener('click', clickHandler)
      document.getElementById('input-new-task').value = '';
    }
  }
}, false);

// add todo item on button click
document.getElementById('submit-button').addEventListener('click', function (e) {
  var newTask = document.getElementById('input-new-task').value;
  if (newTask !== '') {
     var node = document.createElement("li");
     node.className += 'task';
     var textnode = document.createTextNode(newTask);
     node.appendChild(textnode);
     var finalNode = document.getElementById('tasks').appendChild(node);
     finalNode.addEventListener('click', clickHandler)
     document.getElementById('input-new-task').value = '';
  }
}, false);

// remove
document.getElementById('clear-completed').addEventListener('click', function(e) {
   var clearItems = document.querySelectorAll('li.completed');
   console.log(clearItems);
   for (var i=0; i<clearItems.length; i++) {
      clearItems[i].remove();
   }
})
