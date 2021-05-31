import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from 'react';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDCNDjIis8JFkp1tL3dRGcfmEy0CqmUMgU",
  authDomain: "fir-b2544.firebaseapp.com",
  projectId: "fir-b2544",
  storageBucket: "fir-b2544.appspot.com",
  messagingSenderId: "558970480210",
  appId: "1:558970480210:web:e8e7787198886ad300618b",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  console.log(messagesRef)
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");


  const sendMessage = async (e) => {
    e.preventDefault();
    const {uid, photoUrl} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      // uid,
      // photoUrl
    })
  }
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoUrl } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoUrl} alt="" />
      <p>{text}</p>
    </div>
  );
}

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>
      {/* <section>{user ? <ChatRoom /> : <SignIn />}</section>
       */}
      <div>
        <ChatRoom />
      </div>
    </div>
  );
}

export default App;
