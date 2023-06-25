const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = req.file.path;
  const pdfUrl = `/uploads/${req.file.filename}`;

  // Perform any additional processing or storage logic here

  res.json({ url: pdfUrl });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
