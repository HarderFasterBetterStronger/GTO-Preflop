document.getElementById('excelFile').addEventListener('change', handleFile, false);

function handleFile(e) {
  var files = e.target.files;
  var i, f;
  for (i = 0, f = files[i]; i != files.length; ++i) {
    var reader = new FileReader();
    var name = f.name;
    reader.onload = function (e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: 'array' });
      var worksheet = workbook.Sheets[workbook.SheetNames[0]];
      var html = XLSX.utils.sheet_to_html(worksheet);
      document.getElementById('excelContainer').innerHTML = html;
    };
    reader.readAsArrayBuffer(f);
  }
}