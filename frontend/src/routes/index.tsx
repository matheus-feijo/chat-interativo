import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../screens/login";
import { ChannelList } from "../screens/ChannelList";
import { Chat } from "../screens/chat";

export function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/channels" element={<ChannelList />} />
        </Routes>

        <Routes>
          <Route path="/channels/:channelId" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
