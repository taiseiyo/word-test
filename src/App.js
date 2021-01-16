import React, {Component} from "react";
import firebase from "firebase/app";
import logo from "./logo.svg";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyA_Bx8VfyUxO1twJQrZ9-u37fcNF3lwKrI",
  authDomain: "word-test-916dc.firebaseapp.com",
  projectId: "word-test-916dc",
  storageBucket: "word-test-916dc.appspot.com",
  messagingSenderId: "482569027636",
  appId: "1:482569027636:web:393808c6c616ab7f0e4a61",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "testx",
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <div>fask</div>
      </div>
    );
  }
}

export default App;
