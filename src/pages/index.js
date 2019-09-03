import React from "react"
import axios from "axios"

import Layout from "../components/layout"
import SwitchButton from "../components/switch-button"
import FacilityDisplay from "../components/facility-display"
import WeatherArea from "../components/weather-area"
import AtisDisplay from "../components/atis-display"
import AltimiterDisplay from "../components/altimiter-display"
import ImportantNotice from "../components/important-notice"
import RvrButton from "../components/rvr-button"
import LeftButtonBar from "../components/left-button-bar"
import BottomRightCols from "../components/bottom-right-cols"

class IndexPage extends React.Component {
  state = {
    metar: "2156Z 30011KT 10SM FEW150 SCT200 29/15 A2988",
    atis: "H",
  }

  componentDidMount() {
    this.fetchAndTrimMetar()
  }
  fetchAndTrimMetar() {
    axios.get("https://ace-ids-be.herokuapp.com/").then(response => {
      console.log(response)
      this.setState({ metar: response.data })
    })
  }

  updateAtis(newAtis) {
    this.setState({
      atis: newAtis,
    })
  }

  updateMetar(newMetar) {
    this.setState({ metar: newMetar })
  }

  render() {
    const { atis, metar } = this.state
    return (
      <Layout fetchDataCallback={this.fetchAndTrimMetar.bind(this)}>
        <div>
          <SwitchButton text="LC" active={true} disabled={true}></SwitchButton>
          <SwitchButton text="GC" disabled={true}></SwitchButton>
          <SwitchButton text="FD" disabled={true}></SwitchButton>
          <FacilityDisplay name="SAN FRANCISCO ATCT - LC"></FacilityDisplay>
          <SwitchButton
            text="&nbsp;EMERGENCY&nbsp;"
            disabled={true}
            active={true}
          ></SwitchButton>
        </div>
        <br />
        <div class="container">
          <div class="left-col">
            <AtisDisplay
              atis={atis}
              callback={this.updateAtis.bind(this)}
            ></AtisDisplay>
            <AltimiterDisplay metar={metar}></AltimiterDisplay>
            <RvrButton></RvrButton>
            <LeftButtonBar></LeftButtonBar>
          </div>
          <div class="right-col">
            <WeatherArea
              atis={atis}
              metar={metar}
              callback={this.updateMetar.bind(this)}
            ></WeatherArea>
            <ImportantNotice></ImportantNotice>
            <BottomRightCols></BottomRightCols>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
