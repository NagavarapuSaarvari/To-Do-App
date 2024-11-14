let add = document.getElementById('add');
let container = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

add.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    var del = document.createElement('button')

    paragraph.classList.add('paragraph-styling');
    paragraph.style.display = 'inline';
    del.classList.add('del-button');
    //del.style.display = 'inline';
    
    paragraph.innerText = inputField.value;
    del.textContent = "-";

    container.appendChild(paragraph);
    container.appendChild(del);
    inputField.value = "";
    
    del.addEventListener('click',function(){
        container.removeChild(paragraph);
        container.removeChild(del);
    })
})