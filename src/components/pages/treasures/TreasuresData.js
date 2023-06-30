let treasuresData = [
  {
    id: 1,
    name: "Sunseeker Wagon",
    image: "https://i.imgur.com/XdxUY3y.jpg",
    found: "Vikor Lazlo",
    location: "Castle Ravenloft",
    possession: "Unknown",
    description: "The Sunset wagon was originally owned by the Vistana Viktor Lazlo.  Upon his death, the Sunseeekers continued their journey in the wagon.  After becoming wanted by the law of Vallaki following the Feast of St. Andral, the wagon was repainted purple and rebranded as the Sunrise. Umnos parked the wagon outside of Castle Ravenloft before being teleported across Barovia.",
  },
  {
    id: 2,
    name: "Crystal Ball",
    image: "https://i.imgur.com/QQiDvfn.png",
    found: "Durst Manor",
    location: "Durst Manor",
    possession: "Strahd",
    pLong: "Strahd Von Zarovich",
    description: "Deep in the basement of Durst Manor, there is a cloaked statue holding a crystal ball. When the Sunseekers navigated through the cold and dusty halls underneath the Death House, they could feel the eyes of someone, or something, evil watching them.",
  },
  {
    id: 3,
    name: "Fruit Basket",
    image: "https://i.imgur.com/UkrmWrI.png",
    found: "Durst Manor",
    possession: "Sunseekers",
    pLong: "The Sunseekers",
    description: "After escaping Durst Manor and putting the Durst children to rest, the Sunseekers returned to their wagon to see a magnificiently oversized basket stuffed with delicious fruit and sweet wine. The gift came with a note from Count Strahd Von Zarovich welcoming them to the valley of Barovia.",
  },
  {
    id: 4,
    name: "Tarroka Deck",
    image: "https://i.imgur.com/Tts396a.png",
    found: "Tser Pool Encampment",
    possession: "Madame Eva",
    description: "Tarroka decks are held by select few Vistani.  They claim to be clairvoyant as they read prophecies for the souls unfortunate enough to find themselves trapped in the Mists of Barovia.  Madame Eva is well known for her tarroka readings at the Tser Pool Encampant west of the Village of Barovia."
  },
  {
    id: 5,
    name: "Wooden Effigy",
    image: "https://i.imgur.com/22sOApZ.png",
    found: "Old Mill",
    possession: "Elizana",
    pLong: "Elizana Lightfoot",
    description: `In the area surrounding the Old Mill, there is very little plant or animal life, yet scattered throughout the dead trees and bushes are small wooden effigies. As you get closer to the Old Mill, there are more and more of these ominous figures.  Elizana once took one and showed it around Vallaki looking for answers.  When St. Andral's Orphanage headmistress saw the effigy her eyes grew in horror as she begged the Sunseekers to stay away from the place some call "Old Bonegrinder" after witches took it over to make Dream Pastries from the bones of innocent children.`,
  },
  {
    id: 6,
    name: "Dream Pastries",
    image: "https://i.imgur.com/D9Vguzb.png",
    found: "Old Mill",
    possession: "Safzira",
    description: "Dream Pastries are found all over Barovia.  Many people have become dependent on the magical effects they offer.  The Sunseekers first encountered the pastries at the Old Mill where the young and beautiful Bella offered them fresh to the party. They happily hallucinated together overnight and took some with them on their journey west.  It wasn't  until after they dropped off some orphans at the mill that they found out how the pastries are made - flour derived from the bones of innocent children.",
  },
  {
    id: 7,
    name: "Crimson Plate Armor",
    shortName: "Plate Armor",
    image: "https://i.imgur.com/yTvcm6T.png",
    found: "Castle Ravenloft",
    possession: "German",
    pLong: "German the Barbarian",
    description: "On their first visit to Castle Ravenloft, the Sunseekers came across a standing suit of crimson plate armor. It almost looked like bright red veins traveled throughout the metal body.  German took the armor and kept it in his bag of holding to be used in the most brutal of comabat encounters in the future.",
  },
  {
    id: 8,
    name: "Magical Cloak",
    image: "https://i.imgur.com/xOJzRl9.png",
    found: "Old Svalich Road",
    possession: "Safzira",
    description: "On a long walk back to Vallaki from Castle Ravenloft, the Sunseekers found an old cloak just off the Old Svalich Road.  Safzira happily took it with her and quickly found that its appearnace, including color, design, and even materials, changed with her mood.  It also fits nicely under any other cloak."
  },
  {
    id: 9,
    name: "Deck of Cards",
    image: "https://i.imgur.com/wVXQXnR.png",
    found: "St. Andral's Orphanage",
    possession: "Ace",
    pLong: "Ace the Orphan",
    description: "St. Andral's Orphanage is home to many disturbed and tortured young souls. Ace stood out among them as a child that was pleasant to be around and mostly kept to himself shuffling a small deck of old cards. They are almost always found on his person."
  },
  {
    id: 10,
    name: "Demonic Locket",
    image: "https://i.imgur.com/noO3U9t.png", 
    found: "St. Andral's Orphanage",
    possession: "German",
    pLong: "German the Barbarian",
    description: "When the orphan Felix arrived at St. Andral's Orphanage he brought with him an evil aura. Under and around his bed were strange occult carvings and many children in the orphanage felt ill. Milivoj, the oldest orphan in the facility and groundskeeper, fell into a catatonic state shortly after. When the Sunseekers confronted young Felix, they discovered a shadow demon that lived inside of his locket. German used his familiarity with the abyssal language to communicate with the demon and offer his own body as a host to the demon and its locket in return to leaving the children of the orphanage alone."
  },
  {
    id: 11,
    name: "Bones of St. Andral",
    shortName: "Andral Bones",
    image: "https://i.imgur.com/pb4SaMI.png",
    // found: "Unknown",
    location: "St. Andral's Church",
    possession: "Unknown",
    description: "The bones of St. Andral were kept under St. Andral's Church in Vallaki for generations.  It was believed by many followers of Lathander the Morninglord that the bones warded evil away from the town.  When they were stolen, the priest enlisted the help of the Sunseekers to find and return them to the church.  For days they followed up on leads.  It appeared that the orphan Milivoj had stolen the bones for Henrik the coffin maker. Milivoj intended to steal them back after receiving payment, but fell into a catatonic state when he returned to the orphanage that day. The coffin maker confessed that he was ordered by vampire spawn to remove them from the church. The bones are still missing to this day.",
  },
  {
    id: 12,
    name: "Silver Bars",
    image: "https://i.imgur.com/4PDRjL6.png",
    found: "Vallaki Vistani Camp",
    possession: "Sunseekers",
    pLong: "The Sunseekers",
    description: "Upon returning the kidnapped Vistana child Arabelle to the Vallaki Vistani Camp, its leaders Arrigal and Luvash happily rewarded the Sunseekers with several silver bars. The bars were taken to the blacksmith in Vallaki townsquare who silvered their weapons in about a weeks time."
  },
  {
    id: 13,
    name: "Ba'al Verzi Dagger",
    shortName: "Dagger",
    image: "https://i.imgur.com/nngoYtw.png",
    found: "Castle Ravenloft",
    possession: "Umnos",
    pLong: "Umnos Runbalo",
    description: "During his first trip to Castle Ravenloft, Umnos found a Ba'al Verzi assasin's dagger stuck in a large throne in the castle's audience hall.  The knife was pinning a centuries-old note from Strahd's brother Sergei.  The note referenced an attempt on Strahd's life before he had turned to vampirism.",
  },
  {
    id: 14,
    name: "Tome of Strahd",
    image: "https://i.imgur.com/zciYECT.png",
    found: "Castle Ravenloft",
    possession: "Ez d'Avenir",
    pLong: "Ezmeralda d'Avenir",
    description: "Once hidden away in one of the towers of Castle Ravenloft, the Tome of Strahd includes insightful excerpts from Strahd's life. Most notably his relationship with his brother and ill-fated love interest.  When Strahd killed his brother to steal his fiance Tatyana, she killed herself and he became a vampire lord - thus bringing in the Mists that surround Barovia.  The excerpts dissect his strengths and weaknesses of his vampire condition.  Shortly after finding the tome, the Vistana Ez stole the book for her own monster hunter research.",
  },
  {
    id: 15,
    name: "Ravenloft Brazier",
    image: "https://i.imgur.com/Bev2dep.png",
    found: "Castle Ravenloft",
    location: "Castle Ravenloft",
    possession: "Strahd",
    pLong: "Strahd Von Zarovich",
    description: "Deep underneath Castle Ravenloft, somewhere in the maze of its dungeons, lies the Brazier Room.  In the center of the room, there is a unique brazier with a special ability to teleport individuals across Barovia to various locations. Those who can figure out its riddles can choose their destination easily.",
  },
  {
    id: 16,
    name: "Ring of Warmth",
    image: "https://i.imgur.com/JPsoTgH.png",
    found: "Gift from Kasimir",
    possession: "Safzira",
    description: ""
  },
  {
    id: 17, 
    name: "Dark Gifts",
    image: "https://i.imgur.com/xnoov70.png",
    found: "Amber Temple",
    possession: "Alina",
    pLong: "Countess Alina",
    description: "There are many Dark Gifts offered by various Elder Ones from the amber sarophagi within the Amber Temple. It is believed that Strahd himself become a vampire from one of these dark gifts. The Kavani Echo and Salali were gifted with Bear Climbing abilities (with mixed results) and Echo was offered a lesser vampire gift. Alina gained the power of Lightning from the Elder One Zrin-Hala"
  },
  {
    id: 18,
    name: "Robe of Useful Items",
    shortName: "Robe",
    image: "https://i.imgur.com/MhCak35.png",
    found: "Amber Temple",
    possession: "Umnos",
    pLong: "Umnos Runbalo",
    description: "This dusty old robe was found in a secret area within a large statue in the Amber Temple. It contained the infamous Sunsword of Sergei."
  },
  {
    id: 19,
    name: "Sunsword",
    image: "https://i.imgur.com/Ipg1ycR.png",
    found: "Amber Temple",
    possession: "Umnos",
    pLong: "Umnos Runbalo",
    description: "The Sunsword was once a platinum and crystal sword belonging to Strahd's brother Sergei. Strahd killed his brother and order to have the sword destroyed, but it was long rumored that the hilt was preserved and lost to time. The Sunseekers fulfilled a Tarroka prophecy that led them to a secret compartment within a large statue in the Amber Temple.  The sword was hidden in an old Robe of Useful Items"
  },
  {
    id: 20,
    name: "Gulthias Staff",
    image: "https://i.imgur.com/WupiFPn.png",
    found: "Wizard of Wines",
    possession: "Alina",
    pLong: "Countess Alina",
    description: "There is a powerful Kavani staff with unique abilities somewhere within the Kavani population."
  },
  {
    id: 21,
    name: "Blood Spear",
    image: "https://i.imgur.com/7xBLd0E.png",
    location: "Unknown",
    possession: "Unknown",
    description: "There is an ancient Kavani spear with unique abilities somewhere within the Kavani population."
  },
  {
    id: 22,
    name: "Pox Pendant",
    image: "https://i.imgur.com/QWj2IR9.png",
    location: "Depths of Mount Ghakis",
    possession: "No One",
    description: "This decorative pendant harbors a piece of a dark god's essence. Eons ago, Fekre, Queen of Poxes, placed part of her being within it as a safeguard. It infect's the wearer's body with terrible diseases and compels the wearer to bring it to the sarcophagus inside the Amber Temple. Umnos casted the pendant below Tsolenka Pass."
  },
  {
    id: 23,
    name: "Sending Stones",
    image: "https://i.imgur.com/FaVqPpp.png",
    found: "Gift from Kasimir",
    possession: "Safzira & Kasimir",
    description: "Sending stones, like the lovers who often use them, come in pairs. Each smooth stone carved to match the other so the pairing is easily recognized. While a stone is touched, its bearer can send a message to the other stone once a day."
  }

  // undiscovered
  // {
  //   name: "Sunsword",
  // image: [],
  //   description: "",
  // },
    // {
    //   name: "Pox Pendant", see Stakes p. 82 vilnius
    //   image: "",
    //   description: ""
    // }
  // {
  //   name: "Omoyan Armor",
  // image: [],
  //   description: "",
  // },
  // {
  //   name: "Blood Spear",
  // image: [],
  //   description: "",
  // },
  // {
  //   name: "Guthias Staff",
  // image: [],
  //   description: "",
  // },
  // {
  //   name: "Holy Symbol of Ravenkind",
  // image: [],
  //   description: "",
  // },
  // {
  //   name: "Icon of Ravenloft",
  // image: [],
  //   description: "",
  // },
  // {
  //   name: "St. Markovia's Tailbone",
  // image: [],
  //   description: "",
  // }
]

export default treasuresData;