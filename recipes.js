const IMAGE_BASE_PATH = 'images/';
    
let recipes = [
    {name: 'Aloo Tikki', category: 'namkeen', image: 'download.jpg', description: 'Crispy potato patties.', rating: 0, ingredients:['2 potatoes','1 tsp chili powder','Salt','Oil'], steps:['Boil potatoes','Mash and mix spices','Shape patties','Fry until golden']},
    {name: 'Samosa', category: 'namkeen', image: 'samosa.png', description: 'Triangular pastry with potato filling.', rating: 0, ingredients: ["All-purpose flour", "Boiled potatoes", "Peas", "Chili powder", "Cumin seeds", "Oil", "Salt"],
    steps: ["Make dough with flour and water", "Prepare spicy potato filling", "Shape cones and fill", "Deep fry until crisp"] },
    {name: 'Sev Puri', category: 'namkeen', image: 'sevpuri.jpeg', description: 'Crispy snack with chutneys.', rating: 0,ingredients: ["Puri", "Boiled potatoes", "Chutneys", "Chopped onion", "Sev", "Coriander"],
    steps: ["Arrange puris", "Fill with mashed potatoes", "Drizzle chutneys", "Top with onions and sev", "Serve immediately"]},
    {name: 'Bhel Puri', category: 'namkeen', image: 'bhelpuri.jpeg', description: 'Puffed rice mixture snack.', rating: 0, ingredients: ["Puffed rice", "Sev", "Chopped onion", "Tomato", "Chutneys", "Coriander", "Lemon juice"],
    steps: ["Mix puffed rice with chutneys and veggies", "Toss well", "Serve immediately to keep crispy"]
    },
    {name: 'Kachori', category: 'namkeen', image: 'kachori.jpeg', description: 'Spicy stuffed fried bread.', rating: 0,ingredients: ["Maida", "Moong dal", "Chili powder", "Coriander powder", "Salt", "Oil"],
    steps: ["Make dough", "Prepare dal filling", "Stuff and roll", "Deep fry until golden brown"]
    },
    {name: 'Pakora', category: 'namkeen', image: 'pakora.jpeg', description: 'Fried vegetable fritters.', rating: 0,ingredients: ["Gram flour", "Sliced onion/potato/spinach", "Chili powder", "Salt", "Water", "Oil"],
    steps: ["Make batter", "Dip veggies", "Deep fry until crisp"]
    },
    {name: 'Mathri', category: 'namkeen', image: 'mathri.jpeg', description: 'Savory flaky snack.', rating: 0,ingredients: ["Maida", "Semolina", "Ajwain", "Salt", "Oil"],
    steps: ["Make stiff dough", "Roll small rounds", "Deep fry until golden and crisp"]
    },
    {name: 'Paneer Tikka', category: 'namkeen', image: 'paneertikka.jpeg', description: 'Grilled marinated paneer.', rating: 0, ingredients: ["Paneer cubes", "Curd", "Chili powder", "Garam masala", "Lemon juice", "Oil"],
    steps: ["Marinate paneer", "Skewer pieces", "Grill or pan-fry until slightly charred"]
    },
    {name: 'Chivda', category: 'namkeen', image: 'chivda.jpeg', description: 'Spicy flattened rice snack.', rating: 0, ingredients: ["Flattened rice", "Peanuts", "Curry leaves", "Mustard seeds", "Chili powder", "Oil"],
    steps: ["Roast poha and nuts", "Temper with spices", "Mix well and store airtight"]
    },
    {name: 'Dhokla', category: 'namkeen', image: 'dhokla.jpeg', description: 'Steamed savory cake.', rating: 0, ingredients: ["Gram flour", "Curd", "Lemon juice", "Fruit salt", "Mustard seeds", "Curry leaves"],
    steps: ["Mix batter", "Steam for 15 – 20 mins", "Temper with mustard seeds and curry leaves"]
},
    {name: 'Bhajiya', category: 'namkeen', image: 'bhajiya.jpeg', description: 'Vegetable fritters.', rating: 0,ingredients: ["Gram flour", "Sliced onions", "Chili powder", "Ajwain", "Salt", "Oil"],
    steps: ["Make thick batter", "Coat onions", "Deep fry until golden"]},
    {name: 'Corn Chaat', category: 'namkeen', image: 'cornchat.jpeg', description: 'Spiced corn snack.', rating: 0, ingredients: ["Boiled corn", "Butter", "Chili powder", "Lemon juice", "Salt", "Chopped onion"],
    steps: ["Mix all ingredients in a bowl", "Serve warm"]},
    {name: 'Moong Dal Chilla', category: 'namkeen', image: 'moongdalchilla.jpeg', description: 'Savory lentil pancake.', rating: 0, ingredients: ["Soaked moong dal", "Green chili", "Ginger", "Salt", "Oil"],
    steps: ["Grind dal into batter", "Spread on tawa", "Cook both sides", "Serve hot"]},
    {name: 'Aloo Chaat', category: 'namkeen', image: 'aloochat.jpeg', description: 'Spiced potato cubes.', rating: 0,ingredients: ["Boiled potatoes", "Chili powder", "Chaat masala", "Salt", "Lemon juice"],
    steps: ["Fry potatoes", "Mix with spices and chutneys", "Garnish with coriander"]},
    {name: 'Pav Bhaji', category: 'namkeen', image: 'pavbhaji.jpeg', description: 'Mashed vegetable curry with bread.', rating: 0, ingredients: ["Mixed vegetables", "Butter", "Pav masala", "Pav buns", "Onion", "Tomato"],
    steps: ["Cook and mash veggies", "Add masala", "Serve with buttered pav and chopped onions"]},
    {name: 'Sev', category: 'namkeen', image: 'sev.jpeg', description: 'Crispy fried gram flour noodles.', rating: 0,ingredients: ["Gram flour", "Turmeric", "Salt", "Oil"],
    steps: ["Make dough", "Use sev press", "Fry in hot oil until crispy"]},
    {name: 'Vada Pav', category: 'namkeen', image: 'vadapav.jpeg', description: 'Spicy potato fritter in bun.', rating: 0, ingredients: ["Potatoes", "Green chilies", "Ginger", "Garlic", "Pav buns", "Chutney"],
    steps: ["Make potato filling", "Coat in besan batter", "Fry", "Place inside pav with chutney"]},
    {name: 'Gathiya', category: 'namkeen', image: 'gathiya.jpeg', description: 'Crunchy fried snack.', rating: 0, ingredients: ["Gram flour", "Ajwain", "Salt", "Oil"],
    steps: ["Make dough", "Press through sev maker", "Fry till golden"]},
    {name: 'Chana Jor Garam', category: 'namkeen', image: 'chanajor.jpeg', description: 'Spiced black chickpeas snack.', rating: 0, ingredients: ["Roasted chana", "Onion", "Tomato", "Chili powder", "Lemon juice", "Salt"],
    steps: ["Mix all ingredients well", "Serve as spicy street-style snack"]},
    {name: 'Masala Peanuts', category: 'namkeen', image: 'masalapea.jpeg', description: 'Spicy roasted peanuts.', rating: 0,ingredients: ["Raw peanuts", "Gram flour", "Chili powder", "Salt", "Oil"],
    steps: ["Coat peanuts in spiced gram flour", "Deep fry until crunchy"]},

    {name: 'Paneer Butter Masala', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz.png', description: 'Creamy tomato paneer.', rating: 0,
    ingredients: ["Paneer cubes", "Tomato puree", "Butter", "Cream", "Garam masala", "Chili powder", "Salt"],
    steps: ["Sauté spices in butter", "Add tomato puree", "Cook until thick", "Add paneer cubes and cream", "Simmer 5-7 mins", "Serve hot"]},

    {name: 'Dal Makhani', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (11).png', description: 'Rich lentil curry.', rating: 0,
    ingredients: ["Whole urad dal", "Rajma", "Butter", "Cream", "Garlic", "Tomato puree", "Salt", "Spices"],
    steps: ["Pressure cook lentils until soft", "Sauté garlic and spices in butter", "Add tomato puree", "Combine cooked lentils", "Simmer 20 mins", "Finish with cream and butter"]},

    {name: 'Chole', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (2).png', description: 'Spicy chickpea curry.', rating: 0,
    ingredients: ["Chickpeas", "Onion", "Tomato", "Ginger", "Garlic", "Chole masala", "Oil", "Salt"],
    steps: ["Boil chickpeas until soft", "Sauté onion, ginger, garlic", "Add tomatoes and spices", "Combine chickpeas and simmer 15 mins", "Serve hot"]},

    {name: 'Aloo Gobi', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (3).png', description: 'Potato and cauliflower curry.', rating: 0,
    ingredients: ["Potatoes", "Cauliflower", "Onion", "Tomato", "Turmeric", "Garam masala", "Oil", "Salt"],
    steps: ["Sauté onion and spices", "Add potatoes and cauliflower", "Cook until tender", "Add tomato and simmer 5 mins", "Serve hot"]},

    {name: 'Vegetable Pulao', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (4).png', description: 'Fragrant rice with veggies.', rating: 0,
    ingredients: ["Basmati rice", "Mixed vegetables", "Whole spices", "Ghee", "Salt", "Water"],
    steps: ["Sauté whole spices in ghee", "Add vegetables and rice", "Add water and salt", "Cook until rice is fluffy", "Serve hot"]},

    {name: 'Rajma', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (5).png', description: 'Kidney beans curry.', rating: 0,
    ingredients: ["Kidney beans", "Onion", "Tomato", "Ginger", "Garlic", "Cumin", "Garam masala", "Oil", "Salt"],
    steps: ["Boil kidney beans until soft", "Prepare onion-tomato masala", "Add beans and simmer 15-20 mins", "Serve with rice"]},

    {name: 'Baingan Bharta', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (6).png', description: 'Roasted eggplant mash.', rating: 0,
    ingredients: ["Eggplant", "Onion", "Tomato", "Garlic", "Green chili", "Oil", "Salt"],
    steps: ["Roast eggplant until soft", "Mash eggplant", "Sauté onion, garlic, chili, and tomato", "Add mashed eggplant", "Cook 5-10 mins", "Garnish with coriander"]},

    {name: 'Matar Paneer', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (7).png', description: 'Peas and paneer curry.', rating: 0,
    ingredients: ["Paneer cubes", "Green peas", "Onion", "Tomato", "Garam masala", "Oil", "Salt"],
    steps: ["Sauté onion and tomato with spices", "Add peas and cook", "Add paneer cubes", "Simmer 5 mins", "Serve hot"]},

    {name: 'Vegetable Biryani', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (8).png', description: 'Layered rice and veggies.', rating: 0,
    ingredients: ["Basmati rice", "Mixed vegetables", "Biryani masala", "Yogurt", "Ghee", "Onion", "Salt"],
    steps: ["Parboil rice", "Cook vegetables with spices and yogurt", "Layer rice and vegetables", "Steam for 15-20 mins", "Serve with raita"]},

    {name: 'Palak Paneer', category: 'maincourse', image: 'Gemini_Generated_Image_ohfzp8ohfzp8ohfz (9).png', description: 'Spinach and paneer curry.', rating: 0,
    ingredients: ["Spinach", "Paneer cubes", "Onion", "Garlic", "Garam masala", "Oil", "Salt"],
    steps: ["Blanch spinach and make puree", "Sauté onion and garlic", "Add spinach puree", "Add paneer cubes", "Cook 5-7 mins", "Serve hot"]},

    {name: 'Lauki Kofta', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a.png', description: 'Bottle gourd dumplings in curry.', rating: 0,
    ingredients: ["Bottle gourd", "Gram flour", "Tomato puree", "Spices", "Oil", "Salt"],
    steps: ["Grate bottle gourd and squeeze water", "Mix with gram flour and shape koftas", "Fry koftas", "Prepare tomato gravy with spices", "Add koftas and simmer 5 mins", "Serve hot"]},

    {name: 'Malai Kofta', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (1).png', description: 'Creamy kofta curry.', rating: 0,
    ingredients: ["Paneer", "Potatoes", "Cream", "Tomato puree", "Spices", "Oil", "Salt"],
    steps: ["Mash paneer and potatoes to make koftas", "Fry koftas until golden", "Prepare creamy tomato gravy with spices", "Add koftas and simmer 5 mins", "Serve hot"]},

    {name: 'Veg Korma', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (2).png', description: 'Mixed vegetable curry.', rating: 0,
    ingredients: ["Mixed vegetables", "Onion", "Cashews", "Coconut", "Garam masala", "Oil", "Salt"],
    steps: ["Grind onion, cashews, coconut into paste", "Sauté paste with spices", "Add vegetables and cook until tender", "Simmer 5 mins", "Serve hot"]},

    {name: 'Navratan Korma', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (3).png', description: 'Rich vegetable curry.', rating: 0,
    ingredients: ["Mixed vegetables", "Paneer", "Cream", "Cashews", "Raisins", "Garam masala", "Oil", "Salt"],
    steps: ["Prepare cashew-cream gravy with spices", "Add vegetables and cook", "Add paneer cubes and raisins", "Simmer 5 mins", "Serve hot"]},

    {name: 'Dum Aloo', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (4).png', description: 'Potato curry in creamy gravy.', rating: 0,
    ingredients: ["Potatoes", "Yogurt", "Tomato puree", "Spices", "Oil", "Salt"],
    steps: ["Fry potatoes until golden", "Prepare spicy tomato-yogurt gravy", "Add potatoes and simmer 10 mins", "Serve hot"]},

    {name: 'Paneer Tikka Masala', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (5).png', description: 'Paneer cubes in masala sauce.', rating: 0,
    ingredients: ["Paneer cubes", "Tomato puree", "Yogurt", "Spices", "Oil", "Salt"],
    steps: ["Marinate paneer with yogurt and spices", "Grill or fry paneer", "Prepare tomato-based masala", "Add paneer and simmer 5 mins", "Serve hot"]},

    {name: 'Bhindi Masala', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (6).png', description: 'Spiced okra curry.', rating: 0,
    ingredients: ["Okra", "Onion", "Tomato", "Spices", "Oil", "Salt"],
    steps: ["Sauté onions and spices", "Add sliced okra", "Cook until tender", "Add tomato and simmer 5 mins", "Serve hot"]},

    {name: 'Vegetable Jalfrezi', category: 'maincourse', image: 'Gemini_Generated_Image_w98a96w98a96w98a (7).png', description: 'Stir-fried vegetables in sauce.', rating: 0,
    ingredients: ["Mixed vegetables", "Onion", "Capsicum", "Tomato", "Spices", "Oil", "Salt"],
    steps: ["Sauté onion and capsicum with spices", "Add vegetables", "Cook until slightly crisp", "Add tomato and simmer 2-3 mins", "Serve hot"]},

    {name: 'Aloo Methi', category: 'maincourse', image: 'Aloo-Methi.jpg', description: 'Potato and fenugreek curry.', rating: 0,
    ingredients: ["Potatoes", "Fenugreek leaves", "Turmeric", "Chili powder", "Oil", "Salt"],
    steps: ["Sauté potatoes with spices", "Add fenugreek leaves", "Cook until tender", "Serve hot"]},

    {name: 'Gajar Matar', category: 'maincourse', image: 'gajarmatar.jpeg', description: 'Carrot and peas curry.', rating: 0,
    ingredients: ["Carrots", "Green peas", "Onion", "Spices", "Oil", "Salt"],
    steps: ["Sauté onion and spices", "Add carrots and peas", "Cook until tender", "Serve hot"]},


    {name: 'Veg Burger', category: 'sides', image: 'Gemini_Generated_Image_zezxa0zezxa0zezx.png', description: 'Tasty veggie burger.', rating: 0,
    ingredients: ["Burger buns", "Veggie patty", "Lettuce", "Tomato", "Cheese", "Ketchup", "Mayonnaise"],
    steps: ["Cook veggie patty", "Toast buns", "Assemble with lettuce, tomato, patty, cheese, and sauces", "Serve hot"]},

    {name: 'Pizza', category: 'sides', image: 'Gemini_Generated_Image_zezxa0zezxa0zezx (1).png', description: 'Cheesy vegetable pizza.', rating: 0,
    ingredients: ["Pizza base", "Tomato sauce", "Cheese", "Mixed vegetables", "Oregano", "Olive oil"],
    steps: ["Spread sauce on base", "Add vegetables and cheese", "Sprinkle oregano", "Bake until cheese melts", "Serve hot"]},

    {name: 'French Fries', category: 'sides', image: 'Gemini_Generated_Image_zezxa0zezxa0zezx (2).png', description: 'Crispy potato fries.', rating: 0,
    ingredients: ["Potatoes", "Salt", "Oil for frying", "Chili powder (optional)"],
    steps: ["Cut potatoes into sticks", "Soak in water and dry", "Deep fry until golden", "Season with salt and chili powder", "Serve hot"]},

    {name: 'Cheese Sandwich', category: 'sides', image: 'Gemini_Generated_Image_zezxa0zezxa0zezx (3).png', description: 'Grilled cheesy sandwich.', rating: 0,
    ingredients: ["Bread slices", "Cheese slices", "Butter", "Tomato and cucumber slices (optional)"],
    steps: ["Butter bread slices", "Add cheese and veggies", "Grill until golden and cheese melts", "Serve hot"]},

    {name: 'Paneer Wrap', category: 'sides', image: 'wrap.jpeg', description: 'Spicy paneer wrap.', rating: 0,
    ingredients: ["Tortilla wrap", "Paneer cubes", "Onion", "Capsicum", "Spices", "Sauce"],
    steps: ["Cook paneer with spices", "Sauté vegetables", "Place filling in wrap", "Roll and serve"]},

    {name: 'Veg Hot Dog', category: 'sides', image: 'hotdog.jpeg', description: 'Hot dog with veggies.', rating: 0,
    ingredients: ["Hot dog buns", "Veg sausage", "Onion", "Tomato", "Sauces"],
    steps: ["Cook veg sausage", "Toast buns", "Assemble with veggies and sauces", "Serve hot"]},

    {name: 'Spring Roll', category: 'sides', image: 'springroll.jpeg', description: 'Fried vegetable roll.', rating: 0,
    ingredients: ["Spring roll wrappers", "Mixed vegetables", "Soy sauce", "Oil for frying"],
    steps: ["Cook vegetables with soy sauce", "Fill wrappers and roll", "Deep fry until golden", "Serve with sauce"]},

    {name: 'Cheese Balls', category: 'sides', image: 'cheballs.jpeg', description: 'Crunchy cheesy balls.', rating: 0,
    ingredients: ["Potatoes", "Cheese", "Bread crumbs", "Salt", "Oil for frying"],
    steps: ["Boil and mash potatoes", "Mix with cheese and shape balls", "Coat with breadcrumbs", "Deep fry until golden"]},

    {name: 'Veg Nuggets', category: 'sides', image: 'nuggets.jpeg', description: 'Crispy vegetable nuggets.', rating: 0,
    ingredients: ["Mixed vegetables", "Bread crumbs", "Flour", "Spices", "Oil for frying"],
    steps: ["Cook and mash vegetables", "Mix with spices and shape nuggets", "Coat with flour and breadcrumbs", "Deep fry until crisp"]},

    {name: 'Pasta', category: 'sides', image: 'pasta.jpeg', description: 'Mixed vegetable pasta.', rating: 0,
    ingredients: ["Pasta", "Mixed vegetables", "Tomato sauce", "Olive oil", "Salt", "Herbs"],
    steps: ["Boil pasta", "Sauté vegetables", "Add tomato sauce", "Combine with pasta", "Serve hot"]},

    {name: 'Garlic Bread', category: 'sides', image: 'garlic.jpeg', description: 'Toasted garlic bread.', rating: 0,
    ingredients: ["Bread slices", "Butter", "Garlic paste", "Parsley"],
    steps: ["Mix butter and garlic", "Spread on bread slices", "Toast until golden", "Garnish with parsley", "Serve hot"]},

    {name: 'Masala Sandwich', category: 'sides', image: 'masalasandwich.jpeg', description: 'Spicy vegetable sandwich.', rating: 0,
    ingredients: ["Bread slices", "Mixed vegetables", "Chili sauce", "Butter", "Salt", "Pepper"],
    steps: ["Sauté vegetables with spices", "Spread butter and chili sauce on bread", "Add filling and sandwich", "Grill or toast", "Serve hot"]},

    {name: 'Veg Frankie', category: 'sides', image: 'vegfrank.jpeg', description: 'Spicy veg roll.', rating: 0,
    ingredients: ["Tortilla or roti", "Spiced vegetables", "Onion", "Sauce"],
    steps: ["Cook vegetables with spices", "Place in roti/tortilla", "Roll tightly", "Serve hot"]},

    {name: 'Tacos', category: 'sides', image: 'tacos.jpeg', description: 'Veggie tacos.', rating: 0,
    ingredients: ["Taco shells", "Mixed vegetables", "Cheese", "Salsa"],
    steps: ["Cook vegetables with spices", "Fill taco shells with vegetables and cheese", "Top with salsa", "Serve"]},

    {name: 'Paneer Burger', category: 'sides', image: 'paneerbur.jpeg', description: 'Grilled paneer burger.', rating: 0,
    ingredients: ["Burger buns", "Paneer patty", "Lettuce", "Tomato", "Cheese", "Sauces"],
    steps: ["Grill paneer patty", "Toast buns", "Assemble burger with veggies, patty, cheese, and sauces", "Serve hot"]},

    {name: 'Cheese Toast', category: 'sides', image: 'chetoas.jpeg', description: 'Cheesy toasted bread.', rating: 0,
    ingredients: ["Bread slices", "Cheese slices", "Butter"],
    steps: ["Butter bread slices", "Add cheese", "Toast until cheese melts", "Serve hot"]},

    {name: 'Veg Muffins', category: 'sides', image: 'muffin.jpeg', description: 'Savory vegetable muffins.', rating: 0,
    ingredients: ["Flour", "Mixed vegetables", "Egg or egg substitute", "Cheese", "Baking powder", "Salt", "Oil"],
    steps: ["Mix all ingredients", "Pour into muffin molds", "Bake until golden", "Serve warm"]},

    {name: 'Mini Pizzas', category: 'sides', image: 'minipizza.jpeg', description: 'Small cheesy pizzas.', rating: 0,
    ingredients: ["Mini pizza bases", "Tomato sauce", "Cheese", "Vegetable toppings", "Oregano"],
    steps: ["Spread sauce on bases", "Add toppings and cheese", "Bake until cheese melts", "Serve hot"]},

    {name: 'Corn Sandwich', category: 'sides', image: 'cirnsand.jpeg', description: 'Corn and cheese sandwich.', rating: 0,
    ingredients: ["Bread slices", "Boiled corn", "Cheese", "Butter", "Salt", "Pepper"],
    steps: ["Mix corn with cheese and seasoning", "Spread on bread slices", "Toast until golden", "Serve hot"]},

    {name: 'Cheese Nachos', category: 'sides', image: 'chenachos.jpeg', description: 'Nachos with melted cheese.', rating: 0,
    ingredients: ["Tortilla chips", "Cheese", "Salsa", "Jalapenos", "Sour cream (optional)"],
    steps: ["Arrange chips on plate", "Sprinkle cheese and jalapenos", "Melt cheese in oven or microwave", "Serve with salsa and sour cream"]}
];

