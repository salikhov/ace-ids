import React from "react"

class ImportantNotice extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: `10px`,
          height: `100px`,
          border: `gray 1px solid`,
          color: `cyan`,
          textAlign: `center`,
          fontSize: `4em`,
          verticalAlign: `middle`,
          lineHeight: `1.54`,
        }}
        contentEditable={true}
        spellCheck={false}
      >
        CRANE OPERATING .1
      </div>
    )
  }
}

export default ImportantNotice
