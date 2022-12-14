const core = require('@actions/core');

try {
    const text = core.getInput('text');
    const reverse = text ? text.split('').reverse().join('') : text;

    console.log('');
    console.log(` Input: ${text}`);
    console.log(`Output: ${reverse}`);

    core.setOutput("input", text);
    core.setOutput("reverse", reverse);
} catch (error) {
    core.setFailed(error.message);
}