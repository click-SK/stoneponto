import io from 'socket.io-client';

const socket = io('http://91.206.30.132:4444'); // Підключення до сервера Socket.IO

export default socket;