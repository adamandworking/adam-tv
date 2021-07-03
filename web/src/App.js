import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./App.css"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

const socket = io('http://localhost:4000')
function App() {
  return (
    <div className=" min-h-screen">
      <Header/>
      <MainContent socket={socket}/>
    </div >
  );
}

export default App;
