const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://productivitylevel9k-default-rtdb.europe-west1.firebasedatabase.app/"
});

module.exports = admin;