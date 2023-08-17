const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function createTask() {
const taskText = taskInput.value;
const newTask = document.createElement('li');
newTask.classList.add('list-item');
newTask.textContent = taskText;
if (taskInput.value === "") {
alert("Поле не заполнено!");
} else {taskList.append(newTask)};
taskInput.value = '';
});

taskList.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
}
}, false);

