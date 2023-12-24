```javascript
const axios = require('axios');
const config = require('./config.json');

// Function to send feedback request
function send(request) {
    // Get the email config from the config
    const emailConfig = config.email;

    // Define the email API endpoint
    const endpoint = `https://${emailConfig.type}.com/api/v1/send?user_id=${emailConfig.user_id}&api_key=${emailConfig.api_key}`;

    // Define the email data
    const emailData = {
        to: request.to,
        subject: request.subject,
        body: request.body
    };

    // Make a POST request to the email API
    return axios.post(endpoint, emailData)
        .then(response => {
            // Log the response
            console.log('Feedback request sent:', response.data);
        })
        .catch(error => {
            console.error('Error sending feedback request:', error);
        });
}

module.exports = {
    send
};
```
