let todo = document.querySelectorAll("#do");
    add = document.querySelector(".add");
    ul = document.querySelector('.ul');


/* HTMLTableDataCellElement.innerHTML  = today.toLocaleDateString("en-US", options);

function addToDO(toDo){

} */

/* changeWord */
var lis = document.getElementsByTagName('li');
function changeWord() {
    for (let li of lis) { 
        li.addEventListener('dblclick', () => {
        li.setAttribute('contenteditable', 'true'); 
        li.focus();
        span.removeAttribute('.delete');
        })
        li.addEventListener('blur', () => {
            li.removeAttribute('contenteditable', 'true');
            span.setAttribute('.delete');
        })
    }
}

/* delete */
var spans = document.getElementsByTagName("span");
function deleteContent(){
    for (let span of spans) {
        span.addEventListener('click', function(){
            span.parentElement.style.cssText = 'color : gray; text-decoration : line-through';
            setTimeout(function(){
                span.parentElement.remove();
            },1500);
            event.stopPropagation();
        });
    }
} 

/* add item */
let input = document.querySelector('.input');

function createElement()  {
    let val = input.value;
        ul.insertAdjacentHTML('afterbegin', "<li id='do'><span class='delete'></span>"+val+"</li>");
        input.value = '';
}
input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        createElement();
        deleteContent(); 
        changeWord();
    }
})
deleteContent();
changeWord(); 


/* function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
        ul.innerHTML = data;
    }
    const deleteButtons = document.querySelectorAll("span.todo-trash");
    for (const button of deleteButtons) {
        listenDeleteTodo(button);
    }
}
loadTodos(); */



