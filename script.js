window.onload = function () {
  initShoppingList();
};

function initShoppingList() {
  let form = document.getElementById("item-form");
  form.addEventListener("submit", (e) => {
    handleItemForm(e, form);
  })
}

function handleItemForm(e, formRef) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  addItemToShoppingList();
  formRef.reset();

  return false;
}

function addItemToShoppingList() {
  let itemName = document.getElementById("item-name");
  let itemAmount = document.getElementById("item-amount");
  let id= getRandomInt(1, 1000000);

  // Creates list item HTML and appends to page
  let itemHtml = createListItemHtml(itemName, itemAmount, id);
  let itemListRef = document.getElementById("shopping-list");
  itemListRef.insertAdjacentHTML("afterend", itemHtml);

  setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
  let deleteButtonRef = document.getElementById("button" + id);
  deleteButtonRef.addEventListener("click", () => {
    removeListItem(id);
  })
}

function createListItemHtml(itemName, itemAmount, id) {
  return `<li id="item${id}">
             ${itemName.value} - ${itemAmount.value}
             <button 
                type="button"
                id="button${id}">
                Delete Item</button>
          </li>
      `;
}

function removeListItem(id) {
  let itemRef = document.getElementById("item" + id);
  itemRef.parentNode.removeChild(itemRef);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}