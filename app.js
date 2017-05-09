var express = require('express');
var useragent = require('express-useragent')

var app = express();

app.use(useragent.express())

app.get('/api/whoami', function(req, res, next){
  var software = req.useragent.browser + ' and ' + req.useragent.os;
  res.json({"IP": req.ip,
            "Language": req.acceptsLanguages()[0],
            "Software": software})
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log('app is now listening on port 3000');
});
