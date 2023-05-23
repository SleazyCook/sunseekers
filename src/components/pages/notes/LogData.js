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
    gameDate: "8th Night of Hammer through 9th Morning of Hammer",
    realDate: "May 27th, 2022",
    numDate: "5/27/2022",
    test: <Link className="hyperlink" to="/">Hello</Link>,
    imgUrl: "https://i.imgur.com/4TAGQ2R.jpg",
    localLinks: {},
    short: "",
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
    gameDate: "11th Night of Hammer through 12th Morning of Hammer",
    realDate: "June 12th, 2022",
    numDate: "6/12/2022",
    imgUrl: "",
    localLinks: {
      "Burgomaster": "/characters/village-of-barovia",
      "mansion": "locations/village-of-barovia",
      "mean shop owner": "characters/village-of-barovia"
    },
    short: "",
    entry: `11th Day of Hammer
 
      - Arrival in town
      - Safzira and German go for a drink, where they meet ~three tough vistani women~ suggesting that they meet up with ~Madame Eva~ on their way out of town. Ismark offers to buy them drinks and asks them to ~protect his sister~ Ireena in exchange for free lodging and meals anytime they are in town.
      - Safzira and German go to Ismark's mansion to meet Ireena who insists on giving their father a ~proper burial~.
      - Safzira and German escort Ireena and Ismark with the body of their father to the church where the priest Donavich holds a funeral in his honor. 
      - Ismark becomes the new Burgomaster in his father’s place
      - Halfling checks out shop, ~mean shop owner~, directs to scratching on home fronts. investigation leads to the ~Cobb House~, where a wife answers the door and the Halfling meets her ~dying husband~. He mentions resorting to drinking well water after a shortage of wine in the village. He dies and turns into a zombie. Elizana and Freebird slay the zombie outside his home after he devours his wife.
      - Safzira, German, Ismark, and ireena join up with Elizana and Freebird and investigate the local well. Inside are several of Strahd's zombies. They defeat the zombies and retire to the burgomeister's mansion to rest up.
      - Ireena is officially a Sunseeker

      12th Day of Hammer

      - Elizana attempts the shop again but along the way the dog Lancelot scratches at a door of a village home. 
      - Mad Mary explains that Lancelot belongs to her ~missing daughter~ Gertruda. Lancelot is looking for her.
      - Mad Mary has witnessed a cloaked figure ~dragging people~ towards the north end of town at night. She believes that Gertruda must have been one of them
      - The Sunseekers investigate the area on the north side of town which brings them back to the priest Donavich at his church. 
      - Strange screams are heard from the undercroft of the church.
      - Donavich’s son Doru is a vampire and attacks the friendly Elizana in a hungry rage. 
      - Doru is killed and Donavich is ~imprisoned for his crimes~ in the undercroft.
      - Ismark asks that the Sunseekers look for a ~replacement priest~ in the town of Vallaki to the West. `
  },
  {
    number: 3,
    title: "Tarroka Reading",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Lancelot"],
    quests: ["Madame Evas Tarroka Reading"],
    gameDate: "14th Afternoon of Hammer",
    realDate: "June 13th, 2022",
    numDate: "6/13/22",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: `    Strahd ~meets the sunseekers~ ~in person~ on the ~Old Svalich Road~ 
    Strahd casually invites the party to visit his ~Castle Ravenloft~ by way of the ~Black Carriage~. 
    The party wakes up at the ~Vistani Tser Pool Encampment~, invited into ~Madame Eva's Tent~. 
    ~Madame Eva~ gives a ~tarroka reading~.`
  },
  {
    number: 4,
    title: "Dream Pastries",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Lancelot"],
    quests: ["Dream Pastries", "Children of Vallaki", "All Will Be Well"],
    gameDate: "18th Morning of Hammer through 19th Evening of Hammer",
    realDate: "June 20th, 2022",
    numDate: "6/20/22",
    imgUrl: "",
    localLinks: {
      orientation: "/quests/all-will-be-well"
    },
    short: "",
    entry: `    Strahd zombies cross the road 
    Party finds the ~Black Carriage~ that leads to ~Castle Ravenloft~, they continue to walk by, ignoring it. 
    ~Dire wolves~ attack the Sunset wagon 
    Sunseekers find the ~Old Mill~, surrounded by small wooden effigies 
    Young, beautiful Bella from the Old Mill invites the party in for ~Dream Pastries~, which turn out to be hallucinogenic and pleasant 
    Upon leaving the ~Old Mill~, Bella requests that the Sunseekers try to rescue the children from the orphanage in town and bring them back to the ~Old Mill~.
    More wolves attack on the way to Vallaki, as does Viktor Lazlo as a revenant.
    The Sunseekers make it to the ~Vallaki gates~ where they are given orientation and meet the Baron.`
  },
  {
    number: 5,
    title: "Welcome to Vallaki",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird"],
    quests: ["'All Will Be Well!", "Tarroka Reading: The Artificat"],
    gameDate: "20th Day of Hammer",
    realDate: "June 26th, 2022",
    numDate: "6/26/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: `    Breakfast at the ~Blue Water Inn~.
    First visit to Town Square (Lukresh Tannery, Odds N Ends, Stefanovich Apothecary, Endless Delights) 
    ~Blinksy's Toys~ is filled with terror and Ireena dolls.
    ~Madame Genie~ offers relief for the party at the ~Swift Finish~ 
    Return to the ~Blue Water Inn~ to meet Rictavio the Bard - Satisfying the Tarroka reading 'look for an entertaining man with a monkey'`
  },
  {
    number: 6,
    title: "Festival of the Blz Sun",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird"],
    quests: ["'All Will Be Well!'", "Tarroka Reading: The Artifact", "Festival of the Blazing Sun", "Children of Vallaki"],
    gameDate: "21st Day of Hammer through 23rd Day of Hammer",
    realDate: "July 3rd, 2022",
    numDate: "7/3/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: "21st Day of Hammer\n\nVisit to the Cracked Anvil\nHunt wolves and create bracers to sell for 1gp per pair\nMeeting with Rictavio at the Swift Finish\n-real name: Rudolph Van Richten, monster hunter\n-offered insight to card reading\n-offers to investigate things for part\n-offers topographical map [see Journals/Maps]\n\n22nd Day of Hammer, Festival of the Blazing Sun\n\nGuards command the party to pass out flyers\nSt. Andral's Church, meet the two priests\nSt. Andral's Orphanage, Claudia Belasco, Vladislav, lizard boy, hair pulling girl, 10 yr old Szvolt want to roam outside\nFestival of the Blazing Sun ruined on account of rain\n-Lars the guard laughs, is dragged through the streets by the Baron's horse\n-Elizana, in a child's voice, calls out the Baron\n-Orphans are blamed for outcry and sent to stocks\n-German challenges Izek, head guard, as a distraction while the rest of the party tries to rescue the children\n-Saf and Freebird sneak the children out of Vallaki to take to the Old Mill\n-German is incapacitated and brought back to the Burgomaster's mansion while Elizana stealhily follows behind\n\n23rd Day of Hammer\n\nSaf talks to Danika Martikov at the Blue Water Inn, asked about Elizana\nSaf runs into Ireena, who has begun courting the accountant Vasili, and Elizana\n-Elizana talks to the Baron about the missing children and the Barbarian, both issues dismissed by the Baron\n-The party sneaks into the mansion and rescues German the Barbarian\nElizana shows headmistress Claudia Belasco the effigy. Claudia fearfully warns to avoid the Old Mill Coven as they are known for kidnapping children to use as ingredients for their dream pastries\nThe Sunseekers turn their attention immediately to the Old Mill Coven to save whatever is left of the children."
  },
  {
    number: 7,
    title: "Showdown at the Mill",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird"],
    quests: ["Children of Vallaki", "A Message for Cyrus Belview"],
    gameDate: "July 10th, 2022",
    numDate: "7/10/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: "",
  },
  {
    number: 8, 
    title: "Rats in Ravenloft",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Prisoner"],
    quests: ["A Message for Cyrus Belview"],
    gameDate: "26th Day of Hammer",
    realDate: "July 31st, 2022",
    numDate: "7/31/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 9,
    title: "Return to Vallaki",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["None"],
    quests: ["'All Will Be Well!'"],
    gameDate: "27th Day of Hammer",
    realDate: "August 7th, 2022",
    numDate: "8/7/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 10,
    title: "Vallaki Vistani Camp",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Kasimir", "Van Richten", "Vasili"],
    quests: ["'All Will Be Well!", "Coup of Vallaki", "Rescue Arabelle", "Bones of St. Andral"],
    gameDate: "28th and 29th Day of Hammer",
    realDate: "August 21st, 2022",
    numDate: "8/21/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 11,
    title: "Bones of St. Andral",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Ireena", "Kasimir", "Rictavio", "Vasili"],
    quests: ["'All Will Be Well!'", "Bones of St. Andral", "Strange Lights", "Mad Mage in the Mountains"],
    gameDate: "30th Day of Hammer",
    realDate: "August 28th, 2022",
    numDate: "8/28/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 12,
    title: "Feast of St.Andral",
    players: ["Elizana", "German", "Safzira"],
    npcs: ["Freebird", "Ireena", "Vasili"],
    quests: ["Mad Mage in the Mountains", "Bones of St. Anfral"],
    gameDate: "2nd Day of Alturiak",
    realDate: "September 4th, 2022",
    numDate: "9/4/2022",
    imgUrl: "",
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
    gameDate: "4th Day of Alturiak",
    realDate: "September 11th, 2022",
    numDate: "9/11/2022",
    imgUrl: "",
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
    gameDate: "7th Day of Alturiak",
    realDate: "September 26th, 2022",
    numDate: "9/26/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 15,
    title: "Order of the Dragon",
    players: ["Elizana", "Safzira", "Umnos", "Zoro"],
    npcs: ["Kasmir", "Victor", "Freebird", "Ireena"],
    quests: ["Protect Ireena"],
    gameDate: "8th Day of Alturiak",
    realDate: "October 10th, 2022",
    numDate: "10/10/2022",
    imgUrl: "",
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
    gameDate: "9th Day of Alturiak",
    realDate: "October 25th, 2022",
    numDate: "10/25/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 17,
    title: "Ez and the Tome",
    players: ["Elizana", "Safzira", "Umnos", "Zoro"],
    npcs: ["Freebird", "Ezmerelda d'Avenir", "Kasimir", "Viktor the Mage", "Ser Erich"],
    quests: ["The Last Hunting Trip"],
    gameDate: "10th Day of Alturiak",
    realDate: "November 7th, 2022",
    numDate: "11/7/2022",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 18,
    title: "Cold Deep South",
    players: ["Safzira", "Zoro"],
    npcs: ["Kasimir", "Viktor the Mage", "Ser Erich"],
    quests: ["The Last Hunting Trip"],
    gameDate: "8th Day of Alturiak",
    realDate: "November 18th, 2022",
    numDate: "11/18/22",
    imgUrl: "",
    localLinks: {},
    short: "",
    entry: ""
  },
  {
    number: 19,
    title: "The Brazier Room",
    players: ["Elizana", "Umnos"],
    npcs: ["Freebird"],
    quests: ["None"],
    gameDate: "10th Day of Alturiak",
    realDate: "March 25th, 2023",
    numDate: "3/25/2023",
    imgUrl: "",
    localLinks: {
      "dusk elf": "/characters/castle-ravenloft"
    },
    short: "",
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

    Umnos eyes the stones and motions to Elizana to snatch one up just before they are teleported to another room. The room is small and octaganol. The temperature has dropped significantly and pressure has spiked upwards. Outside the a window there are sounds of crushing metal and gnashing teeth followed by the familiar sound of Safzira's voice shouting in the distance "Kasimir!"
     `
  },
  {
    number: 20,
    title: "Gate of Tsolenka",
    players: ["Safzira"],
    npcs: ["Kasimir", "Viktor the Mage", "Ser Erich"],
    quests: ["None"],
    gameDate: "10th Day of Alturiak",
    realDate: "April 23rd, 2023",
    numDate: "4/23/23",
    imgUrl: "",
    localLinks: {
      monstrosity: "/characters/creatures"
    },
    short: "Safzira and Kasimir encounter a monstrosity at the Gate of Tsolenka Pass",
    entry: `    After a days of treading through the coldest parts of Barovia the Southern Sunseekers Safzira, Kasimir, ~Ser Erich~, and Victor finally arrive at ~Tsolenka Pass~, the last stop before the ~Amber Temple~.
    They are met by a large archway blocked by an iron portcullis and magical barrier. Safzira uses her Mage Hand to slip through the iron bars and draw back the heavy gate.  ~Ser Erich~, familiar with the former outpost of his once honorable ~Order of the Silver Dragon~, waves his hand across the magical barrier like a soft wave to an old friend. The magic is calmly dispelled allowing the group to continue. 
    Just before crossing through the archway, the group notices a large and unusual shape beyond the snowy mountain wind.  Kasimir is first to recognize the horror of the monstrosity before them and without hesitation leaps in front of Safzira to keep it at bay. With Ser Erich right behind him, Kasimir throws his elven dagger at the beast followed by a fire bolt. 
    As the beast is struck by the flame, the party starts to make out the vaguely wolf-shaped monstrosity and it's unnatural mechanical limbs and alterations sprouting from fresh stich-wounds and open flesh.  There are rows of mismatched bloodshot eyes staring back at them. 
    One wrong move and the amalgamation swings it's elongated spiny tongue at Kasimir striking him in the chest. Without hesitation, Safzira hits the beast with dissonant whispers and the ~Mad Mage~ finishes the monster off with a magic missile.
    As Safzira rushes to Kasimir's aid, a voice is heard shrieking 'Wolfie!' The party looks up to see a woman swallowing her anger. Disgusted by the revenant, the woman orders everyone else into a nearby tower to escape the cold.`
  }
]

export default logData;