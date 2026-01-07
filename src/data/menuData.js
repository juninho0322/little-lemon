// src/data/menuItems.js

// ✅ Keep your existing imports (you already have the photos)
import mousakka from "../assets/menu_photos/news/moussaka.jpg";
import paella from "../assets/menu_photos/news/paella.jpg";
import caprese from "../assets/menu_photos/news/capresesalad.png";
import couscous from "../assets/menu_photos/news/couscous.jpeg";
import baklava from "../assets/menu_photos/news/baklava.jpeg";
import hummus from "../assets/menu_photos/news/hummus.jpeg";

import feta from "../assets/menu_photos/starters/feta.jpeg";
import halloumi from "../assets/menu_photos/starters/halloumi.jpg";
import vine from "../assets/menu_photos/starters/vine.jpeg";
import prawns from "../assets/menu_photos/starters/prawn.jpg";
import redpepperdip from "../assets/menu_photos/starters/pepper-dip.jpeg";
import mezzetrio from "../assets/menu_photos/starters/trio.jpeg";

import souvlaki from "../assets/menu_photos/mains/souvlaki.jpg";
import seabass from "../assets/menu_photos/mains/bass.jpeg";
import lambchops from "../assets/menu_photos/mains/lamb.jpeg";
import vegtagine from "../assets/menu_photos/mains/tagine.jpg";
import seafoodlinguine from "../assets/menu_photos/mains/linguine.jpeg";
import spinachfetapie from "../assets/menu_photos/mains/feta.jpg";

import lemoncake from "../assets/menu_photos/desserts/lemoncake.jpg";
import pistachiogelato from "../assets/menu_photos/desserts/pistachiogelato.jpg";
import orangealmondtorte from "../assets/menu_photos/desserts/almondtorte.jpg";
import greekyogurthoney from "../assets/menu_photos/desserts/greekyogurt.jpg";
import chocolatetahinibrownie from "../assets/menu_photos/desserts/chocolatebrownie.jpeg";
import affogatolimone from "../assets/menu_photos/desserts/affogatolimone.jpg";

import lemonade from "../assets/menu_photos/drinks/homemadelemonade.jpeg";
import icedtea from "../assets/menu_photos/drinks/icedmediterraneantea.jpg";
import limoncellospritz from "../assets/menu_photos/drinks/limoncello.jpeg";
import aegeannegroni from "../assets/menu_photos/drinks/aegeanegroni.jpg";
import rosecardamomfizz from "../assets/menu_photos/drinks/cardamomfizz.jpg";
import espresso from "../assets/menu_photos/drinks/espresso.jpg";


