const core = require('@actions/core');

try {
    const text = core.getInput('text');
    const reverse = text ? text.split('').reverse().join('') : text;

    console.log(`text ${text}`);
    console.log(`reverse ${reverse}`);

    core.setOutput("text", text);
} catch (error) {
    core.setFailed(error.message);
}