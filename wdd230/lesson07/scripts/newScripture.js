const input = document.querySelector('#favchap');
const scriptureList = document.querySelector('#list');
const button = document.querySelector('button');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(chapter) {
    const newListItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    newListItem.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    newListItem.append(deleteButton);
    scriptureList.append(newListItem);

    deleteButton.addEventListener('click', () => {
        scriptureList.removeChild(newListItem);
        deleteChapter(scriptureList.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item != chapter);
    setChapterList();
}