import React from "react"

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

const IndexPage = () => (
  <Layout>
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
        <AtisDisplay></AtisDisplay>
        <AltimiterDisplay></AltimiterDisplay>
        <RvrButton></RvrButton>
        <LeftButtonBar></LeftButtonBar>
      </div>
      <div class="right-col">
        <WeatherArea></WeatherArea>
        <ImportantNotice></ImportantNotice>
        <BottomRightCols></BottomRightCols>
      </div>
    </div>
  </Layout>
)

export default IndexPage
