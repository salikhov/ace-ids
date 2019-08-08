import React from "react"

class PositionRelief extends React.Component {
  render() {
    return (
      <div
        style={{ border: `1px grey solid`, color: `cyan`, fontSize: `0.9em` }}
      >
        <div
          style={{
            borderBottom: `1px grey solid`,
            textAlign: `center`,
            color: `darkgreen`,
            fontSize: `1.5em`,
          }}
        >
          Position Relief Checklist
        </div>
        <div contentEditable={true}>
          <br />
          A. Status Information Area.
          <br />
          B. Coordination Effected/Pending.
          <br />
          C. WX, PIREPs, SIGMETs, AIRMETs, CWAs, NOTAMs
          <br />
          D. Special Activities, Requests, or Instructions, Noise Abatement.
          <br />
          E. Aircraft Standing by for Servies and Communication Status.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. PDC/CPDLC&nbsp;&nbsp;2.
          CFRV/FRC&nbsp;&nbsp;3. Autosend On/Off
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}

export default PositionRelief
