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
          let newChatLog = [...prevState, name + ": " + message]
          if (newChatLog.length > 14) {
            newChatLog.shift()
          }
          return newChatLog
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

  let usersList = users.map((user) => <li key={user}>{user}</li>)

  return (
    <div className="h-full w-full lg:w-4/12 bg-gray-800 text-white p-8">
      <div className="h-full flex flex-col justify-around">
        <div className="flex flex-col items-center justify-center">
          <div className="border-8 rounded-full py-3 px-6 flex items-center justify-center text-sm lg:text-2xl font-mono italic font-bold">
            Chatroom
          </div>
          <div className="text-sm lg:text-2xl font-mono pt-4">
            There {usersList.length == 1 ? "is" : "are"} {usersList.length} {usersList.length == 1 ? "person" : "people"} in the room
          </div>
          <div className="overscroll-contain rounded-3xl w-11/12 border h-32 lg:h-96 m-8 p-4 overflow-x-auto" >
            {
              chatLog.map(
                (ele) => <div className="whitespace-pre-line">{ele}</div>
              )
            }
          </div>
        </div>
        <form onSubmit={handleChatSubmit} className="flex flex-col justify-center">
          <div>
            <label>
              Name:
              <br/>
              <input className="bg-gray-800 border" onChange={handleUserNameOnChange} />
            </label>
          </div>

          <label>
            Message:
            <textarea className=" h-36 w-full bg-gray-800 border" value={chatToSend} onChange={handleChatToSendOnChange}></textarea>
          </label>
          <button className="border w-14 rounded-xl" type="submit" value="Submit" >Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbox;
