import "./progress_bar.css"
import React from "react"

const ProgressBar = ({percent, color, text}) => {
  return (
    <div className="container">
      <div className="center-contents">
        <div className="progress-bar">
          <div
            className="progress-bar-done"
            style={{ width: `${percent}%`, backgroundColor: color }}
          >{text}</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar