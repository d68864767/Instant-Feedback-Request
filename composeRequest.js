```javascript
const config = require('./config.json');

// Function to compose feedback request
function compose(recipient) {
    // Get the feedback request template from the config
    const template = config.feedback_request_template;

    // Replace the placeholder in the template with the recipient's name
    const subject = template.subject.replace('{name}', recipient.name);
    const body = template.body.replace('{name}', recipient.name);

    // Return the composed feedback request
    return {
        to: recipient.email,
        subject: subject,
        body: body
    };
}

module.exports = {
    compose
};
```
