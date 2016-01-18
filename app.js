window.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    var newTask = document.getElementById('input-new-task').value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(newTask);
    node.appendChild(textnode);
    document.getElementById('tasks').appendChild(node);
    document.getElementById('input-new-task').value = '';
  }
}, false);

document.getElementById('submit-button').addEventListener('click', function (e) {
  var newTask = document.getElementById('input-new-task').value;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(newTask);
  node.appendChild(textnode);
  document.getElementById('tasks').appendChild(node);
  document.getElementById('input-new-task').value = '';
});



// Task-click handler
var clickHandler = function(e) {
    this.classList.toggle('completed');
};

var tasks = document.querySelectorAll('ul#tasks li');
for (var ii=0, len=tasks.length; ii<len; ii++) {
    tasks[ii].addEventListener('click', clickHandler);
}
