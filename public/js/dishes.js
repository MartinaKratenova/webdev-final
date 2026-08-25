const mainCourse = document.getElementById('main-course');
const italian = document.getElementById('italian');
const starter = document.getElementById('starter');
const soup = document.getElementById('soup');
const dessert = document.getElementById('dessert');

const meals = document.getElementById('meals');

const sectionDishes = document.getElementById('dishes');

const jidla = [
  {
    "name": "Spaghetti Carbonara",
    "description": "Špagety s vejcem, parmazánem a křupavou pancettou.",
    "price": 189,
    "type": "italian"
  },
  {
    "name": "Chicken Tikka Masala",
    "description": "Kuřecí kousky v jemně pikantní omáčce z rajčat, smetany a indického koření.",
    "price": 219,
    "type": "main-course"
  },
  {
    "name": "Tomato Soup",
    "description": "Krémová rajčatová polévka s bazalkou a čerstvými bylinkami.",
    "price": 99,
    "type": "soup"
  },
  {
    "name": "Bruschetta",
    "description": "Opečený chléb s rajčaty, česnekem, bazalkou a olivovým olejem.",
    "price": 119,
    "type": "starter"
  },
  {
    "name": "Tiramisu",
    "description": "Klasický italský dezert z mascarpone, kávy a kakaa.",
    "price": 129,
    "type": "dessert"
  }
];



const renderMeals = (meals) => {

  meals.forEach(m => {
    if (m.name && m.price && m.type && m.description) {
      const mealCard = createMealCard(m.name, m.price, m.type, m.description);
      sectionDishes.append(mealCard);
    }
  }
  );

};


const createMealCard = (name, price, type, description) => {
  let mealCard = document.createElement('div');
  mealCard.classList.add('dish-card');

  //name
  const divTitle = document.createElement('div');
  divTitle.classList.add("title");

  const nameTag = document.createElement('h3');
  nameTag.textContent = name;
  divTitle.append(nameTag);

  mealCard.append(divTitle);

  // description
  const divText = document.createElement('div');
  divText.classList.add("description");

  const descriptionTag = document.createElement('div');
  descriptionTag.textContent = description;
  divText.append(descriptionTag);

  mealCard.append(divText);


  //price

  const divPrice = document.createElement('div');
  divPrice.classList.add("price-info");

  const priceTextTag = document.createElement('div');
  priceTextTag.textContent = "Cena";
  divPrice.append(priceTextTag);

  const priceTag = document.createElement('div');
  priceTag.textContent = price;
  divPrice.append(priceTag);


  mealCard.append(divPrice);



  return mealCard;


};




meals.addEventListener('click', (e) => {

  if (e.target.classList.contains('meal')) {
    document.querySelector('.meal.active')?.classList.remove('active');
    e.target.classList.add('active');
  }

});



const getAllMeals = () => {

  const response = jidla;

  const data = response;

  // meals.addEventListener('click', (e) => {


  //   const inputValue = e.id;
  //   const filteredMeals = data.type.includes(inputValue);

  //   renderMeals(filteredMeals);


  // });

  renderMeals(data);

};



getAllMeals();


