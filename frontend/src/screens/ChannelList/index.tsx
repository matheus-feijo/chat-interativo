import { Link, useNavigate } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

export function ChannelList() {
  const { channels } = useChannelContext();
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Channel List</h1>

        <button
          style={{
            height: 50,
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>

      <ul>
        {channels.map((channel) => {
          return (
            <li key={channel.id}>
              <Link to={`/channels/${channel.id}`}>{channel.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
