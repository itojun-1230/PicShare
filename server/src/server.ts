import sqlite3 from 'sqlite3';
import multer from 'multer';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let id = 0;
const db: sqlite3.Database= new sqlite3.Database('./my.db');

// 使用するストレージエンジンを設定
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // アップロード先のディレクトリ
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
    //cb(null, (new Date().getTime()).toString(16) + id);
    id += 1;
  }
});
const upload = multer({ storage });

//uploadsルート
app.use('/uploads', express.static('uploads'));
app.post('/upload', upload.single('image'), async (req, res, body) => {
  console.log(req.body)
});



app.get('/getdata', async (req, res) => {
  db.all('SELECT * FROM Data', (err, rows) => {
      if (err) {
        res.statusCode = 500;
        res.end();
      }
      res.json(rows);
  });
});

const PortNum: number = 3000;
// サーバを起動
app.listen(PortNum, () => {
  console.log(`Start the server at Port${PortNum}`);

  db.run('DELETE FROM Data');
  db.run("INSERT INTO Data(id, url, password) VALUES(0, 'hoge', 'fuga')");
});
