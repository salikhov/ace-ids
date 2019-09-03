import React from "react"
import PropTypes from "prop-types"

class AltimiterDisplay extends React.Component {
  render() {
    const { metar } = this.props
    const index = metar.search(/A[23][0-9][0-9][0-9]/)
    const altimiter =
      metar.substring(index + 1, index + 3) +
      "." +
      metar.substring(index + 3, index + 5)
    return (
      <span
        style={{
          fontSize: `4em`,
          color: `yellow`,
          textAlign: `center`,
          paddingLeft: `7px`,
        }}
      >
        {altimiter}
      </span>
    )
  }
}

AltimiterDisplay.propTypes = {
  metar: PropTypes.string,
}

export default AltimiterDisplay
