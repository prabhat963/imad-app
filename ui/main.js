//Counte Code
var button = document.getElementById('counter');
 
 button.onclick = function () {
     //Create a request
     //Make a request to the counter endpoint
        var request = new XMLHttpRequest();
     
     
     //Capture the response and store it in a variable
        request.onreadystatechange = function() {
             if(request.readyState === XMLHttpRequest.DONE){
             //Take some action
                if(request.status === 200)
                 {
                    var counter = request.responseText;
                     var span = document.getElementById('count');
                     span.innerHTML = counter.toString();
                }
         }
         //Make the request
     };
    request.open('GET','http;//nikhilprabhat03051999.imad.hasura-app.io',true);
    request.send(null);
    
    
     
 };
//Submit Name
var nameInput = document.getElementById('name1');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //Make a request to the server and send the name
  //Capture the list of names and render it as list
  var names = ['name1' , 'name2' , 'name3'];
  var list = '';
  for(var i=0 ; i<names.length;i++)
  {
      list+= <li> + names[i] + </li>;
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};