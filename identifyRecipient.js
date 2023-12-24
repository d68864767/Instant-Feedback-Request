```javascript
const axios = require('axios');
const config = require('./config.json');

// Function to identify recipient
function identify(crmConfig) {
    // Get the last interaction from the CRM
    return getLastInteraction(crmConfig)
        .then(interaction => {
            // Return the recipient's details
            return {
                name: interaction.contactName,
                email: interaction.contactEmail
            };
        })
        .catch(error => {
            console.error('Error identifying recipient:', error);
            return null;
        });
}

// Function to get the last interaction from the CRM
function getLastInteraction(crmConfig) {
    // Define the CRM API endpoint
    const endpoint = `https://${crmConfig.type}.com/api/v1/interactions?user_id=${crmConfig.user_id}&api_key=${crmConfig.api_key}`;

    // Make a GET request to the CRM API
    return axios.get(endpoint)
        .then(response => {
            // Get the interactions from the response
            const interactions = response.data;

            // Sort the interactions by date (most recent first)
            interactions.sort((a, b) => new Date(b.date) - new Date(a.date));

            // Return the most recent interaction
            return interactions[0];
        });
}

module.exports = {
    identify
};
```
