var childProcess = require('child_process')
var execFile = childProcess.execFile
var flow = require('flow-bin');

var express = require('express');
var bodyParser = require('body-parser')
var uuidv1 = require('uuid/v1')
var fs = require('fs')
var http = require('http')
var stream = require('stream')
var app = express();

app.use(bodyParser());

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' webserver')
    if (req.method == "OPTIONS") res.send(200);
    else next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/flow', function (req, res) {
    var reqBody = req.body
    console.log(req.body)
    if (!reqBody.contract) {
        res.json({
            error: 'need contract argument'
        })
        return
    }
    var contractContent = reqBody.contract
    var fileName = "tmp_contract_" + uuidv1() + ".js"
    var filepath = __dirname + '/' + fileName
    var client = childProcess.execFile(flow, ['check-contents'], function (err, stdout) {
        if (stdout && stdout.length > 10) {
            res.json({
                error: stdout
            })
        } else {
            res.json({
                result: true
            })
        }
        console.log(err, stdout);
    });
    client.stdin.write(contractContent)
    client.stdin.end()
})

app.listen(3000, '0.0.0.0', function () {
    console.log('Example app listening on port 3000!');
});
