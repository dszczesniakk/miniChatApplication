import React, { useState } from 'react'

import ChatWindow from '../ChatWindow/ChatWindow'
import Switch from '../Switch/Switch'

const Chat = () => {
  const [selectedUserId, setSelectedUserId] = useState(1)

  const onToggle = () => {
    selectedUserId === 1 ? setSelectedUserId(2) : setSelectedUserId(1)
  }

  return (
    <div className='main-chat-app'>
      <div className='header'>Chat Application</div>
      <div className='switch-container'>
        <div className='switch-option'>John Doe</div>
        <Switch isChecked={selectedUserId === 2} onChange={onToggle} />
        <div className='switch-option'>Krystian Pach</div>
      </div>
      <ChatWindow selectedUserId={selectedUserId}/>
    </div>
  )
}

export default Chat
