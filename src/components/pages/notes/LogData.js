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
    entry: `    The walk back to Vallaki from Castle Ravenloft is long and dangerous, but the gates of the town are reached without major incident. The Sunseekers find themselves rewarded with various trinkets and items durin their travels. German with his red plate armor form the castle, Elizana with her books, and Safzira with a magical cloak that seems to change its appearance based on her mood. 

    Safely back inside the town, they are reunited with Freebird, Ireena, and Vasili at the Blue Water Inn. The orphans from the Mill that managed to escape with Freebird made it back to the orphanage safely. Danika reports to Safzira that the young priest Franz has been by the Inn looking for her and the Sunseekers.`
  },
  {
    number: 10,
    title: "Vallaki Vistani Camp",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Kasimir", "Van Richten", "Vasili"],
    quests: ["All Will Be Well", "Coup of Vallaki", "Rescue Arabelle", "Bones of St Andral"],
    locations: ["Vallaki", "Vallaki Vistani Camp"],
    gameDate: "28th and 29th Day of Hammer",
    realDate: "August 21st, 2022",
    numDate: "8/21/2022",
    imgUrl: "https://i.imgur.com/BhKS1uC.png",
    imgCap: "Vallaki Vistani Camp",
    localLinks: {},
    short: "",
    entry: `   After several rough days away from the town, the Sunseekers wash up and unwind at the ~Swift Finish~. Since Danika told her about the young priest coming by, Safzira's mind raced with ideas about what he could want.  Rather than go directly to the priest, she sends a carrier pidgeon and goes about her day. As they walk the streets of Vallaki, the Sunseekers are followed by a unfamiliar old man.  Elizana falls back from the group to confront the stranger who is none other than ~Ernst Larnak~, loyal servant to the Wachterhaus. Ernst expresses that the Wachters are aware of the Sunseekers' involvement during the fiasco at last week's festival and they are interested in talking about the politcal situation of Vallaki in private. Elizana, Ireena, and Vasili go to have dinner at Wachterhaus to have a chat with Lady Wachter while Safzira, German, and Freebird go to the Vallaki Vistani Camp to investigate a stash of sivler. 

    At Wachterhaus, tea and dinner are served formally.  With Ireena and Vasili's careful assitance, Elizana is more than capable of handling herself among these nobles. ~Lady Wachter~ clearly states her interest in ridding Vallaki of the Baron and would have the resources to take care of the whole ordeal herself if it weren't for ~Izek Strazni~. She requests that the Sunseekers deal with Izek directly and promises the Baron's foolish "crimes of malicious unhappiness" will no longer be in effect afterward. Ernst will keep is eye on Izek's whereabouts but is also available to the party for anything that may prove helpful in the fight against the Baron.

    At the ~Vallaki Vistani Camp~, Kasimir opens up about his interest in resurrecting his long-dead sister Patrina at the Amber Temple deep within ~Mount Ghakis~.  This information reminds Safzira of a tarroka prophecy "at the end of a long and winding road deep in the mountains."  On top of the hill Luvash, leader of the ~Vallaki Vistani Camp~, is whipping teenage Alexei for falling asleep and losing his seven year old daughter Arabelle.  His brother, Arrigal, offers silver for her safe return.  With Kasimir's help, they are able to track down the kidnapper. Bluto, the town drunk, seems to have believe that offering Arabelle to Lake Zarovich as a sacrifice will bring him better fortunes in his fishing endeavors.  Safzira, German, and Freebird row out until they are close enough to see Arabelle tied up and being dumped over the edge. Safzira leaps into the water to save the child as they rush back to camp, leaving Bluto behind. Upon her safe return home, Arrigal rewards the Sunseekers with 15 gold bars. After a long day, Safzira and Kasimir spend the night together.

    The following day Elizana, German, and Safzira meet back at the Blue Water Inn.  As promised, ~Van Richten~ offers an intelligence report to the Sunseekers. He reports that the proprietors of the Blue Water Inn are members of a very private organization known as the Keepers of the Feather. The Keepers of the Feather have offered information on the tarroka prophecy "House of a saint" in exchange for information on the winery to the west.  Supply runs from the facility have ceased for the last few weeks and supplies are running very low. 

    The party makes their way to the town square so that they can silver their weapons. The blacksmith is delighted to take on the project, but warns them it will be one full week before the work is done. They willingly hand over their weapons. They make their way to the church to talk to Franz to see if he will consider relocating to the ~Village of Barovia~ to take over for Donavich. He agrees on the condition that they can assist with the missing bones of St. Andral. It is believed by the church that his undisturbed burial ground has warded away the horrors outside the walls of Vallaki more than anything.  They are told that Milivoj, an older orphan and groundskeeper for the church has been out sick for a few days, and they decide to check in on him. However, the young man is more than sick, he is actually completely catatonic. As they investigate the younger children, they find that a newer kid Felix has been carving demonic glyphs over some of the beds. They pressure the child for information until a shadow demon emerges from his locket preparing to throw children through the air. Luckily enough, German speaks abyssal and is able to commune with the demon. He offers to be the vessel of the demon if it will leave the children alone.`
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
    entry: `    Elizana and Safzira seek out a healer for the catatonic orphan Milivoj so that they can ask him about the missing bones of St Andral. The priests offer their best prayers without any immediate effect.  Luvash at the ~Villaki Vistani Camp~ suggests that his daughter Arabelle may be of use, but will need at least another day of rest first as she is still recovering from her assault on ~Lake Zarovich~.  Vasili can tell that they are frustrated and offers to take the Sunseekers out for ice cream to unwind before they relocate to the Swift Finish to speak privately about their affairs.  Ireena and Vasili have been talking to Lady Wachter and they are confident that they have convinced her to allow Vistani in the town of Vallaki for the first time in hundreds of years once the Baron's reign is over.  Safzira tells Ireena that the rumors about the Keepers of the Feather are true and they may be helpful when the time comes to take on Strahd and she shares that Kasimir the dusk elf might have some information about one of Madame Eva's tarroka prophecies.  She believes that the ~Amber Temple~ towards ~Mount Ghakis~ might be important to solving it. 

    Later that night, strange lights are seen from the Burgomaster's attic.  Saf uses her familiar to fly up and tap on the window to investigate.  The person on the other side taps back in morse code until they seem friendly enough to each other and the Sunseekers are secretly invited up.  The person in the attic is young ~Victor Vallakovich~, the Baron's son.  Victor and his father cannot stand each other and he has decided to lock himself up in the attic away from his crazy family to practice his magic until he can use it to escape from Barovia. Victor is interested in mastering a Greater Restoration Spell and Teleportation Circle. He believes the restoration spell should be useful for waking the catatonic orphan Milivoj, but he isn't confident he can control the spell yet.  However, he has heard rumors of a powerful mage in the mountains north of the lake.
    
    The next day the Sunseekers need to find a way to get Milivoj out of Vallaki discreetly.  They team up with Rictavio to put on a show for the people of Vallaki and use Milivoj for their human cannonball trick. The young boy is shot into the sky above the town and softly brought down into the ~Vallaki Vistani Camp~ with Freebird's featherfall spell. Arabelle, still recovering her strength, attempts to use restoration on him with no success. The Sunseekers turn their attention towards the possible mage in the mountains up north as a last resort.`
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
    localLinks: {
      "Henrik Van Der Root": "/characters/vallaki-citizens"
    },
    short: "",
    entry: `    In search of a rumored mad mage in the mountains who might be able to help the orphan Milivoj, the Sunseekers make their way up the terribly difficult terrain of Mount Baratok. Everntually they see a cloaked figure in the distance casting lightning magic. Safzira sends her owl familiar to investigate the figure, an old man with a long white beard.  The old man greets the owl like an old friend, tapping his staff to communicate "I remember it like it was yesterday, but for you it was!" The old man bears a striking resemblance to Victor Vallakovich. He approaches the party without conflict and happily tells his story about how he escaped Barovia as a young man and worked hard to become a very powerful wizard. He eventually realized that he had to go back in time to fight Strahd himself, which he did a year ago but barely made it out of Castle Ravenloft alive.  He has been waiting for the Sunseekers to arrive ever since. He claims that he remembers how Elizana, Safzira, German, and Freebird famously fought Strahd but were all violently defeated, tortured, and eventually killed by the vampire lord. He hopes that things can be different this time around. He agrees to travel down to the ~Vallaki Vistani Camp~ to use his magic on the orphan Milivoj.

    Down at the camp, Victor easily awakens Milivoj. He is consumed with guilt and immediately admits that he stole the bones for the coffin maker ~Henrik Van Der Root~. He was hoping to steal the bones back for the church after getting paid by the coffin maker, but went to sleep one night and stayed in a deep catatonic sleep until just now. He fears it could be too late - the bones were never supposed to be away from the church for that long and the town could be vulernable to attack. Exhausted from this episode, Milivoj falls back asleep. The mage Victor is exhausted from the trip as well. He tells the party that he will need a couple of days to rest at the camp and suggest they get some rest as well before confronting the coffin maker. 

    No time is wasted as they head into town before daylight. With Milivoj in tow, the Sunseekers approach the shop and pound on the front door. Henrik lacks manners, but doesn't hesitate to explain himself. Vampires have infested his shop and threatened his life for the bones. He handed the bones over days ago and are no longer in the city. He begs the party for forgiveness, but warns them about the monsters inside his shop. As they poke through the shop they discover several vampires who put up a tough fight. German broke a window and grappled them one at a time into the dim rising daylight, but the Sunseekers are outnumbered. German and Freebird are knocked out in the fight leaving Safzira and Elizana to try to hide from the vicious vampires. However, the morning light is almost immediately replaced by an ominous darkness and the remaining vampires escape through the broken windows.  After picking up German and Freebird, they find Milivoj and the coffin maker have been ripped apart right outside the shop. There are screams of terror from the west.

    Halfway to the church Vasili runs into the party begging them to take Ireena out of town as soon as possible. A horde of skeletons, vampires, and undead soldiers slaughter guards and commoners throughout the streets eventually surrounding the party.  The undead monsters stare at the Sunseekers with their weapons drawn, but hold their position.  From the west, the horde parts allowing a lone woman walk to pass through. She is horrifying and beautiful as she walks towards Ireena and the party.  "I'm tired of this bitch!" she shouts to Vasili. "You look ridiculous, Strahd."

    Vasili transforms into ~Strahd Von Zarovich~ and grabs the woman by the neck. "You've ruined a good thing, Anastrasya. Was it worth it?" He rips her head from her shoulders and directs his attention to the undead horde. There is a flurry of violent thrashing, elemental magic sparks, burns and freezes all around the party. Undead bodies collapse until only Strahd is left standing. He wipes the blood and flesh from his face and fixes his hair. "Sorry for misunderstanding, my love. I know this wasn't what you were expecting, but Vasili and I really do have a lot in common." Ireena is consumed with fear. The Sunseekers grab her and take off down the street. Strahd transforms into a dark mist and disappears behind them. As they return to the Blue Water Inn, Danika is with her husband tending to wounded townsfolk and picking up dead bodies - including their youngest son Bray, who was only ten years old. Safzira starts to clean the blood off the floor and Freebird gives one of his feathers to Danika, before embracing her.`
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
    entry: `    The entire town of Vallaki is silent in the wake of what is now known as the Feast of St. Andral. The Sunseekers do what they can to clean up the mess, but as soon as the silvered weapons are ready from the blacksmith German grabs his gear and leaves town without saying a word. Safzira slips a note to Elizana and leaves by herself as well. The next morning the Baron has declared the Sunseekers enemies of Vallaki. Propaganda posters are posted all around the city before sunrise. The Blue Water Inn is surrounded by vallaki guards and Izek happily takes Elizana and Freebird into custody.  

    Elizana meets Umnos Runbalo, a cleric, and Lars Kjurls, the guard who was tortured by the Baron at the Festival of the Blazing Sun. Umnos has completely healed Lars' many injuries and become quite friendly. They agree to try to escape the prison with Elizana and Freebird. Elizana mostly talks their way out of prison with their gear. Lars is grateful, but hurries homee to see his family. Elizana and Freebird take Umnos to the Swift Finish to brainstorm their next move. They decide to start looking for Ireena at the burgomaster's mansion. Elizana sneaks in and overhears some guards talking about how they will be increasing checkpoints to search for the Sunseekers, but in the meantime Izek has taken Ireena up north out of the city.

    Elizana, Umnos, and Freebird head north, stopping at Wachterhaus to get information from Ernst about Izek ahead of time. He says that he left town with Ireena over an hour ago and catching up to them might be difficult. So they head over the Sunset wagon, which Rictavio had painted and disguised as an entirely new wagon called the Sunrise so they could move around Vallaki easier without being recognized. Umnos, currently unafiliated with the Sunseekers is easily able to drive the wagon out and town and pick up speed on the road north. Ireena screaming for her life tied to a tree. There are wolves approaching her. Freebird and Elizana are able to take out the wolves while Umnos unties Ireena and puts her in the wagon. Umno Runbalo is officially welcomed to the Sunseekers.`
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
    localLinks: {
      note: "/notes/strahd-notes"
    },
    short: "",
    entry: `    Elizana, Umnos, Ireena, and Freebird find themselves outside of Vallaki, unwelcome and unsafe in Vallaki, they set their sights on solving one of the Tarroka prophecies.  ~Van Richten~ seemed to believe that a prophecy about "a place of dizzying heights where the stone itself is alive" referred to one of the towers of Castle Ravenloft.  So they make their way to Strahd's castle, passing the revenant of ~Viktor Lazlo~ and other horrors along the way. They eventually ever the castle and make their way up a wide staircase leading to the second floor. They find themselves in a large open audience hall with a throne on the other side of the room.  As they approac the empty throne, they find an elegant dagger stuck in the arm of the chair pinning a note to it. The note reads: 

    "My dearest brother!

    We have heard the terrible news about the attempt at your life - my shock and concern could not be greater! I cannot wait to finally visit you in Castle Ravenloft. Please let me know if there is anything we can do for you in the meantime. I will keep you in my prayers, Strahd, as always!

    Your devoted brother,
    Sergei"

    The Sunseekers continue to make their way through the castle until they find a man scribbling ceaselessly.  He is by the mountains of paperwork on his desk, but takes a second to acknoweldge Elizana. He tells her that there is a lost holy relic last seen on the western side of Barovia. The continues and finds an old dining room which briefly inspires a vision of the room from hundreds of years ago, in happier times. The bright vision fades as they see layers of dust and cobwebs over an untouched dining set. One room over, they find Strahd's study. The study is the only room in the castle so far that has been maintained. A fire roars on one side of the room and there isn't a spec of dust to be found. Lancelot starts to scratch at a door, but is ignored as Elizana snatches books off the shelf to stuff into her bag of holding. Umnos and Ireena spy the large portrait of a woman who looks exactly like Ireena. There is a lever beneath the portrait, which they can't help but pull. The fireplace cools to reveal a secret room behind it. As Lancelot continues to scratch violently at the door on the other side of the room, the party moves into the secret room beyond the fire place and find a large chest. When they open it they find 108 gold pieces to split between them, but mysteriously fall asleep.

    An the other side of Barovia, Safzira is traveling south towards the Amber Temple with Kasimir and Victor. They meet a fighter Zoro who is plagued by amnesia who decides to travel with them. They find a dead body with a couple of gold pieces and a healing potion. Kasimir takes the time to give the corpse a proper grave. Down the road they find an old abandoned castle, "Argonvostholt" is carved in stone nearby. There is a large statue of a dragon facing the doors of the castle. As Victor takes a nap on the first floor, Safzira, Kasimir, and Zoro explore the castle which is filled with traps and angry spirits. Eventually they are chased into a room filled with revenants sitting at a long table.  One of the revenants stands saying "Why do the living always disturb the dead?"`
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
    entry: `    "Why do the living always disturb the dead?" asks the ancient revenant ~Sir Godfrey Gilwyn~. "No cause for alarm, unlike most revenants of Barovia we aren't lusting for your blood." ~Sir Godfrey~ explains a brief history of the ~Order of the Silver Dragon~ and how after the dragon Argonvost was slain by Strahd, ~Sir Vladimir~ was so consumed with rage and vengeance that he brought the entire order back as revenants. While some have lost all of their humanity in an hopeless and endless fight against ~Castle Ravenloft~, ~Sir Godfrey~ and his closest knights hold a loose grip on what humanity they have left and reside within Argonvostholt wasting away over centuries. However, he believes that it is possible to ease their suffering. He believes that if a knight can be restored enough of their humanity, their individual curse may be lifted and eventually, maybe all of the knights of the order may be able to truly rest in peace. ~Sir Godfrey~ asks that the Sunseekers take ~Sir Erich~ with them on their journey to the Amber Temple so that he may have a chance to resolve some unfinished business from his mortal life. He was once a great beast hunter.

    Meanwhile at ~Castle Ravenloft~ the Sunseekers of Eastern Barovia awake tied up in a cauldron room filled with frantic witches. Lancelot isn't with them. They are able to slowly free their hands from their bounds.  They try to talk their way out, but quickly find themselves locked in combat, chasing the witches from room to room. When they realize who Ireena is, two of the witches retreat successfully. They make their way to the roof of Castle Ravenloft without incident. They take another long rest and awake to find that Ireena is missing. However, across a bridge to one of the towers, there is an ominous red and yellow glow eminating from the doorway and they can feel a heartbeat that doesn't belong to any of them.
    `
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
    entry: `    Elizana, Freebird, and Umnos stand on the roof of ~Castle Ravenloft~. Across a short bridge is an opening to the second tallest tower. There is an ominous red and yellow glow eminating from the doorway and they can feel a heavy heartbeat that doesn't belong to any of them. It is as if the tower itself is alive.  Elizana remembers the Tarroka reading in Madame Eva's tent:
    
    "Go to a place of dizzying heights, where the stone itself is alive!"

    They cautiously approach the tower entrance and find that the tower is almost completely hollowed out except for a spiral staircase that hugs the walls tightly.  The tower interios is bathed in the flickering glow of a thousand candles. set into irregularly spaced alcoves along the spiral staircase that hugs the outer wall, each candle stands above a brass name plate - some faded with the centuries and others gleaming as if installed yesterday. The name plates appear to bear the names and descriptions of foreign adventurers who died in Barovia.
    
    As the Sunseekers set foot onto the stairs, the entire tower plunges into darkness as the candles in the wall each go out at once. Their adjust moments later; the only light left in the tower is the dull red glow of large, myserious heart magically suspended in the center of the room, and a faint flicker right next to you. As Umnos turns to read the name plate, he sees the description "Umnos Runbalo - Cleric". The candle burns, but its flame is feeble, and seems ready to flicker out at any moment.
    
    Almost a second too late, Umnos sees a dark shape lash out at him quickly. Just as quickly as it appeared, the shape disappears off the ledge the party is standing on.  The shape continues to dart through the darkness leaving traps in its wake and spider-climbing its way under the sone stairway. Eventually it gets close enough for the party to see the shape is actually a masked woman. She willingly admits that she is ~Volenta Popofsky~, bride of Strahd and keeper of the Heart of Sorrow.
    
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
    entry: `    On one side of Barovia, Safzira and Zoro have agreed to travel with ~Sir Erich~ of the ~Order of the Silver Dragon~ at ~Sir Godfrey~'s request. Their journey towards the ~Amber Temple~ is only briefly interrupted when they encounter a wild druid on all fours who seems to be controlling several twig blights. As Safzira's attempt to reason with the druid fall on deaf ears, they find themselves engaged in combat. 
    
    On the other side of Barovia, within Castle Ravenloft's ~Heart of Sorrow~, Elizana, Freebird, Umnos, and the mysterious Ez are now in possession of the Tome of Strahd, a detailed history of Strahd's time in Barovia written by the vampie lord himself.  The problem is that they appear to be in some sort of stable riddled with scorchmarks and in the distance, through a pair of open double doors, they see a flaming horse riding straight towards them. They run back to room that was once occupied by the witches and they proceed to rest up and tend to their wounds from their fight with Volenta.
    
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
    entry: `  Safzira and Kasimir continue their journey south towards the ~Amber Temple~. Barovia is brutally cold the closer you get to Mount Ghakis. The bitter winds begin to beat down on them. Sir Erich, who hasn't felt much of anything in a very long time, begins to tell his tale about his last hunting trip. "Maybe a story might give them something else to think about at a time like this" he mutters under his breath before slowing his walk to match their pace.
    
    "The ~Order of the Silver Dragon~ was the top priority of the Knights, but it wasn't the only one. We made sure to have a little fun. Argynvost himself had starting a hunting party during our downtime before the war.  Giant goats used to roam wild over the Mount Ghakis region, but they were troublesome and dangerous.  
    
    "It all started when a couple of giant goats made their way into the church of Berez.  Within minutes the place was completely torn up.  The Burgomaster pleaded with Argonvost to do something, but the Order was never intended to defend individual settlements from wildlife.  Nevertheless, our silver leader did see an opportunity to bring the Knights together to hunt for sport. Before long there were fewer and fewer giant goats and we had developed a hunger for the hunt.  
    
    "When Strahd invaded Barovia to go to war with the Dusk Elves, strange people and creatures followed behind him. One of these creautres was a roc, a gargantuan monstrousity that terrorized the valley. The Knights would dream of hunting this beast, but Strahd's war eventually found its way onto our doorstep. Argonvost, in his silver dragon form fought bravely, but was struck down by Strahd himself. Vladimir swore his eternal revenge turning every Knight of the Order into a bloodlust-infested revenant. 
    
    "I love this valley and I lived to serve Argynvost and the Order, but I have lived far longer than is natural for a man like myself and I'm ready to rest. If Sir Godfrey is correct about connecting with what we loved in our motal lives, I may find peace."
    
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
    
    A soft, but stern voice is heard saying "My love, I need these two at Tsolenka. Surely you can find something else to play with." Elizana looks to see an unfamiliar woman with her hands on her hips. Strahd looks at the dead bird on the ground and the horrified faces of the remaining sunseekers. "I suppose I've had my fun for now. They're all yours, Ludmilla. "
    
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
  },
  {
    number: 21,
    title: "The Amber Temple",
    players: ["Safzira", "Umnos"],
    npcs: ["Freebird", "Kasimir", "Viktor", "Sir Erich"],
    quests: ["None"],
    locations: ["Tsolenka Pass", "Amber Temple"],
    gameDate: "10th evening of Alturiak",
    realDate: "June 11th, 2023",
    numDate: "6/11/23",
    imgUrl: "https://i.imgur.com/FyaVFjS.png",
    imgCap: "Amber Temple facade",
    localLinks: {
      "Brazier Room": "/locations/7",
      "Mad Mage": "/characters/sunseekers"
    },
    short: "Safzira and Umnos meet at Tsolenka Pass and finally arrive at the Amber Temple",
    entry: `    Umnos finds himself chained to the wall of a cold unfamiliar place.  He has been so distracted by Freebird, that he only now realizes that Elizana must have been teleported somewhere else entirely. He checks for the gem she stole from the ~Brazier Room~ before leaving Ravenloft. The large blue stone is still by his side and he contemplates when to use it to revive Freebird. Safzira, Kasimir, and the ~Mad Mage~ are escorted into the room with Umnos and chained along the walls in the same fashion.  There are large gargoyles patrolling each floor in this small tower as Ludmilla leaves the tower to look for an escaped prisoner. Safzira is devastated and confused to see her best friend's lifeless body in a stranger's lap. Umnos consoles her and introduces himself in elvish.  He explains how he came to know Elizana, Freebird, Ireena, and Lancelot in Vallaki and how he lost each of them one by one in ~Castle Ravenloft~. He tells her that he is hoping to revive their mutual friend as soon as he can get away from the gargoyles. Viktor, chained on the other side of the room offers a friendly wink to Saf and offers to distract the guards while the others pick their locks and escape. The Mage disappears and reappears in different corners of the room using prestidigitation to create loud and bright distractions throughout the tower while his friends jump out of the nearest window. 
    
    As they travel a safe distance from Tsolenka Pass towards the ~Amber Temple~, Umnos attempts to revive Freebird but the spell isn't working.  Kasimir believes the spell failed because Freebird's soul has been attached to a Barovian.  Van Richten told the Sunseekers something similar during their first week in Vallaki. He had said that Barovia had become a dread domain where souls cannot come and go as they please resulting in an infinite loop of reincarnation. Safzira, in tears, demands that they try to revive him once more in the ~Amber Temple~ ahead. Umnos and Kasimir support Safzira physically and emotionally as they place Freebird in a bag of holding and continue to the temple.
    
    As they approach the end of the road, the see a temple facade carved into the side of ~Mount Ghakis~. There are large amber statues of faceless cloaked figures. They go inside to see a skeleton in apprentice robes who carved a message, in every language, all over the walls: 
    
    "If you seek honor or power, turn back
    for these walls hold naught but doom. 
    In many vessels below, the darkness 
    shelters a timeless evil. 
    The danger is an infection of malevolent divinity. 
    Our arrogance and folly forged 
    this place into our prison. 
    Leave now, before our damnation becomes yours"
    
    As they navigate the dark, labyrinthian temple Kasimir loses himself in a false reflection of himself in the amber walls. They all see themselves as old and weak, but Kasimir begins to lose his strength and hobble behind. In a lecture hall, they discover a commoner called Vilnius. His body is covered in lesions and sores and he is coughing violently. He came to the temple to try to heal himself, but he is terrified of the monsters that lurk in the halls of this place. He begs to travel with them so he can be protected. Not long after leaving the lecture hall with Vilnius, the Sunseekers come across a large amber golem with the head of a jackal.  He immediately knocks down Umnos as the remaining Sunseekers scatter and try to defend themselves from the shadows. Kasimir and Vilnius move farther into the temple leading the golem away from Umnos long enough for Safzira to give him a healing potion and run the other way with him. Umnos, in a fit of rage, casts a guiding bolt which explodes with radiant energy into the construct's back. As he turns around to finish off Umnos he is defeated by Safzira's booming blade. They regroup and bar themselves in the lecture hall, taking shifts so that they can all rest up before exploring the temple further.
    `
  },
  {
    number: 22,
    title: "Dark Gifts",
    players: ["Alina", "Safzira", "Umnos",],
    npcs: ["Kasimir", "Echo", "Gaine", "Salali"],
    quests: ["Tarroka"],
    locations: ["Amber Temple"],
    gameDate: "11th Morning of Alturiak",
    realDate: "June 20th, 2023",
    numDate: "6/20/23",
    imgUrl: "https://i.imgur.com/YBBNCMG.png",
    imgCap: "Temptations of the Dark Gifts",
    localLinks: {},
    short: "Alina joins the Sunseekers as they are offered Dark Gifts within the Amber Temple",
    entry: `    A few weeks ago a botched teleportation spell unexpectedly landed ~Countess Alina~, an air genasi druid, into the wilds of Barovia. In her short time in the valley she stumbled into the walls of Krezk and was briefly mistaken for a Kavani druid.  Compelled by the possibility of honing her magical crafts, she left the safety of the walls of Krezk in favor of seeking out the supposedly evil Kavani until she found a small group of their youths, Gaine, Salali, and Echo.  These teenage druids were making their way to the Amber Temple filled with optimism about a coming-of-age ritual and the possibility of finding the long lost Sunsword.
    
    As the group of druids inevitably splits up to look for ~Dark Gifts~ and the Sunsword, Alina and Echo make their way to the upper eastern side of the temple. There is a hole in the ground with stable enough handholds so Alina confidently makes her way down with Echo in tow. Unfortunately there is a bit of a drop to the ground from the final handhold which Alina gladly jumps down to, but Echo is terrified of the fall. They make their way back up the hole leaving Alina below and as they make it back up out of the hole flames seem to fill the room as they scream for help.
    
    Down the hall, the Sunseekers have just woken up. Umnos is having trouble healing Vilnius as the sickness within him seems to be some kind of magic or curse. As he is questioned about it, he begins to panic and run out of the room and into the flames that are encircling Echo. Umnos stabilizes Vilnius and leaves him in the lecture hall so the Sunseekers can assist the unfamiliar teenage druid in the other room. Fighting breaks out as flaming skulls circulate the room spewing fire in every direction of the room as, below, Alina the air genasi levitates her way back up through the hole and joins the Sunseekers in the fight to save Echo.  Once the last flame is extinguished introductions are made and it is revealed that Echo and the Kavani are seeking the Sunsword to offer up to Strahd directly.  The Sunseekers quietly shift their gaze from Echo to Alina who appears to express in particular interest in Strahd or the sword.  They continue to travel through the hole as group, using a rope to ease themselves down through the gap at the end of it. 
    
    Inside the small room below they find three unusal shaped amber sarcophogi and a sealed amber door. Echo reaches out to touch one of them as the room becomes very quiet. "I accept" Echo says as they pull their hand gently from the surface of the amber. They feel powerful and agile. Echo leaps to the ceiling ten feet above, no longer fearing the gap, and sticks confidently to the edge. "I've done it! I've become more powerful!" Echo says before their mouth is torn open from the inside to make room for large emerging mandibles.  Their eyes grow until the shape of their face is forever rearranged to compensate for the difference in size. Their limbs snap back in an inhuman way as their body is covered in bear fur and leathery skin, horns, and claws. The monstrosity lets out a loud shriek as the Sunseekers draw their weapons.  Umnos leaps into the air and grapples the creature that was once Echo from the ceiling tearing it down to his level as Safzira shoots arrows from the corner of the room and Alina casts her spectatular starry druid magic at it.  As the creature fails to defend itself, shooting sticky bear-like vines through the tight space, it takes significant damage and it's torso is elongated and split down the middle to release two smaller identical creatures. They bear climb to the ceiling and launch themselves at Umnos in an attempt to free the larger creature. There is biting, clawing, and overwhelming shrieking and wailing from these monstrosities until they finally stay wilt into a mess of unrecognizable remains. Umnos says a short prayer over what might be considered a body while Safzira takes what she can from it so that the Echo may be identified from their loved ones later on and discovers a magical scroll. 
    
    Before leaving the room, Alina can't help herself. She reaches out and touches an amber sarcophogus and her consciousness is transported across time and space. Her surroundings are cold and wet, but she can see lightning being cast down like an angry fist into the world below. The Elder One Zrin-Hala offers her the ability to cast lightning at the cost a a physical deformity. As she accepts her eyes turn piercing solid white accompanied by crackling streaks of electricity and swirling patterns reminiscent of storm clouds within. She tells the others that Echo couldn't have been powerful enough to contain the gift bestowed upon them. Safzira is tempted to reach out to the Elder Ones and accept a ~Dark Gift~ of her own to bring Freebird back to life. She seeks the council of Umnos and Kasimir who don't seem interested in trying for themselves either. She decides to let Freebird rest for now, but she makes Umnos promise to try to revive him as soon as they can escape the ~Mists of Barovia~. Umnos and Safzira use their booming blades against the sealed Amber door to break through it and continue onward. 
    
    The group walks through the temple searching rooms for clues about the whereabouts of the Sunsword and share their stories with each other. Eventually they come across an enormous faceless statue in the main room. They find a secret door in the rear of the statue that leads to an ascending sprial staircase up to the interior of statue's head. In a very cramped space within the head, there is an old dusty chest containing an old dusty robe with various patches on it - dogs, a boat, a broken sword, and more.  Umnos tears off the patch and removes the platinum hilt of a broken crystal sword. He feels a connection to it. This sword feels bretrayed and griefs for its original master. It seeks revenge for the crime, but fears its permanent destruction.  The group takes a moment to rest as Umnos attunes to the weapon. Alina requests help from the group to retrieve an item for herself after this - the Gulthias Staff from the Kavani druids.  They are happy to accept and welcome her to the Sunseekers. Kasimir pulls Safzira aside to talk about leaving the group to check on the dusk elves. He fears that Strahd will soon learn about the Sunsword and it's possible that he will blame the dusk elves for assisting with its discovery. He can't be away from his people any longer, so he prepares his things to leave in the main room while the others continue through the temple to find the remaining Kavani youths.
    
    Deep inside the temple, the Sunseekers find the Kavani teenagers Gaine and Salali proudly showing off their newfound ~Dark Gifts~ and attracting the attention of two ~Amber Golems~. The druids and the Sunseekers fight side by side. Gaine rushes up a grand spiral staircase to use his vampiric abilities on a golem successfully biting into it's amber. Salali rushes the opposite direction the golem on the ground floor but is crushed immediately by the construct. Safzira casts grease on the golem above knocking it prone and sliding down the stairs causing Gaine to be pushed off the ledge. Alina summons a fey spirit while Umnos casts spirit guardians arround himself and centers himself between the golems. Safzira's arrows fly out from the shadows striking the golems with unexpected force while Gaine picks himself back up. He leaps towards the greasy golem at the base of the stairs and fails to bite into it this time. The golem retaliates smashing the young druid vampire to pieces right in front of Alina. Magic and arrows continue to fly across the room with the fey spirit rushing the golem still standing. With the druid children unconsicous or dead, Umnos draws the Sunsword for the first time and it's golden glowing blade erupts from the hilt. He moves in closer the golem and swings the sword of sunlight with precision. The Sunseekers are successful to destroying both of the golems.  
    
    Alina, concerned with her upcoming fight with the Kavani for the Gulthias Staff and Blood Spear, ends Salali's withering lifeforce with a stab to the heart. Umnos is heartbroken by the sight, but prays over the dead youths while Alina finds a haiku in Salali's pocket. It reads: 
    
    Grateful hearts unite,
    Infinite connections thrive,
    Alive, we are one.
    
    For a second it seems that Alina is beside herself at her decision to take the life of a child with such an obvious yearning for life. But the second passes. She crumples up the bloody poem and kicks it across the room and joins the rest of the Sunseekers as they get ready to leave the Amber Temple for good.`
  },
  {
    number: 23,
    title: "Sunseekers Reassembled",
    players: ["Alina", "Safzira", "Umnos", "German", "Bafan"],
    npcs: ["Davian Martikov"],
    quests: [""],
    locations: ["Tsolenka Pass", "Winery"],
    gameDate: "13th Morning of Alturiak",
    realDate: "June 28th, 2023",
    numDate: "6/28/23",
    imgUrl: "https://i.imgur.com/nNfX6Mw.png",
    imgCap: "Roc attacks over Tsolenka Pass",
    localLinks: {
      Temple: "/notes/treasures"
    },
    short: "Sunseekers reassemble with old and new members at Tsolenka Pass",
    entry: `    With the ~Amber Temple~ behind them, the Sunseekers approach ~Tsolenka Pass~ once again. ~Sir Erich~ is waiting for them by the bridge as a gigantic roc flies overhead. Sir Erich assures them that the bird willl not be hostile to anyone unless a ~dark gift~ was accepted from the temple. Unfortunately, Alina did accept the dark gift of lightning from an ancient evil and the roc swoops down to down to attack the party on the ground. The roc's beak nearly took off Alina's pretty face in a close call before a small group of monster hunters emerged from the Tsolenka bridge demanding the kill for themselves. 
    
    The leader of the monster hunters is revealed to be ~German the Barbarian~ with his new ally Bafan. As he reunites with his former team they are able to take down the bird and claim its feathers and bones as trophies. With the roc defeated, Sir Erich meets the requirement for his unfinished mortal business is able to finally pass peacefully with Umnos holding onto him. Umnos is reminded of his true place in Barovia as a cleric and leaves the sunsword behind as he decides to go straight to the people of Barovia to help them.  With Umnos gone, German embraces Safzira after several terrible weeks apart. He and Bafan are welcomed into the group. Bafan even uses the bones of the roc to create a new wagon for the group while the others take a chance to rest up after the fight. In the morning the Sunseekers will follow Alina to the winery in search of the ~Gulthias Staff~.
    
    At the winery, the party encounters a group of wereravens led by ~Adrian Martikov~, brother of ~Urwin Martikov~ from the ~Blue Water Inn~.  His familiy's winery has been overtaken by Kavani druids who are holding the Martikov patriarch Davian captive within. The group splits up and works to take out the existing Kavani inside and out. German and Bafan start a friendly competition to see how many kills they can each get on the battlefield. The ~Gulthias Staff~ is found in the hands of a druid talking into a ~sending stone~.  The staff is retreived, any poisoned wine is purified, and the the winery is taken back by the Sunseekers for the Martikovs. Just as they are preparing to celebrate their victory, a massive animated tree is marching towards the winery with a bloody spear stuck in its trunk.`
  },
  {
    number: 24,
    title: "Keepers of the Feather",
    players: ["Alina", "Safzira", "German", "Bafan", "Rydas"],
    npcs: ["Davian Martikov"],
    quests: [""],
    locations: ["Winery"],
    gameDate: "15th Morning of Alturiak",
    realDate: "July 9th, 2023",
    numDate: "7/9/23",
    imgUrl: "https://i.imgur.com/JYG1BK9.png",
    imgCap: "Wintersplinter cuts its way towards the winery",
    localLinks: {},
    short: "The Sunseekers save the winery from waves of attacks",
    entry: `    With a massive animated tree marching towards the winery with a bloody spear stuck in its trunk, the Sunseekers prepare to defend the winery from this final Kavani attack.  The birdcage Alina has been holding since the ~Amber Temple~ finally loosens up and out flies the little bird inside transforming into a large female centaur.  She is ready to blow off some steam and fights along side the Sunseekers as they rush towards the huge plant and attack it with everything they have left.  German removes the fabled ~Blood Spear~ from the tree and instantly feels a connection to Alina's ~Gulthias Staff~.  Simultaneously they hear the words
    
    "A new hand touches the artifacts. Listen. Hear me and obey. A foul darkness has seeped into the valley. It will be a darkness that you will destroy. Work together and I will make you the instrument of my cleansing light."
    
    The fight ends and the Martikovs invite the Sunseekers in for a celebration. Wine is poured liberally and several drugs are passed around. The smell of victory and hard-earned peace fills the air within the winery and the party lasts nearly all night. The following morning the Sunseekers are introduced to the newest Martikov, ~Paint Drop~.  He is a newborn baby with feathers and a beak.  Despite being wereravens, lycanthropy is considered a gift given only once a child becomes of age.  This feathered Martikov was born with feathers resembling that of Freebird, the fallen Sunseeker.  After some discussion, it is believed that Freebird's soul must have found its way into the body of this newborn baby.  Even his nickname "~Paint Drop~" was a name that once belonged to Freebird earlier in his life.  Safzira is saddened by this miracle as it means she has truly lost her friend. 
    
    It is decided that the Sunseekers will work their way towards Argynvostholt to share the good news about ~Sir Erich~'s passing with ~Sir Godfrey~.`
  },
  {
    number: 25,
    title: "Bafan's Coffin",
    players: ["Alina", "Bafan", "German", "Safzira"],
    npcs: ["Godfrey", "Arthund", "Strahd"],
    quests: [""],
    locations: ["Argynvostholt", "Old Svalich Road"],
    gameDate: "16th Afternoon of Alturiak",
    realDate: "August 2nd",
    imgUrl: "https://i.imgur.com/pMnjKAV.png",
    imgCap: "Strahd's charms on the Old Svalich Road",
    localLinks: {},
    short: "Strahd ambushes the Sunseekers on the road",
    entry: `    The Sunseekers are welcomed by ~Arthund Boarwin~ at Argynvostholt and led upstairs to ~Sir Godfrey Gilwyn~.  Godfrey is relieved to hear about ~Sir Erich~'s successful and peaceful passing.He insists that they take another revenant with them to resolve some more unfinished business. Bafan is skeptical, but German is happy to take on a new squire. Arthund volunteers himself to join the group. Armor and silvered weapons are offered to the group before they leave and German sees through a window that there is a horse-pulled cart approaching the dragon statue outside.  The vistana man steps off the wagon, relieves himself on the statue of Argynvost, disconnects the cart from the horse, and rides north. The Sunseekers rush outside to see the abandoned cart containing only a simple wooden coffin from Vallaki with a note pinned to it. The note reads:
    
    "A gift for a humble servant. Perhaps you will stay dead this time."
    - Count Strahd Von Zarovich
    
    Beneath the note is the name "Bafan" carved into the wood.  The group is unsettled as Bafan begins to explain himself.  He is caught off guard by the message as he has definitely not met Strahd before and explains to the best of his ability his mortal state. He has died before and he is in some kind of undead state currently. They decide to chase the Vistana rider north. In pursuit the wagon gets stuck in the road and they are surrounded by wolves. They easily fend off the attack until one transforms into Strahd.
    
    Strahd willingly takes every attack they throw at him, charming each of them along the way.  He uses his charm to convince Bafan to tie up his companion Jean and stay out of most of the fight. He summons a pack of wolves that surround the Sunseekers and offers safety to those who willingly do as he asks.  He charms Safzira into tying up Alina on the roc-skull wagon before animating it into a rolling animated bone sphere. It rolls towards ~Castle Ravenloft~ as he strikes ~German the Barbarian~ down and taunts Bafan saying "you should really crawl into that coffin and stay there" before disappearing into a dark mist. Bafan is surrounded by wolves and barely manages to squeeze by them to aid German.  They defeat the wolves, but are missing half of their adventuring party.`
  }
]

export default logData;