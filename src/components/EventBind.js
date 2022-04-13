import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     console.log(this)
    //     this.setState({
    //         message: 'Google Bye'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Google Bye'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={() => this.clickHandler.bind(this)} >Click Call Message</button> */}
                {/* <button onClick={() => this.clickHandler()} >Click Call Message</button> */}
                <button onClick={this.clickHandler} >Click Call Message</button>
            </div>
        )
    }
}

export default EventBind
