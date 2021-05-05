import React from 'react'

class Drived extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    static getDerivedStateFromProps (props, state) {
    console.log(state);
    return null
}

    render(){
    return (
        <div>
            <h1>
            {this.state.count}
            </h1>
            <button onClick={()=> this.setState({count: this.state.count + 1})}>Incremet</button>
            <button onClick={()=>this.setState({count: this.state.count - 1})}>Decrement</button>
        </div>
    )
}
}
export default Drived
