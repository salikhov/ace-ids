import React from "react"
import PropTypes from "prop-types"
import styles from "./atis-display.module.css"

class AtisDisplay extends React.Component {
  updateAtis(e) {
    const { callback } = this.props
    const newLetter = e.target.textContent
    callback(newLetter)
  }

  render() {
    const { atis } = this.props
    return (
      <div
        className={styles.div}
        contentEditable={true}
        spellCheck={false}
        onInput={this.updateAtis.bind(this)}
      >
        {atis}
      </div>
    )
  }
}

AtisDisplay.propTypes = {
  letter: PropTypes.string,
  callback: PropTypes.func,
}

export default AtisDisplay
