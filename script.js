const listSection = document.getElementById('list-container');
console.log(listSection);

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

const addMealCardIcons = () => {

  let mealCardIcons = document.createElement('div');
  mealCardIcons.classList.add('icons', 'item');

  mealCardIcons.append(addMealCardIcon('edit'));
  mealCardIcons.append(addMealCardIcon('delete'));

  return mealCardIcons;

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

  mealCardDiv.append(dishNameItem, dishDescriptionItem, dishPriceItem, dishTypeItem);


  const mealCardIcons = addMealCardIcons();

  mealCardDiv.append(mealCardIcons);


  mealCard.append(mealCardDiv);


};

createMealCard('Pizza', 'Delicious cheese pizza', '$10', 'Main Course');
createMealCard('Krevety s rýží', 'Delicious shrimp and rice dish', '$12', 'Main Course');


