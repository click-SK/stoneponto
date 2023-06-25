import io from 'socket.io-client';

const socket = io('http://server.ponto-print.com.ua:4444'); // Підключення до сервера Socket.IO

export default socket;