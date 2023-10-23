const admin = require('firebase-admin');

const serviceAccount = require('key-json-from-firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

function PushNotif(deviceToken) {
    const message = {
        token: deviceToken,
        notification: {
            title: 'Happy Birthday!',
            body: 'happy birthday we wish you the best, dont forget we offer special treats for you check your email!',
        },
    };

    // Send the message
    messaging
        .send(message)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
}


module.exports = {
    PushNotif
}