// “fake API”: one big array with everything
export const menuItems = [
  // 📰 NEWS
  {
    id: "news-1",
    category: "news",
    title: "Greek Moussaka",
    imageSrc: mousakka,
    description:
      "A comforting layered dish with spiced lamb, eggplant, and creamy béchamel — a true taste of Greece.",
    price: 10.35,
  },
  {
    id: "news-2",
    category: "news",
    title: "Spanish Paella",
    imageSrc: paella,
    description:
      "A vibrant rice dish cooked with saffron, seafood, and fresh vegetables — bursting with Mediterranean flavor.",
    price: 11.50,
  },
  {
    id: "news-3",
    category: "news",
    title: "Italian Caprese Salad",
    imageSrc: caprese,
    description:
      "Simple yet elegant — ripe tomatoes, fresh mozzarella, and basil drizzled with extra-virgin olive oil.",
    price: 18.70,
  },
  {
    id: "news-4",
    category: "news",
    title: "Moroccan Couscous",
    imageSrc: couscous,
    description:
      "Fluffy couscous mixed with roasted vegetables and fragrant spices for a warm, hearty meal.",
    price: 9.99,
  },
  {
    id: "news-5",
    category: "news",
    title: "Turkish Baklava",
    imageSrc: baklava,
    description:
      "Crisp layers of filo pastry with crushed pistachios and sweet honey syrup — a perfect dessert finish.",
    price: 8.15,
  },
  {
    id: "news-6",
    category: "news",
    title: "Lebanese Hummus",
    imageSrc: hummus,
    description:
      "Creamy chickpea dip blended with tahini, garlic, and lemon juice — served with warm pita bread.",
    price: 8.50,
  },

  // 🥗 STARTERS (6)
  {
    id: "starter-1",
    category: "starters",
    title: "Feta & Olive Bruschetta",
    imageSrc: feta,
    description:
      "Grilled bread topped with marinated feta, olives, and cherry tomatoes.",
    price: 6.95,
  },
  {
    id: "starter-2",
    category: "starters",
    title: "Grilled Halloumi",
    imageSrc: halloumi,
    description:
      "Chargrilled halloumi with lemon and oregano, served on a bed of rocket.",
    price: 7.50,
  },
  {
    id: "starter-3",
    category: "starters",
    title: "Stuffed Vine Leaves",
    imageSrc: vine,
    description:
      "Grape leaves stuffed with herbed rice and served with tzatziki.",
    price: 6.70,
  },
  {
    id: "starter-4",
    category: "starters",
    title: "Garlic Prawn Skillet",
    imageSrc: prawns,
    description:
      "Prawns sautéed with garlic, chilli, and parsley in olive oil.",
    price: 8.90,
  },
  {
    id: "starter-5",
    category: "starters",
    title: "Roasted Red Pepper Dip",
    imageSrc: redpepperdip,
    description:
      "Smoky roasted red pepper dip served with warm flatbread.",
    price: 6.20,
  },
  {
    id: "starter-6",
    category: "starters",
    title: "Mediterranean Mezze Trio",
    imageSrc: mezzetrio,
    description:
      "A tasting plate of hummus, tzatziki, and tapenade with pita chips.",
    price: 8.40,
  },

  // 🍝 MAINS (6)
  {
    id: "main-1",
    category: "mains",
    title: "Chargrilled Chicken Souvlaki",
    imageSrc: souvlaki,
    description:
      "Marinated chicken skewers served with lemon potatoes, salad, and tzatziki.",
    price: 14.95,
  },
  {
    id: "main-2",
    category: "mains",
    title: "Mediterranean Sea Bass",
    imageSrc: seabass,
    description:
      "Pan-seared sea bass with olives, tomatoes, and capers in a lemon butter sauce.",
    price: 17.80,
  },
  {
    id: "main-3",
    category: "mains",
    title: "Lemon Herb Lamb Chops",
    imageSrc: lambchops,
    description:
      "Grilled lamb chops with rosemary, garlic, and lemon, served with couscous.",
    price: 18.50,
  },
  {
    id: "main-4",
    category: "mains",
    title: "Vegetable Tagine",
    imageSrc: vegtagine,
    description:
      "Slow-cooked vegetables with apricots and chickpeas, served over couscous.",
    price: 13.20,
  },
  {
    id: "main-5",
    category: "mains",
    title: "Seafood Linguine",
    imageSrc: seafoodlinguine,
    description:
      "Linguine tossed with prawns, mussels, and calamari in a white wine sauce.",
    price: 16.90,
  },
  {
    id: "main-6",
    category: "mains",
    title: "Spinach & Feta Filo Pie",
    imageSrc: spinachfetapie,
    description:
      "Crisp filo pastry filled with spinach, feta, and herbs.",
    price: 14.10,
  },

  // 🍰 DESSERTS (6)
  {
    id: "dessert-1",
    category: "desserts",
    title: "Lemon Olive Oil Cake",
    imageSrc: lemoncake,
    description:
      "Moist lemon cake made with olive oil, served with whipped cream.",
    price: 6.40,
  },
  {
    id: "dessert-2",
    category: "desserts",
    title: "Pistachio Gelato",
    imageSrc: pistachiogelato,
    description:
      "Rich pistachio gelato topped with crushed nuts.",
    price: 5.80,
  },
  {
    id: "dessert-3",
    category: "desserts",
    title: "Orange & Almond Torte",
    imageSrc: orangealmondtorte,
    description:
      "Flourless almond cake infused with orange zest and syrup.",
    price: 6.95,
  },
  {
    id: "dessert-4",
    category: "desserts",
    title: "Greek Yogurt & Honey",
    imageSrc: greekyogurthoney,
    description:
      "Thick Greek yogurt with honey and toasted walnuts.",
    price: 5.50,
  },
  {
    id: "dessert-5",
    category: "desserts",
    title: "Chocolate Tahini Brownie",
    imageSrc: chocolatetahinibrownie,
    description:
      "Fudgy brownie with tahini swirl and sea salt.",
    price: 6.20,
  },
  {
    id: "dessert-6",
    category: "desserts",
    title: "Affogato al Limone",
    imageSrc: affogatolimone,
    description:
      "Lemon gelato topped with a shot of hot espresso.",
    price: 5.90,
  },

  // 🥤 DRINKS (6)
  {
    id: "drink-1",
    category: "drinks",
    title: "Homemade Lemonade",
    imageSrc: lemonade,
    description:
      "Freshly squeezed lemon juice with mint and sparkling water.",
    price: 3.80,
  },
  {
    id: "drink-2",
    category: "drinks",
    title: "Iced Mediterranean Tea",
    imageSrc: icedtea,
    description:
      "Black tea infused with lemon, orange, and a hint of rosemary.",
    price: 3.90,
  },
  {
    id: "drink-3",
    category: "drinks",
    title: "Limoncello Spritz",
    imageSrc: limoncellospritz,
    description:
      "Limoncello, prosecco, and soda over ice",
    price: 7.50,
  },
  {
    id: "drink-4",
    category: "drinks",
    title: "Aegean Negroni",
    imageSrc: aegeannegroni,
    description:
      "Classic negroni with Mediterranean botanicals.",
    price: 8.50,
  },
  {
    id: "drink-5",
    category: "drinks",
    title: "Rose & Cardamom Fizz",
    imageSrc: rosecardamomfizz,
    description:
      "Sparkling drink with rose, cardamom, and citrus.",
    price: 4.60,
  },
  {
    id: "drink-6",
    category: "drinks",
    title: "Espresso",
    imageSrc: espresso,
    description:
      "Rich Italian-style espresso shot.",
    price: 2.40,
  },
];
