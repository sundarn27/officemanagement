import React from 'react'
import ChatMain from '../components/ChatMain'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Chat() {
  return (
    <div>
      <Navbar/>
      <div className="container-chat">
        <div className="chat-box">
            <Sidebar/>
            <ChatMain/>
        </div>
      </div>
    </div>
  )
}

export default Chat