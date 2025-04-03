'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');
    const input = document.querySelector('#input-add-task');


    function addTask() {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.textContent = input.value;
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.classList.add('delete-btn');
        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.classList.add('edit-btn');

        li.append(checkbox, span, btnDelete, btnEdit)
        ul.append(li)
    }


    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        if (input.value) {
            addTask(input.value)
        }
        input.value = '';
    })

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.classList.contains('delete-btn')) {
                e.target.closest('li').remove()

            } else if (e.target.classList.contains('edit-btn')) {
                const span = e.target.closest('li').querySelector('span');
                const newTask = prompt('Редактировать задачу:', span.textContent);
                if (newTask) {
                    span.textContent = newTask;
                }
            }
        } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            const el = e.target.closest('li').querySelector('span');
            el.classList.toggle('checked');
        }
    });
})
