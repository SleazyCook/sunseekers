import { BsWallet } from "react-icons/bs";
import { GiLouvrePyramid } from "react-icons/gi";

let locationsData = [
  {
    number: 1,
    name: "Mists of Barovia",
    img: "https://i.imgur.com/bgfcLRA.png",
    imgCap: "Mists of Barovia",
    characters: ["Vistani"],
    quests: ["Death House"],
    // notes: ["None"],
    localLinks: {},
    quote: `A deadly fog surrounds Barovia and engulfs any creature that tries to leave. 
    
    Even flying creatures are subject to the fog's effects.
    A deadly fog surrounds Barovia and engulfs any creature that tries to leave. 
    
    Even flying creatures are subject to the fog's effects.`,
    main: `   The Mists are a supernatural phenomenon unique to Barovia. The mists create a border through which is seems outlanders are able to enter, but not leave the region. they have a choking, enervating and disorienting effect on those who try to pass through them. The Sunseekers, upon arrival in Barovia, were harried by the motile Mists toward the ~Village of Barovia~ and ~Durst Manor~. 

    The Vistani claim to be able to travel through the Mists at will, but other than selling some fake potions which they claim will allow safe passage, they offer no details on how they do so or what is on the other side.

    Madame Eva claims that Strahd controls the Mists, but that they also imprison him in Barovia.
    `,
    gallery: [
      {
        number: 1,
        cap: "Mists of Barovia",
        img: "https://i.imgur.com/bgfcLRA.png"
      },
      {
        number: 2,
        cap: "Mists of Barovia",
        img: "https://i.imgur.com/tHxRSUD.png"
      }
    ]
  },
  {
    number: 2,
    name: "Old Svalich Road",
    img: "https://i.imgur.com/B7TIY5w.png",
    imgCap: "Old Svalich Road",
    characters: ["Strahd", "Vistani"],
    // quests: [""],
    // notes: ["None"],
    localLinks: {},
    quote: "Black pools of water stand like dark mirrors in and around the muddy roadway. Giant trees loom on both sides of the road, their branches clawing at the mist.",
    main: `   The Old Svalich Road winds and twists all the way throught the valley of Barovia.  The Sunseekers first arrived in Barovia on the road followed through the Village of Barovia, the Old Mill, and Vallaki.
    
    While the Old Svalich Road is known to be safer than the Svalich Woods that surround it, most travels refuse to follow the road without veteran wolf hunter escorts. Wolf hunters, such as Szoldar and Yevgeni, can be found in major settlements like Vallaki and Krezk. 
    
    It is not uncommon for undead or other horrors to cross the road without warning.`,
    gallery: [
      {
        number: 1,
        cap: "Old Svalich Road",
        img: "https://i.imgur.com/B7TIY5w.png"
      },
      {
        number: 2,
        cap: "First Interaction with Strahd",
        img: "https://i.imgur.com/wW4qxDR.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Wolf attacks",
        localLinks: {},
        content: `      The wolves of the Svalich Woods often hunt for travelers along the Old Svalich Road. The Sunseekers have been attacked by wolves several times on their travels. Even their Sunset wagon has done little to protect them from wandering wolf packs. One one occasion three large dire wolves nearly ripped the wagon apart while attacking the party.`
      },
      {
        number: 2,
        name: "First Interaction with Strahd",
        localLinks: {},
        content: `After leaving the Village of Barovia, the Sunseekers encountered Strahd Von Zarovich on the Old Svalich Road. He first appeared as a stranger grooming his horse, but revealed his true identity in his opening monologue:
        
        "I wanted to welcome you to my kingdom. I chose the name Barovia to honor my father, the great King Barov. Did you know that? Of course not. Well, I conquered this valley in his name. Believe me, it wasn't much to look at before I spruced up the place. I wanted to be the first to make amends on behalf of the Vistani. I'm aware of the... misunderstanding between the dearly departed Mr. Lazlo and your...sizable associate. These free spirited people, while they are my most loyal subjects, are anything but foot soldiers. They have a silly saying "Even the Best Men Die.'' They hold no ill will toward any of you, and they will be happy to host your party for the duration of your stay in Barovia. Though, Ireena, my dear, you simply must understand that You deserve to be my Queen. In fact, I must insist on this. I know you all are absolutely titillated by my surprise visit and believe me I. am. too., but I really must be going. When you are ready to return the favor, there is a black carriage up the road. It will take you to my home without any.. outside interference."`
      }
    ]
  },
  {
    number: 3,
    name: "Svalich Woods",
    img: "https://i.imgur.com/aN6jACG.png",
    imgCap: "Svalich Woods",
    characters: ["Vistani", "Wolf Hunters"],
    // quests: [""],
    // notes: [""],
    localLinks: {},
    quote: "Towering trees, whose tops are lost in the heavy gray mist, block out all but a death-gray light. The tree trunks are unnaturally close to one another, and the woods have the silence of a forgotten grave, yet exude the feeling of an unvoiced scream.",
    main: `   The Svalich Woods is a name for all the wilds surrounding the various villages and outposts in the valley of Barovia. They are dark and full of terrors, home to wolves, undead, and other monstrous creatures of the night. Most of the creatures in the Svalich Woods are in some way controlled by Strahd von Zarovich, and act as his eyes, ears and fangs against any who are foolish enough to wander there alone.`,
    gallery: [
      {
        number: 1,
        cap: "Svalich Woods",
        img: "https://i.imgur.com/aN6jACG.png"
      },
      {
        number: 2,
        cap: "Ravens in the Svalich Woods",
        img: "https://i.imgur.com/X8R1kPB.png"
      }
    ]
  },
  {
    number: 4,
    name: "Village of Barovia",
    img: "https://i.imgur.com/VP9HxsY.png",
    imgCap: "Castle Ravenloft overlooking the Village of Barovia",
    leader: ["Ismark Indirovich"],
    characters: ["Durst Family", "Ismark", "Ireena", "Cobb Family", "Bildrath", "Parriwimple", "Donavich", "Doru"],
    quests: ["Death House", "Village Plague", "Missing Villagers", "Find Gertruda", "Protect Ireena", "Replacement Priest"],
    notes: ["Ireena Diary"],
    localLinks: {
      "Durst Family": "/characters/village-of-barovia",
      "Cobb Family": "/characters/village-of-barovia",
    },
    quote: "Tall shapes loom out of the dense fog that surrounds everything. The muddy ground underfoot gives way to slick, wet cobblestones. The tall shapes become recognizable as village dwellings. The windows of each house stare out from pools of Blackness. No sound cuts the silence except for mournful sobbing that echoes through the streets from a distance.",
    main: `  The ~Village of Barovia~ unfortunately sits at the base of the rock that ~Castle Ravenloft~ was built upon. Living in the gloomy shadow of Castle Ravenloft has been brutal to the village over the centuries since its construction. The village was home to ~Kolyan Indirovich~ who raised Ismark and Ireena, the optimistic next generation of Eastern Barovia. In their visit, the Sunseekers encountered zombies, plague, wolf attacks, and a vampire. It remains a cold and dark place for those unfortunate enough to find themselves in the shadow of ~Castle Ravenloft~.`,
    gallery: [
      {
        number: 1,
        cap: "View of Castle Ravenloft from the Village of Barovia",
        img: "https://i.imgur.com/yxCPjUN.png"
      },
      {
        number: 2,
        cap: "Map of Village of Barovia",
        img: "https://i.imgur.com/zxl3W65.png"
      },
      {
        number: 3,
        cap: "Map of Church in Village of Barovia",
        img: "https://i.imgur.com/fxgQqfY.jpg"
      },
      {
        number: 4,
        cap: "Blood on the Vine Tavern sign",
        img: "https://i.imgur.com/HU0bX4P.jpg"
      },
      {
        number: 5,
        cap: "Blood on the Vine Tavern exterior",
        img: "https://i.imgur.com/fZlkLtN.png"
      },
      {
        number: 6,
        cap: "Downtown Village of Barovia",
        img: "https://i.imgur.com/n5ktd93.png"
      },
      {
        number: 7,
        cap: "Zombies in the Village Well",
        img: "https://i.imgur.com/V6fdcx7.png"
      },
      {
        number: 8,
        cap: "Durst Manor",
        img: "https://i.imgur.com/ZzFQKI3.png"
      },
      {
        number: 9,
        cap: "Map of Durst Manor",
        img: "https://i.imgur.com/hiFFkUj.png"
      },
      {
        nuber: 10,
        cap: "Priests of Osybus",
        img: "https://i.imgur.com/v0UJOI8.png"
      }

    ],
    sections: [
      {
        number: 1,
        name: "Bildrath's Mercantile",
        localLinks: {},
        content: `    "The sparse light form this building spills out from behind drawn heavy curtains. A sign over the door, creaking on its hinges, reads "Bildrath's Mercantile.""
        
        Bildrath trades with the Vistani when they pass through. He is also happy to make any profit from any strangers unlucky enough to find themselves here. He serves his own interests and offers no sanctuary. He never bargains since, as he says, "If you want it, you'll pay for it." He has no competition in the village. Bildrath's nephew, Parrwimple, lives in with him and often hangs around the shop. Parriwimple's real name is Parpol Cantemir, but no one in the village calls him that. His muscles rippling beneath his leather tunic should give ample notice of his strength. At the same time, Parriwimple is simple-minded. He is devoted to his uncle, but has a fondness for the Sunseeker Elizana.`
      },
      {
        number: 2,
        name: "Blood on the Vine",
        localLinks: {},
        content: `    "A single shaft of light thrusts illumination into the main square, its brightness looking like a solid pillar in the heavy fog. Above the gaping doorway, a sign hangs prevariously askew, proclaiming this to be the Blood on the Vine tavern."
        
        Close inspection of the tavern sign reveals that it originally read "Blood of the Vine," but an "N" has been scratched over the "F." The tavern appears to be run by three Vistani women named Alenka, Mirabel, and Sorvia. When the Sunseekers first arrive at the tavern, the Vistani women encourage them to visit a nearby fortune teller Madame Eva. The barkeep Arik Lorensk is a pudgy little man with little interest in conversation.  It was Ismark who bought the Sunseekers their first drinks in the Village of Barovia and offered them a place to stay at his mansion.`
      },
      {
        number: 3,
        name: "Mad Mary's Townhouse",
        localLinks: {},
        content: `    "A moaning sob floats through the still, gray streets, coloring your thoughts with sadness. The sounds flow from a dark, two-story townhouse."
        
        When Elizana found the dog Lancelot scratching at a door, she discovered the home of a lady that the locals call "Mad Mary." Her daughter went missing some time ago and Mary seems to be confused about the details of the situation, although she remembers Lancelot clearly. She pleads with the Sunseekers for them to find her daughter Gertruda.`
      },
      {
        number: 4,
        name: "Burgomaster's Mansion",
        localLinks: {},
        content: `    "A weary-looking mansion squats behind a rusting iron fence. The iron gates are twisted and torn. The right gate lies cast aside, while the left swings lazily in the wind. The stuttering squeal and clang of the gate repeats with mindless precision. Weeds choke the grounds and press with menace upon the house itself. Yet, against the walls, the growth has been tramped down to create a path all about the domain. Heavy claw markings have stripped the once-beautiful finish of the walls. Great black marks tell of the fires that have assailed the mansion. Not a pane nor a shard of glass stands in any window. All the windows are barred with planks, each one marked with stains of evil omen."
        
        When the Sunseekers first encounter the Burgomaster's Mansion in the Village of Barovia, they meet Ireena who has been experiencing nightly horrors and creepy romantic advances from Strahd Von Zarovich. She has been taking care of her father's body, who died some days ago, and is in need of a proper burial.`
      },
      {
        number: 5,
        name: "Church",
        localLinks: {},
        content: `    "Atop a slight rise, against the roots of the pillar stone that supports Castle Ravenloft, stands a gray, sagging edifice of stone and wood. This church has obviously weathered the assaults of evil for centuries on end and is worn and weary. A bell tower rises toward the back, and flickering light shines through holes in the shingled roof. The rafters strain feebly against their load. The heavy wooden doors of the church are covered with claw marks and scarred by fire.
        
        The local priest Donavich has done everything he can for the people of the Village of Barovia over the years, but recently he has been secretly bringing the bodies of Barovians into the undercroft to feed his vampire son. His son, Doru, was once studying for priesthood, but was bitten and turned into a vampire by Strahd to torment Donavich.`
      },
      {
        number: 6,
        name: "Cemetary",
        localLinks: {},
        content: `    "A fence of wrought iron with a rusty gate encloses a rectangular plot of land behind the dilapidated church. Tightly packed gravestones shrouded by fog bear the names of souls long passed. All seems quiet."
        
        The cemetary in the village is as old as the village itself. However in recent years due to the constant attacks on the village by horrors day and night, villagers have been too afraid to spend enough time outside to dig any graves. The Sunseekers help Ismark and Ireena bury their father Kolyan in the first proper burial in years.`
      },
      {
        number: 7,
        name: "Durst Manor",
        localLinks: {},
        content: `    "Closer to the door is a toy chest with windmills painted on its sides and a dollhouse that's a perfect replica of the dreary edifice in which you stand. These furnishings are draped in cobwebs. Lying in the middle of the floor are two small skeletons wearing tattered but familiar clothing. The smaller of the two cradles a stuffed doll that you also recognize."
        
        Before Strahd's invasion, Durst Manor was a warm home. The Dursts owned the Mill towards Vallaki and helped feed people in need in the valley. After Strahd's arrival, the Durst family home fell into darkness eventually hosting the Priests of Osybus. The neglected souls of Rose and Thorn appealed to the Sunseekers who helped put their family's souls to rest after centuries of suffering.`
      },
    ]
  },
  {
    number: 5,
    name: "Tser Pool Encampment",
    img: "https://i.imgur.com/4ESFX6g.png",
    imgCap: "Tser Pool Encampment",
    leader: ["Madame Eva"],
    characters: ["Vistani"],
    quests: ["Madame Eva's Tarroka Reading"],
    notes: ["Tarroka Reading"],
    localLinks: {
      "Tarroka Reading": "/notes/tarroka-reading"
    },
    quote: `The mournful strains of an accordian clash with the singing of several brightly clad figures around a bonfire. A footpath continues beyond this encampment, meandering north between the river and the forest's edge.`,
    main: `   The Vistani Tser Pool Encampment is located just west of the Village of Barovia on a small dirt road that splits off from the Old Svalich Road. The encampment rests along the edge of the Ivlis River, which has been fruitful to the Vistani travelers who find themselves passing through this area. The Vistani are known to celebrate life in contrast to the Barovians whose lives can be mostly summarized by constant suffering. Parties run all night with singing, dancing, and lots of drinking. The Tser Pool Encampment is also where Madame Eva, an elder in the Vistani community, tells fortunes for travelers who first arrive in Barovia.`,
    gallery: [
      {
        number: 1,
        cap: "Tser Pool Encampment",
        img: "https://i.imgur.com/4ESFX6g.png"
      },
      {
        number: 2,
        cap: "Map of Tser Pool Encampment",
        img: "https://i.imgur.com/90YbfjU.png"
      },
      {
        number: 3,
        cap: "Dancing Vistani",
        img: "https://i.imgur.com/THM9GkI.png"
      },
      {
        number: 4,
        cap: "Madame Eva",
        img: "https://i.imgur.com/4TAGQ2R.jpg"
      },
      {
        number: 5,
        cap: "Madame Eva's Table",
        img: "https://i.imgur.com/Ene9b1B.jpg"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Madame Eva",
        localLinks: {},
        content: "Madame Eva is an elder in the Vistani community and her age is unknown to all. She can willingly pass through the mists of Barovia and as such possesses an enourmous wealth of knowledge and wisdom. She is famous for her tarroka readings, which she usually conducts without a fee for travelers who are unfortunate enough to arrive in Barovia. From time to time she tells the tales of the adventurers who tried to best Strahd in the past. Her warnings about the dangers of Barovia are not to be taken lightly. When the Sunseekers met Madame Eva, she gave them five prophecies that could be used to defeat Strahd."
      }
    ]
  },
  {
    number: 6,
    name: "Black Carriage",
    img: "https://i.imgur.com/BgyFPCi.png",
    imgCap: "Black Carraige",
    characters: ["Strahd"],
    // quests: ["None"],
    notes: ["Invitation to Ravenloft"],
    localLinks: {
      "Invitation to Ravenloft": "/notes/strahd-notes"
    },
    quote: `Parked at the fork in the road, pointed east, is a large black carriage drawn by two black horses. The horses snort puffs of steamy breath into the chill mountain air. The side door of the carriage swings open silently.`,
    main: "The Black Carriage is a strange phenomenon. It usually lurks down the road leading up to Castle Ravenloft.  Rumor has it that the unmanned carriage will safely take you to the castle to entertain the vampire lord Strahd Von Zarovich, though the locals are too scared to approach it.",
    gallery: [
      {
        number: 1,
        cap: "Black Carriage",
        img: "https://i.imgur.com/BgyFPCi.png"
      },
      {
        number: 2,
        cap: "Black Carriage",
        img: "https://i.imgur.com/yQXDM8d.png"
      }
    ]
  },
  {
    number: 7,
    name: "Castle Ravenloft",
    img: "https://i.imgur.com/1xI9Lua.png",
    imgCap: "Castle Ravenloft",
    leader: ["Strahd Von Zarovich"],
    characters: ["Castle Ravenloft"],
    quests: ["A Message for Cyrus Belview"],
    notes: ["Tome of Strahd"],
    localLinks: {
      "Castle Ravenloft": "/characters/castle-ravenloft"
    },
    quote: `At the center of the far west wall, between floor-to-ceiling mirrors, stands a massive organ. Its pipes blare out a thunderous melody that speaks in its tone of greatness and despair. Seated at the organ facing away from you, Strahd pounds the keys in raptured ecstasy. The music softens as he turns gently and smiles to acknoweldge you.`,
    main: `Castle Ravenloft is the largest structure in Barovia by an enourmous margin.  It is home to Strahd Von Zarovich and his most loyal companions.  There are tall towers and deep dungeons containing unfathomable mysteries and horrors. The Castle was built upon a large rock overlooking the Village of Barovia. For centuries there have been constant waves of attacks from revenants looking for revenge against the vampire lord while Strahd and his consorts dine in luxory inside the walls. Strahd's flying horse Bucephalus is stabled in one of the tall towers and can be seen like a torch darting through the dark skies.  `,
    gallery: [
      {
        number: 1,
        cap: "Strahd's organ",
        img: "https://i.imgur.com/4iLw0nC.png"
      },
      {
        number: 2,
        cap: "Ravenloft chapel",
        img: "https://i.imgur.com/evHCMah.png"
      },
      {
        number: 3,
        cap: "Ba'al Verzi dagger",
        img: "https://i.imgur.com/nngoYtw.png"
      },
      {
        number: 4,
        cap: "Strahd's study",
        img: "https://i.imgur.com/RztDbSi.png"
      },
      {
        number: 5,
        cap: "Strahd portrait",
        img: "https://i.imgur.com/udpvjxn.png"
      },
      {
        number: 6,
        cap: "Von Zarovich family crest",
        img: "https://i.imgur.com/6SASbnM.png"
      },
      {
        number: 7,
        cap: "Heart of Sorrow",
        img: "https://i.imgur.com/qIbqsK8.png"
      },
      {
        number: 8,
        cap: "Volenta", 
        img: "https://i.imgur.com/2tsTehi.png"
      },
      {
        number: 9,
        cap: "Bucephalus",
        img: "https://i.imgur.com/ncyiGNK.png"
      },
      {
        number: 10,
        cap: "Tome of Strahd",
        img: "https://i.imgur.com/zciYECT.png"
      },
      {
        number: 11,
        cap: "Brazier Room",
        img: "https://i.imgur.com/Bev2dep.png"
      },
      {
        number: 12,
        cap: "Ravenloft exterior map",
        img: "https://i.imgur.com/JyAeRyo.png"
      },
      {
        number: 13,
        cap: "Cyrus Belview",
        img: "https://i.imgur.com/3wcInwz.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Rats in Ravenloft",
        localLinks: {},
        content: "The first time the Sunseekers arrived in Castle Ravenloft it wasn't by choice. After being defeated in battle by the witch Morgantha and burning down her home, she used magic to transform the party into rats forced to deliver a letter to Strahd's butler, Cyrus Belview. Upon delivery the spell broke, but they never learned what the contents of that letter were. The layout of Castle Ravenloft is large and confusing leading to confusion as the Sunseekers struggled to make their way out.  They found an old man who had been locked away in the dungeons for years and continued looking for a way out. So close to the front doors, they wandered into a room where Strahd was playing the organ. She taunted them a bit before allowing them to leave, but not before killing the prisoner they had saved from the dungeons below."
      },
      {
        number: 2,
        name: "Umnos in Ravenloft",
        localLinks: {},
        content: "Umnos hadn't been in Barovia long before he found himself in Castle Ravenloft. After escaping the Vallaki prison, he partied up with Elizana, Freebird, and Ireena and followed them to the Castle to seek out a tarroka prophecy. In their time in the castle, Umnos began to understand the depths of Strahd's obsession with Ireena. They discovered notes and books that uncovered a lot of Strahd Von Zarovich's history in Barovia. They learned that he was in love with his brother's lover Tatyana and due to the reincarnation cycle of Barovia, has has been chasing Tatyana's soul across generations of women leading ultimately to Ireena today. This knowledge came at the cost of a great battle with one of Strahd's brides, Volenta. In the days Umnos and Elizana spent lost in the castle, they lost Ireena and the dog Lancelot, Freebird was killed, the Tome of Strahd was stolen, and their wagon was left behind when they were eventually captured by another bride Ludmilla and teleported across the country."
      },
      {
        number: 3, 
        name: "Dining Hall",
        localLinks: {},
        content: "The dining hall is a large and magnificient. It is located on the first floor near the grand entry.  Three enormous crystal chandeliers brilliantly illuminate this magnificient chamber. Pillars of stone stand against the dull white marble walls, supporting the ceiling. In the center of the room, a long, heavy table is covered with a fine white sating cloth.  The table is often laden with many delectable foods. At the center of the far west wall, between floor-to-ceiling mirrors, stands a massive organ."
      },
      {
        number: 4,
        name: "Hall of Faith",
        localLinks: {},
        content: "The Hall of Faith is a wide hall leading to the chapel on the first floor of the castle. This grand hall is choked with dust and stretches into darkness ahead. Webs hang from the arched ceiling like drapes, and life-sized statues of knights line the hallway on both sides, their eyes seeeming to watch you. It is rumored that spirits of these knights will occasionally bless and inspire those who walk this hall."
      },
      {
        number: 5,
        name: "Chapel",
        localLinks: {},
        content: "Dim, colored light filters through tall, broken, and boarded-up windows of stained glass, illuminating the ancient chapel.  A few bats flutter about near the top of the ninety-foot-high domed ceiling. A balcony runs the length of the west wall, fifty feet above the floor. Benches coated with centuries of dust lie about the floor in jumbled disarray. Beyond this debris, lit by a piercing shaft of light, an alter stands upon a stone platform."
      },
      {
        number: 6,
        name: "Heart of Sorrow",
        localLinks: {},
        content: "A mosiac floor adds a touch of color to the otherwise dark, cold, empty tower that rises above. A spiral staircase rises slowly into darkness, hugging the outer wall. High above, there is a large and mysterious heart glowing red gently illuminating the top half of the tower. In the center of the room, another set of stairs leads down. Volenta Popofsky, one of Strahd's brides, once patrolled this tower until she was slain by Umnos, Freebird, and Ez."
      },
      {
        number: 7,
        name: "Audience Hall",
        localLinks: {},
        content: "Dim light from the courtyard falls into the great hall through the broken glass and iron latticework of a large window in the west wall. Empty iron sconces dot the walls. At the far southern end of the hall, a large wooden throne stands atop a marble dais. The high-backed throne faces south, away from most of the room."
      },
      {
        number: 8,
        name: "Study",
        localLinks: {},
        content: "A blazing hearth fire fills this room with rolling waves of red and amber light. The walls are lined with ancient books and tomes, their leather covers well oiled and preserved through careful use. All is in order here. The stone floor is concealed by beneath a thick, luxurious rug. The rolling firelight illuminates the carefully rendered portrait. It is an exact likeness of Ireena Kolyana."
      },
      {
        number: 9,
        name: "Brazier Room",
        localLinks: {},
        content: "A stone brazier burns fiercely in the center of the room, but its tall white flame produces no heat. The rim of the brazier is carved with seven cup-shaped indentations spaced evenly around the circumference. Within each indentation is a spherical stone, twice the diameter of a human eyeball and made of a colored crystal. No two stones are the same color. Overhead, a wood-framed hourglass as hall and wide as a dwarf hangs ten feet above the brazier, suspended by iron chains. Two nine-foot-tall iron statues of knights on horseback, poised to charge with swords drawn, stand in deep alcoves facing each other. The brazier sits between them."
      }
    ]
  },
  {
    number: 8,
    name: "Old Mill",
    img: "https://i.imgur.com/OVBsusR.png",
    imgCap: "",
    imgCap: "Old Mill",
    leader: ["Morgantha"],
    characters: ["Morgantha", "Bella", "Ophelia"],
    quests: ["Dream Pastries", "Children of Vallaki"],
    // notes: ["..."],
    localLinks: {},
    quote: `The Old Svalich Road transitions here from being a winding path through the Balinok Mountains to a lazy trail that hugs the mountainside as it descends into a fog-filled valley. In the heart of the valley you see a walled town near the shores of a great mountain lake, its waters dark and still. A branch in the raod leads west to a promontory, atop which is perched a dilapidated stone windmill, its warped wooden vanes stripped here.`,
    main: "The Old Mill was once owned and operated by the Durst family from the Village of Barovia.  In the centuries since Strahd's victory over the dusk elves, the mill fell to ruin, eventually picking up the moniker Old Bonegrinder after a coven of witches used the mill to produce dream pastries made from the bone flour harvested from Barovian children.  Morgantha, the head of the coven, usually takes her cart of pastries around the valley to those who cannot resist the effects of the pastries. In desperate times, pastry addicts have willingly traded children for a quick dose.",
    gallery: [
      {
        number: 1,
        cap: "Old Mill",
        img: "https://i.imgur.com/OVBsusR.png"
      },
      {
        number: 2,
        cap: "Bella's Bakery",
        img: "https://i.imgur.com/Z3CS9zj.png"
      },
      {
        number: 3,
        cap: "Dream Pastries",
        img: "https://i.imgur.com/eLxD2MB.png"
      },
      {
        number: 4,
        cap: "Morgantha's Pastry Cart",
        img: "https://i.imgur.com/p7NId0c.png"
      },
      {
        number: 5,
        cap: "Mill Witches",
        img: "https://i.imgur.com/RXoVXmW.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Megaliths",
        localLinks: {},
        content: "The four ancient stones near the windmill were erected centuries ago by the valley's original inhabitants. Each moss-covered stone bears a crude carving of a city, each of which is associated with a different season.  The city of winter is shown with snow, the city of spring is arrayed with flowers, the city of summer has a sunburst overhead, and the city of autumn is covered with leaves. Several ravens circle overhead, and one peaks at something on top of the stone that depicts the city of autumn. The mysterious stones are said to boost magical ability."
      },
      {
        number: 2,
        name: "Dream pastries",
        localLinks: {},
        content: "Morgantha's coven has been making dream pastries for years. In order to make dream pastries, they kidnap children and make devious trades with locals in order to receive children in payment. They take the children and keep them in cages until they can be ground into bone powder. The powder has been said to produce euphoria and vivid dreams. Elizana and Safzira ate dream pastries without realizing what they were made of."
      },
      {
        number: 3,
        name: "Old Mill Burned Down",
        localLinks: {},
        content: "After the Sunseekers were tricked into bringing children from St. Andral's orphanage to the Old Mill, they came to the Mill demanding blood. They rescued all but one of the children, but they took their sweet time holding down Ophelia, a Mill witch, and grinding her face into the large Mill until there was nothing left of it. Morgantha arrived to the fight late and turned the Sunseekers into rats, but not before they had burned down the Old Mill entirely."
      }
    ]
  },
  {
    number: 9,
    name: "Vallaki",
    img: "https://i.imgur.com/coz37xw.png",
    imgCap: "Vallaki Town Square",
    leader: ["Baron Vallakovich"],
    characters: ["Keepers of the Feather", "St Andrals Church", "The Baron", "Wachterhaus", "Vallaki Merchants", "Vallaki Citizens"],
    quests: ["Bones of St Andral", "Strange Lights", "Coup of Vallaki", "Save Stella"],
    notes: ["Ireena Diary", "Safzira Diary"],
    localLinks: {
      "Keepers of the Feather": "/characters/keepers-of-the-feather",
      "St Andrals Church": "/characters/church-of-the-morninglord",
      "The Baron": "/characters/the-baron",
      "Wachterhaus": "/characters/wachterhaus",
      "Vallaki Merchants": "/characters/vallaki-merchants",
      "Vallaki Citizens": "/characters/vallaki-citizens"
    },
    quote: `The woods recede, revealing a sullen mountain burg surrounded by a wooden palisade. Thick fog presses up against this wall, as though looking for a way inside, hoping to catch the town aslumber.`,
    main: "Located close to the shores of Lake Zarovich, the town of Vallaki seems like a safe haven against the evils of the Svalich Woods, if not Strahd himself. The town lies beyond the sight of Castle Ravenloft and doesn't, at first blush, seem as depressed (or oppressed) as the village of Barovia farther east.  After some time, the Sunseekers see that Vallaki is mostly filled with false hope.",
    gallery: [
      {
        number: 1,
        cap: "Sunseekers enter Vallaki",
        img: "https://i.imgur.com/fgPPAfM.png"
      },
      {
        number: 2,
        cap: "Vallaki from a distance",
        img: "https://i.imgur.com/AWH6Imb.png"
      },
      {
        number: 3,
        cap: "Map of Vallaki",
        img: "https://i.imgur.com/LOLy8XV.png"
      },
      {
        number: 4,
        cap: "Map of Church of St. Andral",
        img: "https://i.imgur.com/Oia2nrv.jpg"
      },
      {
        number: 5,
        cap: "Rictavio's Wagon",
        img: "https://i.imgur.com/9hhPNLe.png"
      },
      {
        number: 6,
        cap: "Downtown Vallaki",
        img: "https://i.imgur.com/coz37xw.png"
      },
      {
        number: 7,
        cap: "Blue Water Inn interior",
        img: "https://i.imgur.com/t3qHoMg.png"
      },
      {
        number: 8,
        cap: "Wachterhaus exterior",
        img: "https://i.imgur.com/mfeP7a9.png"
      },
      {
        number: 9,
        cap: "Festival of the Blazing Sun flyer",
        img: "https://i.imgur.com/G2pd6iZ.jpg"
      },
      {
        number: 10,
        cap: "Blinsky's Toys",
        img: "https://i.imgur.com/mE6WbL7.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "The Feast of St. Andral",
        localLinks: {},
        content: "For years, the Baron nurtured his idea of 'All Will Be Well' in Vallaki. A couple of weeks after the Sunseekers arrived in town, Strahd's bride Anastrasya invaded the town with horde of undead warriors. St. Andral's Church was brutalized in the process. Many people died in the attack, including Anastrasya at Strahd's hand when she attempted to kill Ireena. "
      },
      {
        number: 2,
        name: "Weekly Festivals",
        localLinks: {},
        content: `For the last few years, the Baron has mandated attendance from the entire town at weekly uplifting festivals.  He believes that these festivals are instrumental in his on-going campaigns such as "Don't Say Strahd" and "Pray the Fear Away." Everyone in Vallaki, including visitors is required by law to assist with the festivals in some way and have a good attitude about it.  The Sunseekers were present at the Festival of the Blazing Sun, where a massive wooden ball was intended to be set ablaze like the sun until it started raining. The guard ~Lars Kjurls~ let out a laugh and was dragged in the street by the Baron on his horse and later imprisoned.`
      },
      {
        number: 2,
        name: "St. Andral's Church",
        localLinks: {},
        content: "This church is dedicated to the Morninglord and named after St. Andral, whose bones once rested under the altar. Father Lucien Petrovich used to oversee the church and did his best to raise spirits. These days, his grandson Franz has taken over for Lucien. The church runs an orphanage next door led by Claudia Belasco."
      },
      {
        number: 3,
        name: "Blue Water Inn",
        localLinks: {},
        content: "The Blue Water Inn is Vallaki's main gathering place for locals, especially at night. The innkeeper, Urwin Martikov, considers the inn a sanctuary from the evils of this land. His wife Danika runs the bar allowing her to keep an ear to the ground. The Sunseekers stayed here during their lengthy time in Vallaki."
      },
      {
        number: 4,
        name: "The Swift Finish",
        localLinks: {},
        content: "Madame Genie is a small lady elderly lady who runs the local brothel on the older, cheaper side of town. Genie's ladies have kept her business going strong.  Genie herself often hosts secret meetings for her patrons such as when Rictavio revealed himself to be Rudlph Van Ricten, famous monster hunter, to the Sunseekers."
      },
      {
        number: 5,
        name: "Burgomaster's Mansion",
        localLinks: {},
        content: "People come and go from the mansion at all hours during the day.  Guards bring criminals cited for 'malicious unhappiness.' Men and women arrive carrying bundles of supplies for weekly festivals and the Baronness hosts daily prayer circles with the poor. The Baron runs Vallaki from behind his desk with the help of his lieutenant Izek Strazni."
      },
      {
        number: 6,
        name: "Wachterhaus",
        localLinks: {},
        content: "Wachterhaus is the second largest building in Vallaki as the Wachters come from a long line of nobles from before the war. The house's governess, Fiona Wachter, has been conspiring against the Baron in recent years with the help of her loyal servant Ernst Larnak. Elizana arranged for the Sunseekers to help Fiona take on the Baron before they escaped Barovia after the Feast of St. Andral."
      },
      {
        number: 7,
        name: "Arasek Stockyards",
        localLinks: {},
        content: "The stockyard is a general store and facility where storage sheds can be rented. It is owned by a middle-aged couple, Gunther and Yelena Arasek. They sell goods for inflated prices. Rictavio and the Sunseekers keep their wagons in this area while they are in Vallaki."
      },
      {
        number: 8,
        name: "Coffin Maker's Shop",
        localLinks: {},
        content: "Henrik Van Der Root was a mediocre carpenter and a troubled, lonely man. Profiting from the deaths of others and because of the ghastly nature of his handiwork, no one desired his company while he was alive. Anastrasya kept her vampire spawns in his shop and manipulated Henrik into stealing the bones of St. Andral so that her forces could freely attack Vallaki and the church."
      },
      {
        number: 9,
        name: "Blinsky's Toys",
        localLinks: {},
        content: "Vallaki's macabre toy maker, Gadof Blinksy, calls himself a 'wizard of tiny wonders,' but he has been consumed by despair lately because no one seems to like him or want his toys. His fascination for eerie playthings causes most other locals to avoid him. The burgomaster enables Blinksy to stay in business by giving him a couple of gold pieces a month to make festival decorations."
      },
      {
        number: 10,
        name: "Town Square",
        localLinks: {},
        content: "Vallai's town square hosts the Baron's weekly festivals, the Vallaki market, and the Baron's display of pillories and stocks for those who upset him. This area is the most populated public space in all of Barovia."
      },
      {
        number: 11,
        name: "Vistani Camp",
        localLinks: {},
        content: "There is a large Vistani camp outside of Vallaki. Unfortunately for the Vistani, they are not allowed within the walls of the city, but trading is common enough between the two settlements."
      }
    ]
  },
  {
    number: 10,
    name: "Vallaki Vistani Camp",
    img: "https://i.imgur.com/BhKS1uC.png",
    imgCap: "Vallaki Vistani Camp",
    leader: ["Luvash"],
    characters: ["Luvash", "Arrigal", "Alexei", "Arabelle", "Kasimir", "Dusk Elves"],
    quests: ["Rescue Arabelle"],
    // notes: ["..."],
    localLinks: {},
    quote: `Atop the hill, above the fog, is a ring of barrel-topped wagons that surround a large tent with a column of smoke pouring out through a hole in the top. The tent is brightly lit from within. Even at this distance, you can smell the odors of wine and horses that emanate from this central area.`,
    main: "The Vallaki Vistani Camp was once a prison community for Dusk Elves after the war. The Vistani were responsible for keeping them in line in the early years after the war. Over generations the relationship between the Dusk Elves and Vistani evolved into that of friendly neighbors.",
    gallery: [
      {
        number: 1,
        cap: "Vallaki Vistani Camp",
        img: "https://i.imgur.com/BhKS1uC.png"
      },
      {
        number: 2,
        cap: "Map of Vallaki Vistani Camp",
        img: "https://i.imgur.com/HflDsfo.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Dusk Elves",
        localLinks: {},
        content: "The few Dusk Elves that survived Strahd's invasion of the valley became prisoners-of-war and allowed only by Strahd's grace to continue living in their traditional homes over the watchful eye of the Vistani.  Kasimir, the leader of the Dusk Elves, worked with the Vistani over generations until the two groups became friendly with each other."
      },
      {
        number: 2,
        name: "Rescue Arabelle",
        localLinks: {},
        content: "When the Sunseekers first arrived at the Vallaki Vistani Camp, they were tasked by Luvash with finding his daughter Arabelle. With Kasimir's help, they rescued her from her kidnapper Bluto over Lake Zarovich. As a token of their appreciation, the Vistani offered the Sunseekers precious metals and hospitality to the party."
      }
    ]
  },
  {
    number: 11,
    name: "Lake Zarovich",
    img: "https://i.imgur.com/g5gBgCy.png",
    imgCap: "Lake Zarovich",
    characters: ["Bluto", "Arabelle"],
    quests: ["Rescue Arabelle"],
    // notes: ["..."],
    localLinks: {},
    quote: "At the foot of the mountain, nestled in the misty forest, is a large lake. The water is perfectly still and dark, reflecting the black clouds overhead like amonstrous mirror.",
    main: "Lake Zarovich is the largest body of water in Barovia, located between Mount Baratok and Vallaki.",
    gallery: [
      {
        number: 1,
        cap: "Lake Zarovich",
        img: "https://i.imgur.com/g5gBgCy.png",
      },
      {
        number: 2,
        cap: "Bluto on the lake",
        img: "https://i.imgur.com/ksgH4ug.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Bluto",
        img: "",
        localLinks: {},
        content: "Bluto is Vallaki's town drunk. After a long stretch of bad luck casting his line in the Lake, he kidnapped the Vistani child Arabelle as an offering to the gods of fishing."
      },
    ]
  },
  {
    number: 12,
    name: "Mount Baratok",
    img: "https://i.imgur.com/YeJikRd.png",
    imgCap: "Mount Baratok",
    characters: ["Mad Mage"],
    quests: ["Mad Mage in the Mountains"],
    // notes: ["..."],
    localLinks: {},
    quote: `North of the mountain lake, the trees begin their steady climb up the slopes of Mount Baratok, its monolithic presence oppressive at this distance. The ground here is rocky, uneven, and tiring to navigate. Even the wolves avoid this neck of the woods.`,
    main: "Mount Baratok is the largest peak in Barovia. Due to its incredibly difficult terrain, there is very little life to be found in the area.",
    gallery: [
      {
        number: 1,
        cap: "Mount Baratok",
        img: "https://i.imgur.com/YeJikRd.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Mad Mage in the Mountains",
        localLinks: {},
        content: "About a year before the Sunseekers arrived in Barovia, a mysterious mage formed a small militia and fought Strahd in Ravenloft. It was believed by most that the mage was slain in battle, but there were rumors that he lost his mind in the mountains recovering from the fight. The Sunseekers found that the Mad Mage was actually the Baron's son Victor Vallakovich from the future who came back to beat Strahd in this point in time."
      }
    ]
  },
  {
    number: 13,
    name: "Argonvostholt",
    img: "https://i.imgur.com/a7MDVuA.png",
    imgCap: "Argonvostholt",
    leader: ["Sir Godfrey"],
    characters: ["Sir Godfrey", "Sir Erich", "Sir Damien", "Sir Robern", "Arthund"],
    quests: ["Unfinished Business"],
    // notes: ["..."],
    localLinks: {},
    quote: "Perched atop a ten-foot-wide, ten-foot-high cube of granite is a moss-covered statue of a dragon, its wings tucked close to its body. The statue looks east, toward the mansion.",
    main: "Argonvostholt was built by the Silver Dragon Argonvost for his Order of the Silver Dragon. He lead his knights in their plight to defend the world from the evils of the Amber Temple. During the war, Strahd killed Argonvost and his knights. The knights now assault Castle Ravenloft over and over as revenant knights doomed for all eternity.",
    gallery: [
      {
        number: 1,
        cap: "Argonvostholt",
        img: "https://i.imgur.com/a7MDVuA.png"
      },
      {
        number: 2,
        cap: "Argonvost statue",
        img: "https://i.imgur.com/udW0ilM.png"
      },
      {
        number: 3,
        cap: "Argonvost portrait",
        img: "https://i.imgur.com/gMBEsmH.png"
      },
      {
        number: 4,
        cap: "Argonvost",
        img: "https://i.imgur.com/Phx9MiB.png"
      }
    ],
    sections: [
      {
        number: 1,
        name: "Godfrey's Knights",
        localLinks: {},
        content: "When Argonvost was killed by Strahd, one of his knights Vladimir Horngaard was so consumed by vengeance that he turned all of the knights of the order into revenants.  However another knight Godfrey held on to some of his humanity and those closest to him suffer with him in Argonvostholt."
      }
    ]
  },
  {
    number: 14,
    name: "Village of Krezk",
    img: "https://i.imgur.com/KZksRvW.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: `The air grow colder as you approach the walled settlement. Two square towers with peaked roofs flank a stone archway into which is a set pair of twelve-foot tall, ironbound wooden doors. Carved into the arch above the dors is a name: Krezk.
    
    // The walls that extend from the gatehouse are twenty feet high. Atop the parapet you see four figures wearing fur hats and clutching spears. They watch you nervously.`,
    quote: "UNDISCOVERED",
    main: "",
    // gallery: [
    //   {
    //     cap: "",
    //     img: "https://i.imgur.com/UOUFifH.png"
    //   }
    // ]
  },
  {
    number: 15,
    name: "Mount Ghakis",
    img: "https://i.imgur.com/UOUFifH.png",
    imgCap: "Winding roads of Mount Ghakis",
    characters: ["Last Hunting Trip"],
    // quests: ["..."],
    // notes: ["..."],
    localLinks: {},
    quote: "Legend says Mount Baratok is home to the mysterious Amber Temple.",
    main: `   Mount Ghakis defines the Southern border of the valley of Barovia. It is mirrored by Mount Baratok in the North. Barovia's coldest and harshest temperatures can be found around Mount Ghakis. Traversing this region is difficult and dangerous. It was once patrolled by the Order of the Silver Dragon along the road leading up to Tsolenka Pass. It is believed that when Strahd and his forces extinguished the Order, he was able to march right into the Amber Temple and whatever he found there changed him forever, turning him into a vampire and separating Barovia from the material plane.`,
    gallery: [
      {
        number: 1,
        cap: "Mount Ghakis",
        img: "https://i.imgur.com/UOUFifH.png"
      },
      {
        number: 2,
        cap: "Mount Ghakis",
        img: "https://i.imgur.com/KLdtZYI.png"
      }
    ]
  },
  {
    number: 16,
    name: "Tsolenka Pass",
    img: "https://i.imgur.com/djjBndz.png",
    imgCap: "Gate of Tsolenka",
    leader: ["Ludmilla"],
    characters: ["Ludmilla", "Sir Erich"],
    // quests: ["..."],
    // notes: ["..."],
    localLinks: {},
    quote: `Ahead, through the wind and snow, you see a high wall of black stone lined with spikes and topped by statues of crouching stone gargoyles with snarling mouths. Set in the center of the wall is a closed iron portcullis, behind which burns a curtain of green flame.`,
    main: "Tsolenka Pass was constructed by Argonvost and his Order of the Silver Dragon as the final checkpoint on the road leading to the Amber Temple. Tsolenka is a small fortress meant for only a few soldiers to occupy at a time. Centuries after the Order dissipated, Ludmilla uses Tsolenka for her own needs.",
    gallery: [
      {
        number: 1,
        cap: "Tsolenka Pass",
        img: "https://i.imgur.com/G32pbKr.png"
      },
      {
        number: 2,
        cap: "Wolfie",
        img: "https://i.imgur.com/U80ipYz.png"
      }
    ],
    // sections: [
    //   {
    //     name: "Ludmilla's Lab",
    //     img: "",
    //     content: ""
    //   }
    // ]
  },
  {
    number: 17,
    name: "Ruins of Berez",
    img: "https://i.imgur.com/ucyJimG.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: `    Someone has built a ramshackle wooden hut on the stump of what was once an enormous tree. The rotting roots of the stump thrust up from the mire like the legs of a gigantic spider.
    
    // An open doorway is visible on one side of the hut, beneath which floats the upside-down, hollowed out skull of a dragon. Flanking the hut's doorway are two iron cages that dangle like hideous ornaments from the eaves. Scores of ravens are trapped in each one. They squawk and flutter their wings excitedly as you approach.`,
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 18,
    name: "Van Richten's Tower",
    img: "https://i.imgur.com/Bl3DflE.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: "The tower is old and decrepit, with collapsing scaffolds clinging to one side where a large gash has split the wall. Timeworn griffon statues, their wings and flanks covered with moss",
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 19,
    name: "Wizard of Wines",
    img: "https://i.imgur.com/GlOt2XL.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: `After a half mile, the road becomes a muddy trail that meanders through the woods, descending gradually until the trees part, revealing a mist-shrouded meadow. The trail splits. One branch heads west into the valley, and the other leads south into dark woods. A wooden signpost at the intersection points west and reads 'Vineyard.'`,
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 20,
    name: "Amber Temple",
    img: "https://i.imgur.com/BGevuw0.png",
    imgCap: "...",
    characters: ["Vilnius"],
    quests: ["Tarroka Reading"],
    notes: ["None"],
    localLinks: {},
    quote: "The road fades away under a covering of snow, but it takes you far enough to see the facade carved into the sheer mountainside ahead.",
    main: "The Amber Temple is carved into ~Mount Ghakis~.  It was once protected by the ~Order of the Silver Dragon~ at ~Tsolenka Pass~. The origins of the temple are unknown, but it is rumored that Strahd enountered an ancient evil that cursed him with vampirism and separated Barovia from the material plane.",
    gallery: [
      {
        number: 1,
        cap: "Amber Temple exterior",
        img: "https://i.imgur.com/FyaVFjS.png"
      },
      {
        number: 2,
        cap: "Amber Statues",
        img: "https://i.imgur.com/Jr2Mdip.png"
      },
      {
        number: 3,
        cap: "Vilnius",
        img: "https://i.imgur.com/zQMHF9Q.png"
      },
      {
        number: 4,
        cap: "Amber Golem",
        img: "https://i.imgur.com/koRNfiJ.png"
      }
    ],
  },
  {
    number: 21,
    name: "Yester Hill",
    img: "https://i.imgur.com/vulmMJ0.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: "In the circle of stones stands a twisted effigy of wood and vines, resembling Strahd Von Zarovich. Embedded where its heart would be is a spear of black iron, continuously dripping with blood, grasped by foul roots twisting up the statue. The echo of a furious battle cry seem to linger in the air - raging to break free.",
    quote: "UNDISCOVERED",
    main: ""
  },
  // {
  //   number: 23,
  //   name: "Werewolf Den",
  //   img: ""
  // }
]

export default locationsData;