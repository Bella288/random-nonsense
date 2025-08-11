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
    "pig","cow","alligator","chicken","zebra","dog","crayfish","pigeon","bird","fish","shark","whale","dolphin","octopus","squid","crab","lobster","shrimp","turtle","frog","toad","snake","lizard","gecko","spider","ant","bee","wasp","fly","mosquito","beetle","butterfly","moth","dragonfly","grasshopper","cricket","cockroach","termite","centipede","millipede","scorpion","tarantula","horse","donkey","cat","jellyfish","worm","wire","fire","hose","house","human","flea","note","ice cube","microphone","water","waiter","animal","creature","muffin","hamster","hamper","child","kid","adult","parent","still water","book","chair","box","couch","sofa","piano","stool","keyboard","mouse","computer","desk","drink","soda","package","bin","garbage can","garbage bin","paint","painting","painter","picture","phone","plant","planter","frame","vaccum","Roomba","robot","stapler","button","pillow","mattress","cushion","wheel","tire","car","truck","semi","wall","spray bottle","outlet","cord","cable","net","network","newt","printer","piston","tank","drill","screwdriver","vent","donut","llama","sign","bubble","rock","pebble","shelf","clock","alien","wet wipe","wipe","pencil","pen","lamp","fridge","world"
  ];
  const common_noun = noun;
  const adjective = [
    "small","big","cute","sneaky","unusual","usual","helpful","mean","gross","huge","mini","helpless","dark","black","stupid","dumb","weird","ugly","useful","useless","acceptable","unacceptable","allowed","prohibited","banned","disallowed","upset","upsetting","round","flat","rectangular","circular","spherical","obtuse","acute","grotesque","shitty","rubbery","depressing","depressed","fine","powdery","doughy","jiggly","rough","extreme","calm","warm","cool","hot","cold","liked","disliked","runny","stiff","quick","slow","strange","poor","rich","centered","defenseless","vengeful","kind","deadly","torturous","tortured","tremendous","dead","full","empty","comfy","bright","fat","escaped","loose","dim","colorful","dull","red","yellow","green","blue","indigo","violet","violent","unstable","stable"
  ];
  const adverb = [
    "quickly","slowly","carefully","carelessly","darkly","brightly","grossly","hugely","minutely","helplessly","stupidly","dumbly","usefully","uselessly","acceptably","unacceptably","allowedly","prohibitively","bannedly","upsettingly","upsetly","roundly","flatly","rectangularly","circularly","spherically","obtusely","acutely","grotesquely","shittily","rubberily","depressingly","depressedly","finely","powderily","doughily","roughly","gently","violently","calmly","extremely","tremendously","terribly","horribly","awfully","wonderfully","beautifully","nicely","poorly","strangely","weirdly","unusually","usually","helpfully","meanly","grossly","hugely","minutely","helplessly","stupidly","dumbly","usefully","uselessly","acceptably","unacceptably","allowedly","prohibitively","in a banned manner"
  ];
  const verbPresent = [
    "pat","befriend","help","berate","beat","feed","punch","hit","remove","begin","use","assist","stop","lead","break","fix","play","whip","kill","spin","kick","arrest","release","lose","win","rotate"
  ];
  const verbPast = [
    "patted","befriended","helped","berated","beat","fed","punched","hit","removed","began","used","assisted","stopped","led","broke","fixed","played","whipped","killed","spun","kicked","arrested","released","lost","won","rotated"
  ];
  const verbIng = [
    "patting","befriending","helping","berating","beating","feeding","punching","hitting","removing","beginning","using","assisting","stopping","leading","breaking","fixing","playing","whipping","killing","spinning","kicking","arresting","releasing","losing","winning","rotating"
  ];
  const verbFuture = [
    "will pat","will befriend","will help","will berate","will beat","will feed","will punch","will hit","will remove","will begin","will use","will assist","will stop","will lead","will break","will fix","will play","will whip","will kill","will spin","will kick","will arrest","will release","will lose","will win","will rotate"
  ];
  const location = [
    "on {the|this|that} island","in {the|this|that} valley","{around|in} here","over there","under this {thing|thingie}","behind this"
  ];
  const loctell = [
    "{get|stay} away from","{get|stay|come} out of","{come|go} towards"
  ];
  const person = [
    "Grandma","Grandpa","Mom","Dad","Mother","Father","Uncle","Sister","Brother","Friend","Teacher","Professor","Mr. President","Mrs. President","Ma'am","Sir","Gentleman","Stranger","Stepmother","Stepfather","Buddy","Dude","Bro","Mr. Vice President","Mrs. Vice President","Kamala Harris","Donald Trump","Joe Biden","Hillary Clinton","Bill Clinton","Bella","Jake","Joe","Jeff","Jeffry","Samantha","James","Jamie","William","Will","Becky","Rebecca","Sara","Bob","Bobby","Richard","Dickie","Rick","Dave","David","Susan","Suzy","Guys","Ladies and Gentlelmen","Ladies","Gentlemen","Dudes","Gals","Girls","Boys","Kids","Children","Adults","Parents","Teachers","Professors","Students","Classmates","Coworkers","Colleagues","Employees","Employers","Bosses","Managers","Supervisors","Subordinates","Peers","Friends","Enemies","Rivals","Competitors","Opponents","Allies","Partners","Associates","Acquaintances","Strangers","Neighbors","Roommates","Housemates","Flatmates","Tenants"
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
