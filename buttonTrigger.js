```javascript
const flicClient = require('node-flic');
const config = require('./config.json');

// Create Flic client
const client = new flicClient.FlicClient(config.button.id);

// Listen for button press
client.on('buttonSingleOrDoubleClickOrHold', (clickType, wasQueued, timeDiff) => {
    if (clickType === 'ButtonSingleClick') {
        console.log('Button was clicked');
        triggerFeedbackRequest();
    }
});

// Function to trigger feedback request
function triggerFeedbackRequest() {
    const identifyRecipient = require('./identifyRecipient.js');
    const composeRequest = require('./composeRequest.js');
    const sendRequest = require('./sendRequest.js');

    // Identify recipient
    const recipient = identifyRecipient.identify(config.crm);

    // Compose feedback request
    const request = composeRequest.compose(config.feedback_request_template, recipient);

    // Send feedback request
    sendRequest.send(config.email, request);
}

// Start scanning for button
client.startScanning();
```
