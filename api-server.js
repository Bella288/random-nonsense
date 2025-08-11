const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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
  "OH CRAP! THAT [noun.upperCase] IS [verbIng.upperCase] THAT [noun.upperCase]!",
  "HOLY SHIT! THAT [noun.upperCase] IS [verbIng.upperCase] THAT [adjective.upperCase] [noun.upperCase]!",
  "MAKE IT STOP! THAT [noun.upperCase] IS [verbIng.upperCase] THAT [noun.upperCase] TO DEATH!",
  "FOR THE LOVE OF ALL THAT IS HOLY, THAT [noun.upperCase] IS [verbIng.upperCase] THAT [adjective.upperCase] [noun.upperCase] TO DEATH!",
  "Now THAT is one [adjective] [noun]!",
  "Why did that [noun] choose to [verbPresent] that [noun]?",
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
  "[person], do you know why that [noun] is so [adjective]?",
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
  "What's even worse than a [noun]? A [adjective] [noun]!",
  "What's even worse than a [adjective] [noun]? A [adjective] [noun]!",
  "What's even worse than a [noun]? A [noun]!",
  "You know what I hate? [noun.titleCase] murderers.",
  "You know what I hate? [adjective.titleCase] [noun] murderers.",
  "You know what I hate? [noun.titleCase] murderers who are [adjective].",
  "You know what I hate? [adjective.titleCase] [noun] murderers who are [adjective].",
  "You know what I hate? [noun.titleCase] murderers who are [adjective] and [adjective].",
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
  "What made that [noun] so [adjective]? A [noun] [verbPast] it!",
  "What made that [adjective] [noun] so [adjective]? A [noun] [verbPast] it!",
  "What made that [noun] so [adjective]? A [adjective] [noun] [verbPast] it!",
  "What made that [adjective] [noun] so [adjective]? A [adjective] [noun] [verbPast] it!",
  "What made that [noun] so [adjective]? A [noun] [verbPast] it, [person]!",
  "What made that [adjective] [noun] so [adjective]? A [noun] [verbPast] it, [person]!",
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
  "The [noun] goes into the [noun] press that turns the [noun] into a pressed [noun]."
];

const noun = [
  "pig","cow","alligator","chicken","zebra","dog","crayfish","pigeon","bird","fish","shark","whale","dolphin","octopus","squid","crab","lobster","shrimp","turtle","frog","toad","snake","lizard","gecko","spider","ant","bee","wasp","fly","mosquito","beetle","butterfly","moth","dragonfly","grasshopper","cricket","cockroach","termite","centipede","millipede","scorpion","tarantula","horse","donkey","cat","jellyfish^0.5","worm^2","wire","fire","hose","house","human","flea","note","ice cube","microphone","water","waiter","animal","creature","muffin","hamster","hamper","child","kid","adult","parent","still water","book","chair","box","couch","sofa","piano","stool","keyboard","mouse","computer","desk","drink","soda","package","bin","garbage can","garbage bin","paint","painting","painter","picture","phone","plant","planter","frame","vaccum","Roomba","robot","stapler","button","pillow","mattress","cushion","wheel","tire","car","truck","semi","wall","spray bottle","outlet","cord","cable","net","network","newt","printer","piston","tank","drill","screwdriver","vent","donut","llama","sign","bubble","rock","pebble","shelf","clock","alien","wet wipe","wipe","pencil","pen","lamp","fridge","world"
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
  "on {the|this|that} island","in {the|this|that} valley","{around|in} here","over there","under this {thing^2|thingie^0.5}","behind this"
];
const loctell = [
  "{get|stay} away from","{get|stay|come} out of","{come|go} towards"
];
const person = [
  "Grandma","Grandpa","Mom","Dad","Mother","Father","Uncle","Sister","Brother","Friend","Teacher","Professor","Mr. President","Mrs. President","Ma'am","Sir","Gentleman","Stranger","Stepmother","Stepfather","Buddy","Dude","Bro","Mr. Vice President","Mrs. Vice President","Kamala Harris","Donald Trump","Joe Biden","Hillary Clinton","Bill Clinton","Bella","Jake","Joe","Jeff","Jeffry","Samantha","James","Jamie","William","Will","Becky","Rebecca","Sara","Bob","Bobby","Richard","Dickie","Rick","Dave","David","Susan","Suzy","Guys","Ladies and Gentlelmen","Ladies","Gentlemen","Dudes","Gals","Girls","Boys","Kids","Children","Adults","Parents","Teachers","Professors","Students","Classmates","Coworkers","Colleagues","Employees","Employers","Bosses","Managers","Supervisors","Subordinates","Peers","Friends","Enemies","Rivals","Competitors","Opponents","Allies","Partners","Associates","Acquaintances","Strangers","Neighbors","Roommates","Housemates","Flatmates","Tenants"
];

