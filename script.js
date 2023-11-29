const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filtre = document.getElementById('filter');
//EventListeners :------------------------------------
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
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
    checkUI();
    itemInput.value = '';  
 }
 function removeItem (e){
    if((e.target.parentElement.classList.contains('remove-item'))){
      if(confirm("Are You Sure ?")){
          e.target.parentElement.parentElement.remove();
          checkUI();
      };  
    }; 
 }
 function clearItems (e){
    itemList.innerHTML = '';
    checkUI();
 }
 function checkUI(){
   const items = itemList.querySelectorAll('li');
   if(items.length === 0){
      clearBtn.style.display = "none";
      filtre.style.display = "none";

 } else{
      clearBtn.style.display = "block";
      filtre.style.display = "block";
 }};
 //Declare Functions :--------------------------------------------
 checkUI();