recipes = recipes.map((r, i) => ({ id: i, ...r }));
    
const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
if (savedRecipes.length > 0) {
    recipes = recipes.concat(savedRecipes.map((r, i) => ({ id: recipes.length + i, ...r })));
}
    
function displayRecipes(list) {
    const container = document.getElementById('recipesContainer');
    
    if (!container) {
        return;
    }
    
    container.innerHTML = '';
    
    list.forEach((recipe) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        const imageSrc = IMAGE_BASE_PATH + recipe.image; 
        card.innerHTML = `
            <img src="${imageSrc}" alt="${recipe.name}">
            <div>
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="rating" id="rating-${recipe.id}">
                    ${[1,2,3,4,5].map(i => `<span onclick="rateRecipe(${recipe.id}, ${i})">&#9733;</span>`).join('')}
                </div>
                <button class="view-btn" onclick="toggleRecipeDetails(this)">View Recipe</button>
                <div class="recipe-details">
                    <h4>Ingredients:</h4>
                    <ul>${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
                    <h4>Steps:</h4>
                    <ol>${recipe.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
                </div>
            </div>
        `;
        container.appendChild(card);
        updateRatingDisplay(recipe.id);
    });
}

function setSectionVisibility(displaySections, displayTitles) {
    const sections = ['namkeenSection', 'maincourseSection', 'sidesSection'];
    const titles = ['namkeenTitle', 'maincourseTitle', 'sidesTitle'];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = displaySections;
    });
    
    titles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = displayTitles;
    });
}

function filterRecipes(category) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    
    if(category === 'all') {
        setSectionVisibility('flex', 'block');
        displayRecipes(recipes);
    } else {
        setSectionVisibility('none', 'none');
        
        const filtered = recipes.filter(r => r.category === category);
        displayRecipes(filtered);
    }
}

function searchRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    if (query) {
        setSectionVisibility('none', 'none');
        displayRecipes(recipes.filter(r => r.name.toLowerCase().includes(query)));
    } else {
        setSectionVisibility('flex', 'block'); 
        displayRecipes(recipes);
    }
}


function rateRecipe(id, value) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    recipe.rating = value;
    updateRatingDisplay(id);
    updateScrollRating(id);
}

function updateRatingDisplay(id) {
    const ratingDiv = document.getElementById(`rating-${id}`);
    if(!ratingDiv) return;
    const recipe = recipes.find(r => r.id === id);
    ratingDiv.querySelectorAll('span').forEach((star, i) => {
        star.style.color = i < recipe.rating ? 'gold' : '#ccc';
    });
}

function populateScrollSections() {
    const namkeenDiv = document.getElementById('namkeenSection');
    const mainDiv = document.getElementById('maincourseSection');
    const sidesDiv = document.getElementById('sidesSection');

    namkeenDiv.innerHTML = ''; mainDiv.innerHTML = ''; sidesDiv.innerHTML = '';

    recipes.forEach((recipe) => {
        const card = document.createElement('div');
        card.className = 'scroll-card';
        const imageSrc = IMAGE_BASE_PATH + recipe.image;
        card.innerHTML = `
            <img src="${imageSrc}" alt="${recipe.name}">
            <h4>${recipe.name}</h4>
            <p>${recipe.description}</p>
            <div class="rating" id="scroll-rating-${recipe.id}">
                ${[1,2,3,4,5].map(i => `<span onclick="rateRecipe(${recipe.id}, ${i}); updateScrollRating(${recipe.id})">&#9733;</span>`).join('')}
            </div>
            <button class="view-btn" onclick="toggleScrollDetails(${recipe.id})">View Recipe</button>
            <div class="recipe-details" id="details-${recipe.id}" style="display:none;">
                <h4>Ingredients:</h4>
                <ul>${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
                <h4>Steps:</h4>
                <ol>${recipe.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
            </div>
        `;
        if(recipe.category==='namkeen') namkeenDiv.appendChild(card);
        else if(recipe.category==='maincourse') mainDiv.appendChild(card);
        else if(recipe.category==='sides') sidesDiv.appendChild(card);
    });

    recipes.forEach(r => updateScrollRating(r.id));
}

function updateScrollRating(id) {
    const ratingDiv = document.getElementById(`scroll-rating-${id}`);
    if(!ratingDiv) return;
    const recipe = recipes.find(r => r.id === id);
    ratingDiv.querySelectorAll('span').forEach((star,i) => {
        star.style.color = i < recipe.rating ? 'gold' : '#ccc';
    });
}
    
function toggleRecipeDetails(button) {
    const details = button.nextElementSibling;
    if (details) {
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    }
}
function toggleScrollDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (details) {
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    }
}
function checkAuthAndToggleButtons() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.getElementById('loginLink');
    const logoutBtn = document.getElementById('logoutButton');

    if (loginBtn && logoutBtn) {
        if (isLoggedIn) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
        } else {
            loginBtn.style.display = 'block';
            logoutBtn.style.display = 'none';
        }
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.replace('login.html');
}

function checkInitialAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        window.location.replace('login.html');
        return;
    }
    checkAuthAndToggleButtons();
}


checkInitialAuth(); 
displayRecipes(recipes);
populateScrollSections();