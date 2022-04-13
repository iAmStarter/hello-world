import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Theerasak'
    }
    console.log('Lifecycle A constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle A getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle A componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('Lifecycle A shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevPropd, prevState) {
    console.log('Lifecycle A getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('Lifecycle A componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'iStarter'
    })

  }

  render() {
    console.log('Lifecycle A render')
    return (
      <div>
        <div> Lifecycle A</div>
        <button onClick={this.changeState}>changeState</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA