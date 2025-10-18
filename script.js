const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskTime = document.getElementById('taskTime');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const date = taskDate.value;
  const time = taskTime.value;

  if (!taskText) return alert("Please enter a task!");

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText} ${date ? `| ${date}` : ''} ${time ? `| ${time}` : ''}</span>
    <div>
      <button class="complete">✓</button>
      <button class="edit"></button>
      <button class="delete"></button>
    </div>
  `;
  
  taskList.appendChild(li);
  
  // Clear inputs
  taskInput.value = '';
  taskDate.value = '';
  taskTime.value = '';
});

taskList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  // Complete
  if (e.target.classList.contains('complete')) {
    const span = li.querySelector('span');
    span.style.textDecoration = span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  }

  // Delete
  else if (e.target.classList.contains('delete')) {
    li.remove();
  }

  // Edit
  else if (e.target.classList.contains('edit')) {
    const span = li.querySelector('span');
    const [textPart, datePart, timePart] = span.textContent.split('|').map(s => s.trim());
    const newText = prompt("Edit your task:", textPart);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = `${newText} ${datePart ? `| ${datePart}` : ''} ${timePart ? `| ${timePart}` : ''}`;
    }
  }
});
