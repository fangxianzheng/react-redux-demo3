import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrappedComponent) => {

  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = {allProps: {}}
    }
    
    render () {
      const {store} = this.context
      let stateProps = mapStateToProps(store.getState())
      // {...stateProps} 意思是把从store里面所需要的属性拿出来全部通过 `props` 方式传递进去
      return <WrappedComponent {...stateProps} />
    }
  }
  return Connect
}

