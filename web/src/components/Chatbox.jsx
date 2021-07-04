import React, { useEffect, useRef, useState } from "react"

const Chatbox = ({ socket }) => {
  const [userName, setUserName] = useState("Guest")
  const [chatLog, setChatLog] = useState([])
  const [users, setUsers] = useState([])
  const [chatToSend, setChatToSend] = useState("")
  useEffect(() => {
    socket.on("connect", () => {
      socket.on("Chat:NewMessage", ({ name, message }) => {
        setChatLog(prevState => {
          return [...prevState, name + ": " + message]
        })
      })

      socket.on("Chat:UsersChange", (users) => {
        setUsers(users)
      })
      socket.emit("Chat:NewUserRegister", { id: socket.id, userName: socket.id })
    });
  }, [])

  const handleUserNameOnChange = (e) => {
    setUserName(e.target.value)
  }

  const handleChatToSendOnChange = (e) => {
    setChatToSend(e.target.value)
  }

  const handleChatSubmit = (event) => {
    socket.emit("Chat:NewMessage", { name: userName, message: chatToSend })
    setChatToSend("")
    event.preventDefault();
  }

  // const ChatInputField = () => {
  //   return (
  //     <form onSubmit={handleChatSubmit}>
  //       <textarea value={chatToSend} onChange={handleChatToSendOnChange}></textarea>
  //     </form>
  //   )
  // }

  let usersList = users.map((user) => <li key={user}>{user}</li>)

  return (
    <div className="h-full w-3/12 bg-gray-300 flex-none">
      <div>
        Chatbox
      </div>
      <div>
        <ul>
          {usersList}
        </ul>
      </div>
      {/* <ChatInputField /> */}
      <div>
        {
          chatLog.map(
            (ele) => <div>{ele}</div>
          )
        }
      </div>
      <form onSubmit={handleChatSubmit}>
        <label>
          Name:
          <input onChange={handleUserNameOnChange} />
        </label>
        <label>
          Message:
          <textarea value={chatToSend} onChange={handleChatToSendOnChange}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Chatbox;
