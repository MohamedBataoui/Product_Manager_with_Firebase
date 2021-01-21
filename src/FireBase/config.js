import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDeqI26TgFApXtvoGgN-ss5AG5e6HiIDIQ",
  authDomain: "products-manager-2d27d.firebaseapp.com",
  projectId: "products-manager-2d27d",
  storageBucket: "products-manager-2d27d.appspot.com",
  messagingSenderId: "748749856886",
  appId: "1:748749856886:web:69b0c61cb250cc7ee3bf57",
};
// Initialize Firebase
const store = firebase.initializeApp(firebaseConfig);
export const db = store.firestore();
