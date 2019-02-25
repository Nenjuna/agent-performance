import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import firestore from "firebase/firestore";

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
var storage = firebase.storage();

