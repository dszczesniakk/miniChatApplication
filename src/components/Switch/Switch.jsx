import React from 'react'
import PropTypes from 'prop-types'

function Switch({ isChecked, onChange }) {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={onChange}/>
        <span className="slider round"></span>
      </label>
    </div>
  )
}

Switch.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Switch

