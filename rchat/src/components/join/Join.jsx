import "./Join.css";

import { Link } from "react-router-dom";
import { useState } from "react";

let user;
const sendUser = () => {
    user = document.getElementById("JoinInput").value;
    document.getElementById("JoinInput").value = null;
}


function Join() {

    const [name, setName] = useState("")
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img
          src="https://img.freepik.com/free-vector/chat-application-logo-template-business-branding-design-vector-chatting-communication-text_53876-136258.jpg?w=2000"
          alt="logo"
        />
        <h1>JOIN PAGE</h1>
        <input onChange={e => setName(e.target.value)} value={name} placeholder="Enter Your name" type="text" id="JoinInput" />
        <Link onClick={e => !name? e.preventDefault():null} to={'/chat'}><button onClick={sendUser} className="JoinBtn">Login</button> </Link>
      </div>
    </div>
  );
}

export default Join;
export {user}
