import * as firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
firebase.initializeApp(config);

export default firebase;
