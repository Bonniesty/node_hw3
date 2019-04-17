var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require("fs");
/* GET external url  */
// router.get('/get', function(req, res, next) {
//   res.send(JSON.stringify({string: 'Hi This is Tianyi Sun API'}));
//
// });

router.get('/', function(req, res, next) {


  request({
    url: 'https://random.dog/woof.json'
  }, function (error, response, body) {
    if (!error ) {
      res.body = JSON.parse(body);
      // let image = JSON.parse(body).value;
      // res.json({image})
      res.send(res.body);

      //res.render( 'index',{title:'Dog', content:body});
      //list = res.body;
      //res.json(list);

    }else{
      throw new Error(error);
    }

  });



  // {
  //   uri: 'https://random.dog/woof.json'
  //   // function(error, response, body) {
  //   //   if (!error && response.statusCode === 200) {
  //   //     console.log(body);
  //   //     res.json(body);
  //   //   }
  //   // }
  //   // request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));
  //
  // };

  //res.send(JSON.stringify({string: 'Hi This is Tianyi Sun API'}));




});

module.exports = router;
