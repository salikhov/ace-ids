import React from "react"
import PropTypes from "prop-types"

class TwoLineButton extends React.Component {
  render() {
    const line1 = this.props.line1
    const line2 = this.props.line2
    return (
      <button
        class="switch-button"
        style={{
          width: `100%`,
          marginTop: `7px`,
          fontSize: `1.15em`,
        }}
      >
        {line1}
        <br />
        {line2}
      </button>
    )
  }
}

TwoLineButton.propTypes = {
  line1: PropTypes.string,
  line2: PropTypes.string,
}

export default TwoLineButton
