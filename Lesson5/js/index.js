/*
const list = document.querySelector('.list');
const inputs = document.querySelector('#chapter');
const useButton = document.querySelector('button');

useButton.addEventListener('click', () => {


    let myItem = inputs.value;
    inputs.value = '';
    if(myItem!==""){
        const listItem = document.createElement('li');
        const listValue = document.createElement('span');
        listItem.appendChild(listValue);
        listValue.textContent = myItem;
        const listBtn = document.createElement('button');
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);
    }
    
    
    
    
    

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    })

    inputs.focus();
    


})
*/

const list = document.querySelector('.list');
const inputs = document.querySelector('#chapter');
const usebutton = document.querySelector('button');

usebutton.addEventListener('click', () => {


    let myitem = inputs.value;
    inputs.value = '';
    const listitem = document.createElement('li');
    const listvalue = document.createElement('span');
    const listbtn = document.createElement('button');
    if(myitem!==""){
        

        listitem.appendChild(listvalue);
        listvalue.textContent = myitem;
        listitem.appendChild(listbtn);
        listbtn.textContent = 'X';
        list.appendChild(listitem);
    }
    

    listbtn.addEventListener('click', () => {
        list.removeChild(listitem);
    })

    inputs.focus();
    


})