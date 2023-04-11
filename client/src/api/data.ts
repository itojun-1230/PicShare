import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Node.jsアプリケーションのポート番号に合わせて変更
});

export const getUsers = async () => {
  const response = await api.get('/getdata');
  return response.data;
};
