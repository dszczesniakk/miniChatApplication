import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const MessageEditor = ({ sendMessage, messageToEdit, closeEditMode }) => {
  const [providedText, setProvidedText] = useState('')
  const textRef = useRef(null)

  const prepareSendMessage = () => {
    sendMessage(providedText)
    setProvidedText('')
  }

  const closeEdit = () => {
    setProvidedText('')
    closeEditMode()
  }

  const onEnterPress = (e) => {
    if (e.key === 'Enter' && providedText) prepareSendMessage()
  }

  useEffect(() => {
    document.getElementById("messageinput").addEventListener('keypress', onEnterPress)
    return () => document.getElementById("messageinput").removeEventListener('keypress', onEnterPress)
  })

  useEffect(() => {
    if (messageToEdit) {
      setProvidedText(messageToEdit.text)
      if (textRef.current) {
        textRef.current.focus();
      }
    }
  }, [messageToEdit])

  return (
    <div className='message-editor'>
      <input
        id='messageinput'
        ref={textRef}
        type='text'
        value={providedText}
        onChange={(e) => setProvidedText(e.target.value)}
        maxLength='200'
      />
      {messageToEdit ? (
        <div
          className='cancel-button'
          onClick={() => closeEdit()}
        >
          Cancel editing
        </div>
      ) : null}
      <div
        className={providedText ? 'send-button' : 'send-button disabled'}
        onClick={() => prepareSendMessage()}
      >
        {messageToEdit ? 'Edit' : 'Send'}
      </div>
    </div>
  )
}

MessageEditor.propTypes = {
  sendMessage: PropTypes.func,
  messageToEdit: PropTypes.shape({
    createdAt: PropTypes.number,
    updatedAt: PropTypes.number,
    text: PropTypes.string,
    type: PropTypes.string,
    userId: PropTypes.number,
    userFullName: PropTypes.string
  }),
  closeEditMode: PropTypes.func
}

export default MessageEditor
