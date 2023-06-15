import io from 'socket.io-client';

const socket = io('https://server-ponto-print.herokuapp.com'); // Підключення до сервера Socket.IO

export default socket;