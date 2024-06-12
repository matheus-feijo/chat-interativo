import { ReactNode, createContext } from "react";

interface IChannelContext {
  channel: any[];
  login: (username: string) => void;
}

export const ChannelContext = createContext({} as IChannelContext);

export function ChannelContextProvider({ children }: { children: ReactNode }) {
  const login = (username: string) => {};

  return (
    <ChannelContext.Provider
      value={{
        channel: [],
        login,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
