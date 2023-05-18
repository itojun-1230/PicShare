import sqlite3 from 'sqlite3';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const db: sqlite3.Database= new sqlite3.Database('./my.db');

app.get('/getdata', async (req, res) => {
  db.all('SELECT * FROM Data', (err, rows) => {
      if (err) {
        res.statusCode = 500;
        res.end();
      }
      res.json(rows);
  });
});

let id = 0;
app.get('/getId', (req, res) => {
  res.json({id: (new Date().getTime()).toString(16) + id});
})

const PortNum: number = 3000;
// サーバを起動
app.listen(PortNum, () => {
  console.log(`Start the server at Port${PortNum}`);

  db.run('DELETE FROM Data');
  db.run("INSERT INTO Data(id, url, password) VALUES(0, 'hoge', 'fuga')");
});
