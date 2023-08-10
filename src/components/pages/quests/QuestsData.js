let questsData = [
  {
    id: 1,
    name: "Death House",
    img: "https://i.imgur.com/ZzFQKI3.png",
    completed: true,
    season: 1,
    sessionStarted: 8,
    rewards: [],
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
    rewards: [""]
  },
  {
    id: 6,
    name: "Replacement Priest",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 2,
    rewards: [""]
  },
  {
    id: 7,
    name: "Find Gertruda",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 2,
    rewards: [""]
  },
  {
    id: 8,
    name: "Madame Eva's Tarroka Reading",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 3,
    rewards: [""]
  },
  {
    id: 9,
    name: "Tarroka Reading: The Transmuter",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 3,
    rewards: ["Tome of Strahd"],
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
    developments: []
  },
  {
    id: 11,
    name: "Tarroka Reading: The Hooded One",
    img: "",
    completed: true,
    season: 1,
    sessionStarted: 3,
    rewards: [""]
  },
  {
    id: 12,
    name: "The Artifact",
    img: "",
    completed: true,
    sesason: 1,
    sessionStarted: 3,
    rewards: [""],
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
    development: []
    // ernst makes a deal with bafan and german
  },
  {
    id: 16,
    name: `"All Will Be Well!"`,
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 4,
    rewards: [""],
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
    developments: []
  },
  {
    id: 33,
    name: "Kill Izek",
    img: "",
    completed: false,
    season: 1,
    sessionStarted: 1,
    rewards: [""],
    developments: []
  }
]

export default questsData;