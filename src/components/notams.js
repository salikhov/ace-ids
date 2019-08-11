import React from "react"

class Notams extends React.Component {
  render() {
    return (
      <div
        style={{
          border: `1px grey solid`,
          color: `#fff282`,
          fontSize: `1.2em`,
          marginLeft: `225px`,
          marginTop: `7px`,
        }}
      >
        NOTAMS:&nbsp;&nbsp;&nbsp;&nbsp;
        <span contentEditable={true} spellCheck={false}>
          7/29
        </span>
      </div>
    )
  }
}

export default Notams
