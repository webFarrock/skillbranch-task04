var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function(req, res) {

    var fullname = req.query.fullname || '';
    var arFullname = fullname.split(' ');

    var lastName = '';
    var name = '';
    var secondName = '';


    if(arFullname.length > 3 || !fullname || /\d/.test(fullname) || /_/.test(fullname)|| /\//.test(fullname)){
        res.send('Invalid fullname');
    }else{

        if(arFullname.length)
            lastName = arFullname.pop();

        if(arFullname.length)
            secondName =  arFullname.pop();

        if(arFullname.length)
            name =  arFullname.pop();


        if(name){
            name = name.substring(0,1)+'.';
        }

        if(secondName){
            if(name)
                name += ' ';

            secondName = secondName.substring(0,1)+'.';
        }

        if(name || secondName){
            lastName +=' ';
        }



        result = lastName + name + secondName
    }




    res.send(result);

}).listen(3000, () => {
    console.log('app started');
});