import React from "react"

class AltimiterDisplay extends React.Component {
  render() {
    return (
      <span
        style={{
          fontSize: `4em`,
          color: `yellow`,
          textAlign: `center`,
          paddingLeft: `7px`,
        }}
        contentEditable={true}
      >
        29.98
      </span>
    )
  }
}

export default AltimiterDisplay
