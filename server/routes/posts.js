const express = require('express')
const router = express.Router();
const fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

app.use(express.urlencoded());
router.post('/', (req,res) => {
    var body =  req.param('d');
    var readData = fs.readFileSync('C:/Users/skapoor/Desktop/trial/src/app/dynamicrender/dynamicrender.component.ts','utf8');
    var writeData = readData + body;
    fs.writeFileSync('C:/Users/skapoor/Desktop/trial/src/app/dynamicrender/dynamicrender.component.ts',writeData)
    res.send(writeData);
});

module.exports = router;