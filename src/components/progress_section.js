import "./progress_bar.css"
import ProgressBar from "./progress_bar"
import React from "react"

const ProgressSection = ({ percent, color, text, title }) => {
  return (
    <div style={{ display: `flex`, margin: `10px 0` }}>
      <span style={{ width: `30%`, fontSize: `20px`, fontWeight: `bold` }}>
        {title}:
      </span>
      <div style={{ width: `70%` }}>
        <ProgressBar percent={percent} color={color} text={text}></ProgressBar>
      </div>
    </div>
  )
}

export default ProgressSection