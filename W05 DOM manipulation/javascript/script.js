const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');



button.onclick = function() {
    if (input.value.length == 0)
    {
        return False; 
    } 

    let myItem = input.value;

    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    listItem.textContent = myItem
    listBtn.textContent = '❌'

    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.value = '';
    input.focus();

}