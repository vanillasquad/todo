
/*document.querySelector('form.task-list input[type=button]').addEventListener('click', function(e) {
  // takes info in input box and adds it to task list
  var newTask = document.getElementById('input-new-task');
  // document.getElementById('input-new-task').value = ""; should clear input box
  document.getElementById('tasks').appendChild(newTask); // should add task to list

});

*/

// takes info in input box and adds it to task list
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




// document.getElementById('tasks').appendChild(newTask); // should add task to list
