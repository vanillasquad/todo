
/*document.querySelector('form.task-list input[type=button]').addEventListener('click', function(e) {
  // takes info in input box and adds it to task list
  var newTask = document.getElementById('input-new-task');
  // document.getElementById('input-new-task').value = ""; should clear input box
  document.getElementById('tasks').appendChild(newTask); // should add task to list

});

*/

document.getElementById('submit-button').onclick = function (e) {
  // takes info in input box and adds it to task list
  var newTask = document.getElementById('input-new-task');
  // document.getElementById('input-new-task').value = ""; should clear input box
  document.getElementById('tasks').appendChild(newTask); // should add task to list
};



// Task-click handler
var clickHandler = function(e) {
    this.classList.toggle('completed');
};

var tasks = document.querySelectorAll('ul#tasks li');
for (var ii=0, len=tasks.length; ii<len; ii++) {
    tasks[ii].addEventListener('click', clickHandler);
}
