/*
import React, { Component } from 'react'

class TabsListComponent extends Component {
  render() {
    return (
      <ul className='nav nav-tabs'>
        {
          this.props.children
        }
      </ul>
    )
  }
}
*/

// ----- Refactor change Component to Stateless functional component -----

import React from 'react'
import PropTypes from 'prop-types'

const TabsListComponent = ({ children }) => (
  <ul className='nav nav-tabs'>{ children }</ul>
)

TabsListComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default TabsListComponent