//Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener('click', function(event) {
  addTodo(event);
});

todoList.addEventListener('click', removeItem);
filterOption.addEventListener('click', filterTodo);




//Functions
function addTodo(event){
  //prevent form from submitting 
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create LI
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerText =  todoInput.value;
  todoDiv.appendChild(newTodo);
  //check button
  const completedButton  = document.createElement('button');
  completedButton.innerText = 'Done';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement('button');
  trashButton.innerText = 'Remove';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  //Append to list
  todoList.appendChild(todoDiv);
  //clear Todo INPUT VALUE
  todoInput.value = '';
}

function removeItem(e){
let trashButton = document.querySelector('.trash-btn');
const item = e.target;
console.log(item);
if(item.classList[0] === 'trash-btn'){
  const todo = item.parentElement
  todo.classList.add('fall')
  todo.remove();
}
//completed task 
if(item.classList[0] === 'complete-btn') {
  const todo = item.parentElement
  todo.classList.toggle('completedItem');

  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
    todos.forEach(function(todo){
      switch(e.target.value) {
        case 'all':
        todo.style.display = 'flex';
        break;
        case 'completed':
          if(todo.classList.contains('completed')){
            return todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
      }
    });
}