var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var calculateNumber = function(number) {
    var returnString = '';

    for (var i = 1; i <= number; i++) {
        returnString += fizzle(i) + ' ';
    }
    return returnString;
}

var fizzle = function(number) {
    if ((number % 3 == 0) || (number % 5 == 0)) {
        var result = '';
        result += (number % 3 == 0 ? 'Fizz' : '');
        result += (number % 5 == 0 ? 'Buzz' : '');
        return result;
    }
    return number;
}

app.post('/fizz', function(req, res) {
    var number = req.body.number;
    res.send(calculateNumber(number));
});

app.listen(3000);
console.log('Express server started on port 3000');