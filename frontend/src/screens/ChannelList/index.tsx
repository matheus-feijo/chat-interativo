import { Link } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

export function ChannelList() {
  const { channelList } = useChannelContext();

  return (
    <>
      <h1>Channel List</h1>

      <ul>
        {channelList.map((channel) => {
          return (
            <li key={channel.id}>
              <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
