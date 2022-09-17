const core = require('@actions/core');

try {
    const text = core.getInput('who-to-greet');
    const reverse = text ? text.split('').reverse().join('') : text;

    console.log(`text ${text}`);
    console.log(`reverse ${reverse}`);

    //core.setOutput("text", text);
    core.setOutput("reverse", reverse);
} catch (error) {
    core.setFailed(error.message);
}