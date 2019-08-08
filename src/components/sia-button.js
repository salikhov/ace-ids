import React from "react"

class SiaButton extends React.Component {
  render() {
    return (
      <button
        class="switch-button"
        style={{
          width: `100%`,
          fontSize: `2.2em`,
          color: `yellow`,
          border: `3px outset blue`,
          backgroundColor: `blue`,
        }}
      >
        SIA
      </button>
    )
  }
}

export default SiaButton
