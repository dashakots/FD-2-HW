const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');
let draggedItem;


window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
        .then(todos => {
            todos.slice(0, 20).forEach(todo => {

                const p = document.createElement('p');
                p.textContent = todo.title;
                p.classList.add('list-item');
                p.draggable = true;
                p.dataset.completed = todo.completed;

                p.addEventListener('dragstart', () => {
                    draggedItem = p;
                });

                if (todo.completed) {
                    rightBox.appendChild(p);
                    p.classList.add('done')
                } else {
                    leftBox.appendChild(p);
                }

            });
        });
});

function createDropZone(box) {
    box.addEventListener('dragover', e => e.preventDefault());
    box.addEventListener('drop', e => {
        e.preventDefault();
        if (draggedItem && box !== draggedItem.parentNode) {
            box.appendChild(draggedItem);
            if (box === rightBox) {
                draggedItem.dataset.completed = 'true';
                draggedItem.classList.add('done');
            } else {
                draggedItem.dataset.completed = 'false';
                draggedItem.classList.remove('done');
            }
        }
    });
}

createDropZone(rightBox);
createDropZone(leftBox);
