import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TabPanelComponent extends Component {

  static contextTypes = {
    selectedIndex: PropTypes.number.isRequired
  }

  render() {
    return (
      this.props.tabIndex === this.context.selectedIndex && 
      <div className='tab-content'>
        <div className='tab-pane active'>{this.props.children }</div>
      </div>
    )
  }
}

export default TabPanelComponent