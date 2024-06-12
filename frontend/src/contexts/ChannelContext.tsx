import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { IChannel } from "../interfaces/IChannel";

interface IChannelContext {
  channelList: IChannel[];
  login: (username: string) => void;
  username: string;
}

export const ChannelContext = createContext({} as IChannelContext);

export function ChannelContextProvider({ children }: { children: ReactNode }) {
  const socketRef = useRef<Socket>();
  const [username, setUsername] = useState("");
  const [channelList, setChannelList] = useState<IChannel[]>([]);

  const login = (username: string) => {
    socketRef.current?.emit("user:login", username);
    setUsername(username);
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:3333");

    socketRef.current.on("channels:get", (data) => {
      setChannelList(data);
    });
  }, []);

  return (
    <ChannelContext.Provider
      value={{
        channelList,
        login,
        username,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
