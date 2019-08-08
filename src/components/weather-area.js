import React from "react"

class WeatherArea extends React.Component {
  render() {
    return (
      <div style={{ color: `red`, fontSize: `1.8em` }} contentEditable="true">
        Y 2156Z 30011KT 10SM FEW150 SCT200 29/15 A2988
        <br />
        CVFP L28/D01R BIRDS ***RWY 1L CLSD*** NO TRANSITIONS
      </div>
    )
  }
}

export default WeatherArea
