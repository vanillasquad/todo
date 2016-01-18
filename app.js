document.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    var newTask = document.getElementById('input-new-task').value;
    console.log(document.getElementById('input-new-task'));
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
     var textnode = document.createTextNode(newTask);
     node.appendChild(textnode);
     document.getElementById('tasks').appendChild(node);
     document.getElementById('input-new-task').value = '';
  }
}, false);



// Task-click handler
var clickHandler = function(e) {
    this.classList.toggle('completed');
};

var tasks = document.querySelectorAll('ul#tasks li');
for (var ii=0, len=tasks.length; ii<len; ii++) {
    tasks[ii].addEventListener('click', clickHandler);
}
