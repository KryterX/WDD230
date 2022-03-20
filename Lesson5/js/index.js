

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