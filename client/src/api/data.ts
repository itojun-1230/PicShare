import axios from 'axios';

const URL: string = "http://localhost:3000";
const api = axios.create({
  baseURL: URL, // Node.jsアプリケーションのポート番号に合わせて変更
});

export const AuthImage = async (
  id: string, 
  password: string,
  setImgSrc: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
  if(id == "") {
    alert("Idを入力してください");
    return;
  }
  const formData = new FormData();
  formData.append('id', id);
  formData.append('password', password);

  fetch(`${URL}/authImage`, {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(data => {
    const JsonData = JSON.parse(data);
    setImgSrc(JsonData.src);
  }).catch(error => {
    alert(error);
  });
};


export const upload = async (ImageFile: File, Id: string, Password: string) => {
  const formData = new FormData();
  formData.append('image', ImageFile);
  formData.append('id', Id);
  formData.append('password', Password);

  fetch(`${URL}/upload`, {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Network response was not ok.');
  }).then(data => {
    const JsonData = JSON.parse(data);
    console.log(JsonData)
  }).catch(error => {
    alert(error);
  });
}