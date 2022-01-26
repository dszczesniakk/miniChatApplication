import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

import Chat from './components/Chat/Chat'

const App = () => {
  return <Chat/>
}

ReactDOM.render(<App />, document.getElementById('root'))