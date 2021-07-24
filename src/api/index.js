//index.js api
import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000' });

// const API = axios.create({ baseURL: 'https://jiachaowu.site/' })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchComments = () => API.get('/comments');
export const createComment = (newComment) => API.post('/comments', newComment);
export const deleteComment = (id) => API.delete(`/comments/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);