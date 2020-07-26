import React from "react"

const InputField = ({ label, name }) => (
  <div style={{ marginTop: `5px` }}>
    <label style={{ display: `block` }} htmlFor={name}>
      {label}
    </label>
    <input
      style={{
        borderRadius: `5px`,
        border: `2px solid #333`,
        padding: `5px`,
        width: `100%`
      }}
      name={name}
      id={name}
      type="text"
    />
  </div>
)

export default InputField