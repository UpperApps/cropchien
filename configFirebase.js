import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

var config = {
    apiKey: 'AIzaSyDNvhkQuaa3hCqK68MbVLcyjotpM1p5W2U',
    authDomain: 'cropchien-upperapps.firebaseapp.com',
    databaseURL: 'https://cropchien-upperapps.firebaseio.com',
    projectId: 'cropchien-upperapps',
    storageBucket: 'cropchien-upperapps.appspot.com',
    messagingSenderId: '1091689741447'
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// It enables Firestorm to create an IndexedDB (See: https://developers.google.com/web/ilt/pwa/working-with-indexeddb).
db.enablePersistence({ experimentalTabSynchronization: true });

const storage = firebase.storage();

export default {
    db,
    storage
};
