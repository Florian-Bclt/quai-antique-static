import images from './images';

const awards = [
  {
    imgUrl: images.award02,
    title: 'Euro-Toques',
    subtitle: "L'exigence pour des produits de qualité.",
  },
  {
    imgUrl: images.award01,
    title: 'Maître Restaurateur',
    subtitle: 'Notre Gage de qualité du "fait maison".',
  },
  {
    imgUrl: images.award05,
    title: 'MOF',
    subtitle: 'La consécration au bout des doigts.',
  },
  {
    imgUrl: images.award03,
    title: ' JRE',
    subtitle: 'Jeune restaurateur Européen pour vous !',
  },
];

const wines = [
  {
    title: 'Saint Emilion, Château Le Destrier',
    tags: "AOP | 2014",
    price: 30
  },
  {
    title: 'Sancerre Domaine Salmon',
    tags: "AOP | 2015",
    price: 39
  },
  {
    title: 'Bourgogne Côteaux Des Moines Château De Beaune',
    tags: "AOP | 2015",
    price: 49
  },
  {
    title: 'Gewurztraminer Vendanges Tardives',
    tags: "AOP | 2018",
    price: 30
  },
  {
    title: "Côtes De Gascogne Domaine Pellehaut 'Harmonie'",
    tags: "AOP | 2018",
    price: 25
  }
];

const cocktails = [
  {
    title: "Aperol Spritiz",
    tags: "Aperol, Villa Marchesi Prosecco, Soda",
    price: 15
  },
  {
    title: "Dark 'N' Stormy",
    tags: "Rhum Brun, Ginger Beer, Citron Vert",
    price: 14
  },
  {
    title: "Daiquiri",
    tags: "Rhum, Jus De Citron Vert, Sucre De Canne",
    price: 10
  },
  {
    title: "Old Fashioned",
    tags: "Whisky Bourbon, Sucre Roux, Angostura Bitters",
    price: 20
  },
  {
    title: "Morito",
    tags: "Rhum Cubain, Sucre De Canne, Menthe, Soda, Citron Vert",
    price: 13
  },
  {
    title: "Le Royal Antique",
    tags: "Rhum, Rhum Arrangé Noix De Coco, Curaçao Bleu, Ananas",
    price: 13
  },
];

const beers = [
  {
    title: "Karmeliet",
    tags: "Bière Blonde Légère",
    price: 3
  },
  {
    title: "Goudale Grand Cru",
    tags: "Bière Blonde, Finition Rhum",
    price: 4
  },
  {
    title: "Dangerousse",
    tags: "Bière Rousse, Légère Amertume",
    price: 4
  },
  {
    title: "Rodenbach Red ALE",
    tags: "Bière Aromatisée Aux Fruits Rouges",
    price: 4
  },
  {
    title: "Lupulus Hopera",
    tags: "Bière Brune",
    price: 3
  },
];

const softs = [
  {
    title: "Coco-Cola",
    tags: "Original, Zero, Light",
    price: 3
  },
  {
    title: "Fanta",
    tags: "Orange, Citron",
    price: 3
  },
  {
    title: "Jus De Fruit",
    tags: "Abricot, Pèche, Ananas, Banane",
    price: 2
  },
  {
    title: "Jus De Tomate",
    tags: "Sel De Céleri, Tabasco, Sauce Worcestershire",
    price: 3
  },
];

const products = [
  {
    title: "Fondue Savoyarde (2 Personnes)",
    tags: "Beaufort, Gruyère De Savoie, Comté, Vin Blanc, Ail",
    price: 24
  },
  {
    title: "Tarte Au Reblochon De Savoie",
    tags: "Reblochon AOP Fondue, Crème Fraîche, Gratin De Fromage Râpé",
    price: 14
  },
  {
    title: "La Poêlée Montagnarde",
    tags: "Pommes De Terre, Lardons Fumés, Fromage D'Abondance, Vin Blanc",
    price: 16
  },
  {
    title: "Le Farcement",
    tags: "Lardons Fumés, Pruneaux, Pommes De Terre, Poires Séchées, Crème Fraîche",
    price: 14
  },
  {
    title: "Antique Burger",
    tags: "Bun Brioché, Effiloché De Porc À La Bière Et Aux Épices, Galette De Pommes De Terre, Reblochon, Confit D'oignons Rouges, Sauce Reblochon, Poitrine Fine Fumée, Mâche",
    price: 17
  },
];

