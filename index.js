const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const addPushSubscriber = require("./add-push-subscriber.route");
const sendNewsletter = require("./send-newsletter.route");

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);

app.use(express.static('poc-pwa/'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/poc-pwa/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});