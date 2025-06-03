// access input field
const input = document.querySelector('#todo-input');

// Listening to click event from "Add" button
document.querySelector('#submit').addEventListener('click', () => {
  const inputData = input.value;
  input.value = "";

  // creating todo item element
  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_content_el = document.createElement('div');
  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.type = 'text';
  todo_input_el.value = inputData;
  todo_input_el.setAttribute('readonly', 'readonly');
  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  const todo_done_el = document.createElement('i');
  todo_done_el.classList.add('fa-solid');
  todo_done_el.classList.add('fa-check');

  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa-solid');
  todo_edit_el.classList.add('fa-pen-to-square');

  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa-solid');
  todo_delete_el.classList.add('fa-trash');

  todo_actions_el.appendChild(todo_done_el);
  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);
  document.querySelector('.todo-lists').appendChild(todo_el);

  // Done functionality
  todo_done_el.addEventListener('click', () => {
    todo_input_el.classList.add('done');
    todo_el.removeChild(todo_actions_el);
  });

  // Edit functionality
  todo_edit_el.addEventListener('click', () => {
    if (todo_edit_el.classList.contains('fa-pen-to-square')) {
      todo_input_el.removeAttribute('readonly');
      todo_input_el.focus();
      todo_edit_el.classList.remove('fa-pen-to-square');
      todo_edit_el.classList.add('fa-check');
    } else {
      todo_input_el.setAttribute('readonly', 'readonly');
      todo_edit_el.classList.remove('fa-check');
      todo_edit_el.classList.add('fa-pen-to-square');
    }
  });

  // Delete functionality
  todo_delete_el.addEventListener('click', () => {
    todo_el.remove();
  });
});
