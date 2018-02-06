import React from 'react'
import PropTypes from 'prop-types'

const Form = props => {
  Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    uidValue: PropTypes.string.isRequired,
    pcodeValue: PropTypes.string.isRequired,
  }

  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label>
          User ID:&nbsp;
          <input
            type="text"
            autoFocus
            name="UID"
            value={props.uidValue}
            onChange={props.onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Postal Code:&nbsp;
          <input
            type="text"
            name="PCODE"
            value={props.pcodeValue}
            onChange={props.onChange}
          />
        </label>
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  )
}

export default Form
