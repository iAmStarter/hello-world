import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // increamentCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }


    render() {
        // const { count } = this.state
        const {count, increamentCount} = this.props
        return (
            <h1 onMouseOver={increamentCount}> Hovered {count} times</h1>
        )
    }

}

export default UpdateComponent(HoverCounter)