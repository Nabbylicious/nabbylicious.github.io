function addItem() {
    const input = document.querySelector('input[type="text"]');
    const table = document.getElementById('items');
    const newLi = document.createElement('li');
    const newLink = document.createElement('a');
    
    newLi.textContent = input.value;
    newLink.href = '#';
    newLink.textContent = '[Delete]';
    
    newLi.appendChild(newLink);
    table.appendChild(newLi);

    newLink.addEventListener('click', dannyDeleto);

    input.value = '';

    function dannyDeleto() {
        this.parentElement.remove();
    }
}