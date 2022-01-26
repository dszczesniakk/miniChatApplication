import React from 'react'
import PropTypes from 'prop-types'

import { format } from 'date-fns'

function Message({ messageData, selectedUserId, editMessage, deleteMessage }) {
  const formattedDate = format(new Date(messageData.createdAt), 'HH:mm')

  return (
    selectedUserId === messageData.userId ? (
      <div className='message-wrapper left'>
        <div>
          <div className='message-body'>
            <div className='author'>{messageData.userFullName}</div>
            <div className='text'>{messageData.text}</div>
          </div>
          <div className='message-action-buttons'>
            <div>{formattedDate}</div>
            <div onClick={() => editMessage(messageData.id)}>edit</div>
            <div onClick={() => deleteMessage(messageData.id)}>delete</div>
          </div>
        </div>
        <img src={messageData.avatar} />
      </div>
    ) : (
      <div className='message-wrapper right'>
        <img src={messageData.avatar} />
        <div>
          <div className='message-body'>
            <div className='author'>{messageData.userFullName}</div>
            <div className='text'>{messageData.text}</div>
          </div>
          <div className='message-action-buttons'>
            <div>{formattedDate}</div>
          </div>
        </div>
      </div>
    )
  )
}

Message.propTypes = {
  messageData: PropTypes.shape({
    createdAt: PropTypes.number,
    updatedAt: PropTypes.number,
    text: PropTypes.string,
    type: PropTypes.string,
    userId: PropTypes.number,
    userFullName: PropTypes.string
  }),
  selectedUserId: PropTypes.number,
  editMessage: PropTypes.func,
  deleteMessage: PropTypes.func
}

export default Message

