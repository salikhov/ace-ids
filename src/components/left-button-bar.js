import React from "react"
import SiaButton from "./sia-button"
import TwoLineButton from "./two-line-button"
import SquareButton from "./square-button"

class LeftButtonBar extends React.Component {
  render() {
    return (
      <div
        style={{ border: `gray 1px solid`, padding: `7px`, marginTop: `7px` }}
      >
        <SiaButton></SiaButton>
        <TwoLineButton line1="Terminal" line2="Gates"></TwoLineButton>
        <TwoLineButton line1="Area" line2="Weather"></TwoLineButton>
        <TwoLineButton line1="Instrument" line2="Procedures"></TwoLineButton>
        <div style={{ overflow: `auto` }}>
          <SquareButton
            line1="Sunset"
            line2="Sunrise"
            first={true}
          ></SquareButton>
          <SquareButton line1="WX" line2="Info"></SquareButton>
        </div>
        <div style={{ overflow: `auto` }}>
          <SquareButton line1="NCT-SFO" line2="LOA" first={true}></SquareButton>
          <SquareButton line1="" line2=""></SquareButton>
        </div>
        <div style={{ overflow: `auto` }}>
          <SquareButton
            line1="Airport"
            line2="Menu"
            first={true}
          ></SquareButton>
          <SquareButton line1="LOC" line2="IDs"></SquareButton>
        </div>
        <div style={{ overflow: `auto` }}>
          <SquareButton
            line1="Dist."
            line2="Remain."
            first={true}
          ></SquareButton>
          <SquareButton line1="Cross" line2="Wind"></SquareButton>
        </div>
      </div>
    )
  }
}

export default LeftButtonBar
