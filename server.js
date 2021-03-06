var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('Crypto');
var config = {
    user: 'nikhilprabhat03051999',
    database: 'nikhilprabaht03051999',
    host: 'db.imad.hasura-app.io',
    port : '5432',
    password: process.env.DB_PASSWORD,
    
    
};
var app = express();
app.use(morgan('combined'));
var articles = {
        'articleOne' : {
    title : 'Article One ! Nikhil Prabhat',
    heading : 'Article-One',
    date : 'Sept 5, 2018',
    content : `<p>
                This is my content for the first article.
                This is Nikhil Prabhat and is pursuing B.Tech in BPPIMT
            </p>
            <p>
                This is my content for the first article.
                This is Nikhil Prabhat and is pursuing B.Tech in BPPIMT
            </p>`
},
};

 
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var template=`
<html>
    <head>
        <title>
            ${title}
            </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div >
        <div>
        </div>    
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
          ${content}
        </div>
        </div>
    </body>
    
    
    
    
    
    
</html>
`;
return template;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt)
{
    //How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed.toStirng('hex');
    
}



app.get('/hash/:input', function(req,res){
  
  
  var hashedString = hash(req.params.input,'this-is-some-random-string');
  res.send(hashedString);
}
);




var pool = new Pool(config);
app.get('/test-db', function(res,req)
{
   //Make a select request
   //return a response with the result
   pool.query('SELECT * FROM test' , function(err,result){
      if(err)
      {
          res.status(500).send(err, toString());
      }else
      {
          res.send(JSON.stringify(result));
      }
   });
   
   
});
var counter=0;
app.get('/counter', function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/article-one', function(req,res) {
    var articleName = req.params.articleName;
  res.send(createtemplate(articles[articleName]));  
});
app.get('/article-two', function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
}
);
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
