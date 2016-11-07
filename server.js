var express = require('express');
var app = express();

app.get('/', function(req, res) {

    var fullname = req.query.fullname || '';
    var arFullname = fullname.split(' ');

    var lastName = '';
    var name = '';
    var secondName = '';
    var result = '';
    if(arFullname.length > 3){
        result = 'Invalid fullname';
    }else{
        if(arFullname.length)
            lastName = arFullname.pop()+' ';

        if(arFullname.length)
            secondName =  arFullname.pop();

        if(arFullname.length)
            name =  arFullname.pop();


        if(name) name = name.substring(0,1)+'. ';

        if(secondName) secondName = secondName.substring(0,1)+'. ';

        result = lastName + name + secondName
    }




    res.send(result);

}).listen(3000, () => {
    console.log('app started');
});