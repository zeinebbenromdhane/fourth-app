import React from 'react';
import Profile from './Profile';

class App extends React.Component {
  state = {
    fullName: "zeyneb",
    bio: "zhzhzhzhzh",
    profession: "student", show: false
  }
  handleShow=()=>{
  this.setState({show:!this.state.show})
}
  render() {
    return <div>
      <button onClick={this.handleShow}>Show</button>
      {this.state.show && <Profile profile={this.state} />}


    </div>;
  }
}


export default App;