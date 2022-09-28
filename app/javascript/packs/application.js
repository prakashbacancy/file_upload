// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("parsleyjs")
require('jquery')
import 'bootstrap';
window.jQuery = $;
window.$ = $;
import 'packs/parsley'
import "@fortawesome/fontawesome-free/css/all.css";
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$("form").parsley()
window.Parsley.addValidator('fileextension', (function (value, requirement) {
  var allowedExtensions, fileExtension;
  fileExtension = value.split('.').pop();
  console.log(fileExtension)
  console.log("allow",allowedExtensions)
  allowedExtensions = requirement.split(',');
  return $.inArray(fileExtension, allowedExtensions) > -1;
}), 32).addMessage('en', 'fileextension', 'Please enter a valid file');

  
window.Parsley.addValidator('filesize', (function (value, requirement) {
  console.log("Hi i am not here")
  var input = $('input[type="file"]');
  var maxsize = requirement;
  var max_bytes = maxsize * 1000, file = input[0].files[0];
  return file.size <= max_bytes;
  var allowedExtensions, fileExtension;
}), 32).addMessage('en', 'filesize', 'Please upload under 1MB file');


window.Parsley.addValidator('maxFileSize', {
  validateString: function(_value, maxSize, parsleyInstance) {
    if (!window.FormData) {
      alert('You are making all developpers in the world cringe. Upgrade your browser!');
      return true;
    }
    var files = parsleyInstance.$element[0].files;
    return files.length != 1  || files[0].size <= maxSize * 1024;
  },
  requirementType: 'integer',
  messages: {
    en: 'This file should not be larger than %s Kb',
    fr: 'Ce fichier est plus grand que %s Kb.'
  }
});