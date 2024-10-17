import React, { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../context/WebsocketContext";

export const Websocket = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = useContext(WebsocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("react connected!");
    });

    socket.on("onMessage", (data) => {
      console.log("on message event received!");
      console.log(data);
      setMessages((prev) => [...prev, data])
    });

    return () => {
      console.log("unregistering events....");
      socket.off("connect");
      socket.off("onMessage");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {
    socket.emit("newMessage", value);
    setValue("");
  }

  return (
    <div>
      <h1>WebSocket component</h1>
      <div>
        {messages.length === 0 && (
          <div>No Messages</div>
        )}
        {messages.length > 0 && messages.map((msg, index) => (
          <p key={index}>{msg.content}</p>
        ))}
      </div>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Websocket;
