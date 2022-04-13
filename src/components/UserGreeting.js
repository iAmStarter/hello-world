import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn && <h1>Welcome Theerasak</h1>
        // return (
        //     this.state.isLoggedIn ? <h1>Welcome Theerasak</h1> : <h1>Welcome Guest</h1>
        // )
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <h1>Welcome Theerasak</h1>
        // } else {
        //     message = <h1>Welcome Guest</h1>
        // }
        // return message

        // if (this.state.isLoggedIn) {
        //     return <div> Welcome Theerasak </div>
        // } else {
        //     return <div> Welcome Guest</div>
        // }

    }
}

export default UserGreeting