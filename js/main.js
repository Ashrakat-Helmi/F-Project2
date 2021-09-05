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
        <input type="checkBox"  id="customCheck1" value="" >

        </div>
        ${taskData}
        <i class="fas fa-trash-alt float-right delete "></i>
        </div>`
        taskInput.value = "";
        noTasks.innerHTML = `
        <button type="button" class="btn btn-danger m-auto text-center deleteAll">Delete All</button> 
        `
        
    }
}



addbtn.addEventListener('click', addTask)

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        if(tasks.innerHTML ==``){
            noTasks.innerHTML =` No Tasks Added Yet `
        }
       
    }
})
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteAll')) {
     
        tasks.innerHTML=``
        
        noTasks.innerHTML =` No Tasks Added Yet `
    }
})

