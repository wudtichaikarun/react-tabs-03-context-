import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TabsComponent extends Component {

  static childContextTypes = {
    selectedIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired
  }

  getChildContext = () => {
    return {
      selectedIndex: this.state.selectedIndex,
      onTabChange: this.onTabChange
    }
  }

  state = {
    selectedIndex: this.props.selectedIndex
  }

  onTabChange = (index) => {
    this.setState({ selectedIndex: index })
  }
  
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default TabsComponent