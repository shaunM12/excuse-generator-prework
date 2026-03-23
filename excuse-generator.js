// Excuse

// Excuse Generator Module

const who = [
  'My dog',
  'My cat',
  'My neighbor',
  'My boss',
  'My friend',
  'My sibling'
];

const action = [
  'ate',
  'destroyed',
  'stole',
  'hid',
  'broke',
  'lost',
  'spilled on',
  'deleted'
];

const what = [
  'my homework',
  'my phone',
  'my car keys',
  'my laptop',
  'my wallet',
  'my lunch',
  'my project',
  'my alarm clock'
];

const when = [
  'this morning',
  'last night',
  'yesterday',
  'last week',
  'earlier today',
  'on the way to work',
  'during my commute',
  'at the store'
];

/**
 * Generates a random excuse
 * @returns {string} A randomly generated excuse
 */
function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  
  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  return excuse;
}

// Export for ES modules
export { generateExcuse };

// Print excuse when run directly
console.log(generateExcuse());
