const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 4000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('index');
})

app.listen(PORT,function(error){
        if(error){
            console.log('Error Come In Starting Server',error);
        }
            console.log('Server is running on port ::',PORT);
});



