import React from "react"
import PropTypes from "prop-types"

class SquareButton extends React.Component {
  render() {
    const line1 = this.props.line1
    const line2 = this.props.line2
    const first = this.props.first
    return (
      <button
        class="switch-button"
        style={{
          float: `left`,
          fontSize: `0.9em`,
          width: `78px`,
          paddingLeft: `3px`,
          paddingRight: `3px`,
          marginRight: first ? `7px` : `0px`,
          marginTop: `7px`,
        }}
      >
        {line1}
        <br />
        {line2}
      </button>
    )
  }
}

SquareButton.propTypes = {
  line1: PropTypes.string,
  line2: PropTypes.string,
  first: PropTypes.bool,
}

export default SquareButton
