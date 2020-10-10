const buttonAdd = document.getElementById ('todoSubmit');
const input = document.getElementById ('todoInput');


buttonAdd.addEventListener('click', createList)
function createList(event){
    event.preventDefault();

    if  
        (input.value === "" ){
        alert('Por favor, preencha o campo!')
    }
    
    else {
    const list = document.getElementById('todoList');
    const item = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = inputValue;
    list.appendChild(itemList);
    item.appendChild(p);
    document.querySelector('#allInput').value= '';

    const buttonMark = document.getElementById('todoMarkAll');
    buttonMark.addEventListener('click', function(){
        p.classList.toggle('cheked');
});

    const buttonRemove = document.getElementById ('todoRemoveAll');
    buttonRemove.addEventListener('click', function (){
        list.removeChild(item);
    });    

    const tag = document.getElementById ('tag');
    const label = document.createElement('p');
    label.textContent = tag.value;
    item.appendChild(label);

    item.addEventListener('click', function check(){
        p.classList.toggle('checked');
        label.classList.toggle('checked');
    });
    
};
};