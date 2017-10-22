var URL = 'https://gist.githubusercontent.com/Stenkilde/6b6fa57bb97840daaa9427c900a32255/raw/852d130da3f75b40b60aa5f97ffc7822edca2090/photosjson.json';
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