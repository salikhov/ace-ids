import React from "react"
import RwyArea from "./rwy-area"
import PositionRelief from "./position-relief"
import Outages from "./outages"
import InfoArea from "./info-area"
import Notams from "./notams"

class BottomRightCols extends React.Component {
  render() {
    return (
      <div class="container-bottom-right">
        <div class="col-bottom-right">
          <RwyArea></RwyArea>
          <InfoArea
            text="CFR LAX SFO LAS&#10;&#13;IDAC"
          ></InfoArea>
          <InfoArea text="EDCT SFO LGA JFK EWR CYUL"></InfoArea>
          <InfoArea text=""></InfoArea>
          <InfoArea></InfoArea>
          <InfoArea></InfoArea>
        </div>
        <div class="col-bottom-right">
          <PositionRelief></PositionRelief>
          <Outages></Outages>
          <Notams></Notams>
        </div>
      </div>
    )
  }
}

export default BottomRightCols
