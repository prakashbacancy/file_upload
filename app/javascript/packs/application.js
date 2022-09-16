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
require('bootstrap')
window.jQuery = $;
window.$ = $;
import 'packs/parsley'
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
  allowedExtensions = requirement.split(',');
  return $.inArray(fileExtension, allowedExtensions) > -1;
}), 32).addMessage('en', 'fileextension', 'Please enter a valid file');

  
window.Parsley.addValidator('filesize', (function (value, requirement) {
  var input = $('input[type="file"]');
  var maxsize = requirement;
  var max_bytes = maxsize * 1000, file = input[0].files[0];
  return file.size <= max_bytes;
  var allowedExtensions, fileExtension;
}), 32).addMessage('en', 'filesize', 'Please upload under 1MB file');
