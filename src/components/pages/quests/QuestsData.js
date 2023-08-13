let questsData = [
  {
    id: 1,
    name: "Death House",
    img: "https://i.imgur.com/ZzFQKI3.png",
    completed: true,
    season: 1,
    sessionStarted: 8,
    rewards: [],
    localLinks: {},
    initiated: "Children Rose and Thorn were on the street begging for help. Their baby brother Walter has been trapped in their family home with a monster.",
    developments: [
      {
        id: 1,
        description: "Once upon a time",
        localLinks: {}
      },
      {
        id: 2,
        description: "Then a thing happened",
        localLinks: {}
      }
    ]
  },
  {
    id: 2,
    name: "Village Plague",
    img: "https://i.imgur.com/q1DGuW9.png",
    completed: true,
    season: 1,
    sessionStarted: 2,
    rewards: [""],
    localLinks: {},
    initiated: "At his shop, Bildrath offered up some local rumors about a plague and suggested visiting the Cobb House up the street",
    developments: [
      {
        id: 1,
        description: "",
        localLinks: {}
      }
    ]
  },
  {
    id: 3,
    name: "Missing Villagers",
    img: "https://i.imgur.com/pLaL5DR.jpg",
    completed: true,
    season: 1,
    sessionStarted: 2,
    rewards: [""],
    localLinks: {},
    initiated: "In addition to the plague, Villagers of Barovia have been going missing in the darkest hours of the night.",
    developments: [
      {
        id: 1,
        description: "",
        localLinks: {}
      }
    ]
  },
  {
    id: 4,
    name: "Burgomaster's Funeral",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 2,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 5,
    name: "Protect Ireena Kolyana",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 2,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 6,
    name: "Replacement Priest",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 2,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 7,
    name: "Find Gertruda",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 2,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 8,
    name: "Madame Eva's Tarroka Reading",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 3,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 9,
    name: "Tarroka Reading: The Transmuter",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 3,
    rewards: ["Tome of Strahd"],
    initiated: "",
    developments: []
  },
  {
    id: 10,
    name: "Tarroka Reading: The Monk",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 3,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 11,
    name: "Tarroka Reading: The Hooded One",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 3,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 12,
    name: "The Artifact",
    img: "",
    completed: true,
    sesason: 1,
    sessionStarted: 3,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 13,
    name: "The Beast",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 3,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 14,
    name: "Dream Pastries",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 4,
    rewards: [""],
    localLinks: {},
    initaited: "",
    development: []
  },
  {
    id: 15,
    name: "Children of Vallaki",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 4,
    rewards: [""],
    localLinks: {},
    initiated: "",
    development: []
  },
  {
    id: 16,
    name: `"All Will Be Well!"`,
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 4,
    rewards: [""],
    localLinks: {},
    initiated: "",
    development: []
  },
  {
    id: 17,
    name: "A Message for Cyrus Belview",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 7,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 18,
    name: "Bones of St. Andral",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 10,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 19,
    name: "Rescue Arabelle",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 10,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 20,
    name: "Investigate the Winery",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 6,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 21,
    name: "Strange Lights",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 11,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 22,
    name: "Coup of Vallaki",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 23,
    name: "Mad Mage in the Mountains",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 24,
    name: "Investigate Haunted Castle",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 25,
    name: "Saving Stella",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 26,
    name: "Investigate Amber Temple",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 27,
    name: "Unfinished Business",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 28,
    name: "Last Hunting Trip",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 29,
    name: "Save Freebird",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 30,
    name: "Defend the Winery",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 31,
    name: "Mother in Berez",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 32,
    name: "Heroic Deed",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "",
    developments: []
  },
  {
    id: 33,
    name: "Kill Izek",
    relatedQuest: "Coup of Vallaki",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    localLinks: {},
    initiated: "Outside the walls of Vallaki, Bafan and German met with ~Ernst Larnak~ about entry into the town and access to its resources. Ernst updated them about the Baron's search for the Sunseekers after teh ~Feast of St Andral~ and how ~Izek Strazni~ has been leading search parties outside of the walls. Ernst asked them to take out Izek and help overthrow the Baron in order to bring ~Lady Wachter~ to power and allow the Sunseekers back into Vallaki.",
    developments: [
      // {
      //   id: 1,
      //   description: "At his shop, Bildrath offered up some local rumors about a plague and suggested visiting the Cobb House up the street",
      //   localLinks: {}
      // }
    ]
  }
]

export default questsData;