const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
//addEventListeners :------------------------------------

itemForm.addEventListener('submit', addItem);

//Functions :--------------------------------------------

 function addItem(e){
    e.preventDefault();
    newItem = itemInput.value;
    if(newItem === ''){
        alert('No Item Was Added');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
                        ${newItem}
                         <button class="remove-item btn-link text-red">
                         <i class="fa-solid fa-xmark"></i>
                         </button>
                `;
    itemList.appendChild(li) ;
    itemInput.value = '';    
 }