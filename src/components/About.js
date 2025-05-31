import User from "../components/User";
import UserContext from "../utils/userContext";
import UserClass from "./UserClass";
import { useContext } from "react";

const About = () => {
  return (
    <>
      <div>About</div>
      <div>
        LoggedIn user: 
        <UserContext.Consumer>
          {({loggedInUser}) => (<h1>{loggedInUser}</h1>)}
        </UserContext.Consumer>
      </div>
      <User name ={"Chandan Das"}/>
      <UserClass name ={"Chandan"} location={"West Bengal Class "}/>
    </>
  );
};
export default About;
