import React from 'react'

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label>
          User ID:&nbsp;
          <input type="text" autoFocus name="UID" className="UID-input" />
        </label>
      </div>
      <div>
        <label>
          Postal Code:&nbsp;
          <input type="text" name="PCode" />
        </label>
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  )
}

export default Form
