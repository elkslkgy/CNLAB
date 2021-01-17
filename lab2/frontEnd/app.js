const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.get(/\/*/, (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`${ip} is asking for wifi`);
    res.setHeader("Content-type", "text/html")
    res.send(`
        <html>
        <head>
            
            <meta charset="utf-8">
            <meta http-equiv="refresh" content="5">
            <!-- <meta name="viewport" content="width=device-width"> -->
            <title>Lab2</title>
            <link rel="stylesheet" type="text/css" href="/static/style.css">
            <script type="text/javascript" src="/static/main.js"></script>
        </head>

        <body>
            <div class="content">
                <div class="words">

                    <table class="table" id="table">
                        <h1>這就是簡易的監控流量介面</h1>
                        <button onclick="Add()">Add</button>
                        <tr>
                            <th>pkts</th>
                            <th>bytes</th>
                            <th>source</th>
                            <th>destination</th>
                            <th>delete</th>
                        </tr>
                        <tr id=0>
                            <td>484</td>
                            <td>370555</td>
                            <td>0.0.0.0/0</td>
                            <td>10.4.02.105</td>
                            <td><button id=0 onclick="DeleteOnClick(id)">Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>
            </body>
            
        </html>

    `);
});

app.listen(8888);
console.log("start listening on port 8888!!")
