import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_Bx8VfyUxO1twJQrZ9-u37fcNF3lwKrI",
  authDomain: "word-test-916dc.firebaseapp.com",
  databaseURL: "https://word-test-916dc-default-rtdb.firebaseio.com",
  projectId: "word-test-916dc",
  storageBucket: "word-test-916dc.appspot.com",
  messagingSenderId: "482569027636",
  appId: "1:482569027636:web:393808c6c616ab7f0e4a61",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let db = firebase.firestore();
let text_list = [];
// cliant sdk から firestore からとれる
// 以下を変更する

let start_word = db
  .collection("words")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      text_list.push(doc.id);
    });
  });

// Manage this value with firebase
// let text_list = ["test", "red", "value", "blue", "word"];
let run = async () => {
  await start_word;
  ReactDOM.render(
    <React.StrictMode>
      <App text_list={text_list} />
    </React.StrictMode>,
    document.getElementById("question"),
  );
  reportWebVitals();
};

run();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
