import firebase from 'firebase';

    const config = {
    apiKey: "AIzaSyATL15UIA5dqZ-8W5QBYazhwMuBcm9CKOo",
    authDomain: "burguer-reina.firebaseapp.com",
    databaseURL: "https://burguer-reina.firebaseio.com",
    projectId: "burguer-reina",
    storageBucket: "burguer-reina.appspot.com",
    messagingSenderId: "964571302410"
  };

  firebase.initializeApp(config);
export default firebase;