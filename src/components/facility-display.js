import React from "react"

class FacilityDisplay extends React.Component {
  render() {
    const name = this.props.name
    return <button class="facDisplay">{name}</button>
  }
}

export default FacilityDisplay
