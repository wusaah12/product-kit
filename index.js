const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('Welcome to ProductKit!');
  console.log('Let\'s start by documenting your product hypothesis.');
  console.log('');

  const feature = await askQuestion('What feature do you want to build? ');
  const persona = await askQuestion('Who is the specific persona this is for? ');
  const outcome = await askQuestion('What measurable outcome do you expect? ');

  const hypothesis = `If we [${feature}] for [${persona}], then [${outcome}] will happen.`;

  console.log('');
  console.log('Your hypothesis:');
  console.log(hypothesis);

  // Save to file
  const filePath = path.join(__dirname, '.product-kit', 'active_specs', 'hypothesis.md');
  const content = `# Hypothesis [HYP-001]\n\n${hypothesis}\n`;

  fs.writeFileSync(filePath, content);
  console.log(`Saved to ${filePath}`);

  rl.close();
}

main();