import { ReactNode, createContext } from "react";

interface IChannelContext {
  channel: any[];
}

export const ChannelContext = createContext({} as IChannelContext);

export function ChannelContextProvider({ children }: { children: ReactNode }) {
  return (
    <ChannelContext.Provider
      value={{
        channel: [],
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
