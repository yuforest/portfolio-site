import "./progress_bar.css"
import ProgressBar from "./progress_bar"
import React from "react"

const ProgressSection = ({ percent, color, text, title }) => {
  return (
    <div style={{ display: `flex`, margin: `10px 0`, justifyContent: `space-around` }}>
      <span style={{ width: `35%`, fontSize: `20px`, fontWeight: `bold` }}>
        {title}:
      </span>
      <div style={{ width: `60%` }}>
        <ProgressBar percent={percent} color={color} text={text}></ProgressBar>
      </div>
    </div>
  )
}

export default ProgressSection