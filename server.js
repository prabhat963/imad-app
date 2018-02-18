var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
app.get('/article-one', function(req,res) {
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
