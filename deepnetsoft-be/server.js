const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data.json');

const readDataFromFile = () => {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  };

  app.get('/:key', (req, res) => {
    const menu = readDataFromFile();
    const key = req.params.key;
    const section = menu.find(section => Object.keys(section).includes(key));

    if (section) {
        res.json(section);
      } else {
        res.status(404).json({ error: `No section found for key: ${key}` });
      }
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});