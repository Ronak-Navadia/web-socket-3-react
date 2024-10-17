import { createContext } from "react";
import {io} from 'socket.io-client';

export const socket = io('http://localhost:9001');

export const WebsocketContext = createContext(socket);

export const WebsocketProvider = WebsocketContext.Provider;