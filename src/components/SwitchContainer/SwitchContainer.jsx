import React from 'react'
import PropTypes from 'prop-types'

import Switch from '../SwitchContainer/Switch/Switch'

function SwitchContainer({ selectedUser, onChange }) {
  return (
    <div className='switch-container'>
      <div className='switch-option'>John Doe</div>
      <Switch isChecked={selectedUser === 2} onChange={onChange} />
      <div className='switch-option'>Krystian Pach</div>
    </div>
  )
}

SwitchContainer.propTypes = {
  selectedUser: PropTypes.number,
  onChange: PropTypes.func
}

export default SwitchContainer
