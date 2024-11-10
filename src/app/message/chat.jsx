"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "DuxXcA.7s1y4A:1h6gvtXHUQWXARfEIwjYxZHn8KZ4rXnOkpN1xitYvWg",
  });
  return <ChatBox />;
}