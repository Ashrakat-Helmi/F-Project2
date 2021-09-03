let addbtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskData');
let noTasks = document.getElementById('noTask');
let tasks = document.getElementById('tasks');


let addTask = () => {
    let taskData = taskInput.value;
    if (taskData.trim() == "") {
        alert('plese enter valid data')
    } else {

        tasks.innerHTML += `
        <div class= 'alert alert-info '>
        <div class="custom-control custom-checkbox " style="display: inline;">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1"></label>
        </div>
        ${taskData}
        <button class='btn btn-danger float-right delete'  style="padding: 3px;"> Delete </button>
        </div>`
        taskInput.value = "";
        noTasks.innerHTML = `
        <button type="button" class="btn btn-success">All Done</button>
        <button type="button" class="btn btn-danger  float-right deleteAll">Delete All</button>`
    }
}
addbtn.addEventListener('click', addTask)

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteAll')) {
     
        tasks.innerHTML=``
        noTasks.innerHTML =` No Tasks Added Yet `
    }
})