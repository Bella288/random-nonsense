exports.handler = async function (event, context) {
  const outputs = [
    "{This|That} [noun] is so [adjective]!",
    "I wish I could [verbPresent] that [noun].",
    "Aren't [noun.pluralForm] just so [adjective]?",
    "There must be at least {1-10} [noun]{s} [location]!",
    "THE [noun.upperCase]! It's eating the {import:common-noun}!",
    "OH NO! THE [noun.upperCase]! It's eating the [adjective] {import:common-noun}!",
    "{A} [noun] is a bit like {a} {import:common-noun}.",
    "Why are those [noun]s [verbIng]?",
    "Where is the {import:common-noun}?",
    "[person.titleCase], why are you [verbIng] that [noun]?",
    "WHY ARE YOU SO [adjective.upperCase]????",
    "[person.titleCase], why are you [verbIng] that [adjective] [noun]?",
    "Why is that [noun] so [adjective]?",
    "[person.upperCase], PLEASE STOP [verbIng.upperCase] THAT [noun.upperCase]!",
    "[person.upperCase], [loctell.upperCase] THAT [noun.upperCase]!",
    "Please do not [verbPresent] {the|this|that|those|these} [noun]{|s}.",
    "This [adjective] thing is actually {a} [noun]!",
    "Please avoid [noun]s at all costs. Failiure to do so may cause injury or death.",
    "What is that [noun] [verbIng]?",
    "Why is that [noun] [verbIng]?",
    "OH CRAP! THAT [noun.upperCase] IS [verbIng.upperCase] THAT [noun2.upperCase]!",
    "HOLY SHIT! THAT [noun.upperCase] IS [verbIng.upperCase] THAT [adjective.upperCase] [noun2.upperCase]!",
    "MAKE IT STOP! THAT [noun.upperCase] IS [verbIng.upperCase] THAT [noun2.upperCase] TO DEATH!",
    "FOR THE LOVE OF ALL THAT IS HOLY, THAT [noun.upperCase] IS [verbIng.upperCase] THAT [adjective.upperCase] [noun2.upperCase] TO DEATH!",
    "Now THAT is one [adjective] [noun]!",
    "Why did that [noun] choose to [verbPresent] that [noun2]?",
    "Why can't that [noun] be more [adjective]?",
    "PLEASE DO NOT THE [noun.upperCase]!",
    "JESUS FUCKING CHRIST, YOU HAD BETTER NOT [verbPresent.upperCase] THAT [adjective.upperCase] [noun.upperCase]!",
    "JESUS FUCKING CHRIST, YOU HAD BETTER NOT [verbPresent.upperCase] THAT [noun.upperCase]!",
    "JESUS FUCKING CHRIST, YOU HAD BETTER STOP [verbIng.upperCase] THAT [adjective.upperCase] [noun.upperCase]!",
    "Why are you addicted to [verbIng] any [adjective] [noun] you come across, [person]?",
    "Why are you addicted to [verbIng] any [noun] you come across, [person]?",
    "[person.upperCase], FOR THE LOVE OF GOD, NEVER [verbPresent.upperCase] A [adjective.upperCase] [noun.upperCase] EVER AGAIN!",
    "[person.upperCase], FOR THE LOVE OF GOD, NEVER [verbPresent.upperCase] A [noun.upperCase] EVER AGAIN!",
    "PUT THE [adjective.upperCase] [noun.upperCase] DOWN!",
    "PUT THE [noun.upperCase] DOWN!",
    "[person], why do you choose to be so [adjective]?",
    "[person], do you know why that [noun] is so [adjective2]?",
    "[person], can you please stop trying to [verbPresent] that [adjective] [noun]?",
    "[person], can you please stop trying to [verbPresent] that [noun]?",
    "[person], stop trying to [verbPresent] that [adjective] [noun]!",
    "[person], stop trying to [verbPresent] that [noun]!",
    "That [adjective] [noun] cannot [verbPresent], [person].",
    "Fun Fact: That [adjective] [noun] {can|cannot} [verbPresent]!",
    "Fun Fact: That [noun] {can|cannot} [verbPresent]!",
    "Please don't leave your [adjective] [noun] in the house. Thanks!",
    "Please don't leave your [noun] in the house. Thanks!",
    "Remember to bring your [adjective] [noun] with you when you leave. Thanks!",
    "Remember to bring your [noun] with you when you leave. Thanks!",
    "NO MORE [adjective.upperCase] [noun.upperCase]S!",
    "NO MORE [noun.upperCase]S!",
    "WHAT THE FUCK, [person.upperCase]?",
    "[person.upperCase], WHAT THE FUCK?",
    "[person.upperCase], WHAT THE FUCK ARE YOU DOING?",
    "[person.upperCase], WHAT THE FUCK ARE YOU DOING TO THAT [noun.upperCase]?",
    "[person.upperCase], WHAT THE FUCK ARE YOU DOING TO THAT [adjective.upperCase] [noun.upperCase]?",
    "What's even worse than a [noun]? A [adjective] [noun2]!",
    "What's even worse than a [adjective] [noun]? A [adjective2] [noun2]!",
    "What's even worse than a [noun]? A [noun2]!",
    "You know what I hate? [noun.titleCase] murderers.",
    "You know what I hate? [adjective.titleCase] [noun] murderers.",
    "You know what I hate? [noun.titleCase] murderers who are [adjective].",
    "You know what I hate? [adjective.titleCase] [noun] murderers who are [adjective2].",
    "You know what I hate? [noun.titleCase] murderers who are [adjective] and [adjective2].",
    "I WILL NOT ACCEPT THAT [noun.upperCase] IN MY HOUSE!",
    "I WILL NOT ALLOW THAT [noun.upperCase] IN MY HOUSE!",
    "I WILL NOT ACCEPT THAT [adjective.upperCase] [noun.upperCase] IN MY HOUSE!",
    "I WILL NOT ALLOW THAT [adjective.upperCase] [noun.upperCase] IN MY HOUSE!",
    "I WILL NOT ACCEPT THAT [noun.upperCase] IN MY HOUSE, [person.upperCase]!",
    "I WILL NOT ALLOW THAT [noun.upperCase] IN MY HOUSE, [person.upperCase]!",
    "I WILL NOT ACCEPT THAT [adjective.upperCase] [noun.upperCase] IN MY HOUSE, [person.upperCase]!",
    "I WILL NOT ALLOW THAT [adjective.upperCase] [noun.upperCase] IN MY HOUSE, [person.upperCase]!",
    "[person.upperCase], I WILL NOT ACCEPT THAT [noun.upperCase] IN MY HOUSE!",
    "YOU KNOW WHAT? FUCK THAT [noun.upperCase] IN PARTICULAR!",
    "YOU KNOW WHAT? FUCK THAT [adjective.upperCase] [noun.upperCase] IN PARTICULAR!",
    "[person.upperCase], YOU KNOW WHAT? FUCK THAT [noun.upperCase] IN PARTICULAR!",
    "[person.upperCase], YOU KNOW WHAT? FUCK THAT [adjective.upperCase] [noun.upperCase] IN PARTICULAR!",
    "[person.upperCase], YOU KNOW WHAT? FUCK THAT [noun.upperCase] IN PARTICULAR, [person.upperCase]!",
    "[person.upperCase], YOU KNOW WHAT? FUCK THAT [adjective.upperCase] [noun.upperCase] IN PARTICULAR, [person.upperCase]!",
    "[person.upperCase], YOU KNOW WHAT? FUCK YOU!",
    "FUCK YOU, [person.upperCase]!",
    "What made that [noun] so [adjective]? A [noun2] [verbPast] it!",
    "What made that [adjective] [noun] so [adjective2]? A [noun2] [verbPast] it!",
    "What made that [noun] so [adjective]? A [adjective2] [noun2] [verbPast] it!",
    "What made that [adjective] [noun] so [adjective2]? A [adjective3] [noun2] [verbPast] it!",
    "What made that [noun] so [adjective]? A [noun2] [verbPast] it, [person]!",
    "What made that [adjective] [noun] so [adjective2]? A [noun2] [verbPast] it, [person]!",
    "Do NOT remove that [noun] from its display, as bad things will happen.",
    "Do NOT remove that [adjective] [noun] from its display, as bad things will happen.",
    "Do NOT remove that [noun] from its display, as bad things will happen, [person].",
    "Do NOT remove that [adjective] [noun] from its display, as bad things will happen, [person].",
    "[person.upperCase], DO NOT REMOVE THAT [noun.upperCase] FROM ITS DISPLAY, AS BAD THINGS WILL HAPPEN!",
    "[person.upperCase], DO NOT REMOVE THAT [adjective.upperCase] [noun.upperCase] FROM ITS DISPLAY, AS UNEXPECTED BAD THINGS WILL HAPPEN!",
    "[person.upperCase], DO NOT REMOVE THAT [noun.upperCase] FROM ITS DISPLAY, AS UNEXPECTED BAD THINGS WILL HAPPEN!",
    "[person.upperCase], DO NOT REMOVE THAT [adjective.upperCase] [noun.upperCase] FROM ITS DISPLAY, AS BAD THINGS WILL HAPPEN!",
    "[person.upperCase], DO NOT REMOVE THAT [noun.upperCase] FROM ITS DISPLAY, AS BAD THINGS WILL HAPPEN, [person.upperCase]!",
    "HELP! There is {a} [noun.upperCase] IN MY HOUSE!",
    "HELP! There is {a} [adjective.upperCase] [noun.upperCase] IN MY HOUSE!",
    "HELP! There is {a} [noun.upperCase] IN MY HOUSE, [person.upperCase]!",
    "HELP! There is {a} [adjective.upperCase] [noun.upperCase] IN MY HOUSE, [person.upperCase]!",
    "[person.upperCase], HELP! There is {a} [noun.upperCase] IN MY HOUSE!",
    "HELP! There is {a} FUCKING [noun.upperCase] IN MY HOUSE AND IT'S [verbIng.upperCase] ME!",
    "HELP! There is {a} FUCKING [adjective.upperCase] [noun.upperCase] IN MY HOUSE AND IT'S [verbIng.upperCase] ME!",
    "HELP! There is {a} FUCKING [noun.upperCase] IN MY HOUSE AND IT'S [verbIng.upperCase] ME [adverb.upperCase]!",
    "HELP! There is {a} FUCKING [adjective.upperCase] [noun.upperCase] IN MY HOUSE AND IT'S [verbIng.upperCase] ME [adverb.upperCase]!",
    "ATTENTION ALL VIEWERS, THERE IS A [noun.upperCase] ON THE SITE COURT YARD AND IT IS FUCKING [adjective.upperCase]!",
    "The [noun] goes into the [noun2] press that presses the [noun3] into a pressed [noun4].",
    "The [noun] goes into the [noun] press that presses the [noun] into a pressed [noun].",
    "Umm, guys, why is there {a} [noun] here? Also, why is it [verbIng]?",
    "Umm, guys, why is there {a} [adjective] [noun] here? Also, why is it [verbIng]?",
    "Umm, guys, why is there {a} [adjective] [noun] here? Also, why is it [verbIng] [adverb]?",
    "No, NO! Get away from me, [noun]!",
    "No, NO! Get away from me, you [adjective] [noun]!",
    "No, NO! Get away from me, [noun]! Also stop [verbIng]!",
    "No, NO! Get away from me, you [adjective] [noun]! Also stop [verbIng]",
    "No, NO! Get away from me, you [adjective] [noun]! Also stop [verbIng] [adverb]!"
  ];
  const noun = [
    "pig","cow","alligator","chicken","zebra","dog","crayfish","pigeon","bird","fish","shark","whale","dolphin","octopus","squid","crab","lobster","shrimp","turtle","frog","toad","snake","lizard","gecko","hamster","rat","mouse","rabbit","bat","wolf","fox","lion","tiger","bear","deer","moose","elk","goose","duck","goat","sheep","horse","pony","donkey","mule","ant","bee","wasp","spider","scorpion","fly","mosquito","gnat","slug","snail","worm","hedgehog","porcupine","otter","seal","walrus","panther","cheetah","jaguar","leopard","monkey","ape","gorilla","baboon","lemur","raccoon","skunk","badger","ferret","weasel","mole","vole","camel","alpaca","llama","buffalo","bison","ox","yak","turkey","emu","ostrich","cassowary","kiwi","peacock","flamingo","swan","parrot","crow","raven","magpie","robin","bluejay","cardinal","sparrow","finch","canary","owl","hawk","eagle","falcon","vulture","buzzard","penguin","seal","walrus","otter","manatee","narwhal","orca","platypus","armadillo","sloth","anteater","tapir","capybara","beaver","muskrat","salamander","newt","axolotl","stingray","ray","jellyfish","coral","urchin","anemone","starfish","clam","oyster","mussel","scallop","shrimp","krill","cricket","grasshopper","mantis","caterpillar","butterfly","moth","ladybug","beetle","firefly","dragonfly","mayfly","stickbug","aphid","locust","termit","silverfish","earwig","centipede","millipede","tarantula","tick","mite","horseshoe crab","barnacle","hydra","sponge","hydrozoan","dodo","unicorn","gryphon","dragon","phoenix","mermaid","kraken","sasquatch","yeti","chupacabra","manticore","basilisk","sphinx","golem","zombie","vampire","werewolf","ghost","skeleton","mummy","goblin","troll","ogre","orc","elf","dwarf","fairy","pixie","sprite","imp","gremlin","demon","angel","witch","wizard","warlock","sorcerer","necromancer","robot","alien","android","cyborg","clone","mutant","blob","slime","golem","gargoyle","shadow","wraith","banshee","harpy","minotaur","satyr","centaur","gnome","leprechaun","troll","ogre","giant","colossus","titan","hydra","cerberus","pegasus","kelpie","selkie","crocodile","vampire bat","mongoose","quokka","pangolin","kookaburra","cassowary","okapi","springbok","tamarin","galago","boar","wolverine","dhole","civet","kudu"
  ];
  const common_noun = noun;
  const adjective = [
    "small","big","cute","sneaky","unusual","usual","helpful","mean","gross","huge","mini","helpless","dark","black","stupid","dumb","weird","ugly","useful","useless","acceptable","unacceptable","allowed","prohibited","happy","sad","angry","confused","furious","ecstatic","tired","lazy","energetic","noisy","quiet","silent","loud","brave","scared","terrified","bold","timid","clumsy","graceful","bizarre","fuzzy","spiky","slimy","scaly","feathery","hairy","bald","ancient","modern","rusty","shiny","colorful","drab","dull","brilliant","genius","idiotic","reckless","careful","delicate","fragile","tough","stubborn","obedient","rebellious","random","chaotic","orderly","organized","messy","sticky","runny","crunchy","soft","hard","smooth","rough","fluffy","prickly","flammable","toxic","radioactive","magical","enchanted","cursed","mysterious","legendary","mythical","invisible","glowing","sparkly","twinkly","massive","microscopic","giant","petite","miniature","colossal","sassy","cheeky","mischievous","grumpy","jolly","moody","serious","playful","sleepy","hyper","hungry","thirsty","greedy","generous"
  ];
  const adverb = [
    "quickly","slowly","carefully","carelessly","darkly","brightly","grossly","hugely","minutely","helplessly","stupidly","dumbly","usefully","uselessly","acceptably","unacceptably","allowedly","prohibitedly","happily","sadly","angrily","furiously","lazily","noisily","quietly","bravely","scarily","timidly","clumsily","gracefully","weirdly","awkwardly","bizarrely","fuzzily","spikily","slimily","scalily","featherily","hairily","baldly","anciently","modernly","rustily","shinily","colorfully","drably","dully","brilliantly","recklessly","delicately","fragilely","toughly","stubbornly","obediently","randomly","chaotically","orderly","messily","stickily","runnily","crunchily","softly","hardly","smoothly","roughly","fluffily","pricklily","flammably","toxically","radioactively","magically","enchantedly","cursedly","mysteriously","legendarily","mythically","invisibly","glowingly","sparklingly","twinklingly","massively","microscopically","sassily","cheekily","mischievously","grumpily","jollily","moodily","seriously","playfully","sleepily","hyperly","hungrily","greedily","generously"
  ];
  const verbPresent = [
    "pat","befriend","help","berate","beat","feed","punch","hit","remove","begin","use","assist","stop","lead","break","fix","play","whip","kill","spin","kick","arrest","release","lose","win","rotate","call","hug","chase","hide","seek","throw","catch","drag","lift","drop","ignore","observe","mock","cheer","sing","dance","jump","run","walk","crawl","slide","roll","climb","dig","swim","fly","drive","ride","build","destroy","summon","banish","enchant","curse","bless","paint","draw","write","erase","copy","paste","shout","whisper","laugh","cry","scream","glare","smile","frown"
  ];
  const verbPast = [
    "patted","befriended","helped","berated","beat","fed","punched","hit","removed","began","used","assisted","stopped","led","broke","fixed","played","whipped","killed","spun","kicked","arrested","released","lost","won","rotated","called","hugged","chased","hid","sought","threw","caught","dragged","lifted","dropped","ignored","observed","mocked","cheered","sang","danced","jumped","ran","walked","crawled","slid","rolled","climbed","dug","swam","flew","drove","rode","built","destroyed","summoned","banished","enchanted","cursed","blessed","painted","drew","wrote","erased","copied","pasted","shouted","whispered","laughed","cried","screamed","glared","smiled","frowned"
  ];
  const verbIng = [
    "patting","befriending","helping","berating","beating","feeding","punching","hitting","removing","beginning","using","assisting","stopping","leading","breaking","fixing","playing","whipping","killing","spinning","kicking","arresting","releasing","losing","winning","rotating","calling","hugging","chasing","hiding","seeking","throwing","catching","dragging","lifting","dropping","ignoring","observing","mocking","cheering","singing","dancing","jumping","running","walking","crawling","sliding","rolling","climbing","digging","swimming","flying","driving","riding","building","destroying","summoning","banishing","enchanting","cursing","blessing","painting","drawing","writing","erasing","copying","pasting","shouting","whispering","laughing","crying","screaming","glaring","smiling","frowning"
  ];
  const verbFuture = [
    "will pat","will befriend","will help","will berate","will beat","will feed","will punch","will hit","will remove","will begin","will use","will assist","will stop","will lead","will break","will fix","will play","will whip","will kill","will spin","will kick","will arrest","will release","will lose","will win","will rotate","will call","will hug","will chase","will hide","will seek","will throw","will catch","will drag","will lift","will drop","will ignore","will observe","will mock","will cheer","will sing","will dance","will jump","will run","will walk","will crawl","will slide","will roll","will climb","will dig","will swim","will fly","will drive","will ride","will build","will destroy","will summon","will banish","will enchant","will curse","will bless","will paint","will draw","will write","will erase","will copy","will paste","will shout","will whisper","will laugh","will cry","will scream","will glare","will smile","will frown"
  ];
  const location = [
    "on {the|this|that} island","in {the|this|that} valley","{around|in} here","over there","under this {thing|thingie}","behind this","in the attic","in the basement","at the park","in the garden","in the kitchen","in the bathroom","under the bed","inside the closet","on the rooftop","by the river","at the zoo","on the moon","in the void","in the parallel universe","on the spaceship","in the haunted house","at the library"
  ];
  const loctell = [
    "{get|stay} away from","{get|stay|come} out of","{come|go} towards","run toward","run away from","climb over","crawl under","jump into","escape from","hide behind","peek at","sneak up to","retreat from"
  ];
  const person = [
    "Grandma","Grandpa","Mom","Dad","Mother","Father","Uncle","Sister","Brother","Friend","Teacher","Professor","Mr. President","Mrs. President","Ma'am","Sir","Gentleman","Stranger","Stepmother","Stepfather","Cousin","Aunt","Boss","Neighbor","Janitor","Coach","Principal","Doctor","Nurse","Officer","Detective","Agent","Captain","General","King","Queen","Prince","Princess","Duke","Duchess","Baron","Baroness","Knight","Wizard","Witch","Hero","Villain","Sidekick","Rival","Nemesis","Pal","Buddy","Mate","Companion","Comrade","Colleague","Roommate","Partner","Sibling","Bestie","Frenemy","Arch-nemesis","Mentor","Guide","Guru","Sensei","Master","Apprentice","Intern","Supervisor","Manager","CEO","President","Engineer","Artist","Musician","Chef","Baker","Butler","Maid","Gardener","Librarian","Technician","Mechanic","Driver","Pilot","Astronaut","Alien","Robot","Clone","Ghost","Vampire","Werewolf","Zombie","Mummy","Monster","Elf","Dwarf","Fairy","Pixie","Sprite"
  ];
  function rand(list, usedSet) {
    let filtered = list.filter(x => !usedSet.has(x));
    if (!filtered.length) return null;
    let sel = filtered[Math.floor(Math.random() * filtered.length)];
    usedSet.add(sel);
    return sel;
  }
  function plural(word) {
    if (!word || typeof word !== "string") return "";
    if (word.endsWith('s')||word.endsWith('x')||word.endsWith('z')||word.endsWith('ch')||word.endsWith('sh')) return word+'es';
    if (word.endsWith('y') && !"aeiou".includes(word[word.length-2])) return word.slice(0,-1)+'ies';
    return word+'s';
  }
  function aOrAn(word) { return /^[aeiou]/i.test(word||'') ? 'an' : 'a'; }
  function titleCase(str) { return (str||'').replace(/\w\S*/g,w=>w[0].toUpperCase()+w.slice(1).toLowerCase()); }
  function upperCase(str){ return (str||'').toUpperCase(); }
  function lowerCase(str){ return (str||'').toLowerCase(); }
  function curlyExpand(str) {
    return str.replace(/\{([^{}]+)\}/g, function(_, c) {
      if (/^\d+-\d+$/.test(c)) {
        let [a, b] = c.split('-').map(Number);
        return (a + Math.floor(Math.random() * (b - a + 1))).toString();
      }
      if (/^import:common-noun$/i.test(c)) return '[import_common_noun]';
      let options = c.split('|').map(s => s.trim());
      return options[Math.floor(Math.random() * options.length)];
    });
  }
  function handleS(str, noun) {
    if (!noun) return str;
    return str.replace(/\[noun\]\{s\}/g, plural(noun))
      .replace(/\[noun\]\{s\}/gi, plural(noun))
      .replace(/\[noun\]\{\|s\}/gi, Math.random()<0.5 ? noun : plural(noun));
  }
  function handleA(str, vars) {
    return str.replace(/\{a\}/gi, aOrAn(vars['noun']||vars['import_common_noun']||'thing'))
              .replace(/\{A\}/gi, aOrAn(vars['noun']||vars['import_common_noun']||'thing').toUpperCase());
  }
  function substVars(str, vars) {
    return str.replace(/\[([a-zA-Z0-9_]+)(?:\.([a-zA-Z]+))?\]/g, function(_, v, mod) {
      let val = vars[v] || '';
      if (mod==='pluralForm') return plural(val);
      if (mod==='titleCase') return titleCase(val);
      if (mod==='upperCase') return upperCase(val);
      if (mod==='lowerCase') return lowerCase(val);
      return val;
    });
  }
  function getVars(template) {
    let slots = {};
    let re = /\[([a-zA-Z_]+)(\d*)/g;
    let match;
    while ((match = re.exec(template)) !== null) {
      let type = match[1];
      let num = match[2] ? parseInt(match[2]) : 1;
      if (!slots[type]) slots[type] = new Set();
      slots[type].add(num);
    }
    let used = {
      noun: new Set(),
      adjective: new Set(),
      adverb: new Set(),
      verbPresent: new Set(),
      verbPast: new Set(),
      verbIng: new Set(),
      verbFuture: new Set(),
      person: new Set(),
      location: new Set(),
      loctell: new Set(),
      import_common_noun: new Set()
    };
    let vars = {};
    let typeToList = {
      noun, adjective, adverb, verbPresent, verbPast, verbIng, verbFuture, person, location, loctell, import_common_noun: common_noun
    };
    for (let type in slots) {
      let list = typeToList[type];
      if (!list) continue;
      let nums = Array.from(slots[type]).sort();
      for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let key = type + (n > 1 ? n : '');
        vars[key] = rand(list, used[type]) || '';
      }
    }
    let curlyVars = [];
    let curlyRe = /\[import_common_noun(\d*)\]/g;
    let curlyMatch, curlyIdx = 1;
    while ((curlyMatch = curlyRe.exec(template)) !== null) {
      let key = "import_common_noun" + (curlyMatch[1] ? curlyMatch[1] : (curlyIdx > 1 ? curlyIdx : ""));
      vars[key] = rand(common_noun, used['import_common_noun']) || '';
      curlyIdx++;
    }
    if (curlyIdx > 1 && !vars["import_common_noun"]) {
      vars["import_common_noun"] = rand(common_noun, used['import_common_noun']) || '';
    }
    return vars;
  }
  function postProcessImportCommonNouns(str, vars) {
    let idx = 1;
    return str.replace(/\[import_common_noun(\d*)\]/g, (_, num) => {
      let key = "import_common_noun" + (num ? num : (idx > 1 ? idx : ""));
      idx++;
      return vars[key] || '';
    });
  }
  function generate() {
    let template = outputs[Math.floor(Math.random() * outputs.length)];
    let curlyExpanded = curlyExpand(template);
    let vars = getVars(curlyExpanded);
    let s = curlyExpanded;
    s = postProcessImportCommonNouns(s, vars);
    s = substVars(s, vars);
    s = handleS(s, vars['noun']);
    s = handleA(s, vars);
    s = substVars(s, vars);
    s = s.replace(/\[noun\]s/g, plural(vars['noun']));
    s = s.replace(/\[noun\]/g, vars['noun']);
    return s;
  }
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: generate()
  };
};
