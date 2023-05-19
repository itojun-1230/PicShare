import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Node.jsアプリケーションのポート番号に合わせて変更
});

export const getUsers = async () => {
  const response = await api.get('/getdata');
  return response.data;
};

export const upload =async (ImageFile: File) => {
  const formData = new FormData();
  formData.append('image', ImageFile);
  const response = await api.post('/upload', {
    body: formData
  })
  .then(function (response) {
    console.log(response.data);
  })
  
  return response;
}