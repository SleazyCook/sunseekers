import { Link } from 'react-router-dom'

// ImgURL is a placeholder for future features
// localLinks refers to special hyperlinks only for this entry

let logData = [
  {
    number: 1,
    title: "Death House",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Viktor Lazlo", "Lancelot"],
    quests: ["Death House"],
    locations: ["Village of Barovia"],
    gameDate: "8th Night of Hammer through 9th Morning of Hammer",
    realDate: "May 27th, 2022",
    numDate: "5/27/2022",
    test: <Link className="hyperlink" to="/">Hello</Link>,
    imgUrl: "https://i.imgur.com/ZzFQKI3.png",
    imgCap: "Durst Manor",
    localLinks: {},
    short: "The Sunseekers explore a haunted house",
    entry: `    A few days after joining Viktor Lazlo's traveling show, the characters slowly start to get to know one another. The Sunset wagon comes to a stop as the Sunseekers pile out to see two small children, Rose and Thorn, crying for help. The Sunseekers agree to help find their brother Walter inside.

    The house is not what it appears.  A lonely dog Lancelot is looking for his owner, Gertruda. They learn of the Durst family, once the charitable owners of the local Windmill, joined the ~Priests of Osybus~ after the mysterious Strahd arrived in their homeland. Gustav Durst cheated on his wife Elizabeth through an affair with the nursemaid Margaret, birthing baby Walter. Gustav eventually committed suicide in his bedroom leaving Margaret to be murdered by Elizabeth and her baby to sacrificed in a bogus cultish ritual. During this time, the children Rose and Thorn were locked in their room left to starve to death as Strahd turned to cultists to undead monsters. 
    
    While exploring the basement catacombs, the Sunseekers were able to give Rose, Thorn, and Margaret a proper burial by placing their bones in their long-empty coffins. On their way to the deepest depths of the catacombs, the Sunseekers discover a statue of a pale, cloaked figure holding a very real, very magical crystal ball. The owner of the Sunset wagon, Viktor Lazlo, seems to recognize the face of the statue and claims to have accidently activated the crystal ball  - creating the feeling that they are being watched intensely, almost perversely. They cover the crystal ball and go on.  Ghostly chants within the ritual chamber demand a sacrifice so Viktor Lazlo promptly picks up the dog Lancelot and proceeds to take him to the alter & pick up the rusty, bloody ritual knife with his other hand. He seems adamant that this is the only way out of the house alive. The barbarian German beheads Lazlo, saving the dog's life.  This action upsets the spirits within the chamber as they summon a large Flesh Mound with the remains of baby Walter serving as its beating heart. The party killed the best to save the child's remains. 
    
    Once outside, baby Walter's remains were buried in the stable next door bringing an end the curse. As the party set to return to the Sunset Wagon, they were greeted by a massive basket of fresh fruit, bread, cheese, and wine.  In it a card reads "Welcome to Barovia, signed ~Count Strahd Von Zarovich~." The basket is delicious but they can feel Strahd's gaze upon them.`
  },
  {
    number: 2,
    title: "Village of Barovia",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Lancelot", "Viktor Lazlo"],
    quests: ["Village Plague", "Missing Villagers", "Burgomasters Funeral", "Protect Ireena", "Replacement Priest", "Find Gertruda"],
    locations: ["Village of Barovia"],
    gameDate: "11th Night of Hammer through 12th Morning of Hammer",
    realDate: "June 12th, 2022",
    numDate: "6/12/2022",
    imgUrl: "https://i.imgur.com/VP9HxsY.png",
    imgCap: "Village of Barovia",
    localLinks: {
      "Burgomaster": "/characters/village-of-barovia",
      "mansion": "locations/village-of-barovia",
      "mean shop owner": "characters/village-of-barovia"
    },
    short: "The Sunseekers discover the grim Village of Barovia",
    entry: `    After escaping Durst Manor, the Sunseekers make their way into the Village of Barovia proper. The gloom of their last adventure looks ever-present in the village. The grey skies only make the boarded up homes covered in clawmarks all that much worse. While most of the village homes are dark, there is a light on in the local tavern.
    
    German and Safzira get a drink form a dull bartender before encountering the three propietors of the establishment - three Vistani women suggesting a visit to a nearby fortune teller.  A stranger offers to buy more drinks if they will sit with him while he talks about his problems. The man introduces himself as Ismark, the Burgomaster's son, and offers regular hospitality in the village if they can protect his sister Ireena and take her far away from this place.

    Ismark takes the party to the burgomaster's mansion to meet his sister, but she refuses to leave town until their father, who has died two days earlier, can have a proper burial. It turns out that the situation has worsened in Barovia, the remainig villagers have been too scared to leave their homes for such things. The sunseekers march the casket to the church, where the priest Donavich is happy to honor the memory of the burgomaster.

    Elizana and Freebird go to the local shop, but the shopkeeper Bildrath is too greedy for his own good. He does, however, give them a tip obout the local plague and suggests a visit to Cobb House. At Cobb House, they discover Mrs. Cobb mourning the death of her husband, but before they can learn anything beyond where they get their water, Mr. Cobb reanimates in front of them, killing his wife and chasing them into the street. Freebird throws fire bolts while Elizana shoots her arrows to put him back down again. In a gesture of trust and friendship, Freebird offers Elizana one of his feathers.

    Given the chance to grieve, Ismark becomes the new burgomaster and takes on the village plague with the Sunseekers. Despite his pleading, Ireena join them as they investigate the local well where they find several zombies decomposing in the water. Ireena leaps in to clear them out with the Sunseekers support.  Afterwards fighting alongside each other Ireena agrees to stay with the Sunseekers, but first they will rest up at the burgomaster's mansion.

    The next day Elizana discovers the a dog called Lancelot scratching at a door of one of the village homes. Inside a woman known to the locals as Mad Mary says the dog used to belong to her missing daughter Gertruda, but its been so long since she has seen her. She claims to have seen a figure at night dragging bodies to the north side of town.

    Investigating the north side of town, the Sunseeekers find themselves talking once again to the priest Donavich, only now they can hear screams coming from below the floorboards. Donavich begs the Sunseekers not to hurt his son, Doru, who has become a vampire that requires human blood and is kept away under the church. Doru is slain by the Sunseekers and Donavich is locked away in the undercroft in his sons place. 

    Before the Sunseekers leave the village, Ismark says he has heard rumors of a young priest in the next town over who may be able to fill Donavich's position. He tells them he could use all the support he can get as they ride off in search of the Vistani fortune teller. 
    `
  },
  {
    number: 3,
    title: "Tarroka Reading",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Lancelot"],
    quests: ["Madame Evas Tarroka Reading"],
    locations: ["Tser Pool Encampment"],
    gameDate: "14th Afternoon of Hammer",
    realDate: "June 13th, 2022",
    numDate: "6/13/22",
    imgUrl: "https://i.imgur.com/XSJtpVP.png",
    imgCap: "Madame Eva reads the Tarroka",
    localLinks: {},
    short: "Madame Eva reads the Tarroka Cards",
    entry: `    Traveling the Old Svalich Road from the Village of Barovia, the Sunseekers encounter a strange man petting a horse. He seems friendly enough as he starts talking to the group:
    
    "I wanted to welcome you to my kingdom. I chose the name Barovia to honor my father, the great King Barov. Did you know that? Of course not. Well, I conquered this valley in his name. Believe me, it wasn't much to look at before I spruced up the place.

    "I wanted to be the first to make amends on behalf of the Vistani. I'm aware of the... misunderstanding between the dearly departed Mr. Lazlo and your...sizable associate. These free spirited people, while they are my most loyal subjects, are anything but foot soldiers. They have a silly saying "Even the Best Men Die.'' They hold no ill will toward any of you, and they will be happy to host your party for the duration of your stay in Barovia.

    "Though, Ireena, my dear, you simply must understand that You deserve to be my Queen. In fact, I must insist on this.

    "I know you all are absolutely titillated by my surprise visit and believe me I. am. too., but I really must be going. When you are ready to return the favor, there is a black carriage up the road. It will take you to my home without any.. outside interference."
    
    A dark mist surronds the Sunseekers and when it dissipates they find themselves further up the road at the Tser Pool Encampment.  They seek out Madame Eva who reads the tarroka cards for them. 

    Madame Eva draws five cards and reads five different prophecies from them. She promises that fulfilling them will give the Sunseekers what they need to defeat Strahd - an ally, a deeper understanding of their enemy, a weapon, holy protection, and an arena to fight in. After the card reading, the local Vistani host drinking, dancing, and a long rest.
    `
  },
  {
    number: 4,
    title: "Dream Pastries",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Lancelot"],
    quests: ["Dream Pastries", "Children of Vallaki", "All Will Be Well"],
    locations: ["Old Mill", "Vallaki"],
    gameDate: "18th Morning of Hammer through 19th Evening of Hammer",
    realDate: "June 20th, 2022",
    numDate: "6/20/22",
    imgUrl: "https://i.imgur.com/Z3CS9zj.png",
    imgCap: "Bella's Bakery at the Old Mill",
    localLinks: {
      orientation: "/quests/all-will-be-well",
      forest: "/locations/3",
      "old mill": "/locations/8"
    },
    short: "",
    entry: `    Shortly after fighting off large dire wolves and an attack of zombies on the ~Old Svalich Road~, the forest around them begins to clear.  In fact, all plant animal life seem to disappear completely around them as the road around them is surrounded by dead plants and boulders with small wooden effigies scattered about.  In the distance, the Sunseekers see an ~old mill~ that appears to be the mill referenced repeatedly in ~Durst Manor~. 
    
    As they approach the old Mill, there are wagon tracks and footprints leading to and from the door. There is an eerie quiet. With hesitation, they knock on the door and are surprised to see the young and beautiful woman Bella who seems to have turned the first floor of the mill into a lovely bakery. Bella, happy to have guests invites the group in and offers them her special Dream Pastries.  She asks them to hang around for a while and set up camp outside the Mill, which they are happy to accept.  Around a campfire, Elizana, Freebird, Ireena, and Safzira enjoy Dream Pastries which bring warm visions of their pasts and desires. After a long night of hallucinating together, they peacefully fall asleep in camp.
    
    The next morning Bella opens up about how she was taken in by the current owner of the mill, Morgantha.  She talks about how she was once an orphan at the terrible ~St Andrals Orphanage~ in Vallaki.  She begs the Sunseekers to rescue any poor children from that evil place so that they can join Bella and her adoptive mother Morgantha at the mill and live a happier life. The party is happy to accept this quest as they continue on towards Vallaki.
    
    At the tall wooden gates of Vallaki, the party is greeted by guards who escort them to the Burgomaster's mansion late at night for orientation.  The mansion is filled with people coming and going, many townsfolk are delivering bundles of wood and leaving them in the halls for some upcoming festival.  When they meet the Baron, they are encouraged to stay in town as long as they abide by the Baron's rules. They are offered free room and board for the first night at the Blue Water Inn.`
  },
  {
    number: 5,
    title: "Welcome to Vallaki",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird"],
    quests: ["'All Will Be Well!", "Tarroka Reading: The Artificat"],
    locations: ["Vallaki"],
    gameDate: "20th Day of Hammer",
    realDate: "June 26th, 2022",
    numDate: "6/26/2022",
    imgUrl: "https://i.imgur.com/fgPPAfM.png",
    imgCap: "Sunseekers arrive at Vallaki",
    localLinks: {
      innkeepers: "/characters/keepers-of-the-feather"
    },
    short: "",
    entry: `    Waking up at the Blue Water Inn is a pleasant surprise.  The innkeepers offer a full breakfast for their guests and the people in Vallaki seem happy and unintered, or unaware, of the horrors outside of town. The town square is busy with foot traffic and full of different shops and vendors. The Sunseekers find themselves on a bit of a shopping spree as they enjoy the rich life in Vallaki. Elizana, German, and Safzira, fresh off their shopping trip, begin to think more seriously about Madame Eva's tarroka prophecy: 
    
    "Look for an entertaining man with a monkey. This man is more than he seems."
    
    Vallaki seems to be just the place to find such as person, so they head to the local toy shop and lucky enough immediately find the toymaker with a monkey on his shoulder.  However despite his slogan "Is no fun, is no Blinsky!", this toymaker is not that entertaining. His creations are quite macabre - a model of a guillotine, zombie dolls, eyeball marbles, and many variations of skulls and corpses.  Blinsky himself is pretty timid and nervous that the group has come to collect on a demanding order of dolls that bear a shocking resemblance to Ireena.  Blinsky relents that the monkey was a gift from a traveling bard who is staying at the Blue Water Inn.
    
    Before investigating the Inn, the Sunseekers take a bit of time for themselves on the shady side of town at the brothel the Swift Finish, where they have their desires and fantasies fulfilled before spending some time with the proprietor Madame Genie.  Genie is happy to take in travelers from faraway lands as she is old enough to remember when Vallaki was more involved in matters in Barovia. She knows that they will eventually have to fight Strahd or some other dark horror and she is happy to provide a happy and safe place for them while they are in town. Back at the Inn, they encounter Rictavio the half-elf bard, who is interested in talking with them. They arrange to meet at the Swift Finish the following day.`
  },
  {
    number: 6,
    title: "Festival of the Blz Sun",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird"],
    quests: ["All Will Be Well", "Tarroka Reading: The Artifact", "Festival of the Blazing Sun", "Children of Vallaki"],
    locations: ["Vallaki"],
    gameDate: "21st Day of Hammer through 23rd Day of Hammer",
    realDate: "July 3rd, 2022",
    numDate: "7/3/2022",
    imgUrl: "https://i.imgur.com/G2pd6iZ.jpg",
    imgCap: "Festival of the Blazing Sun flyer",
    localLinks: {},
    short: "",
    entry: `    After arranging the meeting the night before, the Sunseekers meet Rictavio at the Swift Finish in secret.  Rictavio reveals his true identity as Rudolph Van Richten, famous monster hunter, here in Barovia on business.  His intentions are to study the vampire lord as closely as he can until he is ready for the kill.  He trusts the party just enough to exchange information.  He offers them their first map of the valley as well as insights on their tarroka reading.  He believes that the Amber Temple and Castle Ravenloft may contain more information on the cards.  In the meantime, he offers to be the party's personal private detective.
    
    The next morning, the Sunseekers are tasked by the guards of Vallaki to hand out fliers for the festival later that day - The Festival of the Blazing Sun.   They make their way towards St. Andral's Church up on both Ismark's request for a new priest as well as a tarroka prophecy:
    
    "The treasure you seek is hidden behind the sun, in the house of a saint"
    
    They disappointed to find no hidden treasure, but they do meet the priest and his grandson, Franz, who is close to becoming a priest to the Morninglord as well and happy to transition to the ~Village of Barovia~ where he is needed most.  
    
    Next door at the orphanage, the Sunseekers meet a variety of twisted children and the overworked headmistress Claudia Belasco who has little time or interest in answering questions. The orphanage does seem to match the description that Bella gave them a few days ago at the ~Old Mill~ so they consider their options in freeing the children. However, the Festival is starting soon and attendance is mandatory.
    
    Under threatening skies, a parade of unhappy children dressed as flowers trudges through the muddy streets, leading the way for a group of sorry-looking men and women carrying a ten-foot-diameter wicker ball. The burgomaster and his smiling wife, who holds a sad bouquet of wilting flowers, follow the procession on horseback. As weary spectators watch from their stoops, the ball is borne to the town square. There, it is hoisted and hung from a fifteen-foot-high wooden scaffold, and townsfolk take turns splashing it with oil. Before the wicker sun can be set ablaze, the sky tears open in a sudden downpour. "All Will Be Well!" cries the burgomaster as he brandishes a sputtering torch and marches defiantly through the rain toward the wicker ball, only to have his torch go out as he thrusts it into the sphere.
    
    A singular laugh erupts from the crowd, drawing the burgomaster's fiery gaze as well as gasps from the townsfolk. The laugh came from a Vallaki guard, ~Lars Kjurls~ who is immediately hogtied and dragged through the streets of Vallaki by the burgomaster's horse. Elizana can't contain her frustration as she calls out at the burgomaster from behind a group of children. The children are blamed for the outburst and locked up in the pillories and stocks.  German challenges Izek, the head guard to a duel to distract the guards and townsfolk while the rest of the Sunseekers work on freeing the children.  The children are released without incident and Freebird uses featherfall to guide Safzira and the children over the walls of Vallaki to be taken immediately to the ~Old Mill~.  German is defeated in the duel and taken as a prisoner to the burgomaster's mansion.  Elizana quietly follows behind them to work on a plan to free the barbarian.
    
    Safzira and Freebird return the following morning to the Blue Water Inn looking for Elizana and German. As Danika helps get them up to speed, Ireena and a handsome stranger enter the Inn.  The man is Vallaki's revered town accountant Vasili Von Holtz.  He and Ireena met before the Festival and are now courting. Elizana arrives and tells the group to hurry with her back to the burgomaster's mansion to release German.  Elizana attempts to discuss the release of the barbarian with the Baron himself, but he is quite dismissive.  So the rogues take matters into their own hands and sneak into the mansion to release him themselves.  
    
    The Sunseekers head back to the orphanage to check on the remaining orphans where Elizana shows a wooden effigy from the fields surrounding the ~Old Mill~. Claudia's eyes light up in terror as she warns Elizana to never approach "Old Bonegrinder," the mill where witches turn children into Dream Pastries.`
  },
  {
    number: 7,
    title: "Showdown at the Mill",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird"],
    quests: ["Children of Vallaki", "A Message for Cyrus Belview"],
    locations: ["Old Mill"],
    gameDate: "July 10th, 2022",
    realDate: "July 10th, 2022",
    numDate: "7/10/2022",
    imgUrl: "https://i.imgur.com/RXoVXmW.png",
    imgCap: "Witch of the Old Mill",
    localLinks: {},
    short: "",
    entry: `    The Witches of Old Bonegrinder have tricked the Sunseekers into kidnapping orphans from Vallaki and delivering them to the mill to be crushed up into bone powder for Dream Pastries.  They waste no time getting back to the mill with their full party to rescue the children and put an end to the production of Dream Pastries.  Elizana makes her way up the exterior of the Mill and finds the children in cages, although one child has already been killed and is currently being harvested for ingredients.  Elizana gets the children down to the wagon easily to head back to St. Andral's Orphanage in Vallaki. 
    
    Now the Sunseekers are ready for revenge. Safzira casts dissonant whispers on Bella who is thrust out of the Mill so they can take their time with her witch sister Ophelia. German and Elizana hold the witch firmly as they put her face into the mill's large grinder that has been used to harvest bone powder from children over the years. Ophelia's face slowly tears apart until there is nothing left above her shoulders. 
    
    As Ophelia's lifeless body drops to the floor, Morgantha, the leader of the Old Bonegrinder coven takes Bella out into the ~Svalich Woods~ to get away from the fight. Freebird sets the mill ablaze as he takes the children back to Vallaki on the Sunset wagon, while the rest of the Sunseekers follow the witches into the woods.  Safzira sends her owl familiar into the woods to follow the witches until they can catch up.  The Sunseekers may have been able to take out one witch at a time at the mill, but they are no match for Morgantha and Bella together.  As they are brought down in battle, Morgantha turns them into rats and magically compels them to take a letter to Cyrus Belview at Castle Ravenloft.  Unable to resist their magical orders, the rats scurry towards Strahd's castle.`,
  },
  {
    number: 8, 
    title: "Rats in Ravenloft",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Prisoner"],
    quests: ["A Message for Cyrus Belview"],
    locations: ["Castle Ravenloft"],
    gameDate: "26th Day of Hammer",
    realDate: "July 31st, 2022",
    numDate: "7/31/2022",
    imgUrl: "https://i.imgur.com/4iLw0nC.png",
    imgCap: "Strahd at the Ravenloft organ",
    localLinks: {},
    short: "",
    entry: `    ~Cyrus Belview~ leans over to take the letter delviered by the rats in front of him on some dark level of ~Castle Ravenloft~.  As he finishes reading the letter, he places it in his pocket and walks away. The rats transform back into Elizana, German, and Safzira.  This sort of thing seems to be common enough in these halls because Cryus definitely noticed the change, but offered no reaction.
    
    Unaware of the way out, the Sunseekers begin to open doors around them at random.  They discover a hall of bones, an empty wine storage room, and a kitchen. Elizana gets a little too close to a large cooking pot in the kitchen which turns out to be mimic. She runs out of the room and closes the door behind her.  Uninterested in dealing with this monster, the party continues on away from the kitchen until they reach a dark flooded dungeon where they find an old man chained to a wall. They rescue him, but get very little out of him. It seems he doesn't even remember his own name. 
    
    Eventually they find an upwards spiral staircase until they hear loud organ music coming from a nearby room. They encounter Strahd playing the organ in a dining hall who asks them to stay a while. Elizana demands to know where the exit is and he doesn't hesitate to give them directions, but he does behead the old prisoner before they have a chance to leave. 
    
    On the way out, German finds a set of red plate armor and places it in his bag of holding. Before leaving completely, they decide to look around for some more loot. Walking through the Hall of Faith, they feel the spirits in this room bless them with inspiration. Through the hall, they reach the chapel and find an old rusty black mace. Upon picking up the mace, the Sunseekers are possessed by an evil spirit and take turns fighting each other until the mace is destroyed. Suspecting that further exploration might be too dangerous. They head back to Vallaki on foot.`
  },
  {
    number: 9,
    title: "Return to Vallaki",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["None"],
    quests: ["All Will Be Well"],
    locations: ["Vallaki"],
    gameDate: "27th Day of Hammer",
    realDate: "August 7th, 2022",
    numDate: "8/7/2022",
    imgUrl: "https://i.imgur.com/9hhPNLe.png",
    imgCap: "Rictavio's Wagon",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 10,
    title: "Vallaki Vistani Camp",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Kasimir", "Van Richten", "Vasili"],
    quests: ["All Will Be Well", "Coup of Vallaki", "Rescue Arabelle", "Bones of St. Andral"],
    locations: ["Vallaki", "Vallaki Vistani Camp"],
    gameDate: "28th and 29th Day of Hammer",
    realDate: "August 21st, 2022",
    numDate: "8/21/2022",
    imgUrl: "https://i.imgur.com/BhKS1uC.png",
    imgCap: "Vallaki Vistani Camp",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 11,
    title: "Bones of St. Andral",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Ireena", "Kasimir", "Rictavio", "Vasili"],
    quests: ["All Will Be Well", "Bones of St. Andral", "Strange Lights", "Mad Mage in the Mountains"],
    locations: ["Vallaki", "Vallaki Vistani Camp", "Mount Baratok"],
    gameDate: "30th Day of Hammer",
    realDate: "August 28th, 2022",
    numDate: "8/28/2022",
    imgUrl: "https://i.imgur.com/pb4SaMI.png",
    imgCap: "Missing Bones of St. Andral",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 12,
    title: "Feast of St.Andral",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Vasili"],
    quests: ["Mad Mage in the Mountains", "Bones of St. Andral"],
    locations: ["Vallaki"],
    gameDate: "2nd Day of Alturiak",
    realDate: "September 4th, 2022",
    numDate: "9/4/2022",
    imgUrl: "https://i.imgur.com/MPP8A9i.png",
    imgCap: "Vampire Horde",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 13,
    title: "After the Feast",
    players: ["Elizana", "German", "Safzira", "Umnos"],
    npcs: ["Freebird", "Ireena", "Lancelot"],
    quests: ["Protect Ireena"],
    locations: ["Vallaki"],
    gameDate: "4th Day of Alturiak",
    realDate: "September 11th, 2022",
    numDate: "9/11/2022",
    imgUrl: "https://i.imgur.com/KeeYsZy.jpg",
    imgCap: "Umnos Runbalo",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 14,
    title: "Umnos in Ravenloft",
    players: ["Elizana", "Safzira", "Umnos", "Zoro"],
    npcs: ["Freebird", "Ireena", "Kasimir", "Victor"],
    quests: ["Protect Ireena"],
    locations: ["Castle Ravenloft"],
    gameDate: "7th Day of Alturiak",
    realDate: "September 26th, 2022",
    numDate: "9/26/2022",
    imgUrl: "https://i.imgur.com/RztDbSi.png",
    imgCap: "Strahd's Study",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 15,
    title: "Order of the Dragon",
    players: ["Elizana", "Safzira", "Umnos", "Zoro"],
    npcs: ["Kasimir", "Victor", "Freebird", "Ireena"],
    quests: ["Protect Ireena"],
    locations: ["Argonvostholt"],
    gameDate: "8th Day of Alturiak",
    realDate: "October 10th, 2022",
    numDate: "10/10/2022",
    imgUrl: "https://i.imgur.com/I3Gc3uT.png",
    imgCap: "Sir Godfrey Gilwyn",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 16,
    title: "Heart of Sorrow",
    players: ["Elizana", "Umnos"],
    npcs: ["Freebird", "Ireena"],
    quests: ["Tarroka Reading: The Transmuter"],
    locations: ["Castle Ravenloft"],
    gameDate: "9th Day of Alturiak",
    realDate: "October 25th, 2022",
    numDate: "10/25/2022",
    imgUrl: "https://i.imgur.com/qIbqsK8.png",
    imgCap: "Heart of Sorrow Tower Interior",
    localLinks: {},
    short: "",
    entry: `    Elizana, Freebird, and Umnos stand on the roof of Castle Ravenloft. Across a short bridge is an opening to the second tallest tower. There is an ominous red and yellow glow eminating from the doorway and they can feel a heavy heartbeat that doesn't belong to any of them. It is as if the tower itself is alive.  Elizana remembers the Tarroka reading in Madame Eva's tent:
    
    "Go to a place of dizzying heights, where the stone itself is alive!"

    They cautiously approach the tower entrance and find that the tower is almost completely hollowed out except for a spiral staircase that hugs the walls tightly.  The tower interios is bathed in the flickering glow of a thousand candles. set into irregularly spaced alcoves along the spiral staircase that hugs the outer wall, each candle stands above a brass name plate - some faded with the centuries and others gleaming as if installed yesterday. The name plates appear to bear the names and descriptions of foreign adventurers who died in Barovia.
    
    As the Sunseekers set foot onto the stairs, the entire tower plunges into darkness as the candles in the wall each go out at once. Their adjust moments later; the only light left in the tower is the dull red glow of large, myserious heart magically suspended in the center of the room, and a faint flicker right next to you. As Umnos turns to read the name plate, he sees the description "Umnos Runbalo - Cleric". The candle burns, but its flame is feeble, and seems ready to flicker out at any moment.
    
    Almost a second too late, Umnos sees a dark shape lash out at him quickly. Just as quickly as it appeared, the shape disappears off the ledge the party is standing on.  The shape continues to dart through the darkness leaving traps in its wake and spider-climbing its way under the sone stairway. Eventually it gets close enough for the party to see the shape is actually a masked woman. She willingly admits that she is Volenta Popofsky, bride of Strahd and keeper of the Heart of Sorrow.
    
    They take turns dealing blows back and forth until Umnos is knocked off the stairway from the third floor. Freebird casts featherfall on Umnos and himself as they continue the fight at the base of the tower while Elizana continues up the staircase towards a locked room. Elizana picks the lock as Freebird is knocked unconscious and Umnos is not far behind him. Elizana proceeds to a desk with a loose drawer, pulling it open she finds a heavy leatherbound book with a dark raven crest on its cover. 
    
    Downstairs Umnos is beyond bloodied, but he is willingly to fight until his dying death. The door swings open and a Vistani woman with a prosthetic leg and dual-wielding scimitars immediately locks weapons against the vampire bride, shouting "Cleric, we're on the same side!" Umnos uses the chance to pull Freebird back up and the three of them throw everything they have at Volenta.  The vampire finally goes down as the three adventurers look at each other with relief and then above to the room Elizana slipped into.`
  },
  {
    number: 17,
    title: "Ez and the Tome",
    players: ["Elizana", "Safzira", "Umnos", "Zoro"],
    npcs: ["Freebird", "Ezmerelda d'Avenir", "Kasimir", "Victor", "Sir Erich"],
    quests: ["Last Hunting Trip"],
    locations: ["Castle Ravenloft"],
    gameDate: "10th Day of Alturiak",
    realDate: "November 7th, 2022",
    numDate: "11/7/2022",
    imgUrl: "https://i.imgur.com/zciYECT.png",
    imgCap: "Tome of Strahd",
    localLinks: {},
    short: "Ez and the Sunseekers fight over the Tome of Strahd",
    entry: `    On one side of Barovia, Safzira and Zoro have agreed to travel with Sir Erich of the Order of the Silver Dragon at Sir Godfrey's request. Their journey towards the Amber Temple is only briefly interrupted when they encounter a wild druid on all fours who seems to be controlling several twig blights. As Safzira's attempt to reason with the druid fall on deaf ears, they find themselves engaged in combat. 
    
    On the other side of Barovia, within Castle Ravenloft's Heart of Sorrow, Elizana, Freebird, Umnos, and the mysterious Ez are now in possession of the Tome of Strahd, a detailed history of Strahd's time in Barovia written by the vampie lord himself.  The problem is that they appear to be in some sort of stable riddled with scorchmarks and in the distance, through a pair of open double doors, they see a flaming horse riding straight towards them. They run back to room that was once occupied by the witches and they proceed to rest up and tend to their wounds from their fight with Volenta.
    
    When they wake, Ez tells the party about how she has spent most of her time in Barovia researching her enemy in a tower just west of Vallaki.  The tower is filled with resources - books, notes, and tools, to take on Strahd.  She offers them refuge at the tower, but warns them that the structure is very dangerous. She will leave instructions for entry under a distinctive cairn on the road leading to it.  In return she asks to make a copy of the Tome so she can continue her work on her own for the time being. Elizana refuses to waste time on a copy, so out of desperation Ez snatches the Tome and uses invisibility to disappear.
    
    Now that the party is missing not just the Tome but also Ireena and Lancelot, they decide to focus on searching the castle for their friends. Moving from one room to the next, they eventually encounter Escher, Strahd's only male consort at the moment. Unlike Anastrasya and Volenta, Escher seems uninterested in the Sunseekers entirely. He tells them that he was once an adventurer from a far away place just like them and he watched all of his friends die. He has seen countless adventuring parties come to this place only to meet horrible fates over the years. He advises them to make themselves useful to Strahd when he eventually grows bored of them.
    
    Continuing through the Castle, Elizana and Umnos find two highbacked chairs overlooking the chapel from the second floor balcony.  There are vague figures occupying each one. They draw their weapons to slowly move in to see the figures up close.`
  },
  {
    number: 18,
    title: "Cold Deep South",
    players: ["Safzira", "Zoro"],
    npcs: ["Kasimir", "Viktor", "Sir Erich"],
    quests: ["Last Hunting Trip"],
    locations: ["Mount Ghakis"],
    gameDate: "8th Day of Alturiak",
    realDate: "November 18th, 2022",
    numDate: "11/18/22",
    imgUrl: "https://i.imgur.com/y2eHL8S.png",
    imgCap: "Cold Depths of Mount Ghakis",
    localLinks: {},
    short: "Safzira and Kasimir continue their journey to the Amber Temple in the bitter cold",
    entry: `  Safzira and Kasimir continue their journey south towards the Amber Temple. Barovia is brutally cold the closer you get to Mount Ghakis. The bitter winds begin to beat down on them. Sir Erich, who hasn't felt much of anything in a very long time, begins to tell his tale about his last hunting trip. "Maybe a story might give them something else to think about at a time like this" he mutters under his breath before slowing his walk to match their pace.
    
    "The Order was the top priority of the Knights, but it wasn't the only one. We made sure to have a little fun. Argonvost himself had starting a hunting party during our downtime before the war.  Giant goats used to roam wild over the Mount Ghakis region, but they were troublesome and dangerous.  
    
    "It all started when a couple of giant goats made their way into the church of Berez.  Within minutes the place was completely torn up.  The Burgomaster pleaded with Argonvost to do something, but the Order was never intended to defend individual settlements from wildlife.  Nevertheless, our silver leader did see an opportunity to bring the Knights together to hunt for sport. Before long there were fewer and fewer giant goats and we had developed a hunger for the hunt.  
    
    "When Strahd invaded Barovia to go to war with the Dusk Elves, strange people and creatures followed behind him. One of these creautres was a roc, a gargantuan monstrousity that terrorized the valley. The Knights would dream of hunting this beast, but Strahd's war eventually found its way onto our doorstep. Argonvost, in his silver dragon form fought bravely, but was struck down by Strahd himself. Vladimir swore his eternal revenge turning every Knight of the Order into a bloodlust-infested revenant. 
    
    "I love this valley and I lived to serve Argonvost and the Order, but I have lived far longer than is natural for a man like myself and I'm ready to rest. If Sir Godfrey is correct about connecting with what we loved in our motal lives, I may find peace."
    
    As the party marches closer together, the cold becomes less and less bitter. They can see in the distance scarecrows and plant monsters marching west through the snow. No doubt another horror for another day.
    `
  },
  {
    number: 19,
    title: "The Brazier Room",
    players: ["Elizana", "Umnos"],
    npcs: ["Freebird"],
    quests: ["None"],
    locations: ["Castle Ravenloft"],
    gameDate: "10th Day of Alturiak",
    realDate: "March 25th, 2023",
    numDate: "3/25/2023",
    imgUrl: "https://i.imgur.com/Bev2dep.png",
    imgCap: "The Brazier Room",
    localLinks: {
      "dusk elf": "/characters/castle-ravenloft"
    },
    short: "Elizana, Freebird, and Umnos try to escape from Castle Ravenloft",
    entry: `  Elizana, Freebird, and Umnos find themselves on the balcony of ~Castle Ravenloft~'s chapel.  They can see that two obscured figures are sitting in throne chairs overlooking the chapel floor.  They cautiously peer around the high backed chairs to see zombies dressed up to resemble the recently deceased brides of Strahd, Anastrasya and Volenta. Before the sunseekers can draw their weapons, a cold hand gently lands on their shoulders.  
    
    "An attempt to honor the dead, it's like they're still here with us - it's as if you haven't taken their lives." For the first time, Strahd and Umnos stand face-to-face. "I'll make you sunseekers a deal: Kill one of your little party members in front of me and I won't have to. It's only fair, you've taken two of my wives and I'm only asking for one of you in return." Umnos orders the party to run out of the Castle as fast as they can.
    
    Elizana makes it to the Great Entry before being blocked by gargoyles and wyverns.  An armored ~dusk elf~ with brown skin and long black hair descends the wide staircase, quiet as a cat. He wears a gray clock over black studded armor and has a polished scimitar hanging from his belt. "My master has not allowed you to leave," he says. Umnos is charmed by the vampire Strahd freezing him in place long enough for him to chase Freedbird into the Grand Entry to kill Freebird in front of both Umnos and Elizana. "Now that wasn't so bad, was it?" he says, cleaning the blood off of his hands. "Who's next?" he asks before a loud door slams open down a hall.
    
    A soft, but stern voice is heard saying "My love, I need these two at Tsolenka. Surely you can find something else to play with." Elizana looks to see an unfamiliar woman with her hands on her hips. Strahd looks at the dead bird on the ground and the horrified faces of the remaining sunseekers. "I suppose I've had my fun for now. They're all yours, Ludmilla."
    
    When Elizana and Umnos first arrived in Castle Ravenloft together, they were five strong. Now, being led by Ludmilla and gargoyles towards the depths of the dungeons, they are less than half the party they once were. Ireena and Lancelot are missing and the corpse of Freebird is being hauled by Umnos. Filled with defeat, they are marched to a room with a stone brazier burning fiercely.  Its tall white flames produce no heat.  Overhead, a wood-framed hourglass as tall and wide as a dwarf hangs ten feet above the brazier, suspended from the ceiling by thick iron chains. All the sand is stuck in the upper portion of the hourglass, seemingly unable to run down to the bottom.  Written in script on the base of the hourflass is a verse in common:

    Cast a stone into the fire:
    Violet leads to the mountain spire
    Orange to the castle's peak
    Red if lore is what you seek
    Green to where the coffins hide
    Indigo to the master's bride
    Blue to ancient magic's tomb
    Yellow to the master's tomb

    Ludmilla twists the indigo stone into a slot on the brazier's edge, seemingly activating something. Umnos eyes the stones and motions to Elizana to snatch one up just before the flames flourish around them teleporting to another room entirely. The new room is small and octagonal. The temperature has dropped significantly and pressure has spiked upwards. Outside the a window there are sounds of crushing metal and gnashing teeth followed by the familiar sound of Safzira's voice shouting in the distance "Kasimir!"
     `
  },
  {
    number: 20,
    title: "Gate of Tsolenka",
    players: ["Safzira"],
    npcs: ["Kasimir", "Viktor", "Sir Erich"],
    quests: ["None"],
    locations: ["Tsolenka Pass"],
    gameDate: "10th Day of Alturiak",
    realDate: "April 23rd, 2023",
    numDate: "4/23/23",
    imgUrl: "https://i.imgur.com/djjBndz.png",
    imgCap: "Tsolenka Pass Entrance",
    localLinks: {
      monstrosity: "/characters/creatures"
    },
    short: "Safzira and Kasimir encounter a monstrosity at the Gate of Tsolenka Pass",
    entry: `    After a days of treading through the coldest parts of Barovia the Southern Sunseekers Safzira, Kasimir, ~Sir Erich~, and Victor finally arrive at ~Tsolenka Pass~, the last stop before the ~Amber Temple~.

    They are met by a large archway blocked by an iron portcullis and magical barrier. Safzira uses her Mage Hand to slip through the iron bars and draw back the heavy gate.  ~Sir Erich~, familiar with the former outpost of his once honorable ~Order of the Silver Dragon~, waves his hand across the magical barrier like a soft wave to an old friend. The magic is calmly dispelled allowing the group to continue. Just before crossing through the archway, the group notices a large and unusual shape beyond the snowy mountain wind.  Kasimir is first to recognize the horror of the monstrosity before them and without hesitation leaps in front of Safzira to keep it at bay. With Sir Erich right behind him, Kasimir throws his elven dagger at the beast followed by a fire bolt. 

    As the beast is struck by the flame, the party starts to make out the vaguely wolf-shaped monstrosity and it's unnatural mechanical limbs and alterations sprouting from fresh stich-wounds and open flesh.  There are rows of mismatched bloodshot eyes staring back at them. One wrong move and the amalgamation swings it's elongated spiny tongue at Kasimir striking him in the chest. Without hesitation, Safzira hits the beast with dissonant whispers and the ~Mad Mage~ finishes the monster off with a magic missile.

    As Safzira rushes to Kasimir's aid, a voice is heard shrieking 'Wolfie!' The party looks up to see a woman swallowing her anger. Disgusted by the revenant, the woman orders everyone else into a nearby tower to escape the cold.`
  }
]

export default logData;