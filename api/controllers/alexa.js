'use strict';
var moment = require('moment');
var util = require('util');
var weather1 = require('weather-js');


module.exports = {
  login,
  weather
};


function login(req, res) {
  var inputDate = req.body.inputDate;
  var user = req.body.id;
  var password = req.body.pwd;
  var response = {};
  //console.log("id" + user);
  //console.log("password" + password);
  if (user == "amit" && password == "1234") {
    response.status = "success";
    response.message = moment(inputDate, "DDMMYYYY").add('1', 'year').add('0', 'month').add('0', 'days').add('0', 'hours').add('0', 'minutes').add('0', "seconds").format("dddd, MMMM Do YYYY, h:mm:ss a");
  }
  else {
    response.status = "error";
  }


  res.json(response);

}

function weather(req, res) {
  // res.json("Hello from Amit");
  weather1.find({ search: 'Bengaluru, KA', degreeType: 'C' }, function (err, result) {
    if (err) {
      var response="we are facing technical error now.please try after sometime";
      res.json(response);
       console.log(err);
       }
    else {
      //console.log(JSON.stringify(result, null, 2));
      var day0Weather=result[0].forecast[0].skytextday;
      console.log(day0Weather);
      var day1Weather=result[0].forecast[1].skytextday;
      console.log(day1Weather);
      var day2Weather=result[0].forecast[2].skytextday;
      console.log(day2Weather);
      //var day3Weather=result[0].forecast[3].skytextday;
     //console.log(day3Weather);
      //var day4Weather=result[0].forecast[4].skytextday;
      //console.log(day4Weather);
      var response="Hello from weather. Todays weather is expected to be "+day0Weather+". tommorows weather will be "+day1Weather+". day after tommorow weather will be " +day2Weather;
      res.json(response);
    }
  });
}

