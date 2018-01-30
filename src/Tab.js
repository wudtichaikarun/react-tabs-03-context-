/*
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class TabComponent extends Component {

  static contextTypes = {
    selectedIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired
  }

  linkClasses = () => {
    return classNames(
      'nav-link',
      { active: this.props.tabIndex === this.context.selectedIndex }
    )
  }

  handleClick = () => {
    this.context.onTabChange(this.props.tabIndex)
  }

  render() {
    return (
      <li className='nav-item'>
        <a
          href='#' 
          className={ this.linkClasses() } 
          onClick={ this.handleClick } >
            {this.props.children}
        </a>
      </li>
    )
  }
}
*/

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const linkClasses = (tabIndex, selectedIndex) => {
  return classNames(
    'nav-link',
    { active: tabIndex === selectedIndex }
  )
}

const handleClick = (onTabChange, tabIndex) => {
  return () => onTabChange(tabIndex)
}

/* 
use ({children, tabIndex }, {selectedIndex, ontabChange})  instead of (props, context)
becase I don't want to call this valiable like this props.children props.tabIndex 
*/
const TabComponent = ({children, tabIndex }, { selectedIndex, onTabChange }) => (
  <li className='nav-item'>
    <a
      href='#' 
      className={ linkClasses(tabIndex, selectedIndex) } 
      onClick={ handleClick(onTabChange, tabIndex) } >
        { children }
    </a>
  </li> 
)

// Props
TabComponent.prppTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number.isRequired
}

// Context
TabComponent.contextTypes = {
  selectedIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default TabComponent