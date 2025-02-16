const axios = require('axios');

axios.get('https://api.api-ninjas.com/v1/quotes', {
    headers: { 'X-Api-Key': 'L2yYD1cXRfAnUTp7BUIUHg==XUiAv8xAAmbdvAob' }
})
    .then(response => {
        const quote = response.data[0];
        console.log(`"${quote.quote}" - ${quote.author}`);
    })
    .catch(error => console.error('Error fetching quote:', error));