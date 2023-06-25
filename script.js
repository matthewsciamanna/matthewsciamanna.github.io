// comment
document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var fileInput = document.getElementById('pdf-upload');
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var pdfUrl = e.target.result;
    var listItem = document.createElement('li');
    var embedElement = document.createElement('embed');
    embedElement.src = pdfUrl;
    embedElement.type = 'application/pdf';
    listItem.appendChild(embedElement);

    document.getElementById('pdf-items').appendChild(listItem);
  };

  reader.readAsDataURL(file);
});
