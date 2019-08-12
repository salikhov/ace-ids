import React from "react"
import axios from "axios"

class WeatherArea extends React.Component {
  state = {
    metar: "2156Z 30011KT 10SM FEW150 SCT200 29/15 A2988",
  }
  componentDidMount() {
    this.fetchAndTrimMetar()
  }
  fetchAndTrimMetar() {
    axios.get("http://metar.vatsim.net/metar.php?id=KSFO").then(response => {
      const { data } = response
      const noairport = data.substring(7)
      const metar = noairport.substring(0, noairport.indexOf("RMK") - 1)
      this.setState({ metar })
    })
  }
  render() {
    const metar = this.state.metar
    return (
      <div
        style={{ color: `red`, fontSize: `1.8em` }}
        contentEditable={true}
        spellCheck={false}
      >
        H {metar}
        <br />
        CVFP L28/D01R BIRDS ***RWY 1L CLSD*** NO TRANSITIONS
      </div>
    )
  }
}

export default WeatherArea
