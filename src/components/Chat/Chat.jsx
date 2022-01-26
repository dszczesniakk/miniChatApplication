import React, { useState } from 'react'
import SwitchContainer from '../SwitchContainer/SwitchContainer'
import ChatWindow from '../ChatWindow/ChatWindow'

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(1)

  const onToggle = () => {
    selectedUser === 1 ? setSelectedUser(2) : setSelectedUser(1)
  }

  return (
    <div className='main-chat-app'>
      <div className='header'>Chat Application</div>
      <SwitchContainer selectedUser={selectedUser} onChange={onToggle}/>
      <ChatWindow selectedUser={selectedUser}/>
    </div>
  )
}

export default Chat
