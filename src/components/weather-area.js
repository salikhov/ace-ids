import React from "react"
import PropTypes from "prop-types"

class WeatherArea extends React.Component {
  updateMetar(e) {
    const { callback } = this.props
    const newMetar = e.target.textContent
    callback(newMetar)
  }

  render() {
    const { metar, atis } = this.props
    return (
      <div style={{ color: `red`, fontSize: `1.8em` }}>
        <span>{atis}</span>{" "}
        <span
          contentEditable={true}
          spellCheck={false}
          onBlur={this.updateMetar.bind(this)}
        >
          {metar}
        </span>
        <br />
        <span spellCheck={false} contentEditable={true}>
          CVFP L28/D01R BIRDS ***RWY 1L CLSD*** NO TRANSITIONS
        </span>
      </div>
    )
  }
}

WeatherArea.propTypes = {
  atis: PropTypes.string,
  metar: PropTypes.string,
  callback: PropTypes.func,
}

export default WeatherArea
