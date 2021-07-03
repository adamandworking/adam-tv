import React, { useEffect, useRef, useState } from "react"

const Chatbox = ({ socket }) => {
  const [chatLog, setChatLog] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id)
      socket.on("Chat:NewUserRegister", (name) => {
        console.log('Another guy connected: ' + name)
      })

      socket.on("message", ({ name, message }) => {
        console.log(name + ': ' + message)
      })

      socket.on("Chat:UsersChange", (users) => {
        console.log(users)
        setUsers(users)
      })
      socket.emit("Chat:NewUserRegister", { id: socket.id, userName: socket.id })
    });
  }, [])

  // useEffect(() => {
  //   setUsersList(users.map((user) => <li key={user}>{user}</li>))
  // }, [users])

  let usersList = users.map((user) => <li key={user}>{user}</li>)

  return (
    <div className="h-full w-3/12 bg-gray-300 flex-none">
      Chatbox
      <ul>
        {usersList}
      </ul>
    </div>
  );
}

export default Chatbox;
