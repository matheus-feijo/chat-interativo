import { useParams } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";
import { useEffect, useRef, useState } from "react";
import moment from "moment";

export function Chat() {
  const { createMessage, channel, joinChannel } = useChannelContext();
  const { channelId } = useParams<{ channelId?: string }>();
  const [message, setMessage] = useState("");
  const divMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    joinChannel(Number(channelId));
  }, []);

  useEffect(() => {
    if (divMessageRef.current) {
      divMessageRef.current.scrollTop = divMessageRef.current.scrollHeight;
    }
  }, [channel?.messages]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}># {channel?.name}</h1>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "column",
        }}
      >
        <div
          ref={divMessageRef}
          style={{
            border: "1px solid #FFFF",
            borderRadius: 8,
            padding: 10,
            overflow: "auto",
            maxHeight: 400,
            display: "flex",
            gap: 10,
            flexDirection: "column",
          }}
        >
          {channel?.messages.map((message, ind) => {
            // console.log(channel);
            return (
              <div
                key={ind}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <strong>{message.username}</strong>: {message.content}
                </div>

                <div>{moment(message.createdAt).format("HH:mm")}</div>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createMessage(message);
            setMessage("");
          }}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "80%",
            }}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
