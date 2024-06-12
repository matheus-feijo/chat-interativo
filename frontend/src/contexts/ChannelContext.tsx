import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { IChannel } from "../interfaces/IChannel";

interface IChannelContext {
  login: (username: string) => void;
  createMessage: (message: string) => void;
  channels: IChannel[];
  channel: IChannel | undefined;
  joinChannel: (id: number) => void;
  username: string;
}

export const ChannelContext = createContext({} as IChannelContext);

export function ChannelContextProvider({ children }: { children: ReactNode }) {
  const socketRef = useRef<Socket>();
  const [channelList, setChannelList] = useState<IChannel[]>([]);
  const [channel, setChannel] = useState<IChannel>();
  const [username, setUsername] = useState("");

  const login = (name: string) => {
    socketRef.current?.emit("user:login", name);
    setUsername(name);
  };

  const joinChannel = (id: number) => {
    socketRef.current?.emit("channel:join", id);
  };

  const createMessage = (message: string) => {
    socketRef.current?.emit("message:create", {
      channelId: channel?.id,
      username: username,
      message,
    });
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:3333");

    socketRef.current.on("channels:get", (data) => {
      setChannelList(data);
    });

    socketRef.current.on("channel:get", (data) => {
      setChannel(data);
    });
  }, []);

  return (
    <ChannelContext.Provider
      value={{
        channels: channelList,
        channel,
        joinChannel,
        createMessage,
        login,
        username,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
