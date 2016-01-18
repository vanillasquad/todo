// Task-click handler
var clickHandler = function(e) {
   this.classList.toggle('completed');
};

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

document.getElementById('clear-completed').addEventListener('click', function(e) {
   var clearItems = document.querySelectorAll('completed');
   console.log(clearItems);
})
