import { user } from "../join/Join";
import "./Chat.css";
import socketIO from "socket.io-client";
import { useEffect } from "react";

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("connect", () => {
    //   alert("connected");
       console.log("connected");
    });
    return () => {};
  }, [socket]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h1>{user}</h1>
        </div>
        <div className="chatBox"></div>
        <div className="inputBox">
            <input type="text" id="chatInput" />
            <button type="button" className="sendBtn" onClick={() => socket.emit("connect")}>
              Send
              </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
