var URL = 'https://gist.githubusercontent.com/Stenkilde/6b6fa57bb97840daaa9427c900a32255/raw/821caf79b7f58a30fafb75f3c8f9358dd2845822/photosjson.json';
var request = require('./Request.js');

function collection() {
    return request.get(URL)
        .then(function(response) {
            return {
                collection: response
            };
        });
}

function get(title) {
    return request.get(URL)
        .then(function(response) {
            return {
                photo: response.find((item) => {
                    return item.title === title
                })
            };
        });
}


module.exports = {
    collection: collection,
    get: get
};