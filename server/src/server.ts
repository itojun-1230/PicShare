import sqlite3 from 'sqlite3';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const db = new sqlite3.Database('./mydata.db');

app.get('/getdata', async (req, res) => {
  db.serialize(() => {
    db.all('SELECT * FROM data', (err, rows) => {
      if (err) {
        res.statusCode = 500;
        res.end();
        throw err;
      }
      res.json(rows);
    });
  });
});

const PortNum = 3000;
// サーバを起動
app.listen(PortNum, () => {
  console.log(`Start the server at Port${PortNum}`);
});
