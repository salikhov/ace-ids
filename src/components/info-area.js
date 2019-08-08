import React from "react"
import PropTypes from "prop-types"

class InfoArea extends React.Component {
  render() {
    const text = this.props.text
    return (
      <div
        style={{
          border: `gray 1px solid`,
          color: `cyan`,
          fontSize: `1.5em`,
        }}
        contentEditable={true}
      >
        {text}
      </div>
    )
  }
}

InfoArea.propTypes = {
  text: PropTypes.string,
}

export default InfoArea
