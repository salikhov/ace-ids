import React from "react"

class Outages extends React.Component {
  render() {
    return (
      <div
        style={{ marginTop: `7px`, border: `1px grey solid`, color: `#fff282` }}
      >
        <div
          style={{
            borderBottom: `1px grey solid`,
            fontSize: `1.5em`,
            textAlign: `center`,
          }}
        >
          OUTAGES / CLOSURES
        </div>
        <div
          contentEditable={true}
          spellCheck={false}
          style={{ fontSize: `1.2em` }}
        >
          APRCH NIGHT STEP 5 OTS, CRANES
          <br />
          RAMP A 821-0422
          <br />
          UAL 767 OR LARGER NO RY28 TK/NT
          <br />
          NO A380/B748 EB ON TWY H BTN A &amp; B<br />
          TWY E CLSD BTN 28R AND V<br />
          <br />
          TWY E CLSD BTN TWY C AND 01L
          <br />
          TWY V CLSD BTW TWY E AND 01L
          <br />
          TWY L BTW 19L / V, TWY E BTW 19L/L CLSD
          <br />
        </div>
      </div>
    )
  }
}

export default Outages