const menus = [
  {
    id: 1,
    title: "Menu Découverte 25",
    price: 36,
    entries: [
      {
        title: "Maquereau",
        description: "A La Flamme, Avocat, Betterave En 2 Façons Vinaigrettes Agrumes/Soja",
      },
      {
        title: "Joue De Boeuf",
        description: "Ravioles De Joue De Boeuf Confite, Fondue De Poireaux, Bouillon Truffé",
      },
      {
        title: "Oeuf Mollet",
        description: "Velouté De Courge Truffé, Oeuf Mollet Frit, Poudre De Lard Fumé, Croûtons, Ail Noir",
      },
    ],
    mainCourses: [
      {
        title: "Poulet Fermier",
        description: "Suprême De Poulet, Crosmesquis D'aubergine Rôti, Pomme De Terre Au BBQ, Jus Corsé",
      },
      {
        title: "Agneau",
        description: "Côtelettes D'agneau, Mille-Feuille De Pomme De Terre, Échalote Confite, Poivron Grillé, Jus Aux Herbes",
      },
      {
        title: "Lieu Jaune",
        description: "Juste Nacré, Chou-Fleur, Fenouil Croquant, Bisque De Langoustine",
      },
    ],
    desserts: [
      {
        title: "Poire",
        description: "Poire Pochée Au Poivre Timut, Financier Fève De Tonka, Ganache Chocolat Caramel, Sorbet Poire",
      },
      {
        title: "Tarte Citron",
        description: "Tarte Citron Meringuée, Sorbet Yuzu/Coriandre",
      },
      {
        title: "Banane",
        description: "Tube Croquant, Mousse Chocolat/Caramel, Banane Flambée, Sorbet Rhum Ambré/Banane",
      },
    ],
  },
  {
    id: 2,
    title: "Menu AuthAntique",
    price: 46,
    entries: [
      {
        title: "Foie Gras",
        description: "Pressé De Foie Gras Marbré, Magret De Canard Fumé, Cerises Confites, Jus Réduit Au Porto",
      },
      {
        title: "Langoustine",
        description: "Langoustines Rôties, Fine Ratatouille, Tuile De Riz, Rouille, Bisque",
      },
      {
        title: "Veau",
        description: "Carpaccio De Veau, Comme Un Vitel Tone, Artichaut Poivrade, Pickles Oignon, Câpre",
      },
    ],
    mainCourses: [
      {
        title: "Canette",
        description: "Filet De Canette Cuisson Lente, Pulpe De Patate Douce, Brocolis Grillé, Cromesquis De Cuisse De Canette Confite, Gastrique Agrumes",
      },
      {
        title: "Boeuf",
        description: "Filet De Boeuf, Pommes Pont Neuf, Coulis Comté, Tartelette Croquante Haricots Sautés À L'ail, Jus Corsé",
      },
      {
        title: "St Jacques",
        description: "St Jacques Rôties Au Beurre, Trompette De La Mort, Butternut Confit, Poireau, Écume",
      },
    ],
    desserts: [
      {
        title: "Noisette",
        description: "Sphère Chocolat/Café, Praliné Noisette",
      },
      {
        title: "Framboise Chocolat Blanc",
        description: "Sphère Chocolat Blanc, Framboise Basilic, Sablé Breton Noix De Coco",
      },
      {
        title: "Pomme",
        description: "Bavaroise Pomme Granny, Pommes Caramélisées, Dacquoise Amande",
      },
    ],
  },
];

const hours = [
  {
    dayOfWeek: 1,
    isClosed: true,
    lunchOpeningTime: "",
    lunchClosingTime: "",
    dinnerOpeningTime: "",
    dinnerClosingTime: ""
  },
  {
    dayOfWeek: 2,
    isClosed: false,
    lunchOpeningTime: "12:00",
    lunchClosingTime: "14:00",
    dinnerOpeningTime: "19:00",
    dinnerClosingTime: "22:00"
  },
  {
    dayOfWeek: 3,
    isClosed: false,
    lunchOpeningTime: "12:00",
    lunchClosingTime: "14:00",
    dinnerOpeningTime: "19:00",
    dinnerClosingTime: "22:00"
  },
  {
    dayOfWeek: 4,
    isClosed: false,
    lunchOpeningTime: "12:00",
    lunchClosingTime: "14:00",
    dinnerOpeningTime: "19:00",
    dinnerClosingTime: "22:00"
  },
  {
    dayOfWeek: 5,
    isClosed: false,
    lunchOpeningTime: "12:00",
    lunchClosingTime: "14:00",
    dinnerOpeningTime: "19:00",
    dinnerClosingTime: "23:30"
  },
  {
    dayOfWeek: 6,
    isClosed: false,
    lunchOpeningTime: "12:00",
    lunchClosingTime: "15:30",
    dinnerOpeningTime: "19:00",
    dinnerClosingTime: "23:30"
  },
  {
    dayOfWeek: 7,
    isClosed: false,
    lunchOpeningTime: "12:00",
    lunchClosingTime: "15:30",
    dinnerOpeningTime: "19:00",
    dinnerClosingTime: "23:30"
  },
]

const tables = [
  {
    title: "spacio",
    places: 4,
  },
  {
    title: "famille",
    places: 8,
  },
  {
    title: "duo",
    places: 2,
  },
  {
    title: "véranda",
    places: 4,
  },
  {
    title: "famille",
    places: 4,
  },
]
export default {  awards, wines, cocktails, beers, softs, products, menus, hours, tables };
