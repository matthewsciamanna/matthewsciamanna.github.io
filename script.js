// comment
document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var fileInput = document.getElementById('pdf-upload');
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append('pdf', file);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(function (response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error uploading the file.');
    }
  })
  .then(function (url) {
    var listItem = document.createElement('li');
    var embedElement = document.createElement('embed');
    embedElement.src = url;
    embedElement.type = 'application/pdf';
    listItem.appendChild(embedElement);

    document.getElementById('pdf-items').appendChild(listItem);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
});
