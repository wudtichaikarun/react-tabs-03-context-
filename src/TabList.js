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

export default TabsListComponent