var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function(req, res) {

    var fullname = req.query.fullname || '';



    fullname = fullname.replace(/\s+/g, ' ');
    fullname = fullname.trim();
    console.log(fullname);
    var arFullname = fullname.split(' ');

    var lastName = '';
    var name = '';
    var secondName = '';


    if(arFullname.length > 3 || !fullname || /\d/.test(fullname) || /_/.test(fullname)|| /\//.test(fullname)){
        result = 'Invalid fullname';
    }else{

        if(arFullname.length){
            lastName = arFullname.pop();
            lastName = lastName.toLowerCase();
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }

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



        result = lastName + name.toUpperCase() + secondName.toUpperCase();
    }




    res.send(result);

}).listen(3000, () => {
    console.log('app started');
});