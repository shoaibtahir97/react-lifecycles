import React, {Component} from 'react';
import './App.css';
import Drived from './components/Drived'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state ={
  //     count: 0,
  //     data: []
  //   }
  // }
  // static getDrivedStateFromProps() {
  //   return {
  //     count: 5
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  // .then(response => response.json())
  // .then(data => {
  //   this.setState({
  //     data: data
  //   })
  // })
  // }
  render(){
    return(
      <div className="App">
        {/* {this.state.data.map((v, i)=>{
          return <h5 key={i}>{v.title}</h5>
        })} */}
<Drived/>
      </div>
    )
  }
}

export default App;
