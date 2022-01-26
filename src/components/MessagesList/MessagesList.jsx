import React from 'react'
import PropTypes from 'prop-types'

import Message from '../Message/Message'

const MessagesList = ({ selectedUserId, messages, editMessage, deleteMessage }) => {
  return (
    <div className='messages-list'>
      {messages.map((message, i) => (
        <Message
          key={message.id}
          messageData={message}
          selectedUserId={selectedUserId}
          editMessage={editMessage}
          deleteMessage={deleteMessage}
        />
      ))}
    </div>
  )
}

MessagesList.propTypes = {
  selectedUserId: PropTypes.number,
  messages: PropTypes.array,
  editMessage: PropTypes.func,
  deleteMessage: PropTypes.func
}

export default MessagesList
