// Initialize Firebase
/// TODO 1: Change to your firebase config
///         1. New a Firebase project
///         2. Copy and paste firebase config below
///         Important: Make sure there is databaseURL in the config.
///         If there is no databaseURL in the config, go to firebase console -> Realtime Database to find the databaseURL.
var config = {
    apiKey: "AIzaSyDaZapxn-NxMVX36hIS_bEVKiizj4PywuM",
    authDomain: "lab07109062306.firebaseapp.com",
    databaseURL: "https://lab07109062306-default-rtdb.firebaseio.com",
    projectId: "lab07109062306",
    storageBucket: "lab07109062306.appspot.com",
    messagingSenderId: "105441520193",
    appId: "1:105441520193:web:49f093b7b7887e430774c0",
    measurementId: "G-WFNX649H12"

};
firebase.initializeApp(config);