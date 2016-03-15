 'use strict'
 var express = require('express');
 var router = express.Router();
 var fs = require('fs');



 router.post('/', (req, res) => {
  fs.readFile('./data/info.json', (err, data) =>{
    if (err) return res.status(499).send(err)

      var info = JSON.parse(data);
    info.push(req.body)
    fs.writeFile('./data/info.json', JSON.stringify(info), (err) => {
      if (err) return res.status(499).send(err)
        res.send(info)
    })
  })
})




 module.exports = router;