import React from "react"

class RvrButton extends React.Component {
  render() {
    return (
      <div style={{ border: `gray 1px solid`, padding: `7px` }}>
        <button
          class="switch-button"
          style={{ width: `100%`, fontSize: `2.2em` }}
        >
          RVR
        </button>
      </div>
    )
  }
}

export default RvrButton
