import { useParams } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";
import { useEffect, useState } from "react";

export function Chat() {
  const { createMessage, channel, joinChannel } = useChannelContext();
  const { channelId } = useParams<{ channelId?: string }>();
  const [message, setMessage] = useState("");

  useEffect(() => {
    joinChannel(Number(channelId));
  }, []);

  return (
    <>
      <h1># {channel?.name}</h1>

      <div>
        {channel?.messages.map((message, ind) => {
          console.log(channel);
          return (
            <div key={ind}>
              <p>
                {message.username}: {message.content}
              </p>
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
      >
        <input
          placeholder="digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
