// comment
document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var fileInput = document.getElementById('pdf-upload');
  var file = fileInput.files[0];

  // Upload the file to the server and obtain the file URL
  uploadFile(file)
    .then(function (url) {
      var listItem = document.createElement('li');
      var embedElement = document.createElement('embed');
      embedElement.src = url;
      embedElement.type = 'application/pdf';
      listItem.appendChild(embedElement);

      document.getElementById('pdf-items').appendChild(listItem);
    })
    .catch(function (error) {
      console.error('Error uploading the file:', error);
    });
});

function uploadFile(file) {
  // Replace this code with your server-side implementation for file upload
  // and return the file URL

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload'); // Replace '/upload' with your server endpoint for file upload
    xhr.setRequestHeader('Content-Type', 'application/pdf');
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function () {
      reject(xhr.statusText);
    };
    xhr.send(file);
  });
}
