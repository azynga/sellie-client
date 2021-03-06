import axios from 'axios';

const service = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const getChatId = (userId, otherUserId) => {
    return service.get(`/chats?user=${userId}&otheruser=${otherUserId}`);
};

const getChat = (chatId) => {
    return service.get('/chats/' + chatId);
};

const getAllChatsOfUser = (userId) => {
    return service.get('/chats/list?user=' + userId);
};

// const createChat = (participants) => {
//     return service.post('/chats', { participants });
// };

const addMessage = (chatId, message) => {
    return service.put('/chats/' + chatId, message);
};

export { getChatId, getChat, addMessage, getAllChatsOfUser };
