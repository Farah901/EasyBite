// Assets import
import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.jpg'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.jpeg'
import menu_3 from './menu_3.jpeg'
import menu_4 from './menu_4.jpeg'
import menu_5 from './menu_5.jpeg'
import menu_6 from './menu_6.jpeg'
import menu_7 from './menu_7.jpeg'
import menu_8 from './menu_8.jpeg'

import food_1 from './food_1.jpeg'
import food_2 from './food_2.jpeg'
import food_3 from './food_3.jpeg'
import food_4 from './food_4.jpeg'
import food_5 from './food_5.jpeg'
import food_6 from './food_6.jpeg'
import food_7 from './food_7.jpeg'
import food_8 from './food_8.jpeg'
import food_9 from './food_9.jpeg'
import food_10 from './food_10.jpeg'
import food_11 from './food_11.jpeg'
import food_12 from './food_12.jpeg'
import food_13 from './food_13.jpeg'
import food_14 from './food_14.jpeg'
import food_15 from './food_15.jpeg'
import food_16 from './food_16.jpeg'
import food_17 from './food_17.jpeg'
import food_18 from './food_18.jpeg'
import food_19 from './food_19.jpeg'
import food_20 from './food_20.jpeg'
import food_21 from './food_21.jpeg'
import food_22 from './food_22.jpeg'
import food_23 from './food_23.jpeg'
import food_24 from './food_24.jpeg'
import food_25 from './food_25.jpeg'
import food_26 from './food_26.jpeg'
import food_27 from './food_27.jpeg'
import food_28 from './food_28.jpeg'
import food_29 from './food_29.jpeg'
import food_30 from './food_30.jpeg'
import food_31 from './food_31.jpeg'
import food_32 from './food_32.jpeg'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_stars from './rating_stars.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_stars,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
};

export const menu_list = [
    { menu_name: "Moroccan", menu_image: menu_2 },
    { menu_name: "Vegetarian", menu_image: menu_3 },
    { menu_name: "Mexican", menu_image: menu_4 },
    { menu_name: "Italian", menu_image: menu_5 },
    { menu_name: "Syrian", menu_image: menu_6 },
    { menu_name: "American", menu_image: menu_7 },
    { menu_name: "Asian", menu_image: menu_8 },
    { menu_name: "Salad", menu_image: menu_1 }
];

