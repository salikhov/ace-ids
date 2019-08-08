import React from "react"
import styles from "./atis-display.module.css"

class AtisDisplay extends React.Component {
  render() {
    return (
      <div className={styles.div} contentEditable={true}>
        H
      </div>
    )
  }
}

export default AtisDisplay
