# office2pdf
node module to convert office files to pdf

requires unoconv to be installed
https://github.com/dagwieers/unoconv

convert office files (docx, pptx, xlsx) to an pdf document

### Usage:
```
var office2pdf = require(office2pdf),
  generatePdf = office2pdf.generatePdf;

generatePdf('test/test.pptx', function(err, result) {
  console.log(result);
});
