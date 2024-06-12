import { ChannelContextProvider } from "./contexts/ChannelContext";
import { Routers } from "./routes";

function App() {
  return (
    <ChannelContextProvider>
      <Routers />
    </ChannelContextProvider>
  );
}

export default App;
