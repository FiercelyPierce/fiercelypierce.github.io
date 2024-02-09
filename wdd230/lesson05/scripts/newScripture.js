const input = document.querySelector('#favchap');
const scriptureList = document.querySelector('#list');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (input.value != '') {
        const newListItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        newListItem.textContent = input.value;
        deleteButton.textContent = '❌';
        newListItem.append(deleteButton);
        scriptureList.append(newListItem);

        deleteButton.addEventListener('click', () => {
            scriptureList.removeChild(newListItem);
            input.focus();
        });

        input.value = '';
    }
});
