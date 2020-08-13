import * as firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyCRem4OVGzZT_Uwu995kLjm8q4TSI1-FNg",
  authDomain: "hale-monument-250206.firebaseapp.com",
  databaseURL: "https://hale-monument-250206.firebaseio.com",
  projectId: "hale-monument-250206",
  storageBucket: "hale-monument-250206.appspot.com",
  messagingSenderId: "698105936156",
  appId: "1:698105936156:web:08ad6fc77025abae93a2d9",
};
firebase.initializeApp(config);

export default firebase;
