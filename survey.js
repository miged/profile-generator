const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const prompts = [
  { "question": "What's your name? ",
    "answer": "name" },
  { "question": "What's an activity you like doing? ",
    "answer": "activity" },
  { "question": "What do you listen to while doing that? ",
    "answer": "music" },
  { "question": "Which meal is your favourite (eg: dinner, brunch, etc.) ",
    "answer": "meal" },
  { "question": "What's your favourite thing to eat for that meal? ",
    "answer": "food" },
  { "question": "Which sport is your absolute favourite? ",
    "answer": "sport" },
  { "question": "What is your superpower? In a few words, tell us what you are amazing at! ",
    "answer": "superpower" },
];
const answers = {};

const prompt = function(i = 0) {
  if (i < prompts.length) {
    rl.question(prompts[i].question, (answer) => {
      answers[prompts[i].answer] = answer;
      prompt(i + 1);
    });
  } else {
    console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`);
    rl.close();
  }
};

prompt();
