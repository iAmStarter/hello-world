import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        // const { count } = this.state
        const { count, increamentCount } = this.props
        return (
            <div>
                <button onClick={increamentCount}>
                    {this.props.name} Clicked {count} times
                </button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)