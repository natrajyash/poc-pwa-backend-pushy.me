const USER_SUBSCRIPTIONS = require("./in-memory-db");

const Pushy = require('pushy');
const pushyAPI = new Pushy('c400b2eaa89ea7808db844b5f1ff06b872744cbd4b562cf65fa8d220993fb6b8');

module.exports = function sendNewsletter(req, res) {

    console.log('Total subscriptions', USER_SUBSCRIPTIONS.length);

    if (USER_SUBSCRIPTIONS.length > 0) {
        // Set push payload data to deliver to device(s) 
        const data = {
            message: 'New Newsletter!'
        };
    
        // Set optional push notification options (such as iOS notification fields)
        const options = {
            notification: {
                badge: 1,
                sound: 'ping.aiff',
                title: 'Test Newsletter',
                body: 'Hello World \u270c',
            },
        };
    
        // Send push notification via the Send Notifications API 
        // https://pushy.me/docs/api/send-notifications 
        pushyAPI.sendPushNotification(data, USER_SUBSCRIPTIONS.map(sub => sub.deviceToken), options, function (err, id) {
            // Log errors to console 
            if (err) {
                console.log('Fatal Error', err);
                return res.sendStatus(500);
            }
    
            // Log success 
            console.log('Push sent successfully! (ID: ' + id + ')');
            return res.status(200).json({message: 'Notifications pushed successfully.'})
        });
    } else {
        return res.status(200).json({message: 'No Devices are registered!'})
    }

}