import React from 'react'
import Video from "../images/video.png"
import addUser from "../images/add-user.png"
import Menu from "../images/dots.png"
import Messages from './Messages'
import ChatInput from './ChatInput'

const ChatMain = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontWeight:"500",color:"white"}}>Sundar</span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={addUser} alt="" />
          <img src={Menu} alt="" />
        </div>
      </div>
      <Messages/>
      <ChatInput/>
    </div>
  )
};

export default ChatMain;
