import React from "react"

const InputArea = ({ label, name }) => (
  <div style={{ marginTop: `5px` }}>
    <label style={{ display: `block` }} htmlFor={name}>
      {label}
    </label>
    <textarea
      rows="8"
      id={name}
      name={name}
      style={{
        padding: `5px`,
        borderRadius: `5px`,
        border: `2px solid #333`,
        width: `100%`,
      }}
    ></textarea>
  </div>
)

export default InputArea
