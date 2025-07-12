const axios = require('axios');

// requests in website coingecko.com
async function requestsBTSprice() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'bitcoin',
                vs_currencies: 'usd'
            }
        });
        // transform a normal price
        const price = response.data.bitcoin.usd;
        console.log(`Price BTC: ${price}`);
    } catch (error) {
        console.error('Error fetching BTC price:' ,error.message);
    }
}
// random requests for sources

// requests computer a time
const date = new Date();
let seconds = date.getSeconds();


if(seconds > 8){
    // seconds = 1 >> 60 
    // javascript has doing in miliseconds
    seconds = seconds * 1000;
    // main funk
    setInterval(requestsBTSprice ,seconds);
}   else{
    seconds +9000;
    setInterval(requestsBTSprice ,seconds);
}

