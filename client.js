/* global unirest */

var unirest = require('unirest');
/*require(['unirest'], function (unirest) {
    //foo is now loaded.
});*/

var qnamakerUriBase = "https://westus.api.cognitive.microsoft.com/qnamaker/v1.0";
var knowledgebaseId = "b693c8be-313c-434d-b3a7-dad2d4656039";
var builder = qnamakerUriBase + "/knowledgebases/" + knowledgebaseId + "/generateAnswer";

var qnamakerSubscriptionKey = "a6fbd18b9b2e45b59f2ce4f73a56e1e4";
var headers = {
    "ocp-apim-subscription-key": qnamakerSubscriptionKey,
    "content-type": "application/json",
    "cache-control": "no-cache",
};

//var payload = "{\"question\":\"Why bother with hashing?\"}";
var payload = {"question": "What is hashing?"};

unirest.post(builder)
    .headers(headers)
    .send(payload)
    .end(function (response) {
        console.log(response.body);
    });


/*
unirest.post('http://mockbin.com/request')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send({ "parameter": 23, "foo": "bar" })
.end(function (response) {
    console.log(response.body);
}); 
*/

/*
$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    console.log ("hello world! ");
    event.preventDefault();
    
    dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });

  });

});

*/