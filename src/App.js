import './App.css';
import Websocket from './components/WebSocket';
import { WebsocketProvider, socket } from './context/WebsocketContext';

function App() {
  return (
    <WebsocketProvider value={socket}>
      <Websocket/>
    </WebsocketProvider>
  );
}

export default App;