export const food_list = [
    // Moroccan Foods
    {
        _id: "1",
        name: "Chicken Tagine",
        image: food_5,
        price: 18,
        description: "Traditional Moroccan stew with chicken, olives, and preserved lemons.",
        category: "Moroccan"
    },
    {
        _id: "2",
        name: "Bissara",
        image: food_6,
        price: 22,
        description: "Moroccan fava bean soup, seasoned with olive oil and spices.",
        category: "Moroccan"
    },
    {
        _id: "3",
        name: "Chicken Pastilla",
        image: food_7,
        price: 20,
        description: "Crispy pastry filled with chicken, almonds, and cinnamon.",
        category: "Moroccan"
    },
    {
        _id: "4",
        name: "Harira Soup",
        image: food_8,
        price: 14,
        description: "Traditional Moroccan tomato-based soup with lentils and chickpeas.",
        category: "Moroccan"
    },

    // Vegetarian Foods
    {
        _id: "5",
        name: "Vegan Sushi",
        image: food_9,
        price: 8,
        description: "Rice rolls filled with fresh vegetables and avocado.",
        category: "Vegetarian"
    },
    {
        _id: "6",
        name: "Spinach Wraps with Hummus",
        image: food_10,
        price: 10,
        description: "Fresh spinach wraps stuffed with hummus and veggies.",
        category: "Vegetarian"
    },
    {
        _id: "7",
        name: "Broccoli and Mushroom Stir-Fry",
        image: food_11,
        price: 9,
        description: "Stir-fried broccoli and mushrooms in a savory sauce.",
        category: "Vegetarian"
    },
    {
        _id: "8",
        name: "Vegetarian Green Curry",
        image: food_12,
        price: 8,
        description: "Thai green curry with assorted vegetables and coconut milk.",
        category: "Vegetarian"
    },

    // Mexican Foods
    {
        _id: "9",
        name: "Tacos Al Pastor",
        image: food_13,
        price: 12,
        description: "Mexican tacos with marinated pork, pineapple, and cilantro.",
        category: "Mexican"
    },
    {
        _id: "10",
        name: "Beef Burrito",
        image: food_14,
        price: 14,
        description: "Tortilla filled with seasoned beef, rice, and beans.",
        category: "Mexican"
    },
    {
        _id: "11",
        name: "Ground Beef Enchiladas",
        image: food_15,
        price: 13,
        description: "Rolled tortillas stuffed with beef and topped with chili sauce.",
        category: "Mexican"
    },
    {
        _id: "12",
        name: "Chicken Fajitas",
        image: food_16,
        price: 10,
        description: "Grilled chicken strips with sautéed peppers and onions.",
        category: "Mexican"
    },

    // Italian Foods
    {
        _id: "13",
        name: "Baked Rigatoni",
        image: food_17,
        price: 9,
        description: "Pasta baked with tomato sauce, mozzarella, and parmesan.",
        category: "Italian"
    },
    {
        _id: "14",
        name: "Marsala Pasta",
        image: food_18,
        price: 14,
        description: "Pasta tossed with mushrooms in a rich Marsala wine sauce.",
        category: "Italian"
    },
    {
        _id: "15",
        name: "Cannoli Siciliani",
        image: food_19,
        price: 11,
        description: "Crispy pastry tubes filled with sweet ricotta cream.",
        category: "Italian"
    },
    {
        _id: "16",
        name: "Pizza Margherita",
        image: food_20,
        price: 16,
        description: "Classic pizza with tomatoes, mozzarella, and basil.",
        category: "Italian"
    },

    // Syrian Foods
    {
        _id: "17",
        name: "Muhammara",
        image: food_21,
        price: 11,
        description: "Roasted red pepper dip with walnuts and spices.",
        category: "Syrian"
    },
    {
        _id: "18",
        name: "Syrian Shawarma",
        image: food_22,
        price: 9,
        description: "Marinated grilled meat wrapped in pita bread.",
        category: "Syrian"
    },
    {
        _id: "19",
        name: "Warak Enab",
        image: food_23,
        price: 12,
        description: "Grape leaves stuffed with rice and herbs.",
        category: "Syrian"
    },
    {
        _id: "20",
        name: "Atayef",
        image: food_24,
        price: 13,
        description: "Stuffed mini pancakes filled with nuts or cream.",
        category: "Syrian"
    },

    // American Foods
    {
        _id: "21",
        name: "Cheeseburger",
        image: food_25,
        price: 15,
        description: "Juicy beef burger topped with cheddar cheese.",
        category: "American"
    },
    {
        _id: "22",
        name: "Potato Fries",
        image: food_26,
        price: 8,
        description: "Crispy golden potato fries with a side of ketchup.",
        category: "American"
    },
    {
        _id: "23",
        name: "American Pancakes",
        image: food_27,
        price: 14,
        description: "Fluffy pancakes served with syrup and butter.",
        category: "American"
    },
    {
        _id: "24",
        name: "Crispy Fried Chicken",
        image: food_28,
        price: 18,
        description: "Deep-fried chicken with a crispy golden crust.",
        category: "American"
    },

    // Asian Foods
    {
        _id: "25",
        name: "Japchae",
        image: food_29,
        price: 17,
        description: "Korean stir-fried glass noodles with vegetables.",
        category: "Asian"
    },
    {
        _id: "26",
        name: "Vegetarian Sushi",
        image: food_30,
        price: 16,
        description: "Vegetable sushi rolls served with soy sauce.",
        category: "Asian"
    },
    {
        _id: "27",
        name: "Kimchi",
        image: food_31,
        price: 13,
        description: "Spicy fermented Korean cabbage side dish.",
        category: "Asian"
    },
    {
        _id: "28",
        name: "Opor Ayam",
        image: food_32,
        price: 15,
        description: "Indonesian chicken curry in coconut milk.",
        category: "Asian"
    },

    // Salads
    {
        _id: "29",
        name: "Greek Salad",
        image: food_1,
        price: 10,
        description: "Fresh vegetables, feta cheese, and olives in vinaigrette.",
        category: "Salad"
    },
    {
        _id: "30",
        name: "Vegetable Salad",
        image: food_2,
        price: 9,
        description: "Colorful mix of fresh garden vegetables.",
        category: "Salad"
    },
    {
        _id: "31",
        name: "Clover Garden Salad",
        image: food_3,
        price: 11,
        description: "Spring greens with fruits and crunchy nuts.",
        category: "Salad"
    },
    {
        _id: "32",
        name: "Chicken Caesar Salad",
        image: food_4,
        price: 13,
        description: "Romaine lettuce tossed with Caesar dressing and grilled chicken.",
        category: "Salad"
    }
];
