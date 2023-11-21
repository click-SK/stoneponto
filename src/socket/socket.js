import io from "socket.io-client";
import { BASE_URL } from "../http/BaseUrl";
const socket = io(`${BASE_URL}`); // Підключення до сервера Socket.IO

export default socket;
