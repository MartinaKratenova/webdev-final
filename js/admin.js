const listSection = document.getElementById('list-container');
// console.log(listSection);

const addMealCardTextItem = (labelFor, labelText, divClass, divText) => {
  let mealCardItem = document.createElement('div');
  mealCardItem.classList.add('text', 'item');

  const label = document.createElement('label');
  label.for = labelFor;
  label.classList.add('label');
  label.textContent = labelText;
  mealCardItem.append(label);

  const div = document.createElement('div');
  div.classList.add(divClass);
  div.textContent = divText;
  mealCardItem.append(div);
  return mealCardItem;
};


const addMealCardIcon = (iconType) => {

  const icon = document.createElement('span');
  icon.classList.add('material-icons');
  icon.textContent = iconType;

  return icon;

};


const createMealCard = (name, description, price, type) => {

  let mealCard = document.createElement('div');
  mealCard.classList.add('card');
  listSection.append(mealCard);

  let mealCardDiv = document.createElement('div');
  mealCardDiv.classList.add('desc');
  mealCard.append(mealCardDiv);


  const dishNameItem = addMealCardTextItem('dish-name', 'Nazev', 'title-text', name);
  const dishDescriptionItem = addMealCardTextItem('dish-description', 'Popis', 'description-text', description);
  const dishPriceItem = addMealCardTextItem('dish-price', 'Cena', 'price-text', price);
  const dishTypeItem = addMealCardTextItem('dish-type', 'Typ', 'type-text', type);


  const mealCardIcons = document.createElement('div');
  mealCardIcons.classList.add('icons', 'item');

  const editIcon = addMealCardIcon('edit');
  const deleteIcon = addMealCardIcon('delete');

  mealCardIcons.append(editIcon, deleteIcon);

  editIcon.addEventListener("click", () => {
    console.log('editIcon');

  });
  deleteIcon.addEventListener("click", () => {
    console.log('deleteIcon');

  });

  mealCardDiv.append(dishNameItem, dishDescriptionItem, dishPriceItem, dishTypeItem, mealCardIcons);


  mealCard.append(mealCardDiv);


};



createMealCard('Pizza', 'Delicious cheese pizza', '$10', 'Main Course');
createMealCard('Krevety s rýží', 'Delicious shrimp and rice dish', '$12', 'Main Course');


//*********//
//**FORM***// 
//*********//


const addFormCardTextItem = (labelFor, labelText, divClass, divText) => {
  let formItem = document.createElement('div');
  formItem.classList.add('text', 'item');

  const label = document.createElement('label');
  label.for = labelFor;
  label.classList.add('label');
  label.textContent = labelText;

  formItem.append(label);

  const tag = document.createElement('input');
  tag.classList.add(divClass);
  tag.type = 'text';
  tag.placeholder = divText;

  formItem.append(tag);
  console.log(formItem);
  return formItem;
};

const addFormCardPricetItem = (labelFor, labelText, divClass, divText) => {
  let formItem = document.createElement('div');
  formItem.classList.add('text', 'item');

  const label = document.createElement('label');
  label.for = labelFor;
  label.classList.add('label');
  label.textContent = labelText;

  formItem.append(label);

  const tag = document.createElement('input');
  tag.classList.add(divClass);
  tag.type = 'number';
  tag.placeholder = divText;

  formItem.append(tag);
  console.log(formItem);
  return formItem;
};

const addFormCardTextAreaItem = (labelFor, labelText, divClass, text) => {
  let formItem = document.createElement('div');
  formItem.classList.add('text', 'item');

  const label = document.createElement('label');
  label.for = labelFor;
  label.classList.add('label');
  label.textContent = labelText;

  
  const tag = document.createElement('textarea');
  tag.classList.add(divClass);
  tag.id = divClass;
  tag.placeholder = text;

  formItem.append(label, tag);
   console.log(formItem);

  return formItem;
};

const addFormCardSelectItem = (labelFor, labelText, selectClass, selectText) => {
  let formItem = document.createElement('div');
  formItem.classList.add('text', 'item');

  const label = document.createElement('label');
  label.for = labelFor;
  label.classList.add('label');
  label.textContent = labelText;

  formItem.append(label);

  const tag = document.createElement('select');
  tag.classList.add(selectClass);
  tag.id = selectClass;
  tag.placeholder = selectText;

  const options = [
    {
      value: "main-course",
      name: "Hlavní chody"
    },
    {
      value: "dessert",
      name: "Dezerty"
    },
    {
      value: "italian",
      name: "Rizota a těstoviny"
    },
    {
      value: "starter",
      name: "Předkrmy"
    },
    {
      value: "soup",
      name: "Polévky"
    }

  ];

  options.forEach(option => {
    const o = document.createElement('option');
    o.value = option.value;
    o.textContent = option.name;
    tag.append(o);

  });

  formItem.append(tag);
  console.log(formItem);
  return formItem;

};



const createFormCard = (name, description, price, type) => {

  let form = document.createElement('form');
  form.classList.add('card');
  listSection.append(form);

  let div = document.createElement('div');
  div.classList.add('desc');
  form.append(div);


  const nameItem = addFormCardTextItem("title", "Název jídla", "title", name);
  const descriptionItem = addFormCardTextAreaItem("description", description,"description", description );
  const priceItem = addFormCardPricetItem("price", "Cena", "price",price);
  const typeItem = addFormCardSelectItem("type", "Typ","dish-type", type );


  const buttons = document.createElement('div');
  buttons.classList.add('icons', 'item');

  const saveIcon = addMealCardIcon('save');
  

  buttons.append(saveIcon);

  saveIcon.addEventListener("click", () => {
    console.log('saveIcon');

  });


  div.append(nameItem, descriptionItem, priceItem, typeItem, buttons);


  form.append(div);


};

createFormCard('Pizza', 'Delicious cheese pizza', '$10', 'Main Course');
