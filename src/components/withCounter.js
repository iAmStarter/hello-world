import React from "react"
const withCounter = (WrappedComponent, increamentNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        increamentCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + increamentNumber }
            })
        }


        render() {
            console.log(this.props.name)
            return <WrappedComponent
                count={this.state.count}
                increamentCount={this.increamentCount} 
                {...this.props} />
        }
    }

    return NewComponent
}

export default withCounter