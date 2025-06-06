import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo:{
        name: "Dummy",
        location: "DummyLocation"
      }
    }
  }
  async componentDidMount(){
    const data = await fetch ("https://api.github.com/users/chandanDas")
    const json = await data.json()
    console.log(json)
    this.setState({
      userInfo: json
    })
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h1>Location : {location}</h1>
        <h1>Contact : daschandan547@gmail.com</h1>
      </div>
    );
  }
}
export default UserClass;