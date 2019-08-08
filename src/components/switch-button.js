import React from "react"
import PropTypes from "prop-types"

class SwitchButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: this.props.active, disabled: this.props.disabled }
  }

  onClick = () => {
    if (!this.state.disabled) {
      this.setState({ active: !this.state.active })
    }
  }

  render() {
    const text = this.props.text
    return (
      <button
        onClick={this.onClick}
        class={"switch-button " + (this.state.active ? "red" : "")}
      >
        {text}
      </button>
    )
  }
}

SwitchButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
}

export default SwitchButton
