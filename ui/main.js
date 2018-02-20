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
                     var span = document.getElementById('counter');
                     span.innerHTML = counter.toString();
                }
         }
         //Make the request
     };
    request.open('GET','http;//nikhilprabhat03051999.imad.hasura-app.io',true);
    request.send(null);
    
    
     
 };
