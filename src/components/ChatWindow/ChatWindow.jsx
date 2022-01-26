import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MessagesList from '../MessagesList/MessagesList'
import MessageEditor from '../MessageEditor/MessageEditor'

import { messages } from '../../messages'
import { users } from '../../users'

const ChatWindow = ({ selectedUser }) => {
  const [allMessages, setAllMessages] = useState(messages)
  const [messageToEdit, setMessageToEdit] = useState(null)

  const sendMessage = (text) => {
    if (messageToEdit) {
      const updatedMessages = allMessages.map((message) => {
        if (message.id === messageToEdit.id) {
          return {
            ...messageToEdit,
            text,
            updatedAt: Date.now(),
          }
        } else {
          return message
        }
      })

      setAllMessages(updatedMessages)
      setMessageToEdit(null)
    } else {
      const currentUser = users.find((user) => user.userId === selectedUser)
      const newMessage = {
        id: `${Date.now()}-${selectedUser}`,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        text,
        type: 'txt',
        userId: selectedUser,
        userFullName: currentUser.fullName,
        avatar: currentUser.avatar
      }
  
      setAllMessages([...allMessages, newMessage])
    }
  }

  const deleteMessage = (messageIdToRemove) => {
    const filteredMessages = allMessages.filter((message) => message.id !== messageIdToRemove)
    setAllMessages(filteredMessages)
  }

  const editMessage = (messageIdToEdit) => {
    const message = allMessages.find((message) => message.id === messageIdToEdit)
    setMessageToEdit(message)
  }

  return (
    <div className='chat-window-container'>
      <MessagesList
        selectedUser={selectedUser}
        messages={allMessages}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
      <MessageEditor
        sendMessage={sendMessage}
        messageToEdit={messageToEdit}
        closeEditMode={() => setMessageToEdit(null)}
      />
    </div>
  )
}

ChatWindow.propTypes = {
  selectedUser: PropTypes.number
}

export default ChatWindow

