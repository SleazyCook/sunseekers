let charactersData = [
  {
    number: 1,
    name: "Sunseekers",
    link: "sunseekers",
    description: "The original Sunseekers, Elizana, German, and Safzira, were misled by Viktor Lazlo with false promises of work in a traveling show traveling to the valley of Barovia.  Over time the group has encountered many set backs in their plight against the darkness of the valley.  Several adventurers have come and gone, but there is always at least one group of Sunseekers entertaining the Devil Strahd.",
    characters: [
      {
        id: 1,
        name: "Safzira",
        long: "Safzira Grirnaz",
        status: "Active",
        img: "https://i.imgur.com/pG4NWum.png",
        firstAppearance: 1,
        level: 7,
        class: "Rogue",
        subclass: "Arcane Trickster",
        race: "Half elf/human",
        description: "Safzira, hailing from the forest village of Hansari, is renowned for her beguiling charm and cunning tricks. With striking features that captivate admirers, she is often adorned with priceless golden jewelry. Her confident demeanor only adds to her enigmatic allure",
        sections: [
          {
            id: 1,
            name: "Journals",
            description: "Safzira keeps her journal",
            localLinks: {}
          },
          {
            id: 2,
            name: "Black Book",
            description: "",
            localLinks: {}
          },
          {
            id: 3,
            name: "Relationship with Kasimir",
            description: "",
            localLinks: {}
          }
        ],
        items: [
          {
            id: 1,
            name: "Magical Cloak",
            description: "",
            localLinks: {}
          },
          {
            id: 2,
            name: "Ring of Warmth",
            localLinks: {}
          },
          {
            id: 3,
            name: "Sending Stones",
            description: "",
            localLinks: {}
          }
        ]
      },
      {
        id: 2,
        name: "Alina",
        long: "Countess Alina Bilquis Bin Zaman A'ida De Lancret Durmont III",
        status: "Active",
        img: "https://i.imgur.com/B0eXKe3.png",
        firstAppearance: 22,
        level: 7,
        class: "Druid",
        subclass: "Circle of Stars",
        race: "Air Genasi",
        description: "",
        sections: [
          {
            id: 1,
            name: "Spell Gone Wrong",
            description: ""
          },
          {
            id: 2,
            name: "Dark Gift",
            description: ""
          }
        ],
        items: [
          {
            id: 1,
            name: "Dark Gift",
            description: "",
            localLinks: {}
          },
          {
            id: 2,
            name: "Gulthias Staff",
            description: "",
            localLinks: {}
          }
        ]
      },
      {
        id: 3,
        name: "Bafan",
        long: "Bafan Inko",
        status: "Active",
        img: "https://i.imgur.com/WFYABQT.png",
        firstAppearance: 23,
        level: 7,
        class: "Artificer / Wizard",
        subclass: "Battle Smith / School of Necromancy",
        race: "Reborn",
        description: "A walking enigma (at least in appearance) Bafan is a tinkerer accompanied by his silent companion Gene. Together they have been stumbling through Barovia alongside The Barbarian",
      },
      {
        id: 4,
        name: "German",
        long: "German the Barbarian",
        status: "Active",
        img: "https://i.imgur.com/2XF3c41.jpg",
        firstAppearance: 1,
        level: 7,
        class: "Barbarian/Fighter",
        subclass: "Path of the Zealot",
        race: "Human",
        description: ""
      },
      {
        id: 5,
        name: "Rydas",
        long: "Rydas Sunbraid",
        status: "Active",
        img: "https://i.imgur.com/ELVEtOF.png",
        firstAppearance: 24,
        level: 7,
        class: "Druid",
        subclass: "Circle of Wildfire",
        race: "Centaur",
        description: ""
      },
      {
        id: 6,
        name: "Freebird",
        status: "Dead",
        img: "https://i.imgur.com/HsG0mx0.jpg",
        level: 5,
        firstAppearance: 1,
        class: "Wizard",
        race: "Kenku"
      },
      {
        id: 7,
        name: "Umnos",
        long: "Umnos Runbalo",
        status: "Inactive",
        img: "https://i.imgur.com/KeeYsZy.jpg",
        firstAppearance: 13,
        level: 7,
        class: "Cleric",
        subclass: "Forge Domain",
        race: "Half elf/human",
        description: "An old soldier turned, cleric looking to spread the word of his religion and do some good in the world. He came to Barovia looking to give a helping hand to those in need not knowing just how bad it really was here"
      },
      {
        id: 8,
        name: "Elizana",
        long: "Elizana the Halfling",
        status: "Inactive",
        img: "https://i.imgur.com/UNhjy3p.jpg",
        firstAppearance: 1,
        level: 5,
        class: "Rogue",
        subclass: "Thief",
        level: 5,
        race: "Halfling",
        description: ""
      },
      {
        id: 9,
        name: "Zoro",
        status: "Inactive",
        img: "https://i.imgur.com/ZZPFbGZ.png",
        firstAppearance: 14,
        level: 4,
        class: "Fighter",
        subclass: "Samurai",
        level: 4,
        race: "Human",
        description: "A skilled fighter with amnesia lost in the Svalich Woods. For a time he traveled south with Safzira and Kasimir in their quest towards the Amber Temple",
      },
    ]
  },
  {
    number: 2,
    name: "Castle Ravenloft",
    link: "/characters/castle-ravenloft",
    description: "Castle Ravenloft is home to Count Strahd Von Zarovich.  While his right hand man, the dusk elf Rahadin, and Cyrus Belview are the castle's caretakers, Strahd has filled his castle with romantic escorts and strange horrors around every corner to entertain him.",
    characters: [
      {
        id: 1,
        name: "Strahd",
        long: "Count Strahd Von Zarovich",
        status: "Undead",
        img: "https://i.imgur.com/AWQB28r.png",
        title: "Vampire Lord",
        race: "Vampire",
        age: "Unknown",
        firstAppearance: 3,
        description: "Count Strahd von Zarovich is a vampire with immense power that has lorded over all of Barovia for centuries. He is resides at Castle Ravenloft but his watchful gaze can be felt all throughout the valley",
        sections: [
          {
            id: 1,
            name: "Death House",
            description: "While in the depths of ~Durst Manor~, the sunseekers came across a cloaked statue holding a ~crystal ball~. Despite being alone in the room, they felt like they were being watched. When they escaped the house, they found a large fruit basket with a card from Strahd welcoming them to Barovia",
            localLinks: {}
          },
          {
            id: 2,
            name: "Old Svalich Road",
            description: "Just west of the ~Village of Barovia~, the Sunseekers were met by a mysterious stranger on the road tending to his horse. The mysterious stranger introduced himself as the lord of Barovia and invited them to his home of ~Castle Ravenloft~.",
            localLinks: {}
          },
          {
            id: 3,
            name: "Organ Music in the Dining Hall",
            description: "During their first adventure in Castle Ravenloft, the Sunseekers found themselves face to face with Strahd after following the sounds of organ music to the great dining hall.  He decapitated a nameless prisoner they were hoping to rescue before giving them directions to the front door.",
            localLinks: {}
          },
          {
            id: 4,
            name: "Vasili in Vallaki",
            description: "Ireena had been courting the accountant of Vallaki for weeks before it was revealed that he was actually Strahd in disguise. The ruse was revealed by his wife Anastrasya during the ~Feast of St Andral~.",
            localLinks: {}
          },
          {
            id: 5,
            name: "Back for Blood",
            description: "After the deaths of two of his brides, Strahd demanded repayment from the Sunseekers in blood. Freebird was slain in front of Umnos and Elizana as they were trying to flee Castle Ravenloft.",
            localLinks: {}
          },
          {
            id: 6,
            name: "Bafan's Coffin",
            description: "Strahd ambushed the Sunseekers on the road disguised, at first, as a wolf. Once he transformed into his true form he willingly took several powerful attacks as he used his charms to manipulate them one by one.",
            localLinks: {}
          }
    
        ]
      },
      {
        id: 2,
        name: "Bucephalus",
        status: "Undead",
        img: "https://i.imgur.com/0xEadjh.png",
        title: "Strahd's Mount",
        race: "Nightmare",
        age: "Unknown",
        firstAppearance: 16,
        description: "Strahd's loyal steed. Little is known of this incredible nightmare of a creature, save that he can fly and seems magically enrobbed in flame",
        sections: [
          {
            id: 1,
            name: "Stable of the High Tower",
            description: "In one of the highest rooms of Castle Ravenloft and just above the ~Heart of Sorrow~, there is a stable filled with burned straw and wide double doors for Bucephalus to fly in and out of. The ~Tome of Strahd~ was once hidden there.",
            localLinks: {},
          }
        ]
      },
      {
        id: 3, 
        name: "Anastrasya",
        long: "Anastrasya Korelova",
        status: "Dead",
        img: "https://i.imgur.com/oPDH0ls.jpg",
        title: "Bride of Strahd",
        race: "Vampire",
        age: "Unknown",
        firstAppearance: 12,
        description: "Anastrasya Karelova was a bride of Strahd and dominated on the battlefield. After a week of the bones of St. Andral missing from the St. Andral's Church, Anastrasya led a horde of the undead to attack Vallaki against Strahd's wishes",
        sections: [
          {
            id: 1,
            name: "Feast of St. Andral",
            description: "Anastrasya and her undead army clawed their way into Vallaki to kill Ireena out of jealousy. When she revealed that he was posing as Vasili the accountant, he was so furious that he ended the attack himself by beheading his bride.",
            localLinks: {}
          }
        ]
      },
      {
        id: 4,
        name: "Volenta",
        long: "Volenta Popofsky",
        status: "Dead",
        img: "https://i.imgur.com/m1q8zC7.png",
        title: "Bride of Strahd",
        race: "Vampire",
        age: "Unknown",
        firstAppearance: 16,
        description: "Volenta Popofsky was a bride of Strahd and protected Castle Ravenloft from the shadows of the Heart of Sorrow",
        sections: [
          {
            id: 1,
            name: "Protector of Ravenloft",
            description: "Volenta was head of security at Castle Ravenloft. She fought the Sunseekers from the shadows of the ~Heart of Sorrow~ and would have been victorious if it hadn't been for the last minute efforts of ~Ez D'Avenir~.",
            localLinks: {}
          }
        ]
      },
      {
        id: 5,
        name: "Ludmilla",
        long: "Ludmilla Vilisevic",
        status: "Undead",
        img: "https://i.imgur.com/YoAb0kL.png",
        title: "Bride of Strahd",
        race: "Vampire",
        age: "Unknown",
        firstAppearance: 19,
        description: "Ludmilla Vilisevic is a bride of Strahd.  Unlike the other brides, Ludmilla enjoys her freedom leaning into her curiousity by exploring Barovia in search of her next big discovery",
        sections: [
          {
            id: 1,
            name: "Post at Tsolenka Pass",
            localLinks: {},
            description: "Unlike her sister wives, Ludmilla is less interested in fighting Strahd's battles and more so in conducting secretive experiments in the most remote places in the valley.",
          }
        ]
      },
      {
        id: 6,
        name: "Escher",
        long: "Escher Belasco",
        status: "Undead",
        img: "https://i.imgur.com/LMWd8UB.png",
        title: "Strahd's Consort",
        race: "Vampire",
        age: "Unknown",
        firstAppearance: 17,
        description: "Escher Belasco, Strahd's latest consort, was once an adventurer in a group much like the Sunseekers.  Strahd murdered the group when he grew bored of them, but kept Escher around for his musical ability",
        sections: [
          {
            id: 1,
            name: "Strahd's Musical Consort",
            localLinks: {},
            description: "Elizana and Umnos found the indifferent Escher drinking wine in Castle Ravenloft. He casually warned them that resisting death in Barovia is pointless."
          }
        ]
      },
      {
        id: 7,
        name: "Rahadin",
        status: "Alive",
        img: "https://i.imgur.com/CEgKJ5p.png",
        title: "Chamberlain of Castle Ravenloft",
        race: "Dusk Elf",
        age: 500,
        firstAppearance: 19,
        description: "Rahadin is Strahd's chamberlain and right-hand man. As a dusk elf, he turned on his own people and swore loyalty to Strahd.  He has been responsible for most of the torment on the other dusk elves for their transgressions against Strahd",
        sections: []
      },
      {
        id: 8, 
        name: "Lief",
        long: "Lief Lipseige",
        status: "Alive",
        img: "https://i.imgur.com/iJl2lQb.png",
        title: "Accountant of Castle Ravenloft",
        race: "Barovian",
        age: "Unknown",
        firstAppearance: 14,
        description: "Lief Lipsiege is Strahd's exhausted accountant.  Working all hours in Castle Ravenloft, Lief is usually consumed by his accountant duties although he can occasionally be helpful",
        sections: [
          {
            id: 1,
            name: "Helpful Hints",
            localLinks: {},
            description: "Upon building the slightest bond with Elizana at ~Castle Ravenloft~, Lief suggested looking for a holy relic in the far east of the valley."
          }
        ]
      },
      {
        id: 9,
        name: "Cyrus",
        long: "Cyrus Belview",
        status: "Alive",
        img: "https://i.imgur.com/3wcInwz.png",
        title: "Servant of Castle Ravenloft",
        race: "Mongrelfolk",
        age: "Unknown",
        firstAppearance: 8,
        description: "An amalgamation of beastly body parts, Cyrus Belview for works in Castle Ravenloft as a servant of Strahd. He mostly dwells below the first floor",
      },
      {
        id: 10,
        name: "Sergei",
        long: "Sergei Von Zarovich",
        status: "Dead",
        img: "https://i.imgur.com/ersvEmO.png",
        title: "Prince of Barovia",
        race: "Human",
        age: "27 years old",
        firstAppearance: 14,
        description: "Strahd's younger brother and Tatyana's betrothed.  Sergei was murdered by Strahd in an act of violent jealousy"
      },
      {
        id: 11,
        name: "Tatyana",
        status: "Dead",
        img: "https://i.imgur.com/YVEINYa.png",
        title: "Commoner",
        race: "Barovian",
        age: "20 years old",
        firstAppearance: 14,
        description: "Strahd's long lost love and his brother's fiance, Tatyana leaped off the balcony of Castle Ravenloft after Sergei's death"
      },
      {
        id: 12,
        name: "Barov",
        long: "King Barov Von Zarovich",
        status: "Dead",
        img: "https://i.imgur.com/fndfbPo.png",
        title: "King of Barovia",
        race: "Human",
        age: "65 years old",
        firstAppearance: 3,
        description: "Strahd invaded the valley in his father's name. Once he defeated the Dusk Elves, he moved his family into Castle Ravenloft to rule"
      },
      {
        id: 13,
        name: "Ravenovia",
        long: "Queen Ravenovia Von Roeyen",
        status: "Dead",
        img: "https://i.imgur.com/pke6BRs.png",
        title: "Queen of Barovia",
        race: "Human",
        age: "63 years old",
        firstAppearance: 3,
        description: "After Strahd named the Dusk Elf valley after his father, he named the family home Castle Ravenloft after his mother"
      }
    ]
  },
  {
    number: 3,
    name: "Village of Barovia",
    link: "/characters/village-of-barovia",
    description: "The citizens of Barovia live in the fearful shadow of Castle Ravenloft above. They have experienced every horror imaginable, leaving the people in this area extremely vulnerable.  Ismark has stepped up as burgomaster after his father died, but struggles every day to protect the surviving townsfolk.",
    characters: [
      {
        id: 1,
        name: "Rose",
        long: "Rosavalda Durst (Rose)",
        status: "Dead",
        img: "https://i.imgur.com/IrTKHqP.jpg",
        title: "Durst Family",
        race: "Barovian",
        age: "11 years old",
        firstAppearance: 1,
        description: "After asking for help for their baby brother Walter, it was revealed that Rose and Thorn are ghosts. Their bodies were locked in their room leaving them to starve to death while their parents led a cult in the basement. Their bones were buried finally giving them peace"
      },
      {
        id: 2,
        name: "Thorn",
        long: "Thornboldt Durst (Thorn)",
        status: "Dead",
        img: "https://i.imgur.com/zvK212S.jpg",
        title: "Durst Family",
        race: "Barovian",
        age: "7 years old",
        firstAppearance: 1,
        description: "After asking for help for their baby brother Walter, it was revealed that Rose and Thorn are ghosts. Their bodies were locked in their room leaving them to starve to death while their parents led a cult in the basement. Their bones were buried finally giving them peace"
      },
      {
        id: 3,
        name: "Gustav",
        long: "Gustav Durst",
        status: "Dead",
        img: "https://i.imgur.com/c5F4D19.jpg",
        title: "Durst Family",
        race: "Barovian",
        age: "48 years old",
        firstAppearance: 1,
        description: "Gustav Durst, once a wealthy land owner before Strahd arrived in Barovia, was left in ruin and joined the Priests of Osybus. He had an affair with the nursemaid and commited suicide"
      },
      {
        id: 4,
        name: "Elizabeth",
        long: "Elizabeth Durst",
        status: "Dead",
        img: "https://i.imgur.com/otQXN1s.jpg",
        title: "Durst Family",
        race: "Barovian",
        age: "44 years old",
        firstAppearance: 1,
        description: "Elizabeth Durst, once a wealthy land owner before Strahd arrived in Barovia, was left in ruin and joined the Priests of Osybus. He had an affair with the nursemaid and commited suicide"
      },
      {
        id: 5,
        name: "Baby Walter",
        long: "Walter Durst",
        status: "Dead",
        img: "https://i.imgur.com/l2cD0Wh.jpg",
        title: "Durst Family",
        race: "Barovian",
        age: "<1 year old",
        firstAppearance: 1,
        description: "Sacrified by Elizabeth Durst, baby Walter became the life force of a flesh mound that killed the Durst Manor cultists. The Sunseekers killed the flesh mound  and buried his remains"
      },
      {
        id: 6,
        name: "Nursemaid",
        long: "Durst Nursemaid Ysolda",
        status: "Dead",
        img: "https://i.imgur.com/TPaXcpo.png",
        title: "Durst Family",
        race: "Barovian",
        age: "24 years old",
        firstAppearance: 1,
        description: "Birth mother of Baby Walter. Murdered by the jealous and hateful Elizabeth Durst"
      },
      {
        id: 7,
        name: "Mrs. Cobb",
        status: "Dead",
        img: "https://i.imgur.com/Gd7Sfuw.jpg",
        title: "Commoner",
        race: "Barovian",
        age: "60 years old",
        firstAppearance: 2,
        description: "Elizana encounters Mrs. Cobb while investigating some scratches on villagers homes. Gets eaten by dying husband that turns into a zombie"
      },
      {
        id: 8,
        name: "Mr. Cobb",
        status: "Dead",
        img: "https://i.imgur.com/WMynXM9.jpg",
        title: "Cobb Family",
        race: "Barovian",
        age: "65 years old",
        firstAppearance: 2,
        description: "Elizana encounters Mrs. Cobb while investigating some scratches on villagers homes. Is terminally ill due to consuming well water. Dies and turns into a zombie, eats his wife, then chases after Elizana. Is killed by Elizana and Freebird outside his home"
      },
      {
        id: 9,
        name: "Kolyan Indirovich",
        status: "Dead",
        img: "https://i.imgur.com/tAjmnfI.jpg",
        title: "Barovian Noble",
        race: "Barovian",
        age: "60 years old",
        firstAppearance: 2,
        description: "Kolyan was the Burgomaster of the Village of Barovia, but passed away shortly before the Sunseekers arrived in the valley. He was beloved by the villagers around him",
        sections: [
          {
            id: 1,
            name: "Burgomaster's Funeral",
            localLinks: {},
            description: "Just before the Sunseekers first arrived in the ~Village of Barovia~, ~Kolyan Indirovich~ met his unfortunate demise. Due to the frequent wolf and monster attacks on the Village, proper burials have been on hold to prevent further injury or death. The Sunseekers were able to protect the family while proper arrangements were made at the local church cemetary."
          }
        ]
      },
      {
        id: 10,
        name: "Ismark Indirovich",
        status: "Alive",
        img: "https://i.imgur.com/R0aJebI.jpg",
        title: "Barovian Noble",
        race: "Barovian",
        age: "28 years old",
        firstAppearance: 2,
        description: `Once known as "Ismark the Lesser", Ismark became Burgomaster of the Village of Barovia after his father's funeral. He has enlisted the Sunseekers to protect his sister, Ireena, in exchange for free food, drink, and lodging within the Village`
      },
      {
        id: 11,
        name: "Ireena Kolyana",
        status: "Alive",
        img: "https://i.imgur.com/5iWx4Sl.png",
        title: "Barovian Noble",
        race: "Barovian",
        age: "24 years old",
        firstAppearance: 2,
        description: "In her home of the Village of Barovia, located just below Castle Ravenloft, Ireena was regularly stalked and harassed by Strahd. She has fled the Village with the Sunseekers in search of a better life"
      },
      {
        id: 12,
        name: "Parriwimple",
        status: "Alive",
        img: "https://i.imgur.com/FBIPhZK.png",
        title: "Commoner",
        race: "Barovian",
        age: "28 years old",
        firstAppearance: 2,
        description: "Parriwimple makes up for his lack of intelligence with near superhuman strength. He is friendly to all visitors of the Village of Barovia but fiercely loyal to his uncle Bildrath, the area's only merchant"
      },
      {
        id: 13,
        name: "Bildrath",
        status: "Alive",
        img: "https://i.imgur.com/XVWw2G1.png",
        title: "Merchant",
        race: "Barovian",
        age: "55 years old",
        firstAppearance: 2,
        description: `Bildrath is the only merchant on the entire east side of the Valley, which to him means that he can over charge his patrons. He believes that if they want it that bad, they will have to pay for it`
      },
      {
        id: 14,
        name: "Father Donavich",
        status: "Alive",
        img: "https://i.imgur.com/jr6osuv.jpg",
        title: "Priest of Lathander",
        race: "Barovian",
        age: "65 years old",
        firstAppearance: 2,
        description: "Father Donavich has been the priest and caretaker for the Village church for decades. He was known for his love and dedication to those around thim - that is until it was revealed that he has been dragging bodies to his vampire son in the church's undercroft"
      },
      {
        id: 15,
        name: "Doru",
        status: "Dead",
        img: "https://i.imgur.com/AprGNcu.png",
        title: "Commoner",
        race: "Vampire",
        age: "30 years old",
        firstAppearance: 2,
        description: "Doru, once the youngest and most joyous Villager, was believed dead after several wolf attacks in the area. The Sunseekers revealed that he was still alive - mostly, as a vampire in the church's undercroft"
      },
      {
        id: 16,
        name: "Mad Mary",
        status: "Alive",
        img: "https://i.imgur.com/96kr5JK.jpg",
        title: "Commoner",
        race: "Commoner",
        age: "55 years old",
        firstAppearance: 2,
        description: "Mad Mary is an older woman found sobbing in her house clutching an old doll. She was consumed with grief and sadness over her daughter running away from home around a week ago and fears for her safety"
      },
      {
        id: 17,
        name: "Lancelot",
        status: "Alive",
        img: "https://i.imgur.com/BNcaXW9.jpg",
        title: "Loved by All",
        race: "Dog",
        age: "2 years old",
        firstAppearance: 2,
        description: "Lancelot is Gertruda's faithful canine companion. Since she ran away, he has been trying to get back to her"
      },
      {
        id: 18,
        name: "Gertruda",
        status: "Unknown",
        img: "https://i.imgur.com/vxbkllB.png",
        title: "Commoner",
        race: "Barovian",
        age: "Unknown",
        firstAppearance: 2,
        description: "A runaway from the Village of Barovia. All that is known about Gertruda comes from a Mad Woman and small dog"
      },
      {
        id: 19,
        name: "Tavern Owners",
        status: "Alive",
        img: "https://i.imgur.com/HU0bX4P.jpg",
        title: "Vistani Bar Owners",
        race: "Vistani",
        age: "35-45 years old",
        firstAppearance: 2,
        description: "It is unclear how these Vistani women came to own and operate the Blood on the Vine Tavern, but anyone who passes through is bound to hear about the fortune teller Madame Eva"
      }
    ]
  },
  {
    number: 4,
    name: "Vistani",
    link: "/characters/vistani",
    description: "The Vistani people are known for their nomadic lifestyle.  Although there are some permanant camps outside of Vallaki and the Village of Barovia, most Vistani spend their time traveling throughout the valley.  This has led to rumors that they are portected by Strahd and the only beings allowed to pass through the surrounding mists.",
    characters: [
      {
        id: 1,
        name: "Viktor Lazlo",
        status: "Undead",
        img: "https://i.imgur.com/DUF2lfE.png",
        title: "Traveling Vistani",
        race: "Vistani",
        age: "52 years old",
        firstAppearance: 1,
        description: "A traveling Vistana with a large wagon, Viktor Lazlo was able to travel through the Mists of Barovia to bring in new adventurers from time to time",
        sections: [
          {
            id: 1,
            name: "Head Hunter",
            description: "After threatening to offer poor Lancelot as a blood sacrifice on behalf of the ~Priests of Osybus~ within ~Durst Manor~, German the Barbarian chopped off his head. As a result, Viktor has sworn a blood oath of revenge and become a revenant that will seek out his revenge - no matter how many times it kills him in the process.",
            localLinks: {}
          },
          {
            id: 2,
            name: "Head lamp",
            description: "Viktor and German fought many times after their time in ~Durst Manor~ together, but Viktor never ceased to come back from the dead and fight again. ~Bafan Inko~ offered to assist the Barbarian by creating a special lantern that could seal Viktor's head safely inside preventing him from coming back over and over. Now the Barbarian keeps Viktor's head on his person at all times.",
            localLinks: {}
          }
        ]
      },
      {
        id: 2,
        name: "Madame Eva",
        status: "Alive",
        img: "https://i.imgur.com/4TAGQ2R.jpg",
        title: "Fortune Teller",
        race: "Vistani",
        age: "Unknown",
        firstAppearance: 3,
        description: "The famed fortune teller Madame Eva has outlived generations of Vistani. She is well known for her wisdom and second sight. Most adventurers find their way to Madame Eva during their travels through Barovia",
        sections: [
          {
            id: 1,
            name: "Tarroka Reading",
            description: "Madame Eva offered a special reading from her tarroka deck to the original Sunseekers - Elizana, German, and Safzira shortly after they arrived in Barovia. She believed that if they fulfilled the five prophecies she revealed that night, that the curse of Strahd in Barovia might be lifted.",
            localLinks: {}
          }
        ]
      },
      {
        id: 3,
        name: "Tavern Owners",
        status: "Alive",
        img: "https://i.imgur.com/HU0bX4P.jpg",
        title: "Tavern Owners",
        race: "Vistani",
        age: "35-45 years old",
        firstAppearance: 2,
        description: "It is unclear how these Vistani women came to own and operate the Blood on the Vine Tavern, but anyone who passes through is bound to hear about the fortune teller Madame Eva"
      },
      {
        id: 4,
        name: "Tser Pool Camp",
        long: "Tser Pool Encampment",
        status: "Active",
        img: "https://i.imgur.com/4ESFX6g.png",
        title: "Vistani Outpost",
        firstAppearance: 3,
        description: "The Tser Pool Encampment is one of two hubs for traveling Vistani. Not too far from the Village of Barovia, Madame Eva is their leader and resident fortune teller"
      },
      {
        id: 5,
        name: "Vallaki Camp",
        long: "Vallaki Vistani Camp",
        status: "Active",
        img: "https://i.imgur.com/BhKS1uC.png",
        title: "Vistani Outpost",
        firstAppearance: 10,
        description: "The Vistani Camp outside of Vallaki is one of two hubs for traveling Vistani.  The brothers Luvash and Arrigal are in charge of the camp at the top of the hill. The base of the hill is surrounded by hovels - which house the last of the dusk elves"
      },
      {
        id: 6,
        name: "Luvash",
        status: "Alive",
        img: "https://i.imgur.com/zPDSJWv.png",
        title: "Vistani Leader",
        race: "Vistani",
        age: "34 years old",
        firstAppearance: 10,
        description: "Leader of the Vallaki Vistani Camp, he lives atop the hill along with his younger brother Arrigal and his young daughter Arabelle.  His daughter was kidnapped by the Barovian Bluto and he expressed his thanks to the Sunseekers by offering them silver bars upon her safe return"
      },
      {
        id: 7,
        name: "Arrigal",
        status: "Alive",
        img: "https://i.imgur.com/cJuJgQy.png",
        title: "Vistani Leader",
        race: "Vistani",
        age: "32 years old",
        firstAppearance: 10,
        description: "The younger of the brothers in charge of the Vallaki Vistani Camp.  While smaller than Luvash, Arrigal has deadly reputation.  Luckily the Sunseekers won them over by rescuing his niece Arabelle"
      },
      {
        id: 8,
        name: "Arabelle",
        status: "Alive",
        img: "https://i.imgur.com/mUPMdul.png",
        title: "Vistani Child",
        race: "Vistani",
        firstAppearance: 10,
        description: "Arabelle, the daughter of Luvash and niece of Arrigal, is the youngest of all of the Vistani in Barovia. She was kidnapped by Bluto and rescued by the Sunseekers.  She may or may not have some kind of psychic visions like Madame Eva"
      },
      {
        id: 9,
        name: "Alexei",
        status: "Alive",
        img: "https://i.imgur.com/kJkTaka.png",
        title: "Vistani Child",
        race: "Vistani",
        age: "7 years old",
        firstAppearance: 10,
        description: "Alexei, one of the younger Vistani in Barovia, was on lookout duty when he fell asleep during the kidnapping of young Arabelle.  The Sunseekers witnessed Luvash whipping him for the offense "
      },
      {
        id: 10,
        name: "Kasimir",
        long: "Kasimir Velikov",
        status: "Alive",
        img: "https://i.imgur.com/VbVKHji.png",
        title: "Dusk Elf Leader",
        race: "Dusk Elf",
        age: "350 years old",
        firstAppearance: 10,
        description: "Kasimir Velikov is the leader of the few remaining Dusk Elves, who were embraced by the Vistani. He in turn adopted the Vistani name Velikov. He once killed his own sister to keep Strahd's eyes off of her"
      },
      {
        id: 11,
        name: "Dusk Elves",
        status: "Active",
        img: "https://i.imgur.com/q3lsE1z.png",
        race: "Dusk Elves",
        firstAppearance: 10,
        description: "The Dusk Elves lost in a war against Strahd before the Mists descended on Barovia.  After they killed one of their own to keep her from becoming his consort, he had their women killed and their men castrated. The few that remain have been embraced by the Vallaki Vistani Camp"
      },
      {
        id: 12,
        name: "Vistani Nomads",
        status: "Active",
        img: "https://i.imgur.com/tyNOTjk.png",
        race: "Vistani",
        firstAppearance: 1,
        description: "The Vistani are the only people in Strahd's Barovia that are allowed to come and go as they please.  The relationship between Strahd and the Vistani is mysterious to most people.  They are known to travel lightly though Barovia, although they are not considered welcome in most Barovian settlements"
      },
      {
        id: 13,
        name: "Ez d'Avenir",
        status: "Alive",
        img: "https://i.imgur.com/Zs0iM18.png",
        title: "Monster Hunter",
        race: "Vistani",
        age: "Unknown",
        firstAppearance: 16,
        description: "Ezmerelda d'Avenir is a mysertious Vistana who saved Freebird and Umnos from certain death during their fight with Volenta in the Chamber of Sorrow. She stole the Tome Of Strahd from the Sunseekers and disappeared "
      }
    ]
  },
  {
    number: 5,
    name: "Keepers of the Feather",
    link: "/characters/keepers-of-the-feather",
    description: "The Keepers of the Feather are a secret spy organization that works to defend the people of Barovia from the Devil Strahd.  Nearly all members of the organization are powerful wereravens who can easily fly from one location to another. They have two outposts: The Blue Water Inn in Vallaki and the Wizard of Wines winery south of Krezk.",
    characters: [
      {
        id: 1,
        name: "Danika Dorkova",
        status: "Alive",
        img: "https://i.imgur.com/t76siZc.png",
        title: "Tavern Owner",
        race: "Wereraven",
        age: "35 years old",
        firstAppearance: 4,
        description: "Owner and barkeep of the Blue Water Inn in Vallaki along with her husband Urwin. The Inn takes in the few visitors that come into Vallaki and it is also the Vallaki hub for the secret organization known as the Keepers of the Feather "
      },
      {
        id: 2,
        name: "Urwin Martikov",
        status: "Alive",
        img: "https://i.imgur.com/se3nVYA.png",
        title: "Tavern Owner",
        race: "Wereraven",
        age: "40 years old",
        firstAppearance: 4,
        description: "Owner and chef of the Blue Water Inn in Vallaki along with his wife Danika. The Inn takes in the few visitors that come into Vallaki and it is also the Vallaki hub for the secret organization known as the Keepers of the Feather"
      },
      {
        id: 3,
        name: "Brom Martikov",
        status: "Alive",
        img: "https://i.imgur.com/BkKm4Az.png",
        title: "Child",
        race: "Wereraven",
        age: "12 years old",
        firstAppearance: 4,
        description: "Brom and his younger brother Bray are the youngest members of the Keepers of the Feather.  They are friendly to patrons as they are known to run around the Blue Water Inn"
      },
      {
        id: 4,
        name: "Bray Martikov",
        status: "Dead",
        img: "https://i.imgur.com/zHZCDfN.png",
        title: "Child",
        race: "Wereraven",
        age: "10 years old",
        firstAppearance: 4,
        description: "Bray and his older brother Brom are the youngest members of the Keepers of the Feather.  They are friendly to patrons as they are known to run around the Blue Water Inn",
        sections: [
          {
            id: 1,
            name: "Slain at the Feast",
            description: "While many Barovians perished during the ~Feast of St Andral~, Bray was surely the youngest.",
            localLinks: {}
          }
        ]
      },
      {
        id: 5,
        name: "Adrian Martikov",
        status: "Alive",
        img: "https://i.imgur.com/difX7Fx.png",
        title: "",
        race: "Wereraven",
        age: 38,
        firstAppearance: 23,
        description: "Adrian, younger brother to Urwin and older brother to Stefania and Elvir, works with his father, Davian, to run the spy network for the Keepers of the Feather as well as maintain the Wizard of Wines"
      },
      {
        id: 6,
        name: "Davian Martikov",
        status: "Alive",
        img: "https://i.imgur.com/07MZIud.png",
        title: "Martikov Patriarch",
        race: "Wereraven",
        age: 68,
        firstAppearance: 23,
        description: "The patriarch of the Martikov Family and the leader of the Keepers of the Feather, Davian has maintained the family business of the only winery in the valley in Barovia for decades"
      },
      {
        id: 7,
        name: "Elvir Martikov",
        status: "Alive",
        img: "https://i.imgur.com/XKjOKyS.png",
        title: "",
        race: "Wereraven",
        age: 29,
        firstAppearance: 23,
        description: "The youngest of Davian's children, Elvir spends most of his time working at the winery"

      },
      {
        id: 8,
        name: "Stefania Martikov",
        status: "Alive",
        img: "https://i.imgur.com/8Ipfxo5.png",
        title: "",
        race: "Wereraven",
        age: 32,
        firstAppearance: 23,
        description: "Stefania has been raising her children in the comfort and safety of her family's winery for several years.  She has passed on the gift of lycanthropy to most of her children"
      },
      {
        id: 9,
        name: "Dag Tomescu",
        status: "Alive",
        img: "https://i.imgur.com/h4eOBpz.png",
        title: "",
        race: "Wereraven",
        age: 36,
        firstAppearance: 23,
        description: "Dag is one of the few outsiders allowed into the intermost circles of the Martikov family. He and his children with Stefania have accepted the gift of lycanthropy"
      },
      {
        id: 10,
        name: "Winery Children",
        long: "Claudiu, Martin, and Viggo Martikov",
        status: "Alive",
        img: "https://i.imgur.com/QaO9vpj.png",
        title: "Children",
        race: "Wereraven",
        age: "12, 7, and 6 years old",
        firstAppearance: 23,
        description: "Claudiu, Martin, and Viggo are the youngest generation of the Martikov family and also the youngest in their family history to accept the gift of lycanthropy"
      },
      {
        id: 11,
        name: "Paint Drop",
        long: "Yolanda Martikov (Paint Drop)",
        status: "Alive",
        img: "https://i.imgur.com/rNRl0Yz.png",
        title: "Child",
        race: "Wereraven",
        age: "Newborn",
        firstAppearance: 24,
        description: "Yolanda Martikov, known by her nickname of Paint Drop, is the youngest member of the Martikov family. She was born with unique raven-like features",
        sections: [
          {
            id: 1,
            name: "Freebird Reincarnated",
            description: "It is almost undeniable that Freebird's soul willingly found its way into ~Yolanda Martikov~. After being murdered by Stahd at ~Castle Ravenloft~, Umnos tried and failed to revive him - almost as if his soul was unavailable or unwilling to return to his body. It is well-known that souls cannot leave Barovia after death and are therefore trapped in a cycle of reincarnation. The raven-like blood of the Martikov family seems to have provided a viable host for his soul, which is now shared by the Martikov child.",
            localLinks: {}
          }
        ]
      }
    ]
  },
  {
    number: 6,
    name: "Order of the Silver Dragon",
    link: "/characters/order-of-the-silver-dragon",
    description: "The Order of the Silver Dragon was founded by the silver dragon Argynvost.  The knights constructed the castle Argynvostholt in his name and the outpost Tsolenka Pass on the road to the Amber Temple.  Argynvost and his knights successfully kept the horrors of the Amber Temple away from the living for many years until Strahd and his invading army killed every member of the Order.",
    characters: [
      {
        id: 1,
        name: "Argynvost",
        status: "Dead",
        img: "https://i.imgur.com/gMBEsmH.png",
        title: "Founder of Order of the Silver Dragon",
        race: "Silver Dragon",
        age: "Unknown",
        firstAppearance: 14,
        description: "Argynvost was once a great knight and silver dragon. He founded Argynvostholt and the Order of the Silver Dragon to protect Barovia from the evil power of the Amber Temple.  Argynvost fought against Strahd's army but was ultimately slain by Strahd himself",
        sections: [
          {
            id: 1,
            name: "Head of the Order",
            description: "When Argynvost fell in his battle against Strahd his head, in dragon form, was kept as a trophy for the invader. The Order of the Silver Dragon, throughout their curse as revenants, have sought after the skull of Argynvost for centuries",
            localLinks: {}
          }
        ]
      },
      {
        id: 2,
        name: "Sir Vladimir",
        long: "Sir Vladimir Horngaard",
        status: "Undead",
        img: "https://i.imgur.com/8s2uE3q.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Sir Vladimir Horngaard was a fierce knight in the Order of the Silver Dragon.  When Argynvost was slain by Strahd, Vladimir's bloodlust outlived him - turning not only him, but all of the knights within the Order, into revenants. Strahd sees them as a minor nuisance"
      },
      {
        id: 3,
        name: "Sir Godfrey",
        long: "Sir Godfrey Gilwyn",
        status: "Undead",
        img: "https://i.imgur.com/I3Gc3uT.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Sir Godfrey Gilwyn fought alongside Argynvost and Sir Vladimir Horngaard.  If Vladimir's hate and bloodlust brough the knights of the Order back from the death, it was Godfrey's love and patience that allowed a handful of knights to hold even the faintest hold on their humanity",
        sections: [
          {
            id: 1,
            name: "Unfinished Business",
            description: "~Sir Godfrey~ believes that if his knights can fulfill their most important mortal desires that they might have a chance at finding peace in the afterlife. He has asked the Sunseekers to assist with this task by helping each of his knights one by one.",
            localLinks: {}
          }
        ]
      },
      {
        id: 4,
        name: "Revenants",
        status: "Active",
        img: "https://i.imgur.com/0IVdyxP.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Many knights from the Order of the Silver Dragon have descended completely into bloodthirsty revenants.  While they are fated to fight Strahd and his forces for all eternity, they will cut through anything, or anyone, that stands in their way"
      },
      {
        id: 5,
        name: "Gofrey's Knights",
        status: "Active",
        img: "https://i.imgur.com/ESpelam.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Sir Godfrey Gilwyn and a few other knights, while revenants, have been trying to hold on to what remains of their humanity.  They mostly stay in Argynvostholt to avoid any bloodthirsty tempation.  Their memories and the rest of what makes them more than monsters is fading away.  Their numbers are dwindling as more knights become monsters"
      },
      {
        id: 6,
        name: "Sir Erich",
        long: "Sir Erich Norinthaal",
        status: "Dead",
        img: "https://i.imgur.com/akPmTiU.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Sir Erich Norinthaal is one of the few remaining knights in Sir Godfrey's circle at Argynvostholt.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is to finish his biggest hunt",
        sections: [
          {
            id: 1,
            name: "Last Hunting Trip",
            description: "The first of Sir Godfrey's last ditch efforts to aid his fellow knights in leaving the world of the Undead behind, Sir Erich joined the Sunseekers on a trip south towards ~Tsolenka Pass~ where they ultimately helped him slay the roc he hunted in his mortal life. He successfully passed on leaving behind his revenant curse.",
            localLinks: {}
          }
        ]
      },
      {
        id: 7,
        name: "Sir Damien",
        long: "Sir Damien Hargrove",
        status: "Undead",
        img: "https://i.imgur.com/lslqYhu.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Sir Damien Hargrove is one of the few remaining knights in Sir Godfrey's circle at Argynvostholt.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is to offer his lost love the engagement ring he made for her."
      },
      {
        id: 8,
        name: "Sir Robern",
        long: "Sir Robern Boarwin",
        status: "Undead",
        img: "https://i.imgur.com/oicL9Ap.png",
        title: "Silver Knight",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Sir Robern Boarwin is one of the few remaining knights in Sir Godfrey's circle at Argynvostholt.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is pass on a family heirloom."
      },
      {
        id: 9,
        name: "Arthund",
        long: "Arthund Boarwin",
        status: "Undead",
        img: "https://i.imgur.com/TEMI1tp.png",
        title: "Silver Squire",
        race: "Revenant",
        age: "Unknown",
        firstAppearance: 14,
        description: "Arthund Boarwin didn't get the chance to become a full-fledged knight.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is to perform a truly heroic deed in order to become a proper knight of the Order."
      }
    ]
  },
  {
    number: 7,
    name: "Church of the Morning Lord",
    link: "/characters/church-of-the-morninglord",
    description: "The Church of the Morning Lord preaches the dominant faith among those who consider themselves Barovian.  There is a church dedicated to the Morning Lord in every major settlement and there is also an orphange in Vallaki.  There are fewer and fewer respresentatives of the faith in the last few years as priests have ben corrupted or killed by the horrors around them.",
    characters: [
      {
        id: 1,
        name: "Father Donavich",
        status: "Alive",
        img: "https://i.imgur.com/jr6osuv.jpg",
        title: "Priest of Lathander",
        race: "Barovian",
        firstAppearance: 2,
        description: "Father Donavich has been the priest and caretaker for the Village church for decades. He was known for his love and dedication to those around thim - that is until it was revealed that he has been dragging bodies to his vampire son in the church's undercroft"
      },
      {
        id: 2,
        name: "Feather Lucien",
        long: "Father Lucien Petrovich",
        status: "Dead",
        img: "https://i.imgur.com/rgYIjKd.png",
        title: "Priest of Lathander",
        race: "Barovian",
        firstAppearance: 6,
        description: "Father Lucien Petrovich presided over St. Andral's Church in Vallaki for a long time. He raised his family within the church and passed on his wisdom as a holy man. "
      },
      {
        id: 3,
        name: "Father Franz",
        long: "Father Franz Petrovich",
        status: "Alive",
        img: "https://i.imgur.com/jT8iGgN.png",
        title: "Priest of Lathander",
        race: "Barovian",
        firstAppearance: 6,
        description: "Father Franz Petrovich was raised in the church by his father and grandfather. His father was slain on a mercenary trip to Berez by wolves, but his faith has held strong through the years"
      },
      {
        id: 4,
        name: "Claudia Belasco",
        status: "Alive",
        img: "https://i.imgur.com/Ry4ksDE.png",
        title: "Orphanage Mistress",
        race: "Barovian",
        firstAppearance: 6,
        description: "Claudia Belasco is the headmistress of St. Andral's Orphanage in Vallaki. Although closely affiliated with the church, the orphanage has actually been owned and operated by her family for generations"
      },
      {
        id: 5,
        name: "Milivoj",
        status: "Dead",
        img: "https://i.imgur.com/nYQC8VY.jpg",
        title: "Orphan",
        race: "Barovian",
        firstAppearance: 10,
        description: "Milivoj grew up in St. Andral's Orphanage and since aging out of the program he has been a loyal groundskeep for both the orphanage and the church"
      },
    ]
  },
  {
    number: 8,
    name: "The Baron",
    link: "/characters/the-baron",
    description: "Baron Vargas Vallakovich comes from a long line of rulers in the town of Vallaki. He holds weekly festivals promoting life and prosperity while outlawing even the mention of Strahd or vampires within the town's walls. His laws of Malicious Unhappiness have created a lot of problems for the townsfolk.  The Baron and his family are protected by the watchful Vallaki Guard, led by the Baron's right hand man Izek Strazni.",
    characters: [
      {
        id: 1,
        name: "The Baron",
        status: "Alive",
        img: "https://i.imgur.com/hHguveo.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 4,
        description: "Baron Vargas Vallakovich is the Burgomaster of Vallaki. Secured behind the walls of Vallki, the Baron has spent decades of his life in denial about Strahd's Barovia.  He has made the utterance of the vampire's name illegal and mandates weekly attendence to city festivals",
        sections: [
          {
            id: 1,
            name: "Outlawed Sunseekers",
            description: "After the ~Feast of St Andral~, the Baron blamed the Sunseekers for the massacre. Those who were present when the Baron gave the order were promptly arrested and he has sent Izek and other guards to patrol the roads surrounding the city to round up the rest.",
            localLinks: {}
          }
        ]
      },
      {
        id: 2,
        name: "The Baroness",
        status: "Alive",
        img: "https://i.imgur.com/Uu6FNg4.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 4,
        description: "The Baron's wife is a devout member of the Church of the Morning Lord. She spends most of her time having tea with the poorest citizens of Vallaki spreading the word of the Morning Lord and assisting with festival planning"
      },
      {
        id: 3,
        name: "Izek Strazni",
        status: "Alive",
        img: "https://i.imgur.com/zwYIqcJ.png",
        title: "Head of the Guard",
        race: "Barovian",
        firstAppearance: 4,
        description: "Izek Strazni was once a Vallaki orphan with a violent childhood.  The Baron took responsibility for the troubled child.  As Izek grew up he continued to get into trouble the Baron saw an opportunity.  Izek was made the chief of the Vallaki Guard and is known to use his monstrous arm to get his hands dirty",
        localLinks: {}
        // ireena dolls
        // german fight
      },
      {
        id: 4,
        name: "Victor Vallakovich",
        status: "Alive",
        img: "https://i.imgur.com/TZlpDIH.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 11,
        description: "Victor Vallakovich hates his father, the Baron, and is obsessed with magic.  He once courted Stella Wachter until a spell went awry and damaged her mind.  He now spends all of his time in the Burgomaster's attic secluded from everyone, especially his family, until he can figure out how to repair the damage and escape Barovia with his love"
      },
      {
        id: 5,
        name: "Vallaki Guards",
        status: "Alive",
        img: "https://i.imgur.com/mYrMJos.png",
        title: "Guards",
        race: "Barovian",
        firstAppearance: 4,
        description: "The Guards of Vallaki are the most elite militarized force in Barovia.  They are loyal to the Burgomaster and follow the orders of Izek Strazni"
      },
      {
        id: 6,
        name: "The Butler",
        status: "Alive",
        img: "https://i.imgur.com/6vkrtpj.png",
        title: "Commoner",
        race: "Barovian",
        firstAppearance: 4,
        description: "Grygori Antonova is the Burgomaster's butler and cook.  He used to work for the Baron's father.  He spends his days running the Burgomaster's mansion, cooking, cleaning, and assisting with festival preparation"
      }
    ]
  },
  {
    number: 9,
    name: "Wachterhaus",
    link:"/characters/wachterhaus",
    description: "Wachterhaus is the Vallaki family home of the richest family in Barovia, the Wachters.  Lord Nikolai Wachter and Lady Fiona Wachter control a great deal of influence over the town of Vallaki and are opposed politically to Baron Vargas Vallakovich.  Their sons Nikolai and Karl frequen the Blue Water Inn for drinks while their daughter Stella has not left their family home in several weeks.",
    characters: [
      {
        id: 1,
        name: "Lady Wachter",
        long: "Lady Fiona Wachter",
        status: "Alive",
        img: "https://i.imgur.com/qLO3OuR.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 10,
        description: "Lady Fiona Wachter is the richest woman in Barovia.  She is conspiring against the Baron to replace him as Burgomaster of Vallaki with the help of her right-hand man Ernst Larnak and the Sunseekers"
      },
      {
        id: 2,
        name: "Lord Wachter",
        long: "Lord Nikolai Wachter",
        status: "Alive",
        img: "https://i.imgur.com/jo9RNTW.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 10,
        description: "Lady Fiona Wachter is the richest woman in Barovia.  She is conspiring against the Baron to replace him as Burgomaster of Vallaki with the help of her right-hand man Ernst Larnak and the Sunseekers"
      },
      {
        id: 3,
        name: "Ernst Larnak",
        status: "Alive",
        img: "https://i.imgur.com/VTYepBN.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 10,
        description: "Ernst Larnak has served Wachterhaus his entire life.  He is very loyal to them and treated like a member of the family. Ernst's responsibilites to Wachterhaus mostly involve keeping and eye on everything going on in Vallaki"
      },
      {
        id: 4,
        name: "Stella Wachter",
        status: "Alive",
        img: "https://i.imgur.com/jLxQzr1.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 10,
        description: "Stella Wachter is the youngest child of Lord and Lady Wachter. She once courted the Burgomaster's son Victor until one of his spells misfired and caused her to go insane. She spends her days locked in her room within Wachterhaus until her condition can be properly corrected"
      },
      {
        id: 5,
        name: "Nikolai Wachter",
        status: "Alive",
        img: "https://i.imgur.com/xd7dn5q.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 6,
        description: "Nikolai Wachter is the eldest son of Lord and Lady Wachter and the future of Wachterhaus. He spends most of his time drinking at the Blue Water Inn with his brother Karl and other patrons"
      },
      {
        id: 6,
        name: "Karl Wachter",
        status: "Alive",
        img: "https://i.imgur.com/PcJwUpU.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 6,
        description: "Karl Wachter is the middle child of Lord and Lady Wachter.  He spends most of his time drinking at the Blue Water Inn with his brother Nikolai and other patrons"
      }
    ]
  },
  {
    number: 10,
    name: "Vallaki Merchants",
    link: "/characters/vallaki-merchants",
    description: "In addition to the Baron's weekly festivals, Vallaki's town square hosts a variety of goods and services. This shopping district is the premier shopping district in the entire valley of Barovia. Dragomir Valisov at the Cracked Anvil once silvered weapons for the Sunseekers and Harkus Stefanovich is known for his questionable potions and salves at the local apotheocary. ",
    characters: [
      {
        id: 1,
        name: "Dragomir",
        long: "Dragomir Valisov",
        status: "Alive",
        img: "https://i.imgur.com/9xMXn7l.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Dragomir Valisov is the proud purveryor of The Cracked Anvil which offers functional pieces including horseshoes, nails, hinges, spearheads, arrowheads, and daggers",
        sections: [
          {
            id: 1,
            name: "Silvered Weapons",
            description: "Dragomir successfully silvered weapons for the first generation of Sunseekers before the ~Feast of St Andral~",
            localLinks: {}
          }
        ]
      },
      {
        id: 2,
        name: "Alek",
        long: "Alek Alastroi",
        status: "Alive",
        img: "https://i.imgur.com/ezgNkJR.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Alek Alastroi is the eldest of the Alastroi siblings and co-owner of Endless Delights.  The siblings are known for their materlistic priorities and expert level skills with a needle and thread"
      },
      {
        id: 3,
        name: "Andrej",
        long: "Andrej Alastroi",
        status: "Alive",
        img: "https://i.imgur.com/GkLBY9s.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Andrej Alastroi is at the center of the Alastroi siblings and co-owner of Endless Delights.  The siblings are known for their materlistic priorities and expert level skills with a needle and thread"
      },
      {
        id: 4,
        name: "Alana",
        long: "Alana Alastroi",
        status: "Alive",
        img: "https://i.imgur.com/qM3iqDT.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Alana Alastroi is the youngest of the Alastroi siblings and co-owner of Endless Delights.  The siblings are known for their materlistic priorities and expert level skills with a needle and thread"
      },
      {
        id: 5,
        name: "Harkus",
        long: "Harkus Stefanovich",
        status: "Alive",
        img: "https://i.imgur.com/CiucFK9.jpg",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Harkus Stefanovich is the soft-spoken, but nonetheless eccentric owner of Stefanovich Apothecary. Possessed with an unnerving bedside manner and a lack of appreciation for personal space, Harkus is nonetheless a simple apothecary, rather than a potion-maker or alchemist"
      },
      {
        id: 6,
        name: "Fatima",
        long: "Fatima Lukresh",
        status: "Alive",
        img: "https://i.imgur.com/6M5oCvn.jpg",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Fatima Lukresh is the dark-humored and abrasive owner of Lukresh Tannery. She is most experienced in the production of straps, harnesses, and belts, but can craft normal and studded leather armor on commission if asked. Her work is crude, but functional"
      },
      {
        id: 7,
        name: "Tural",
        status: "Alive",
        img: "https://i.imgur.com/LoWGZUj.jpg",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Tural is Vallaki’s is a gruff, unpleasant man and most experienced wainwright. He occasionally exits Vallaki to do business with the Vistani, which leaves him a social pariah amongst some of the more mistrustful townsfolk"
      },
      {
        id: 8,
        name: "Bilbo",
        status: "Alive",
        img: "https://i.imgur.com/5nEcuuL.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Bilbo is the gentle and soft spoken owner of Odds N Ends.  His shop offers a variety of inexpensive items"
      },
      {
        id: 9,
        name: "Ana",
        long: "Ana Krogarov",
        status: "Alive",
        img: "https://i.imgur.com/5nEcuuL.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Ana Krogarov is the owner of The Straight Arrow. She crafts short and long bows as well as arrows and quills. Ana is a distant cousin of Bluto, Vallaki's town drunk"
      }
    ]
  },
  {
    number: 11,
    name: "Vallaki Citizens",
    link: "/characters/vallaki-citizens",
    description: "As the most populated settlement in Vallaki, this town offers the widest variety of townsfolk and visitors. From established noble families to poor orphans and eccentric traveling bards, Vallaki is full of characters and bustling with activity. Many of these characters can be found coming and going to the Blue Water Inn, town square, or the local brothel.",
    characters: [
      {
        id: 1,
        name: "Rictavio",
        long: "Rictavio / Rudloph Van Richten",
        status: "Alive",
        img: "https://i.imgur.com/tYEzwNQ.png",
        title: "Monster Hunter",
        race: "Half Elf",
        age: "80 years old",
        firstAppearance: 5,
        description: "Disguised as the traveling bard Rictavio, Rudolph Van Richten the most famous monster hunter in the multiverse. He is plotting his attack on Strahd while hidden in plain sight"
      },
      {
        id: 2,
        name: "Blinsky",
        long: "Gadof Blinsky",
        status: "Alive",
        img: "https://i.imgur.com/QefdavN.png",
        title: "Toy Maker",
        race: "Barovian",
        age: "38 years old",
        firstAppearance: 5,
        descriptin: `Gadof Blinsky is the timid owner of Blinky's Toys.  His macabre toys can be found across Barovia with the tag "Is No Fun? Is No Blinsky!"  He is seen with a monkey companion Piccolo, on loan from Rictavio.  He is being forced by Izek to make custom dolls that resemble Ireena`
      },
      {
        id: 3,
        name: "Madame Genie",
        status: "Alive",
        img: "https://i.imgur.com/W1VrGtT.png",
        title: "Brothel Madame",
        race: "Barovian",
        age: "80 years old",
        firstAppearance: 5,
        description: "Madame of The Swift Finish, a brothel in Vallaki. Genie has offered her establishment as a safe space for the Sunseekers to meet with Rudolph Van Richten"
      },
      {
        id: 4,
        name: "Genie's Ladies",
        status: "Alive",
        img: "https://i.imgur.com/OqbzSGS.png",
        title: "Sex Workers",
        race: "Barovian",
        age: "20 - 75 years old",
        firstAppearance: 5,
        description: "Genie's Ladies work as escorts at The Swift Finish. While not all of Genie's Ladies are female, they are known for their discretion and professionalism. Most of the Ladies needed a place to go after they aged out of St. Andral's Orphanage"
      },
      {
        id: 5,
        name: "Vasili",
        long: "Vasili Von Holtz",
        status: "Alive",
        img: "https://i.imgur.com/3tdnSi9.png",
        title: "Accountant",
        race: "Barovian",
        age: "28 years old",
        firstAppearance: 6,
        description: "Vasili von Holtz was an accountant in Vallaki's high society.  As a popular lover of the arts, Vasili courted Ireena when she came to town.  It was revealed by Anastrasya during the Feast of St. Andral that Vasili was none other than Strahd von Zarovich in disguise"
      },
      {
        id: 6,
        name: "Henrik",
        long: "Henrik Van Der Root",
        status: "Dead",
        img: "https://i.imgur.com/YBZxjjh.png",
        title: "Coffin Maker",
        race: "Barovian",
        age: "70 years old",
        firstAppearance: 12,
        description: "Henrik van der Root was a coffin maker in Vallaki.  Strahd sent vampires to his shop to torment him and conspire to steal the bones of St. Andral.  When the Sunseekers approached him in his shop, they discovered a nest of vampires that slaughtered Henrik as the Feast of St. Andral began"
      },
      {
        id: 7,
        name: "Bluto",
        status: "Alive",
        img: "https://i.imgur.com/RVBXqGV.png",
        title: "Commoner",
        race: "Barovian",
        age: "60 years old",
        firstAppearance: 10,
        description: "Bluto was known as Vallaki's resident drunk.  He once enjoyed fishing, but after years of a dry harvest he kidnapped the young Vistana Arabelle and offered her to a possible god of the lake.  The Sunseekers rescued Arabelle and turned Bluto over to the Vallaki Vistani Camp to answer for his crime"
      },
      {
        id: 8,
        name: "Lars Kjurls",
        status: "Alive",
        img: "https://i.imgur.com/iNCA7ea.jpg",
        title: "Former Guard",
        race: "Barovian",
        age: "33 years old",
        firstAppearance: 6,
        description: "Lars Kjurls was a member of the Vallaki Guard.  During the Festival of the Sun he made the mistake of laughing for only a second when the Burgomaster's effigy collapsed. He was dragged by horse to the Vallaki jail and broke free with the help of Elizana and Umnos"
      },
      {
        id: 9,
        name: "Orphans",
        status: "Active",
        img: "https://i.imgur.com/rMeg8Jx.png",
        title: "Unwanted Children",
        race: "Barovian",
        age: "0-17 years old",
        firstAppearance: 6,
        description: "Children may have the worst fates in the valley of Barovia. Those who are lucky enough will eventually find their way to Claudia Belasco's orphanage"
      },
      {
        id: 10,
        name: "Felix",
        status: "Alive",
        img: "https://i.imgur.com/EpTyfoZ.png",
        title: "Orphan",
        race: "Barovian",
        age: "8 years old",
        firstAppearance: 6,
        description: "Felix came into the orphanage with a locket that was revealed to be possessed by a shadow demon.  German the Barbarian made a deal with the shadow demon to release the child and spare his life"
      },
      {
        id: 11,
        name: "Hair Puller",
        long: "Hair Pulling Girl",
        status: "Alive",
        img: "https://i.imgur.com/3V86wmr.png",
        title: "Orphan",
        race: "Barovian",
        age: "9 years old",
        firstAppearance: 6,
        description: `The Hair Pulling Girl, like many orphans when they first arrive at St. Andral's orphanage, lacks a proper name.  Her anxieties cause her to nearly contstantly pull out her own hair. She was one of the "rescued" children that were went to the Old Mill. She was fortunate to come back in one piece`
      },
      {
        id: 12,
        name: "Lizard Boy",
        status: "Alive",
        img: "https://i.imgur.com/2n73COe.jpg",
        title: "Orphan",
        race: "Barovian",
        age: "8 years old",
        firstAppearance: 6,
        description: `The Lizard Boy, like many orphans when they first arrive at St. Andral's orphanage, lacks a proper name.  His anxieties cause him to nearly contstantly pull out his genitals and play with them calling it his "lizard". He was one of the "rescued" children that were went to the Old Mill. He was fortunate to come back in one piece`
      },
      {
        id: 13,
        name: "Ace",
        status: "Alive",
        img: "https://i.imgur.com/OpBoXpH.jpg",
        title: "Orphan",
        race: "Barovian",
        age: "10 years old",
        firstAppearance: 6,
        description: `Ace was adopted by the the Sunseekers, but quickly brought back to the orphanage after they made the terrible mistake of attempting to "rescue" several orphans on behalf of a group of ladies who were revealed to be witches grinding children into bone flour`
      }
      {
        id: 14,
        name: "Szoldar",
        status: "Alive",
        img: "https://i.imgur.com/J3BbMEv.png",
        title: "Wolf Hunter",
        race: "Barovian",
        age: "50 years old",
        firstAppearance: 5,
        description: "Szoldar and his brother Yevgeni are skilled wolf hunters.  They assist the Vallaki Guard on missions outside the walls as they are the most familiar with the area and it's threats"
      },
      {
        id: 15,
        name: "Yevgeni",
        status: "Alive",
        img: "https://i.imgur.com/ikZfS2x.png",
        title: "Wolf HUnter",
        race: "Barovian",
        age: "45 years old",
        firstAppearance: 5,
        description: "Yevgeni and his brother Szoldar are skilled wolf hunters.  They assist the Vallaki Guard on missions outside the walls as they are the most familiar with the area and it's threats"
      },
      {
        id: 16,
        name: "Piccolo",
        status: "Alive",
        img: "https://i.imgur.com/TH9vapW.png",
        title: "Trained Companion",
        race: "Monkey",
        age: "7 years old",
        firstAppearance: 5,
        description: "Piccolo, longtime companion to Famed Monster Hunter Rudolph Van Richten, is staying with Gadof Blinksy the Toy Maker in Vallaki. Upon visiting his shop for the first time, Van Richten felt sympathetic for the down-on-his-luck toy maker and offered to leave Piccolo with him for a while"
      },
      {
        id: 17,
        name: "Ramses",
        status: "Alive",
        img: "https://i.imgur.com/ZwGamsr.png",
        title: "Rictavio's Exotic Tiger",
        race: "Saber-toothed Tiger",
        age: "8 years old",
        firstAppearance: 11,
        description: "Rictavio's Exotic Tiger is actually Rudloph Van Richten's Vistani-tracking companion Ramses.  While Rudolph continues his ruse as Rictavio the Bard in Vallaki, Ramses plays his part as a trained circus animal patiently waiting in Ricavio's traveling show wagon waiting for his master to command him"
      }
    ]
  },
  {
    number: 12,
    name: "Witches & Cults",
    link: "/characters/witches-and-cults",
    description: "In the deepest and darkest corners of Barovia, there are those who conspire against all light and goodness.  There are dark sacrificial rituals in hidden basements and secret societies with questionable intentions.  Missing children in the valley are never found and yet dream pastries are always easy enough to find.",
    characters: [
      {
        id: 1,
        name: "Priests of Osybus",
        status: "Unknown",
        img: "https://i.imgur.com/v0UJOI8.png",
        title: "Cult",
        firstAppearance: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 2,
        name: "Gustav Durst",
        status: "Dead",
        img: "https://i.imgur.com/c5F4D19.jpg",
        title: "Cult Leader",
        race: "Barovian",
        firstAppearance: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 3,
        name: "Elizabeth Durst",
        status: "Dead",
        img: "https://i.imgur.com/otQXN1s.jpg",
        title: "Cult Leader",
        race: "Barovian",
        firstAppearance: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 4,
        name: "Mill Witches",
        status: "Inactive",
        img: "https://i.imgur.com/OVBsusR.png",
        title: "Coven",
        race: "Night Hags",
        firstAppearance: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 5,
        name: "Bella",
        status: "Alive",
        img: "https://i.imgur.com/8KHprnt.png",
        title: "Mill Witch",
        race: "Night Hag",
        firstAppearance: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 6,
        name: "Ophelia",
        status: "Dead",
        img: "https://i.imgur.com/RXoVXmW.png",
        title: "Mill Witch",
        race: "Night Hag",
        firstAppearance: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 7,
        name: "Morgantha",
        status: "Alive",
        img: "https://i.imgur.com/p7NId0c.png",
        title: "Mill Witch",
        race: "Night Hag",
        firstAppearance: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 8,
        name: "Witches of Ravenloft",
        status: "Active",
        img: "https://i.imgur.com/yZG0VQI.png",
        title: "Witches",
        race: "Boarian Witches",
        firstAppearance: 15,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 9,
        name: "Kavani Druids",
        status: "Active",
        img: "https://i.imgur.com/KSYMOqH.png",
        title: "Druidic Cult",
        race: "Druids",
        firstAppearance: 22,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 10,
        name: "Gaine",
        status: "Dead",
        img: "https://i.imgur.com/VoYlJs4.png",
        title: "Kavani Youth",
        race: "Druid",
        firstAppearance: 22,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 11,
        name: "Salali",
        status: "Dead",
        img: "https://i.imgur.com/zFeuyQZ.png",
        title: "Kavani Youth",
        race: "Druid",
        firstAppearance: 22,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 12,
        name: "Echo",
        status: "Dead",
        img: "https://i.imgur.com/YkfPLBR.png",
        title: "Kavani Youth",
        race: "Druid",
        firstAppearance: 22,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 13,
        name: "Winery Druids",
        status: "Dead",
        img: "https://i.imgur.com/2DdxjJp.png",
        title: "Druidic Invaders",
        race: "Druids",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 14,
        name: "Gulthias Holder",
        status: "Dead",
        img: "https://i.imgur.com/0w6Wqx2.png",
        title: "Kavani Leader",
        race: "Druid",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      }
    ]
  },
  {
    number: 13,
    name: "Unknown Alliance",
    link: "/characters/unknown-alliance",
    description: "Barovia is a dangerous place filled with questionable characters with unknown motivations.  Some people aren't honest about who they are or who they are allied with. It is ultimately up to the Sunseekers to decide for themselves who is trusworthy and who isn't. One can only hope that they make the best decisions."
  },
  {
    number: 14,
    name: "Creatures",
    link: "/characters/creatures",
    description: "The Old Svalich Road and surrounding Svalich Woods are not safe to travel without an experienced guide.  There are vicious wolves ready to attack unsuspecting travelers at every possible moment and undead march through the valley without limitation.  One can never expect which horror or monstrosity they may encounter on their adventures.",
    characters: [
      {
        id: 1,
        name: "Wolf",
        img: "https://i.imgur.com/FchATzr.png",
        title: "Creature",
        race: "Beast",
        firstAppearance: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 2,
        name: "Ghost",
        img: "https://i.imgur.com/BSf0lL6.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 1,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 3,
        name: "Animated Armor",
        img: "https://i.imgur.com/TeqirPq.png",
        title: "Creature",
        race: "Construct",
        firstAppearance: 1,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 4,
        name: "Animated Broom",
        long: "Broom of Animated Attack",
        img: "https://i.imgur.com/qIFem41.png",
        title: "Creature",
        race: "Construct",
        firstAppearance: 1,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 5,
        name: "Flesh Mound",
        img: "https://i.imgur.com/inlnQP8.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 1,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"      
      },
      {
        id: 6,
        name: "Dire Wolf",
        img: "https://i.imgur.com/Un8MIPO.png",
        title: "Creature",
        race: "Beast",
        firstAppearance: 4,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 7, 
        name: "Revenant",
        img: "https://i.imgur.com/MRV3Uvp.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 4,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 8,
        name: "Skeleton",
        img: "https://i.imgur.com/MbQkuxZ.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 4,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 9,
        name: "Zombie",
        img: "https://i.imgur.com/uRYQa0I.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 2,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 10,
        name: "Vampire Spawn",
        img: "https://i.imgur.com/EK3IakO.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 2,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 11,
        name: "Bat",
        img: "https://i.imgur.com/o8uk0mv.png",
        title: "Creature",
        race: "Beast",
        firstAppearance: 7,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 12,
        name: "Mimic",
        img: "https://i.imgur.com/uHvJOv1.png",
        title: "Creature",
        race: "Monstrosity",
        firstAppearance: 7,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 13,
        name: "Smoke Mephit",
        img: "https://i.imgur.com/mId5MjR.png",
        title: "Creature",
        race: "Elemental",
        firstAppearance: 14,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 14,
        name: "Phantom Warrior",
        img: "https://i.imgur.com/GKocPLC.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 14,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 15,
        name: "Scarecrow",
        img: "https://i.imgur.com/r2Tqbat.png",
        title: "Creature",
        race: "Construct",
        firstAppearance: 17,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 16,
        name: "Red Wyrmling",
        long: "Red Dragon Wyrmling",
        img: "https://i.imgur.com/eTV0kyQ.png",
        title: "Creature",
        race: "Dragon",
        firstAppearance: 19,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 17,
        name: "Gargoyle",
        img: "https://i.imgur.com/WbNjTLi.png",
        title: "Creature",
        race: "Elemental",
        firstAppearance: 19,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 18,
        name: "Twig Blight",
        img: "https://i.imgur.com/gwflAR2.png",
        title: "Creature",
        race: "Plant",
        firstAppearance: 18,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 19,
        name: "Needle Blight",
        img: "https://i.imgur.com/c1FQ3g3.png",
        title: "Creature",
        race: "Plant",
        firstAppearance: 18,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 20,
        name: "Vine Blight",
        img: "https://i.imgur.com/LusaZ0u.png",
        title: "Creature",
        race: "Plant",
        firstAppearance: 18,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 21,
        name: "Flameskull",
        img: "https://i.imgur.com/X7kl2pr.png",
        title: "Creature",
        race: "Undead",
        firstAppearance: 22,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 22,
        name: "Amber Golem",
        img: "https://i.imgur.com/koRNfiJ.png",
        title: "Creature",
        race: "Construct",
        firstAppearance: 21,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 23,
        name: "Roc",
        img: "https://i.imgur.com/nNfX6Mw.png",
        title: "Creature",
        race: "Monstrosity",
        firstAppearance: 23,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 24,
        name: "Tree Blight",
        img: "https://i.imgur.com/JYG1BK9.png",
        title: "Creature",
        race: "Plant",
        firstAppearance: 24,
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      }
    ]
  }
]

export default charactersData;