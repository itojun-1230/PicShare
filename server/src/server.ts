import fs from'fs';
import sqlite3 from 'sqlite3';
import multer from 'multer';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const db: sqlite3.Database= new sqlite3.Database('./my.db');

// ストレージエンジン
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // アップロード先のディレクトリ
  },
  filename: (req, file, cb) => {
    let fileName = "";
    for(let i = 0; i < file.originalname.length;i++)fileName += file.originalname.codePointAt(i).toString(16);

    cb(null, `${(new Date().getTime()).toString(16)}-${fileName}.png`);
  }
});
const upload = multer({ storage });

//uploadsルート
app.use('/uploads', express.static('uploads'));
app.post('/upload', upload.single('image'), async (req, res) => {
  const file = req.file;
  if (!file) {  //fileがない場合
    res.status(400).send('File does not exist');
    return;
  }
  //同一のidを求めるSQL文
  db.all(`SELECT id FROM Data WHERE id = '${req.body.id}'` ,(err, rows) => {
    if (err) {  //何かエラーをはいた場合
      res.statusCode = 500;
      res.end();
    }

    //画像へのURL生成
    const url = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
    if(rows.length == 0) {
      //id重複がない場合
      db.run(`INSERT INTO Data(id, url, password) VALUES('${req.body.id}','${url}','${req.body.password}')`);
      console.info(`Success: Image uploaded! id ${req.body.id}`)
      res.send({ url });
    }else {
      //id重複した場合
      fs.unlinkSync(`uploads/${file.filename}`);  //画像削除
      res.status(409).send('ID already exists');  //error
    }
  });
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
  fs.readdir('./uploads',(err, files) => {
    files.forEach(e => {
      if(e != '.gitkeep') { //.gitkeep以外のファイルを削除
        fs.unlinkSync(`uploads/${e}`);
      }
    });
  });

  db.run('DELETE FROM Data'); //データベースリセット
  
  console.log(`Start the server at Port${PortNum}`);
});
