const fs = require('fs');
const path = require('path');

const uploadsDirectory = path.join(__dirname, 'uploads'); // Directory to store uploaded PDFs

// Function to store an uploaded PDF
function storePDF(file) {
  const tempPath = file.path;
  const fileName = `${Date.now()}-${file.originalname}`;
  const targetPath = path.join(uploadsDirectory, fileName);

  return new Promise((resolve, reject) => {
    fs.rename(tempPath, targetPath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(fileName);
      }
    });
  });
}

// Function to retrieve the URL of a stored PDF
function getPDFUrl(fileName) {
  return `/uploads/${fileName}`;
}

module.exports = {
  storePDF,
  getPDFUrl,
};
