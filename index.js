// Wrapper module unoconv, convert supported office files to pdf
// unoconv must be present on system

var exec = require('child_process').exec;

module.exports = {
  generatePdf: function(filename, next) {
    exec('unoconv -f pdf "' + filename +'"', function (error, stdout, stderr) {
      if (error) return next(error);
      return next(null, 'pdf of ' + filename + ' has been successfully generated.' );
    });
  }
};