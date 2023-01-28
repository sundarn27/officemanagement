import React from 'react'
import Add from "../images/choose.png"
import Image from "../images/add-image.png"

const ChatInput = () => {
  return (
    <div className='input'>
      <input type="text" style={{color:"white"}}placeholder='Type Here...' />
      <input style={{display:"none"}}type="file" id="file" />
      <label htmlFor="file">
        <img src={Add} alt="" />
      </label>
      <input style={{display:"none"}}type="file" id="image" />
      <label htmlFor="image">
        <img src={Image} alt="" />
      </label>
      <button>Send</button>
    </div>
  )
};

export default ChatInput;
