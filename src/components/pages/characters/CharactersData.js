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
        firstAppearance: 14,
        description: "Strahd's younger brother and Tatyana's betrothed.  Sergei was murdered by Strahd in an act of violent jealousy."
      },
      {
        id: 11,
        name: "Tatyana",
        status: "Dead",
        img: "https://i.imgur.com/YVEINYa.png",
        title: "Commoner",
        race: "Barovian",
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
        firstAppearance: 1,
        description: "Birth mother of Baby Walter. Murdered by the jealous and hateful Elizabeth Durst"
      },
      {
        id: 7,
        name: "Mrs. Cobb",
        status: "Dead",
        img: "https://i.imgur.com/Gd7Sfuw.jpg",
        title: "Cobb Family",
        race: "Barovian",
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
        firstAppearance: 2,
        description: "Kolyan was the Burgomaster of the Village of Barovia, but passed away shortly before the Sunseekers arrived in the valley. He was beloved by the villagers around him",
        sections: [
          {
            id: 1,
            name: "Burgomaster's Funeral",
            localLinks: {},
            description: ""
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
        firstAppearance: 1,
        description: "A traveling Vistana with a large wagon, Viktor Lazlo was able to travel through the Mists of Barovia to bring in new adventurers from time to time.",
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
        firstAppearance: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 3,
        name: "Tavern Owners",
        status: "Alive",
        img: "https://i.imgur.com/HU0bX4P.jpg",
        title: "Tavern Owners",
        race: "Vistani",
        firstAppearance: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 4,
        name: "Tser Pool Camp",
        long: "Tser Pool Encampment",
        status: "Active",
        img: "https://i.imgur.com/4ESFX6g.png",
        title: "Vistani Outpost",
        firstAppearance: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 5,
        name: "Vallaki Camp",
        long: "Vallaki Vistani Camp",
        status: "Active",
        img: "https://i.imgur.com/BhKS1uC.png",
        title: "Vistani Outpost",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 6,
        name: "Luvash",
        status: "Alive",
        img: "https://i.imgur.com/zPDSJWv.png",
        title: "Vistani Leader",
        race: "Vistani",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 7,
        name: "Arrigal",
        status: "Alive",
        img: "https://i.imgur.com/cJuJgQy.png",
        title: "Vistani Leader",
        race: "Vistani",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 8,
        name: "Arabelle",
        status: "Alive",
        img: "https://i.imgur.com/mUPMdul.png",
        title: "Vistani Child",
        race: "Vistani",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 9,
        name: "Alexei",
        status: "Alive",
        img: "https://i.imgur.com/kJkTaka.png",
        title: "Vistani Child",
        race: "Vistani",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 10,
        name: "Kasimir",
        long: "Kasimir Velikov",
        status: "Alive",
        img: "https://i.imgur.com/VbVKHji.png",
        title: "Dusk Elf Leader",
        race: "Dusk Elf",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 11,
        name: "Dusk Elves",
        status: "Active",
        img: "https://i.imgur.com/q3lsE1z.png",
        race: "Dusk Elves",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 12,
        name: "Vistani Nomads",
        status: "Active",
        img: "https://i.imgur.com/tyNOTjk.png",
        race: "Vistani",
        firstAppearance: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 13,
        name: "Ez d'Avenir",
        status: "Alive",
        img: "https://i.imgur.com/Zs0iM18.png",
        title: "Monster Hunter",
        race: "Vistani",
        firstAppearance: 16,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 2,
        name: "Urwin Martikov",
        status: "Alive",
        img: "https://i.imgur.com/se3nVYA.png",
        title: "Tavern Owner",
        race: "Wereraven",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 3,
        name: "Brom Martikov",
        status: "Alive",
        img: "https://i.imgur.com/BkKm4Az.png",
        title: "Child",
        race: "Wereraven",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 4,
        name: "Bray Martikov",
        status: "Dead",
        img: "https://i.imgur.com/zHZCDfN.png",
        title: "Child",
        race: "Wereraven",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 5,
        name: "Adrian Martikov",
        status: "Alive",
        img: "https://i.imgur.com/difX7Fx.png",
        title: "",
        race: "Wereraven",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 6,
        name: "Davian Martikov",
        status: "Alive",
        img: "https://i.imgur.com/07MZIud.png",
        title: "Martikov Patriarch",
        race: "Wereraven",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 7,
        name: "Elvir Martikov",
        status: "Alive",
        img: "https://i.imgur.com/XKjOKyS.png",
        title: "",
        race: "Wereraven",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."

      },
      {
        id: 8,
        name: "Stefania Martikov",
        status: "Alive",
        img: "https://i.imgur.com/8Ipfxo5.png",
        title: "",
        race: "Wereraven",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 9,
        name: "Dag Tomescu",
        status: "Alive",
        img: "https://i.imgur.com/h4eOBpz.png",
        title: "",
        race: "Wereraven",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 10,
        name: "Winery Children",
        status: "Alive",
        img: "https://i.imgur.com/QaO9vpj.png",
        title: "Children",
        race: "Wereraven",
        firstAppearance: 23,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 11,
        name: "Paint Drop",
        status: "Alive",
        img: "https://i.imgur.com/rNRl0Yz.png",
        title: "Child",
        race: "Wereraven",
        firstAppearance: 24,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 2,
        name: "Sir Vladimir",
        long: "Sir Vladimir Horngaard",
        status: "Undead",
        img: "https://i.imgur.com/8s2uE3q.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 3,
        name: "Sir Godfrey",
        long: "Sir Godfrey Gilwyn",
        status: "Undead",
        img: "https://i.imgur.com/I3Gc3uT.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 4,
        name: "Revenants",
        status: "Active",
        img: "https://i.imgur.com/0IVdyxP.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 5,
        name: "Gofrey's Knights",
        status: "Active",
        img: "https://i.imgur.com/ESpelam.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 6,
        name: "Sir Erich",
        long: "Sir Erich Norinthaal",
        status: "Dead",
        img: "https://i.imgur.com/akPmTiU.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 7,
        name: "Sir Damien",
        long: "Sir Damien Hargrove",
        status: "Undead",
        img: "https://i.imgur.com/lslqYhu.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 8,
        name: "Sir Robern",
        long: "Sir Robern Boarwin",
        status: "Undead",
        img: "https://i.imgur.com/oicL9Ap.png",
        title: "Silver Knight",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 9,
        name: "Arthund",
        long: "Arthund Boarwin",
        status: "Undead",
        img: "https://i.imgur.com/TEMI1tp.png",
        title: "Silver Squire",
        race: "Revenant",
        firstAppearance: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 4,
        name: "Claudia Belasco",
        status: "Alive",
        img: "https://i.imgur.com/Ry4ksDE.png",
        title: "Orphanage Mistress",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 5,
        name: "Milivoj",
        status: "Dead",
        img: "https://i.imgur.com/nYQC8VY.jpg",
        title: "Orphan",
        race: "Barovian",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 2,
        name: "The Baroness",
        status: "Alive",
        img: "https://i.imgur.com/Uu6FNg4.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 3,
        name: "Izek Strazni",
        status: "Alive",
        img: "https://i.imgur.com/zwYIqcJ.png",
        title: "Head of the Guard",
        race: "Barovian",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 4,
        name: "Victor Vallakovich",
        status: "Alive",
        img: "https://i.imgur.com/TZlpDIH.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 11,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 5,
        name: "Vallaki Guards",
        status: "Alive",
        img: "https://i.imgur.com/mYrMJos.png",
        title: "Guards",
        race: "Barovian",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 6,
        name: "The Butler",
        status: "Alive",
        img: "https://i.imgur.com/6vkrtpj.png",
        title: "Commoner",
        race: "Barovian",
        firstAppearance: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 3,
        name: "Ernst Larnak",
        status: "Alive",
        img: "https://i.imgur.com/VTYepBN.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 4,
        name: "Stella Wachter",
        status: "Alive",
        img: "https://i.imgur.com/jLxQzr1.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 5,
        name: "Nikolai Wachter",
        status: "Alive",
        img: "https://i.imgur.com/xd7dn5q.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 6,
        name: "Karl Wachter",
        status: "Alive",
        img: "https://i.imgur.com/PcJwUpU.png",
        title: "Barovian Noble",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 7,
        name: "Tural",
        status: "Alive",
        img: "https://i.imgur.com/LoWGZUj.jpg",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
      },
      {
        id: 8,
        name: "Bilbo",
        status: "Alive",
        img: "https://i.imgur.com/5nEcuuL.png",
        title: "Merchant",
        race: "Barovian",
        firstAppearance: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel."
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
        firstAppearance: 5,
        descriptin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 3,
        name: "Madame Genie",
        status: "Alive",
        img: "https://i.imgur.com/W1VrGtT.png",
        title: "Brothel Madame",
        race: "Barovian",
        firstAppearance: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 4,
        name: "Genie's Ladies",
        status: "Alive",
        img: "https://i.imgur.com/OqbzSGS.png",
        title: "Sex Workers",
        race: "Barovian",
        firstAppearance: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 5,
        name: "Vasili",
        long: "Vasili Von Holtz",
        status: "Alive",
        img: "https://i.imgur.com/3tdnSi9.png",
        title: "Accountant",
        race: "Barovian",
        firstAppearance: 6,
        description: "Strahd posed as Vasili during his frequent visits to Vallaki. Vasili presented himself as a renown accountant and Barovian noble who had the chance to court Ireena"
      },
      {
        id: 6,
        name: "Henrik",
        long: "Henrik Van Der Root",
        status: "Dead",
        img: "https://i.imgur.com/YBZxjjh.png",
        title: "Coffin Maker",
        race: "Barovian",
        firstAppearance: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 7,
        name: "Bluto",
        status: "Alive",
        img: "https://i.imgur.com/RVBXqGV.png",
        title: "Commoner",
        race: "Barovian",
        firstAppearance: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 8,
        name: "Lars Kjurls",
        status: "Alive",
        img: "https://i.imgur.com/iNCA7ea.jpg",
        title: "Former Guard",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 9,
        name: "Orphans",
        status: "Active",
        img: ",https://i.imgur.com/rMeg8Jx.png",
        title: "Unwanted Children",
        race: "Barovian",
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
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 11,
        name: "Hair Puller",
        long: "Hair Pulling Girl",
        status: "Alive",
        img: "https://i.imgur.com/3V86wmr.png",
        title: "Orphan",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 12,
        name: "Lizard Boy",
        status: "Alive",
        img: "https://i.imgur.com/2n73COe.jpg",
        title: "Orphan",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 13,
        name: "Ace",
        status: "Alive",
        img: "https://i.imgur.com/OpBoXpH.jpg",
        title: "Orphan",
        race: "Barovian",
        firstAppearance: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 14,
        name: "Szoldar",
        status: "Alive",
        img: "https://i.imgur.com/J3BbMEv.png",
        title: "Wolf Hunter",
        race: "Barovian",
        firstAppearance: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
      },
      {
        id: 15,
        name: "Yevgeni",
        status: "Alive",
        img: "https://i.imgur.com/ikZfS2x.png",
        title: "Wolf HUnter",
        race: "Barovian",
        firstAppearance: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut odio dolor. Integer vitae sodales magna, nec consequat ante. Maecenas laoreet scelerisque iaculis. Phasellus vel"
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