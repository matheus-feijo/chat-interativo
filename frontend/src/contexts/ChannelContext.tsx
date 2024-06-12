import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { IChannel } from "../interfaces/IChannel";

interface IChannelContext {
  login: (username: string) => void;
  createMessage: (message: string) => void;
  channels: IChannel[];
  channel: IChannel | undefined;
  joinChannel: (id: number) => void;
  leaveChannel: () => void;
  username: string;
}

export const ChannelContext = createContext({} as IChannelContext);

export function ChannelContextProvider({ children }: { children: ReactNode }) {
  const socketRef = useRef<Socket>();
  const [username, setUsername] = useState("");
  const [channelList, setChannelList] = useState<IChannel[]>([]);
  const [channel, setChannel] = useState<IChannel>();

  const login = (username: string) => {
    socketRef.current?.emit("user:login", username);
    localStorage.setItem("username", username);
  };

  const joinChannel = (id: number) => {};

  const leaveChannel = () => {};

  const createMessage = (message: string) => {};

  useEffect(() => {
    socketRef.current = io("http://localhost:3333");

    socketRef.current.on("channels:get", (data) => {
      setChannelList(data);
    });
  }, []);

  return (
    <ChannelContext.Provider
      value={{
        channels: channelList,
        channel,
        joinChannel,
        createMessage,
        leaveChannel,
        login,
        username,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
