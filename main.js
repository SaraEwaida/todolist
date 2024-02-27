
const addButton =document.getElementById('addButton');
addButton.addEventListener('click', addTask);

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
    if(taskText!==''){
        const li =document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        checkbox.className = 'task-checkbox'; 
        li.addEventListener('change',doneTask);
        
        const label = document.createElement('span');
        label.textContent =taskText;
        label.className = 'task-label';
        li.appendChild(label);
        
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.addEventListener('click',deleteTask);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';        

    }
}

function doneTask(event){
    const label = event.target.nextSibling;
    if (event.target.checked) {
        label.classList.add('done');
    } else {
        label.classList.remove('done');
    }
}


function deleteTask(event){
    const taskItem = event.target.closest('li');
    taskList.removeChild(taskItem);
}