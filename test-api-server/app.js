const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/test', (req, res) => {
    if (req.body) {
        let { method, url, body } = req.body;

        if (method === 'GET') {
            let startTime = new Date().getTime();

            fetch(url, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(json => {
                    let time = new Date().getTime() - startTime;
                    let data = {
                        time,
                        data: json
                    }
                    res.send(JSON.stringify(data));
                })
        } else if (method === 'POST') {
            let startTime = new Date().getTime();

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            })
                .then(res => res.json())
                .then(json => {
                    let time = new Date().getTime() - startTime;
                    let data = {
                        time,
                        data: json
                    }
                    res.send(JSON.stringify(data));
                })
        }
    } else {
        res.send('Fail');
    }
});

app.listen(4000, () => {
    console.log(`Server are listening on port 4000.`);
})