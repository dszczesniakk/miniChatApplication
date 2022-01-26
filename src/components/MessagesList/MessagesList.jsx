import React from 'react'
import PropTypes from 'prop-types'

import Message from '../Message/Message'

const MessagesList = ({ selectedUser, messages, editMessage, deleteMessage }) => {
  return (
    <div className='messages-list'>
      {messages.map((message, i) => (
        <Message
          key={`${i}-${message.createdAt}`}
          messageData={message}
          selectedUser={selectedUser}
          editMessage={editMessage}
          deleteMessage={deleteMessage}
        />
      ))}
    </div>
  )
}

MessagesList.propTypes = {
  selectedUser: PropTypes.number,
  messages: PropTypes.array,
  editMessage: PropTypes.func,
  deleteMessage: PropTypes.func
}

export default MessagesList
