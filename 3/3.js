const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const list= document.getElementById('todo-list')
for(let i=0; i<tasks.length;i++){
    const items= document.createElement('li');
    items.classList.add('task');
    items.textContent=tasks[i];
    list.appendChild(items);
}