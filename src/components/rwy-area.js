import React from "react"

class RwyArea extends React.Component {
  render() {
    return (
      <div
        contentEditable={true}
        spellCheck={false}
        style={{
          color: `yellow`,
          fontSize: `4em`,
          fontWeight: `bold`,
          fontFamily: `'Courier New', Courier, monospace`,
        }}
      >
        AW 260 11
        <br />
        28LA 260 09
        <br />
        28RA 260 09
        <br />
        01LD 240 13
        <br />
        01RD 260 11
      </div>
    )
  }
}

export default RwyArea