function pickWeighted(list) {
  let pool = [];
  for (let entry of list) {
    let m = entry.match(/(.*)\^([\d.]+)$/);
    if (m) {
      let [_, val, weight] = m;
      let n = Math.round(Number(weight)*100);
      for (let i=0;i<n;i++) pool.push(val.trim());
    } else {
      pool.push(entry);
    }
  }
  return pool[Math.floor(Math.random()*pool.length)];
}
function rand(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
function plural(word) {
  if (word.endsWith('s')||word.endsWith('x')||word.endsWith('z')||word.endsWith('ch')||word.endsWith('sh')) return word+'es';
  if (word.endsWith('y') && !"aeiou".includes(word[word.length-2])) return word.slice(0,-1)+'ies';
  return word+'s';
}
function aOrAn(word) { return /^[aeiou]/i.test(word) ? 'an' : 'a'; }
function titleCase(str) { return str.replace(/\w\S*/g,w=>w[0].toUpperCase()+w.slice(1).toLowerCase()); }
function upperCase(str){ return str.toUpperCase(); }
function lowerCase(str){ return str.toLowerCase(); }
function substVars(str, vars) {
  return str.replace(/\[([a-zA-Z]+)(?:\.([a-zA-Z]+))?\]/g, (_, v, mod) => {
    let val = vars[v] || '';
    if (mod==='pluralForm') return plural(val);
    if (mod==='titleCase') return titleCase(val);
    if (mod==='upperCase') return upperCase(val);
    if (mod==='lowerCase') return lowerCase(val);
    return val;
  });
}
function curlyExpand(str) {
  while (/\{([^{}]+)\}/.test(str)) {
    str = str.replace(/\{([^{}]+)\}/g, (_, c) => {
      if (/^\d+-\d+$/.test(c)) {
        let [a,b] = c.split('-').map(Number); return (a+Math.floor(Math.random()*(b-a+1))).toString();
      }
      if (/^import:common-noun$/i.test(c)) return pickWeighted(common_noun);
      let options = c.split('|').map(s=>s.trim());
      let weighted = [];
      for (let opt of options) {
        let m = opt.match(/(.*)\^([\d.]+)$/);
        if (m) {
          let [__, txt, w] = m;
          for (let i=0;i<Math.round(Number(w)*100);i++) weighted.push(txt.trim());
        } else weighted.push(opt);
      }
      return rand(weighted);
    });
  }
  return str;
}
function handleS(str, noun) {
  return str.replace(/\[noun\]\{s\}/g, plural(noun))
    .replace(/\[noun\]\{s\}/gi, plural(noun))
    .replace(/\[noun\]\{s\}/gi, plural(noun))
    .replace(/\[noun\]\{\|s\}/gi, Math.random()<0.5 ? noun : plural(noun));
}
function handleA(str, vars) {
  return str.replace(/\{a\}/gi, aOrAn(vars['noun']||vars['import_common_noun']))
            .replace(/\{A\}/gi, aOrAn(vars['noun']||vars['import_common_noun']).toUpperCase());
}
function genVars() {
  let nounVal = pickWeighted(noun);
  return {
    noun: nounVal,
    adjective: rand(adjective),
    adverb: rand(adverb),
    verbPresent: rand(verbPresent),
    verbPast: rand(verbPast),
    verbIng: rand(verbIng),
    verbFuture: rand(verbFuture),
    location: curlyExpand(rand(location)),
    loctell: curlyExpand(rand(loctell)),
    person: rand(person),
    import_common_noun: pickWeighted(common_noun)
  };
}
function generate() {
  let template = rand(outputs);
  let vars = genVars();
  let s = template;
  s = curlyExpand(s);
  s = substVars(s, vars);
  s = handleS(s, vars['noun']);
  s = handleA(s, vars);
  s = substVars(s, vars);
  return s;
}

app.get('/generate', (req, res) => {
  res.type('text/plain');
  res.send(generate());
});

app.listen(PORT);
