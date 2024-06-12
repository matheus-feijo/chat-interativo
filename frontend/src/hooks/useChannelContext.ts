import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelContext";

export const useChannelContext = () => {
  const channelContext = useContext(ChannelContext);

  return channelContext;
};
